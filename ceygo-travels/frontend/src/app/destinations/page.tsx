import { DestinationExplorer } from "@/components/explore/Explorers";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBand, Eyebrow } from "@/components/ui/Bits";
import { destinations } from "@/data/destinations";
import { regions } from "@/data/types";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sri Lanka Destinations",
  description:
    "Cities and coasts for a private Sri Lanka trip: Colombo, the Cultural Triangle, tea country, the south, the east, and Jaffna.",
  path: "/destinations",
});

export default function DestinationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Destinations", path: "/destinations" },
        ])}
      />
      <section className="px-4 pb-8 pt-24 sm:px-5 md:px-8 md:pt-32">
        <div className="mx-auto max-w-page">
          <Eyebrow>Destinations</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">
            Cities worth staying, not just seeing.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mute">
            {destinations.length} places across {regions.length} regions. Filter by coast and highland, then open a city for timing, manners, and the journeys that pass through.
          </p>
          <div className="mt-10">
            <DestinationExplorer />
          </div>
        </div>
      </section>
      <CtaBand
        title="Not sure which coast matches your dates?"
        text="The planner uses the month first, then the themes. That is the right order."
        primary={{ href: "/plan", label: "Plan a journey" }}
      />
    </>
  );
}
