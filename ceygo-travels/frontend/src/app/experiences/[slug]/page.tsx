import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, CtaBand, FactList } from "@/components/ui/Bits";
import { SaveButton } from "@/components/ui/SaveButton";
import { experiences, getExperience } from "@/data/experiences";
import { getDestination, regionName } from "@/data/destinations";
import { interestOptions } from "@/data/types";
import { site } from "@/data/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return experiences.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getExperience(slug);
  if (!item) return {};
  return pageMeta({ title: item.seo.title, description: item.seo.description, path: `/experiences/${item.slug}` });
}

export default async function ExperiencePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const item = getExperience(slug);
  if (!item) notFound();
  const city = getDestination(item.destination);
  const interest = interestOptions.find((option) => option.id === item.interest);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Experiences", path: "/experiences" },
          { name: item.title, path: `/experiences/${item.slug}` },
        ])}
      />
      <article className="pb-8 pt-28">
        <div className="px-5 md:px-8">
          <div className="relative mx-auto h-[50vh] min-h-[340px] max-w-wide overflow-hidden rounded-[32px]">
            <Image src={item.image} alt={city?.gallery[0]?.alt ?? item.title} fill priority className="object-cover" sizes="100vw" />
          </div>
        </div>
        <div className="mx-auto grid max-w-page gap-12 px-5 py-10 md:px-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/experiences", label: "Experiences" }, { label: item.title }]} />
            <div className="mt-6 flex items-start justify-between gap-4">
              <h1 className="font-display text-5xl tracking-tight md:text-6xl">{item.title}</h1>
              <SaveButton kind="experience" slug={item.slug} label={item.title} />
            </div>
            <p className="mt-4 text-lg text-mute">{item.excerpt}</p>
            <div className="prose-cey mt-6 text-lg leading-relaxed">
              {item.story.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <h2 className="mt-10 font-display text-3xl">How the day unfolds</h2>
            <ol className="mt-4 grid gap-3">
              {item.unfolds.map((step, index) => (
                <li key={step} className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl bg-paper p-4">
                  <span className="font-display text-2xl text-saffron">0{index + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <List title="Included" items={item.includes} />
              <List title="Not included" items={item.excludes} />
            </div>
            <h2 className="mt-10 font-display text-3xl">Before you add it</h2>
            <ul className="mt-4 grid gap-2">
              {item.know.map((note) => (
                <li key={note} className="rounded-2xl border border-ink/10 px-4 py-3">{note}</li>
              ))}
            </ul>
          </div>
          <aside className="h-fit rounded-[28px] bg-paper p-6 lg:sticky lg:top-28">
            <FactList
              items={[
                { label: "Duration", value: item.duration },
                { label: "Based from", value: city?.name ?? item.destination },
                { label: "Region", value: city ? regionName(city.region) : "Sri Lanka" },
                { label: "Theme", value: interest?.label ?? item.interest },
              ]}
            />
            {city ? (
              <Link href={`/destinations/${city.slug}`} className="mt-4 inline-flex font-medium">
                More on {city.name} →
              </Link>
            ) : null}
            <Link href={`/contact?interests=${item.interest}&saved=experience:${item.slug}`} className="btn btn-ink mt-6 w-full">
              Add this to an enquiry
            </Link>
            <p className="mt-4 text-xs text-mute">Reference {site.shortName} experience · {item.slug}</p>
          </aside>
        </div>
      </article>
      <CtaBand
        title="A day like this needs the days around it."
        text="We will say if it fits your dates, or if it should wait for another journey."
        primary={{ href: "/journeys", label: "See journeys" }}
        secondary={{ href: "/plan", label: "Use the planner" }}
      />
    </>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-3xl bg-paper p-5">
      <h3 className="font-display text-2xl">{title}</h3>
      <ul className="mt-3 grid gap-2 text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
