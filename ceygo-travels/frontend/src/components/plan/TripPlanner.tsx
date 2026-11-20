"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getJourney, paceLabel } from "@/data/journeys";
import { interestOptions, type InterestId, type Pace } from "@/data/types";
import { matchJourneys } from "@/lib/content";
import { cn, formatUsd, months } from "@/lib/utils";

const dayChoices = [7, 10, 12, 14];
const paces: { id: Pace; label: string; text: string }[] = [
  { id: "slow", label: "Slow", text: "Fewer bases, longer mornings, more nothing." },
  { id: "balanced", label: "Balanced", text: "The famous places, with afternoons protected." },
  { id: "full", label: "Full", text: "More of the island, still in a private car." },
];

export function TripPlanner() {
  const [step, setStep] = useState(0);
  const [month, setMonth] = useState(1);
  const [days, setDays] = useState(10);
  const [pace, setPace] = useState<Pace>("balanced");
  const [interests, setInterests] = useState<InterestId[]>(["culture", "coast"]);

  const matches = useMemo(
    () => matchJourneys({ month: month + 1, days, interests, pace }).slice(0, 3),
    [month, days, interests, pace],
  );

  function toggleInterest(id: InterestId) {
    setInterests((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      return [...current, id];
    });
  }

  const steps = ["When", "Themes", "Pace", "Matches"];

  return (
    <div className="rounded-[32px] border border-ink/10 bg-paper p-5 shadow-card md:p-8">
      <ol className="grid grid-cols-4 gap-1.5 sm:gap-2">
        {steps.map((label, index) => (
          <li key={label}>
            <button
              onClick={() => setStep(index)}
              className={cn(
                "w-full rounded-2xl px-1.5 py-2.5 text-left text-xs sm:px-2 sm:py-3 sm:text-sm",
                step === index ? "bg-ink text-cream" : "bg-cream",
              )}
            >
              <span className="block text-[0.62rem] uppercase tracking-[0.12em] opacity-70 sm:text-[0.68rem] sm:tracking-[0.14em]">0{index + 1}</span>
              <span className="block truncate">{label}</span>
            </button>
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <div className="mt-8">
          <h2 className="font-display text-4xl">When can you land?</h2>
          <p className="mt-2 text-mute">The month chooses the coast. The length chooses how many regions are honest.</p>
          <div className="mt-6 grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2">
            {months.map((name, index) => (
              <button
                key={name}
                onClick={() => setMonth(index)}
                className={cn(
                  "rounded-2xl border px-2 py-3 text-sm",
                  month === index ? "border-ink bg-saffron" : "border-ink/10",
                )}
              >
                {name.slice(0, 3)}
              </button>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {dayChoices.map((choice) => (
              <button
                key={choice}
                onClick={() => setDays(choice)}
                className={cn("rounded-full border px-4 py-2", days === choice ? "border-ink bg-ink text-cream" : "border-ink/10")}
              >
                {choice} days
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="mt-8">
          <h2 className="font-display text-4xl">What should the days be about?</h2>
          <p className="mt-2 text-mute">Choose as many as you like. A good route rarely honors all six.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {interestOptions.map((option) => {
              const on = interests.includes(option.id);
              return (
                <button
                  key={option.id}
                  onClick={() => toggleInterest(option.id)}
                  aria-pressed={on}
                  className={cn("rounded-3xl border p-4 text-left", on ? "border-ink bg-ink text-cream" : "border-ink/10")}
                >
                  <span className="block font-display text-2xl">{option.label}</span>
                  <span className={cn("mt-1 block text-sm", on ? "text-cream/75" : "text-mute")}>{option.text}</span>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="mt-8">
          <h2 className="font-display text-4xl">How full should the days feel?</h2>
          <div className="mt-6 grid gap-3">
            {paces.map((option) => (
              <button
                key={option.id}
                onClick={() => setPace(option.id)}
                className={cn("rounded-3xl border p-5 text-left", pace === option.id ? "border-ink bg-saffron" : "border-ink/10")}
              >
                <span className="font-display text-3xl">{option.label}</span>
                <span className="mt-1 block text-mute">{option.text}</span>
              </button>
            ))}
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="mt-8">
          <h2 className="font-display text-4xl">Three routes that fit</h2>
          <p className="mt-2 text-mute">
            {months[month]}, about {days} days, {paceLabel[pace].toLowerCase()}. These are starting shapes, not a locked quote.
          </p>
          <div className="mt-6 grid gap-4">
            {matches.length === 0 ? (
              <p>Add a theme and we will line up a route.</p>
            ) : (
              matches.map((match) => {
                const journey = getJourney(match.slug);
                if (!journey) return null;
                const query = new URLSearchParams({
                  journey: journey.slug,
                  month: months[month],
                  days: String(days),
                  pace,
                  interests: interests.join(","),
                });
                return (
                  <article key={journey.slug} className="rounded-3xl border border-ink/10 p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-palm-ink">
                      {journey.days} days · from {formatUsd(journey.priceFrom)}
                    </p>
                    <h3 className="mt-2 font-display text-3xl">
                      <Link href={`/journeys/${journey.slug}`}>{journey.title}</Link>
                    </h3>
                    <p className="mt-2 text-mute">{journey.summary}</p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {match.reasons.map((reason) => (
                        <li key={reason} className="rounded-full bg-cream px-3 py-1 text-sm">
                          {reason}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Link href={`/journeys/${journey.slug}`} className="btn btn-line min-h-10">
                        Read the days
                      </Link>
                      <Link href={`/contact?${query.toString()}`} className="btn btn-ink min-h-10">
                        Ask the desk
                      </Link>
                    </div>
                  </article>
                );
              })
            )}
          </div>
        </div>
      ) : null}

      <div className="mt-8 flex justify-between gap-3">
        <button className="btn btn-line" onClick={() => setStep((value) => Math.max(0, value - 1))} disabled={step === 0}>
          Back
        </button>
        {step < 3 ? (
          <button className="btn btn-ink" onClick={() => setStep((value) => Math.min(3, value + 1))}>
            Continue
          </button>
        ) : (
          <button className="btn btn-saffron" onClick={() => setStep(0)}>
            Start again
          </button>
        )}
      </div>
    </div>
  );
}
