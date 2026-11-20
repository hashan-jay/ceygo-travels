import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExperienceCard, JourneyCard } from "@/components/cards/Cards";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, CtaBand, FactList } from "@/components/ui/Bits";
import { SaveButton } from "@/components/ui/SaveButton";
import { destinations, getDestination, regionName } from "@/data/destinations";
import { site } from "@/data/site";
import { experiencesFor, journeysFor } from "@/lib/content";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return destinations.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const city = getDestination(slug);
  if (!city) return {};
  return pageMeta({
    title: city.seo.title,
    description: city.seo.description,
    path: `/destinations/${city.slug}`,
  });
}

export default async function DestinationPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const city = getDestination(slug);
  if (!city) notFound();
  const relatedExperiences = experiencesFor(city.slug);
  const relatedJourneys = journeysFor(city.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Destinations", path: "/destinations" },
            { name: city.name, path: `/destinations/${city.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: city.name,
            description: city.seo.description,
            url: `${site.url}/destinations/${city.slug}`,
            image: `${site.url}${city.image}`,
            touristType: "International travelers",
            containedInPlace: {
              "@type": "Country",
              name: "Sri Lanka",
            },
          },
        ]}
      />
      <article className="pb-10 pt-28">
        <div className="px-5 md:px-8">
          <div className="relative mx-auto h-[58vh] min-h-[380px] max-w-wide overflow-hidden rounded-[32px]">
            <Image src={city.image} alt={city.gallery[0]?.alt ?? city.name} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
            <div className="absolute bottom-0 flex w-full items-end justify-between gap-4 p-6 text-cream md:p-10">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-saffron">{regionName(city.region)}</p>
                <h1 className="font-display text-5xl tracking-tight md:text-7xl">{city.name}</h1>
              </div>
              <SaveButton kind="city" slug={city.slug} label={city.name} />
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-page gap-12 px-5 py-12 md:px-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { href: "/destinations", label: "Destinations" },
                { label: city.name },
              ]}
            />
            <p className="mt-6 font-display text-3xl leading-snug">{city.tagline}</p>
            <div className="prose-cey mt-6 text-lg leading-relaxed text-mute">
              {city.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-12 font-display text-4xl">What to give your time to</h2>
            <div className="mt-6 grid gap-4">
              {city.highlights.map((item) => (
                <article key={item.title} className="rounded-3xl bg-paper p-5">
                  <h3 className="font-display text-2xl">{item.title}</h3>
                  <p className="mt-2 text-mute">{item.text}</p>
                </article>
              ))}
            </div>
            <h2 className="mt-12 font-display text-4xl">Good to know</h2>
            <ul className="mt-4 grid gap-3">
              {city.know.map((item) => (
                <li key={item} className="rounded-2xl border border-ink/10 px-4 py-3">{item}</li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-[28px] bg-paper p-6 lg:sticky lg:top-28">
            <FactList
              items={[
                { label: "Region", value: regionName(city.region) },
                { label: "Stay", value: city.stay },
                { label: "Best timing", value: city.bestTime },
                { label: "Pace", value: city.pace },
                { label: "Getting there", value: city.gettingThere },
              ]}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {city.bestFor.map((item) => (
                <span key={item} className="rounded-full bg-cream px-3 py-1 text-sm">{item}</span>
              ))}
            </div>
            <Link href={`/contact?interests=culture&saved=city:${city.slug}`} className="btn btn-ink mt-6 w-full">
              Ask about {city.name}
            </Link>
          </aside>
        </div>
        <div className="mx-auto max-w-page px-5 md:px-8">
          <h2 className="font-display text-4xl">In the frame</h2>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {city.gallery.map((photo) => (
              <figure key={photo.src} className="overflow-hidden rounded-3xl">
                <Image src={photo.src} alt={photo.alt} width={900} height={680} className="h-56 w-full object-cover" />
                <figcaption className="px-1 pt-2 text-xs text-mute">{photo.alt}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        {relatedExperiences.length ? (
          <div className="mx-auto mt-16 max-w-page px-5 md:px-8">
            <h2 className="font-display text-4xl">Experiences from here</h2>
            <div className="mt-6 grid gap-4">
              {relatedExperiences.map((item) => (
                <ExperienceCard key={item.slug} item={item} />
              ))}
            </div>
          </div>
        ) : null}
        {relatedJourneys.length ? (
          <div className="mx-auto mt-16 max-w-page px-5 md:px-8">
            <h2 className="font-display text-4xl">Journeys that stay here</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {relatedJourneys.map((journey) => (
                <JourneyCard key={journey.slug} journey={journey} />
              ))}
            </div>
          </div>
        ) : null}
      </article>
      <CtaBand
        title={`Build a route that earns ${city.name}.`}
        text="Two nights is often the difference between a ticket and a memory. Tell us your dates."
        primary={{ href: "/plan", label: "Open the planner" }}
        secondary={{ href: "/destinations", label: "Other cities" }}
      />
    </>
  );
}
