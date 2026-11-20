"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { destinations, regionName } from "@/data/destinations";
import { regions, type RegionId } from "@/data/types";
import { cn } from "@/lib/utils";

type Frame = {
  src: string;
  alt: string;
  place: string;
  region: RegionId;
  credit: string;
  source: string;
};

export function GalleryExplorer() {
  const frames = useMemo(() => {
    const seen = new Set<string>();
    const list: Frame[] = [];
    destinations.forEach((city) => {
      city.gallery.forEach((photo) => {
        if (seen.has(photo.src)) return;
        seen.add(photo.src);
        list.push({
          src: photo.src,
          alt: photo.alt,
          place: city.name,
          region: city.region,
          credit: photo.credit,
          source: photo.source,
        });
      });
    });
    return list;
  }, []);
  const [region, setRegion] = useState<RegionId | "all">("all");
  const [active, setActive] = useState<number | null>(null);
  const visible = frames.filter((frame) => region === "all" || frame.region === region);
  const current = active === null ? null : visible[active];

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => (value === null ? 0 : (value + 1) % visible.length));
      if (event.key === "ArrowLeft") {
        setActive((value) => (value === null ? 0 : (value + visible.length - 1) % visible.length));
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, visible.length]);

  return (
    <div>
      <div className="flex max-w-full gap-2 overflow-x-auto pb-4">
        <button onClick={() => setRegion("all")} className={cn("shrink-0 rounded-full border px-4 py-2 text-sm", region === "all" ? "bg-ink text-cream" : "bg-paper")}>
          All
        </button>
        {regions.map((item) => (
          <button
            key={item.id}
            onClick={() => setRegion(item.id)}
            className={cn("shrink-0 rounded-full border px-4 py-2 text-sm", region === item.id ? "bg-ink text-cream" : "bg-paper")}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="masonry">
        {visible.map((frame, index) => (
          <article key={frame.src}>
            <button className="block w-full overflow-hidden rounded-3xl text-left" onClick={() => setActive(index)}>
              <Image src={frame.src} alt={frame.alt} width={900} height={index % 3 === 0 ? 1100 : 700} className="h-auto w-full object-cover" />
              <span className="mt-2 block px-1 text-sm">
                <span className="font-medium">{frame.place}</span>
                <span className="text-mute"> · {regionName(frame.region)}</span>
              </span>
            </button>
          </article>
        ))}
      </div>
      {current ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4" role="dialog" aria-modal="true" aria-label={current.alt}>
          <button className="absolute right-4 top-4 btn btn-light" onClick={() => setActive(null)}>
            Close
          </button>
          <button className="absolute left-4 top-1/2 btn btn-light -translate-y-1/2" onClick={() => setActive((value) => (value === null ? 0 : (value + visible.length - 1) % visible.length))} aria-label="Previous photo">
            ←
          </button>
          <figure className="max-h-[86vh] max-w-5xl">
            <Image src={current.src} alt={current.alt} width={1400} height={900} className="max-h-[74vh] w-auto rounded-2xl object-contain" />
            <figcaption className="mt-3 text-sm text-cream">
              {current.alt}. {current.place}. Photo: {current.credit}.
            </figcaption>
          </figure>
          <button className="absolute right-4 top-1/2 btn btn-light -translate-y-1/2" onClick={() => setActive((value) => (value === null ? 0 : (value + 1) % visible.length))} aria-label="Next photo">
            →
          </button>
        </div>
      ) : null}
    </div>
  );
}
