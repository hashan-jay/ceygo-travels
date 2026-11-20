"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { destinations, regionName } from "@/data/destinations";
import { cn } from "@/lib/utils";

const slugs = ["sigiriya", "ella", "galle", "kandy", "mirissa", "yala"];
const cities = slugs
  .map((slug) => destinations.find((item) => item.slug === slug))
  .filter((item): item is NonNullable<typeof item> => Boolean(item));

export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const city = cities[index];

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % cities.length);
    }, 6500);
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section className="px-4 pb-4 pt-24 md:px-8 md:pb-6 md:pt-28">
      <div className="mx-auto grid min-w-0 max-w-wide gap-5 lg:grid-cols-12 lg:items-end lg:gap-x-10 lg:gap-y-6">
        <div className="min-w-0 lg:col-span-5">
          <p className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-palm-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden />
            Sri Lanka, privately hosted
          </p>
          <h1 className="mt-3 font-display text-[2.55rem] leading-[0.92] tracking-tight sm:mt-5 sm:text-6xl lg:text-[4.6rem]">
            The island,
            <span className="block italic text-saffron">unfolded</span>
            city by city.
          </h1>
        </div>
        <div className="min-w-0 lg:col-span-7 lg:col-start-6 lg:row-span-2 lg:row-start-1">
          <div className="relative h-64 overflow-hidden rounded-[24px] bg-sand shadow-card sm:h-[52vh] sm:min-h-[380px] sm:rounded-[28px] lg:h-[62vh] lg:min-h-[420px]">
            {cities.map((item, itemIndex) => (
              <Image
                key={item.slug}
                src={item.image}
                alt={itemIndex === index ? item.gallery[0]?.alt ?? item.name : ""}
                fill
                priority={itemIndex === 0}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className={cn(
                  "object-cover transition-opacity duration-700",
                  itemIndex === index ? "opacity-100" : "opacity-0",
                  itemIndex === index && "ken",
                )}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-4 text-cream sm:p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-saffron">{regionName(city.region)}</p>
              <p className="font-display text-3xl sm:text-4xl">{city.name}</p>
              <p className="mt-1 line-clamp-2 max-w-lg text-sm text-cream/85">{city.excerpt}</p>
              <Link href={`/destinations/${city.slug}`} className="mt-3 inline-flex text-sm font-medium">
                Stay notes for {city.name} →
              </Link>
            </div>
            {!paused ? <span key={city.slug} className="hero-timer absolute inset-x-0 bottom-0 h-1 bg-saffron" /> : null}
          </div>
        </div>
        <div className="min-w-0 lg:col-span-5">
          <p className="max-w-md text-base leading-relaxed text-mute sm:text-lg">
            CeyGo Travels designs vacations for people visiting Sri Lanka from abroad. Cultural cities, tea highlands, wildlife, and the coast — sequenced properly, with a local host in the details.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 sm:mt-8">
            <Link href="/plan" className="btn btn-ink">
              Plan a journey <span aria-hidden>→</span>
            </Link>
            <Link href="/destinations" className="btn btn-line">
              Explore cities
            </Link>
          </div>
          <div
            className="-mx-4 mt-5 flex min-w-0 gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:mt-8 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0"
            role="tablist"
            aria-label="Featured cities"
          >
            {cities.map((item, itemIndex) => (
              <button
                key={item.slug}
                role="tab"
                aria-selected={itemIndex === index}
                onClick={() => {
                  setIndex(itemIndex);
                  setPaused(true);
                }}
                className={cn(
                  "min-w-[9.25rem] shrink-0 rounded-2xl border px-3 py-3 text-left transition sm:min-w-0",
                  itemIndex === index ? "border-ink bg-ink text-cream" : "border-ink/10 bg-paper hover:border-ink/30",
                )}
              >
                <span className="block truncate text-[0.68rem] uppercase tracking-[0.14em] opacity-70">
                  {regionName(item.region)}
                </span>
                <span className="mt-1 block font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Marquee() {
  const names = [...destinations.map((item) => item.name), ...destinations.map((item) => item.name)];
  return (
    <div className="overflow-hidden border-y border-ink/10 bg-paper py-4">
      <div className="ticker-track">
        {names.map((name, index) => (
          <span key={`${name}-${index}`} className="px-5 font-display text-2xl tracking-tight text-ink/80">
            {name} <span className="text-saffron">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
