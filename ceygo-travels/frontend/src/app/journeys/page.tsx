import { JourneyCard } from "@/components/cards/Cards";
import { CtaBand, Eyebrow, SampleNote } from "@/components/ui/Bits";
import { journeys } from "@/data/journeys";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Private Sri Lanka Itineraries",
  description:
    "Sample private Sri Lanka itineraries from 7 to 14 days, shaped by season, pace, and the cities worth staying in.",
  path: "/journeys",
});

export default function JourneysPage() {
  return (
    <>
      <section className="px-5 pb-10 pt-32 md:px-8">
        <div className="mx-auto max-w-page">
          <Eyebrow>Journeys</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">
            Routes with the empty hours left in.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mute">
            Six sample shapes. Read the days, then tell us what to move. Prices are sample from-rates for two adults sharing, before a live quote.
          </p>
          <div className="mt-6 max-w-2xl">
            <SampleNote>
              Sample from-rates are placeholders so the layout can show a price. CeyGo will replace them with a real tariff.
            </SampleNote>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {journeys.map((journey) => (
              <JourneyCard key={journey.slug} journey={journey} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="None of these is quite your trip."
        text="That is expected. Use the planner, then send the result to the desk."
        primary={{ href: "/plan", label: "Shape my route" }}
      />
    </>
  );
}
