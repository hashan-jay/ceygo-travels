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
    <section className="px-4 pb-6 pt-28 md:px-8">
      <div className="mx-auto grid max-w-wide items-end gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5 lg:pb-6">
          <p className="inline-flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-palm-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-saffron" aria-hidden />
            Sri Lanka, privately hosted
          </p>
          <h1 className="mt-5 font-display text-[3.1rem] leading-[0.92] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            The island,
            <span className="block italic text-saffron">unfolded</span>
            city by city.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-mute">
            CeyGo Travels designs vacations for people visiting Sri Lanka from abroad. Cultural cities, tea highlands, wildlife, and the coast — sequenced properly, with a local host in the details.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/plan" className="btn btn-ink">
              Plan a journey <span aria-hidden>→</span>
            </Link>
            <Link href="/destinations" className="btn btn-line">
              Explore cities
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3" role="tablist" aria-label="Featured cities">
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
                  "rounded-2xl border px-3 py-3 text-left transition",
                  itemIndex === index ? "border-ink bg-ink text-cream" : "border-ink/10 bg-paper hover:border-ink/30",
                )}
              >
                <span className="block text-[0.68rem] uppercase tracking-[0.14em] opacity-70">
                  {regionName(item.region)}
                </span>
                <span className="mt-1 block font-medium">{item.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative h-[62vh] min-h-[420px] overflow-hidden rounded-[28px] bg-sand shadow-card">
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
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent p-5 text-cream md:p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-saffron">{regionName(city.region)}</p>
              <p className="font-display text-4xl">{city.name}</p>
              <p className="mt-1 max-w-lg text-sm text-cream/85">{city.excerpt}</p>
              <Link href={`/destinations/${city.slug}`} className="mt-4 inline-flex text-sm font-medium">
                Stay notes for {city.name} →
              </Link>
            </div>
            {!paused ? <span key={city.slug} className="hero-timer absolute inset-x-0 bottom-0 h-1 bg-saffron" /> : null}
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
