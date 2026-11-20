"use client";

import Link from "next/link";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { journeys } from "@/data/journeys";

export type SaveKind = "city" | "experience" | "journey";

type SavedItem = { kind: SaveKind; slug: string };

type WishlistValue = {
  items: SavedItem[];
  ready: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
  has: (kind: SaveKind, slug: string) => boolean;
  toggle: (kind: SaveKind, slug: string, label: string) => void;
  remove: (kind: SaveKind, slug: string) => void;
  clear: () => void;
};

const WishlistContext = createContext<WishlistValue | null>(null);
const storageKey = "ceygo-saved";

function labelFor(item: SavedItem) {
  if (item.kind === "city") return destinations.find((entry) => entry.slug === item.slug)?.name ?? item.slug;
  if (item.kind === "experience") {
    return experiences.find((entry) => entry.slug === item.slug)?.title ?? item.slug;
  }
  return journeys.find((entry) => entry.slug === item.slug)?.title ?? item.slug;
}

function hrefFor(item: SavedItem) {
  if (item.kind === "city") return `/destinations/${item.slug}`;
  if (item.kind === "experience") return `/experiences/${item.slug}`;
  return `/journeys/${item.slug}`;
}

export function WishlistProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<SavedItem[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(storageKey);
      if (raw) {
        const parsed = JSON.parse(raw) as SavedItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      setItems([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(storageKey, JSON.stringify(items));
  }, [items, ready]);

  useEffect(() => {
    if (!notice) return;
    const id = window.setTimeout(() => setNotice(""), 2400);
    return () => window.clearTimeout(id);
  }, [notice]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const value = useMemo<WishlistValue>(
    () => ({
      items,
      ready,
      open,
      setOpen,
      has: (kind, slug) => items.some((item) => item.kind === kind && item.slug === slug),
      toggle: (kind, slug, label) => {
        setItems((current) => {
          const exists = current.some((item) => item.kind === kind && item.slug === slug);
          if (exists) {
            setNotice(`${label} removed`);
            return current.filter((item) => !(item.kind === kind && item.slug === slug));
          }
          setNotice(`${label} saved`);
          return [...current, { kind, slug }];
        });
      },
      remove: (kind, slug) => {
        setItems((current) => current.filter((item) => !(item.kind === kind && item.slug === slug)));
      },
      clear: () => setItems([]),
    }),
    [items, open, ready],
  );

  const planHref =
    items.length > 0
      ? `/contact?saved=${encodeURIComponent(items.map((item) => `${item.kind}:${item.slug}`).join(","))}`
      : "/plan";

  return (
    <WishlistContext.Provider value={value}>
      {children}
      <div aria-live="polite" className="pointer-events-none fixed bottom-24 left-1/2 z-[70] -translate-x-1/2 md:bottom-8">
        {notice ? (
          <p className="rounded-full bg-ink px-4 py-2 text-sm text-cream shadow-lift">{notice}</p>
        ) : null}
      </div>
      {open ? (
        <div className="fixed inset-0 z-[65]">
          <button
            className="absolute inset-0 bg-ink/40"
            aria-label="Close saved journeys"
            onClick={() => setOpen(false)}
          />
          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="saved-title"
            className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-lift"
          >
            <div className="flex items-center justify-between border-b border-ink/10 px-5 py-5">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-palm-ink">
                  Saved on this device
                </p>
                <h2 id="saved-title" className="font-display text-3xl">
                  Your shortlist
                </h2>
              </div>
              <button className="btn btn-line min-h-10 px-3" onClick={() => setOpen(false)}>
                Close
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5">
              {items.length === 0 ? (
                <p className="text-mute">
                  Save cities, experiences, and journeys as you browse. They stay in this browser until you clear them.
                </p>
              ) : (
                <ul className="grid gap-3">
                  {items.map((item) => (
                    <li key={`${item.kind}-${item.slug}`} className="rounded-2xl border border-ink/10 bg-cream p-4">
                      <p className="text-[0.72rem] uppercase tracking-[0.14em] text-mute">{item.kind}</p>
                      <Link href={hrefFor(item)} className="mt-1 block font-display text-2xl" onClick={() => setOpen(false)}>
                        {labelFor(item)}
                      </Link>
                      <button
                        className="mt-3 text-sm underline underline-offset-4"
                        onClick={() => value.remove(item.kind, item.slug)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="grid gap-3 border-t border-ink/10 p-5">
              <Link href={planHref} className="btn btn-ink" onClick={() => setOpen(false)}>
                Plan around this list
              </Link>
              {items.length > 0 ? (
                <button className="btn btn-line" onClick={() => value.clear()}>
                  Clear shortlist
                </button>
              ) : null}
            </div>
          </aside>
        </div>
      ) : null}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}
