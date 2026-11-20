import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, CtaBand, FactList, SampleNote } from "@/components/ui/Bits";
import { SaveButton } from "@/components/ui/SaveButton";
import { getJourney, journeys, paceLabel } from "@/data/journeys";
import { site } from "@/data/site";
import { destinationName } from "@/lib/content";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";
import { formatUsd, monthName } from "@/lib/utils";

type Params = { slug: string };

export function generateStaticParams() {
  return journeys.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return {};
  return pageMeta({
    title: journey.seo.title,
    description: journey.seo.description,
    path: `/journeys/${journey.slug}`,
  });
}

export default async function JourneyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();
  const months = journey.bestMonths.map((month) => monthName(month).slice(0, 3)).join(", ");

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Journeys", path: "/journeys" },
            { name: journey.title, path: `/journeys/${journey.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: journey.title,
            description: journey.seo.description,
            url: `${site.url}/journeys/${journey.slug}`,
            touristType: "International travelers",
            itinerary: {
              "@type": "ItemList",
              itemListElement: journey.daysPlan.map((day, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: `Day ${index + 1}: ${day.title}`,
                description: day.text,
              })),
            },
          },
        ]}
      />
      <article className="pb-8 pt-28">
        <div className="px-5 md:px-8">
          <div className="relative mx-auto h-[48vh] min-h-[320px] max-w-wide overflow-hidden rounded-[32px]">
            <Image src={journey.image} alt="" fill priority className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/75 to-ink/10" />
            <div className="absolute bottom-0 p-6 text-cream md:p-10">
              <p className="text-xs uppercase tracking-[0.16em] text-saffron">{journey.days} days · {paceLabel[journey.pace]}</p>
              <h1 className="mt-2 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">{journey.title}</h1>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-page gap-12 px-5 py-10 md:px-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/journeys", label: "Journeys" }, { label: journey.title }]} />
            <div className="mt-6 flex items-start justify-between gap-4">
              <p className="font-display text-3xl leading-snug">{journey.subtitle}</p>
              <SaveButton kind="journey" slug={journey.slug} label={journey.title} />
            </div>
            <p className="mt-4 text-lg text-mute">{journey.summary}</p>
            <p className="mt-4">{journey.idealFor}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {journey.route.map((slug, index) => (
                <Link key={`${slug}-${index}`} href={`/destinations/${slug}`} className="rounded-full bg-paper px-3 py-2 text-sm">
                  {index + 1}. {destinationName(slug)}
                </Link>
              ))}
            </div>
            <h2 className="mt-12 font-display text-4xl">Day by day</h2>
            <ol className="mt-6 grid gap-4">
              {journey.daysPlan.map((day, index) => (
                <li key={`${day.title}-${index}`} id={`day-${index + 1}`} className="scroll-mt-28 rounded-3xl border border-ink/10 p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-palm-ink">Day {index + 1} · {day.place}</p>
                  <h3 className="mt-2 font-display text-2xl">{day.title}</h3>
                  <p className="mt-2 text-mute">{day.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <section className="rounded-3xl bg-paper p-5">
                <h2 className="font-display text-2xl">Included</h2>
                <ul className="mt-3 grid gap-2 text-sm">{journey.includes.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
              <section className="rounded-3xl bg-paper p-5">
                <h2 className="font-display text-2xl">Not included</h2>
                <ul className="mt-3 grid gap-2 text-sm">{journey.excludes.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            </div>
          </div>
          <aside className="h-fit rounded-[28px] bg-paper p-6 lg:sticky lg:top-28">
            <p className="font-display text-4xl">{formatUsd(journey.priceFrom)}</p>
            <p className="text-sm text-mute">Sample from-rate, per person, two adults sharing.</p>
            <div className="mt-4">
              <SampleNote>This figure is a placeholder until CeyGo issues a live quote for your dates and hotels.</SampleNote>
            </div>
            <div className="mt-5">
              <FactList
                items={[
                  { label: "Length", value: `${journey.days} days` },
                  { label: "Pace", value: paceLabel[journey.pace] },
                  { label: "Stronger months", value: months },
                  { label: "Stops", value: String(new Set(journey.route).size) },
                ]}
              />
            </div>
            <Link
              href={`/contact?journey=${journey.slug}&days=${journey.days}&interests=${journey.interests.join(",")}`}
              className="btn btn-ink mt-6 w-full"
            >
              Enquire about this route
            </Link>
          </aside>
        </div>
      </article>
      <CtaBand
        title="Bend the days to your flight."
        text="Early departures change the last night. Tell us the ticket and we will move the fort or the airport hotel."
        primary={{ href: "/plan", label: "Compare with the planner" }}
      />
    </>
  );
}
