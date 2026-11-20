"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { guides } from "@/data/guides";
import { journeys } from "@/data/journeys";

type Result = { href: string; title: string; kind: string; text: string };

const index: Result[] = [
  ...destinations.map((item) => ({
    href: `/destinations/${item.slug}`,
    title: item.name,
    kind: "City",
    text: `${item.tagline} ${item.excerpt}`,
  })),
  ...experiences.map((item) => ({
    href: `/experiences/${item.slug}`,
    title: item.title,
    kind: "Experience",
    text: item.excerpt,
  })),
  ...journeys.map((item) => ({
    href: `/journeys/${item.slug}`,
    title: item.title,
    kind: "Journey",
    text: item.subtitle,
  })),
  ...guides.map((item) => ({
    href: `/guides/${item.slug}`,
    title: item.title,
    kind: "Field note",
    text: item.excerpt,
  })),
];

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const id = window.setTimeout(() => inputRef.current?.focus(), 30);
    return () => window.clearTimeout(id);
  }, [open]);

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return index.slice(0, 8);
    return index
      .filter((item) => `${item.title} ${item.kind} ${item.text}`.toLowerCase().includes(needle))
      .slice(0, 10);
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80]">
      <button className="absolute inset-0 bg-ink/45" aria-label="Close search" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="search-title"
        className="relative mx-auto mt-20 w-[min(680px,calc(100%-1.5rem))] overflow-hidden rounded-3xl bg-paper shadow-lift"
      >
        <h2 id="search-title" className="sr-only">
          Search CeyGo Travels
        </h2>
        <label className="block border-b border-ink/10">
          <span className="sr-only">Search cities, journeys, and notes</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Sigiriya, whales, tea, Jaffna…"
            className="w-full bg-transparent px-5 py-5 text-lg outline-none"
          />
        </label>
        <ul className="max-h-[60vh] overflow-y-auto p-2">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-mute">Nothing matches that yet. Try a city or a theme.</li>
          ) : (
            results.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={onClose} className="block rounded-2xl px-4 py-3 hover:bg-cream">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-palm-ink">
                    {item.kind}
                  </span>
                  <span className="mt-1 block font-display text-2xl">{item.title}</span>
                  <span className="mt-1 block text-sm text-mute">{item.text}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
