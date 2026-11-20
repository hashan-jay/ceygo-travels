import { ExperienceExplorer } from "@/components/explore/Explorers";
import { CtaBand, Eyebrow } from "@/components/ui/Bits";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sri Lanka Experiences",
  description:
    "Private experiences across Sri Lanka: Sigiriya at opening, the hill train, tea estates, Galle Fort, safaris, and northern food.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <section className="px-5 pb-10 pt-32 md:px-8">
        <div className="mx-auto max-w-page">
          <Eyebrow>Experiences</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">
            One clear purpose for the day.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-mute">
            These are the pieces a journey is built from. Filter by what you came for. Each one says what is included, what is not, and when to leave it out.
          </p>
          <div className="mt-10">
            <ExperienceExplorer />
          </div>
        </div>
      </section>
      <CtaBand
        title="Want them in the right order?"
        text="Experiences are better as a sequence than a wishlist. The planner does the sequencing."
        primary={{ href: "/plan", label: "Plan a journey" }}
      />
    </>
  );
}
