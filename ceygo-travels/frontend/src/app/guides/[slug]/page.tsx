import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, CtaBand } from "@/components/ui/Bits";
import { getGuide, guides } from "@/data/guides";
import { site } from "@/data/site";
import { breadcrumbJsonLd, pageMeta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMeta({ title: guide.seo.title, description: guide.seo.description, path: `/guides/${guide.slug}` });
}

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();
  const others = guides.filter((item) => item.slug !== guide.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Field notes", path: "/guides" },
            { name: guide.title, path: `/guides/${guide.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.title,
            description: guide.seo.description,
            dateModified: guide.updated,
            author: { "@type": "Organization", name: site.name },
            publisher: { "@type": "Organization", name: site.name },
            image: `${site.url}${guide.image}`,
            mainEntityOfPage: `${site.url}/guides/${guide.slug}`,
          },
        ]}
      />
      <article className="px-4 pb-8 pt-24 sm:px-5 md:px-8 md:pt-32">
        <div className="mx-auto grid max-w-page gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Breadcrumbs items={[{ href: "/", label: "Home" }, { href: "/guides", label: "Field notes" }, { label: guide.title }]} />
            <p className="mt-6 text-sm text-mute">{guide.read} · Updated {guide.updated}</p>
            <nav aria-label="On this note" className="mt-6 grid gap-2">
              {guide.sections.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="text-sm underline-offset-4 hover:underline">
                  {section.heading}
                </a>
              ))}
            </nav>
          </aside>
          <div>
            <h1 className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">{guide.title}</h1>
            <p className="mt-4 text-lg text-mute">{guide.excerpt}</p>
            <div className="relative mt-6 h-72 overflow-hidden rounded-[28px]">
              <Image src={guide.image} alt="" fill priority className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
            </div>
            <div className="mt-8 grid gap-8">
              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h2 className="font-display text-3xl">{section.heading}</h2>
                  <div className="prose-cey mt-3 text-lg leading-relaxed text-mute">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
            <div className="mt-12">
              <h2 className="font-display text-3xl">Continue reading</h2>
              <ul className="mt-4 grid gap-3">
                {others.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/guides/${item.slug}`} className="text-lg underline-offset-4 hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>
      <CtaBand
        title="Turn the note into a route."
        text="If the month and the coast now make sense, the planner can propose the days."
        primary={{ href: "/plan", label: "Plan a journey" }}
      />
    </>
  );
}
