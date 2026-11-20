import { GalleryExplorer } from "@/components/explore/GalleryExplorer";
import { Eyebrow } from "@/components/ui/Bits";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sri Lanka Photo Gallery",
  description:
    "Photographs of Sigiriya, Kandy, tea country, Galle, Yala, and the coasts, for planning a private Sri Lanka journey.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <section className="px-4 pb-16 pt-24 sm:px-5 md:px-8 md:pb-20 md:pt-32">
      <div className="mx-auto max-w-wide">
        <Eyebrow>Gallery</Eyebrow>
        <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight sm:text-5xl md:text-7xl">The island, before you pack.</h1>
        <p className="mt-5 max-w-2xl text-lg text-mute">
          Filter by region and open a frame. Photographs are from Wikimedia Commons contributors and credited on the credits page.
        </p>
        <div className="mt-8">
          <GalleryExplorer />
        </div>
      </div>
    </section>
  );
}
