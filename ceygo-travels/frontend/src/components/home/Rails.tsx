"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SaveButton } from "@/components/ui/SaveButton";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { testimonials } from "@/data/testimonials";
import { interestOptions } from "@/data/types";
import { cn } from "@/lib/utils";

const seasonTabs = [
  {
    id: "south",
    label: "Dec – Mar",
    title: "South and west",
    text: "The popular window for Galle, Mirissa, Colombo, and a calmer southwest sea. Hills and the Cultural Triangle still sit easily in the route.",
    slugs: ["galle", "mirissa", "colombo", "negombo"],
  },
  {
    id: "east",
    label: "May – Sep",
    title: "East coast",
    text: "When the southwest is often wet, Trincomalee and Arugam Bay usually take the swims. Pair them with the ancient cities rather than forcing the south.",
    slugs: ["trincomalee", "arugam-bay", "sigiriya", "kandy"],
  },
  {
    id: "hills",
    label: "Year-round",
    title: "Hill country",
    text: "Kandy, tea, and Ella work in every month. Pack a layer. Mist is part of the pleasure, not a failed beach day.",
    slugs: ["kandy", "nuwara-eliya", "ella"],
  },
  {
    id: "triangle",
    label: "Mornings",
    title: "Cultural Triangle",
    text: "The rock and the sacred cities are a year-round journey if you climb early. Heat, not rain, is the thing to design around.",
    slugs: ["sigiriya", "polonnaruwa", "anuradhapura", "dambulla"],
  },
] as const;

export function ExperienceRail() {
  return (
    <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:-mx-5 sm:px-5 md:mx-0 md:px-0">
      {experiences.slice(0, 8).map((item) => {
        const city = destinations.find((entry) => entry.slug === item.destination);
        return (
          <article key={item.slug} className="group relative w-[78vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[28px] bg-ink text-cream sm:w-[340px]">
            <Link href={`/experiences/${item.slug}`} className="block">
              <div className="relative h-64">
                <Image src={item.image} alt="" fill sizes="340px" className="card-media object-cover opacity-90" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-saffron">
                  {item.duration} · {city?.name}
                </p>
                <h3 className="mt-2 font-display text-3xl leading-none">{item.title}</h3>
                <p className="mt-3 text-sm text-cream/75">{item.excerpt}</p>
              </div>
            </Link>
            <SaveButton kind="experience" slug={item.slug} label={item.title} className="absolute right-4 top-4" />
          </article>
        );
      })}
    </div>
  );
}

export function SeasonPicker() {
  const [active, setActive] = useState<(typeof seasonTabs)[number]["id"]>("south");
  const season = seasonTabs.find((item) => item.id === active) ?? seasonTabs[0];
  const places = season.slugs
    .map((slug) => destinations.find((item) => item.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="grid content-start gap-2">
        {seasonTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "rounded-3xl border px-5 py-4 text-left",
              active === tab.id ? "border-ink bg-ink text-cream" : "border-ink/10 bg-paper",
            )}
          >
            <span className="text-xs uppercase tracking-[0.16em] text-saffron">{tab.label}</span>
            <span className="mt-1 block font-display text-3xl">{tab.title}</span>
          </button>
        ))}
      </div>
      <div>
        <p className="max-w-xl text-lg leading-relaxed text-mute">{season.text}</p>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {places.map((place) => (
            <Link key={place.slug} href={`/destinations/${place.slug}`} className="group relative h-40 overflow-hidden rounded-3xl">
              <Image src={place.image} alt="" fill sizes="280px" className="card-media object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 font-display text-2xl text-cream">
                {place.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  return (
    <div className="rounded-[32px] bg-paper p-6 shadow-card md:p-10">
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-palm-ink">Sample guest notes</p>
      <blockquote className="mt-6 font-display text-3xl leading-tight tracking-tight md:text-5xl">
        “{item.quote}”
      </blockquote>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-mute">{item.place}</p>
        <div className="flex gap-2">
          <button className="btn btn-line min-h-10 px-4" onClick={() => setIndex((current) => (current + testimonials.length - 1) % testimonials.length)} aria-label="Previous note">
            ←
          </button>
          <button className="btn btn-ink min-h-10 px-4" onClick={() => setIndex((current) => (current + 1) % testimonials.length)} aria-label="Next note">
            →
          </button>
        </div>
      </div>
      <p className="mt-6 text-sm text-mute">
        These lines are sample layout copy. Real guest stories will replace them when CeyGo shares them. Themes shown: {interestOptions.map((option) => option.label).slice(0, 3).join(", ")}.
      </p>
    </div>
  );
}
