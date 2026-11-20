"use client";

import { useMemo, useState } from "react";
import { DestinationCard, ExperienceCard } from "@/components/cards/Cards";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { regions, interestOptions, type InterestId, type RegionId } from "@/data/types";
import { cn } from "@/lib/utils";

export function DestinationExplorer() {
  const [region, setRegion] = useState<RegionId | "all">("all");
  const visible = useMemo(
    () => destinations.filter((city) => region === "all" || city.region === region),
    [region],
  );

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter by region">
        <FilterChip active={region === "all"} onClick={() => setRegion("all")} label="All regions" />
        {regions.map((item) => (
          <FilterChip
            key={item.id}
            active={region === item.id}
            onClick={() => setRegion(item.id)}
            label={item.name}
          />
        ))}
      </div>
      <p className="mt-4 text-sm text-mute">{visible.length} cities</p>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((city) => (
          <DestinationCard key={city.slug} city={city} />
        ))}
      </div>
    </div>
  );
}

export function ExperienceExplorer() {
  const [interest, setInterest] = useState<InterestId | "all">("all");
  const visible = experiences.filter((item) => interest === "all" || item.interest === interest);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        <FilterChip active={interest === "all"} onClick={() => setInterest("all")} label="All themes" />
        {interestOptions.map((item) => (
          <FilterChip key={item.id} active={interest === item.id} onClick={() => setInterest(item.id)} label={item.label} />
        ))}
      </div>
      <div className="mt-6 grid gap-4">
        {visible.map((item) => (
          <ExperienceCard key={item.slug} item={item} />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-sm",
        active ? "border-ink bg-ink text-cream" : "border-ink/15 bg-paper",
      )}
    >
      {label}
    </button>
  );
}
