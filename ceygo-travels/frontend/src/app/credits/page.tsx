import { Eyebrow } from "@/components/ui/Bits";
import { allPhotos } from "@/data/photos";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Photo Credits",
  description: "Wikimedia Commons sources for the photographs used on the CeyGo Travels preview.",
  path: "/credits",
});

export default function CreditsPage() {
  const unique = Array.from(new Map(allPhotos.map((photo) => [photo.src, photo])).values());

  return (
    <section className="px-5 pb-20 pt-32 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Credits</Eyebrow>
        <h1 className="mt-4 font-display text-5xl tracking-tight">Photographs</h1>
        <p className="mt-4 text-lg text-mute">
          Destination photography is drawn from Wikimedia Commons. The CeyGo logo is the organization’s own mark. Replace these frames when CeyGo supplies its photography.
        </p>
        <ul className="mt-8 grid gap-3">
          {unique.map((photo) => (
            <li key={photo.src} className="rounded-2xl border border-ink/10 bg-paper px-4 py-3 text-sm">
              <p>{photo.alt}</p>
              <a href={photo.source} className="mt-1 inline-flex text-palm-ink underline underline-offset-4" rel="noreferrer">
                {photo.credit} file page
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
