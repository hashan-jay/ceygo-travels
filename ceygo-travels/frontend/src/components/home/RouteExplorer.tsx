"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { destinations, regionName } from "@/data/destinations";
import { cn } from "@/lib/utils";

const order = ["negombo", "sigiriya", "kandy", "nuwara-eliya", "ella", "yala", "mirissa", "galle"];

export function RouteExplorer() {
  const stops = order
    .map((slug) => destinations.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const [active, setActive] = useState(stops[1]?.slug ?? stops[0].slug);
  const city = stops.find((item) => item.slug === active) ?? stops[0];

  return (
    <div>
      <div className="relative">
        <div className="pointer-events-none absolute left-0 right-0 top-5 hidden h-px bg-ink/15 md:block" />
        <div className="flex max-w-full gap-3 overflow-x-auto pb-2">
          {stops.map((stop, index) => (
            <button
              key={stop.slug}
              onClick={() => setActive(stop.slug)}
              className={cn(
                "relative min-w-[9.5rem] rounded-3xl border px-4 pb-4 pt-8 text-left",
                active === stop.slug ? "border-ink bg-ink text-cream" : "border-ink/10 bg-paper",
              )}
            >
              <span
                className={cn(
                  "absolute left-4 top-3 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-semibold",
                  active === stop.slug ? "bg-saffron text-ink" : "bg-cream text-ink",
                )}
              >
                {index + 1}
              </span>
              <span className="mt-2 block font-display text-2xl">{stop.name}</span>
              <span className={cn("mt-1 block text-xs", active === stop.slug ? "text-cream/70" : "text-mute")}>
                {stop.stay}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4 grid overflow-hidden rounded-[28px] bg-paper shadow-card md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-64">
          <Image src={city.image} alt={city.gallery[0]?.alt ?? city.name} fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col justify-between gap-6 p-6 md:p-8">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-palm-ink">
              {regionName(city.region)}
            </p>
            <h3 className="mt-2 font-display text-4xl">{city.name}</h3>
            <p className="mt-3 text-lg leading-relaxed text-mute">{city.excerpt}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href={`/destinations/${city.slug}`} className="btn btn-ink">
              Open {city.name}
            </Link>
            <Link href="/journeys/the-long-way" className="btn btn-line">
              See the full loop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
