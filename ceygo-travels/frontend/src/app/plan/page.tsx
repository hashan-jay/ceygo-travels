import { TripPlanner } from "@/components/plan/TripPlanner";
import { Eyebrow } from "@/components/ui/Bits";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Plan a Sri Lanka Journey",
  description:
    "Shape a private Sri Lanka trip by month, length, pace, and interests. CeyGo matches sample routes you can send to the desk.",
  path: "/plan",
});

export default function PlanPage() {
  return (
    <section className="px-4 pb-16 pt-24 sm:px-5 md:px-8 md:pb-20 md:pt-32">
      <div className="mx-auto grid max-w-page gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Eyebrow>Planner</Eyebrow>
          <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">Find the route the month can keep.</h1>
          <p className="mt-4 text-lg text-mute">
            Four short choices. You will get up to three sample journeys, with the reasons they fit. Nothing is booked from this screen.
          </p>
          <ul className="mt-6 grid gap-3 text-sm">
            <li className="rounded-2xl bg-paper p-4">December asks for the south. August asks for the east.</li>
            <li className="rounded-2xl bg-paper p-4">A week cannot honestly hold both Jaffna and Mirissa.</li>
            <li className="rounded-2xl bg-paper p-4">Your shortlist in the heart icon can travel with the enquiry.</li>
          </ul>
        </div>
        <TripPlanner />
      </div>
    </section>
  );
}
