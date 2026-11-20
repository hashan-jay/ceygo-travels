import Image from "next/image";
import Link from "next/link";
import { SaveButton } from "@/components/ui/SaveButton";
import { destinationName, regionName } from "@/lib/content";
import { formatUsd } from "@/lib/utils";
import type { Destination, Experience, Journey } from "@/data/types";
import { paceLabel } from "@/data/journeys";

export function DestinationCard({ city }: { city: Destination }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] bg-paper shadow-card">
      <Link href={`/destinations/${city.slug}`} className="block">
        <div className="relative h-64">
          <Image src={city.image} alt={city.gallery[0]?.alt ?? city.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="card-media object-cover" />
        </div>
        <div className="p-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-palm-ink">
            {regionName(city.region)} · {city.stay}
          </p>
          <h3 className="mt-2 font-display text-3xl">{city.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mute">{city.tagline}</p>
        </div>
      </Link>
      <SaveButton kind="city" slug={city.slug} label={city.name} className="absolute right-4 top-4" />
    </article>
  );
}

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-ink/10 bg-paper">
      <Link href={`/experiences/${item.slug}`} className="grid gap-0 sm:grid-cols-[0.8fr_1.2fr]">
        <div className="relative h-48 sm:h-full sm:min-h-40">
          <Image src={item.image} alt="" fill sizes="240px" className="card-media object-cover" />
        </div>
        <div className="p-5">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-palm-ink">
            {item.duration} · {destinationName(item.destination)}
          </p>
          <h3 className="mt-2 font-display text-3xl leading-none">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-mute">{item.excerpt}</p>
        </div>
      </Link>
      <SaveButton kind="experience" slug={item.slug} label={item.title} className="absolute right-4 top-4" />
    </article>
  );
}

export function JourneyCard({ journey }: { journey: Journey }) {
  return (
    <article className="group relative flex h-full flex-col rounded-[28px] border border-ink/10 bg-paper p-5">
      <SaveButton kind="journey" slug={journey.slug} label={journey.title} className="absolute right-4 top-4" />
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-palm-ink">
        {journey.days} days · {paceLabel[journey.pace]}
      </p>
      <h3 className="mt-3 max-w-[16ch] font-display text-3xl leading-none">
        <Link href={`/journeys/${journey.slug}`}>{journey.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-mute">{journey.subtitle}</p>
      <p className="mt-4 text-sm leading-relaxed">
        {journey.route.map((slug) => destinationName(slug)).join(" → ")}
      </p>
      <p className="mt-auto pt-6 font-medium">From {formatUsd(journey.priceFrom)} <span className="font-normal text-mute">/ person, sample</span></p>
    </article>
  );
}
