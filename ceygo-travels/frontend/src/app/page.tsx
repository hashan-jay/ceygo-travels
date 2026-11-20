import Image from "next/image";
import Link from "next/link";
import { JourneyCard } from "@/components/cards/Cards";
import { ExperienceRail, SeasonPicker, Testimonials } from "@/components/home/Rails";
import { Hero, Marquee } from "@/components/home/Hero";
import { RouteExplorer } from "@/components/home/RouteExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBand, Eyebrow, Section, SectionHeading } from "@/components/ui/Bits";
import { Reveal } from "@/components/ui/Reveal";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { faqs } from "@/data/faqs";
import { guides } from "@/data/guides";
import { journeys } from "@/data/journeys";
import { practicalFacts } from "@/data/site";
import { regions } from "@/data/types";
import { faqJsonLd } from "@/lib/seo";

const bento = ["sigiriya", "ella", "galle", "kandy", "mirissa", "colombo"];

export default function HomePage() {
  const featured = bento
    .map((slug) => destinations.find((city) => city.slug === slug))
    .filter((city): city is NonNullable<typeof city> => Boolean(city));
  const homeFaqs = faqs.slice(0, 4);

  return (
    <>
      <JsonLd data={faqJsonLd(homeFaqs)} />
      <Hero />
      <Marquee />

      <Section>
        <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <Eyebrow>Why the order matters</Eyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Sri Lanka is small on a map and generous on the road.
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lg leading-relaxed text-mute">
              A week can hold a rock fortress, a lake city, and a fort. It cannot hold every coast. CeyGo builds private journeys for international travelers who would rather remember a place than collect it.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-4">
              {[
                [String(destinations.length), "Cities in the collection"],
                [String(regions.length), "Regions, chosen by season"],
                [String(journeys.length), "Sample journey shapes"],
                [String(experiences.length), "Experiences to fold in"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-3xl bg-paper p-4">
                  <dt className="font-display text-4xl">{value}</dt>
                  <dd className="mt-1 text-sm text-mute">{label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Section>

      <section className="px-4 pb-8 sm:px-5 md:px-8">
        <div className="mx-auto grid max-w-page gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {practicalFacts.map((fact) => (
            <article key={fact.label} className="rounded-3xl border border-ink/10 bg-paper p-5">
              <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-palm-ink">{fact.label}</h2>
              <p className="mt-2 text-sm leading-relaxed">{fact.value}</p>
            </article>
          ))}
        </div>
      </section>

      <Section id="cities" tone="paper">
        <SectionHeading
          eyebrow="Cities"
          title="Start with a place, not a package."
          text="Fifteen bases, from the airport lagoon to Jaffna. Save the ones that pull you. The route comes after."
          action={<Link href="/destinations" className="btn btn-line">All destinations</Link>}
        />
        <div className="-mx-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:-mx-5 sm:px-5 md:mx-0 md:mt-10 md:grid md:grid-cols-4 md:grid-rows-2 md:overflow-visible md:px-0">
          {featured.map((city, index) => (
            <Link
              key={city.slug}
              href={`/destinations/${city.slug}`}
              className={`group relative h-72 w-[78vw] shrink-0 snap-start overflow-hidden rounded-[28px] md:h-auto md:w-auto md:min-h-64 ${index === 0 ? "md:col-span-2 md:row-span-2 md:min-h-[540px]" : ""} ${index === 1 ? "md:col-span-2" : ""}`}
            >
              <Image src={city.image} alt={city.gallery[0]?.alt ?? city.name} fill sizes="(min-width: 768px) 50vw, 100vw" className="card-media object-cover" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
              <span className="absolute bottom-0 p-5 text-cream">
                <span className="block text-xs uppercase tracking-[0.16em] text-saffron">{city.stay}</span>
                <span className="font-display text-4xl">{city.name}</span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="A classic line"
          title="Follow the island from the lagoon to the fort."
          text="Tap a stop. This is the spine of a two-week journey in the drier months — not the only way, and not the way for every date."
        />
        <div className="mt-10">
          <RouteExplorer />
        </div>
      </Section>

      <Section tone="ink">
        <SectionHeading
          light
          eyebrow="Experiences"
          title="Days with one job."
          text="A climb, a train, a jeep, a table. They drop into a journey. They are not a scavenger hunt."
          action={<Link href="/experiences" className="btn btn-light">All experiences</Link>}
        />
        <div className="mt-10">
          <ExperienceRail />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Journeys"
          title="Sample routes you can bend."
          text="From-rates are sample figures for two adults, so you can feel the shape. A real quote replaces them."
          action={<Link href="/journeys" className="btn btn-line">Compare journeys</Link>}
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {journeys.slice(0, 3).map((journey) => (
            <JourneyCard key={journey.slug} journey={journey} />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>How a trip comes together</Eyebrow>
            <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Four steps, then the island.</h2>
          </div>
          <ol className="grid gap-4">
            {[
              ["01", "Dates and appetite", "Tell us when you can fly and whether you want ruins, tea, animals, or a long swim."],
              ["02", "A route that fits the month", "We pick the coast the season can support and cut anything that would make the days frantic."],
              ["03", "Hotels and the vehicle", "A private driver-host, rooms at the right height or the right beach, entries requested ahead."],
              ["04", "You travel. We stay useful.", "Train seats, temple dress, a changed flight. The desk remains a person, not a PDF."],
            ].map(([number, title, text]) => (
              <li key={number} className="grid grid-cols-[auto_1fr] gap-4 rounded-3xl bg-cream p-5">
                <span className="font-display text-3xl text-saffron">{number}</span>
                <div>
                  <h3 className="font-display text-2xl">{title}</h3>
                  <p className="mt-1 text-mute">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Season"
          title="Choose the coast before the hotel."
          text="Sri Lanka does not have one weather. These are tendencies. Your week can still surprise you, and the desk plans for that."
        />
        <div className="mt-10">
          <SeasonPicker />
        </div>
      </Section>

      <Section tone="paper">
        <Testimonials />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Field notes"
          title="Read the island before you book it."
          text="Practical notes for foreign visitors: timing, temples, trains, food, and wildlife manners."
          action={<Link href="/guides" className="btn btn-line">All notes</Link>}
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {guides.slice(0, 3).map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group overflow-hidden rounded-[28px] bg-paper shadow-card">
              <div className="relative h-48">
                <Image src={guide.image} alt="" fill sizes="360px" className="card-media object-cover" />
              </div>
              <div className="p-5">
                <p className="text-xs uppercase tracking-[0.16em] text-palm-ink">{guide.read}</p>
                <h3 className="mt-2 font-display text-3xl leading-none">{guide.title}</h3>
                <p className="mt-3 text-sm text-mute">{guide.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="paper" className="pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading eyebrow="Questions" title="Before you write." />
          <div className="divide-y divide-ink/10">
            {homeFaqs.map((item) => (
              <article key={item.question} className="py-4">
                <h3 className="font-display text-2xl">{item.question}</h3>
                <p className="mt-2 text-mute">{item.answer}</p>
              </article>
            ))}
            <Link href="/faq" className="inline-flex pt-4 font-medium">
              Read the full FAQ →
            </Link>
          </div>
        </div>
      </Section>

      <CtaBand
        title="Tell us the month. We will tell you the coast."
        text="Use the planner for a first shape, or write the desk with the dates you already hold."
        primary={{ href: "/plan", label: "Open the planner" }}
        secondary={{ href: "/contact", label: "Write to the desk" }}
      />
    </>
  );
}
