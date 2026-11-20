import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Bits";
import { guides } from "@/data/guides";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sri Lanka Travel Guides",
  description:
    "Field notes for international visitors to Sri Lanka: when to go, how to get around, temple customs, food, and wildlife manners.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <section className="px-5 pb-20 pt-32 md:px-8">
      <div className="mx-auto max-w-page">
        <Eyebrow>Field notes</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">Read this before you fall for a map.</h1>
        <p className="mt-5 max-w-2xl text-lg text-mute">
          Practical writing for people visiting Sri Lanka from abroad. Rules that change — visas especially — are pointed at the official source, not frozen here.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group overflow-hidden rounded-[28px] bg-paper shadow-card">
              <div className="relative h-56">
                <Image src={guide.image} alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="card-media object-cover" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-[0.16em] text-palm-ink">{guide.read} · Updated {guide.updated}</p>
                <h2 className="mt-2 font-display text-4xl leading-none">{guide.title}</h2>
                <p className="mt-3 text-mute">{guide.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
