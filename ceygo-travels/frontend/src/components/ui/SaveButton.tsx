"use client";

import { useWishlist, type SaveKind } from "@/components/providers/WishlistProvider";
import { cn } from "@/lib/utils";

export function SaveButton({
  kind,
  slug,
  label,
  className,
}: {
  kind: SaveKind;
  slug: string;
  label: string;
  className?: string;
}) {
  const { has, toggle, ready } = useWishlist();
  const saved = ready && has(kind, slug);

  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${label} from shortlist` : `Save ${label}`}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        toggle(kind, slug, label);
      }}
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper/90 text-lg backdrop-blur transition hover:border-ink",
        saved && "border-saffron bg-saffron",
        className,
      )}
    >
      <span aria-hidden>{saved ? "♥" : "♡"}</span>
    </button>
  );
}
