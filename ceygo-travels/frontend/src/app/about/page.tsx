import { CtaBand, Eyebrow, SampleNote } from "@/components/ui/Bits";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About CeyGo Travels",
  description:
    "CeyGo Travels hosts private Sri Lanka vacations for international travelers, with routes paced around cities, tea country, wildlife, and the coast.",
  path: "/about",
});

const pillars = [
  {
    title: "The month leads",
    text: "We choose the coast your dates can actually swim from, then build the cities around that decision.",
  },
  {
    title: "Private, not performed",
    text: "Your vehicle, your pace, hotels chosen for the group you are. No coach clock, no manufactured crowd.",
  },
  {
    title: "Manners included",
    text: "Temple dress, wildlife distance, and a train backup are part of the design, not footnotes after something goes wrong.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-5 pb-8 pt-32 md:px-8">
        <div className="mx-auto max-w-page">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">
            A local desk for people who have never driven on the left.
          </h1>
          <div className="mt-6 max-w-2xl">
            <SampleNote>
              The story below is sample studio copy. Replace it with CeyGo’s own history, team, and registrations when you have them. No personal names are invented here.
            </SampleNote>
          </div>
          <div className="prose-cey mt-8 max-w-3xl text-lg leading-relaxed text-mute">
            <p>
              CeyGo Travels exists to take international visitors through Sri Lanka without flattening it into a greatest-hits day. The name carries Ceylon, the island’s older name in the tea trade, and the simple instruction to go — with someone who knows when not to.
            </p>
            <p>
              The work is trip design and hosting: a route, a vehicle with a driver-host, rooms that match the night you will actually have, and a desk that answers when a flight moves. It is not a marketplace of anonymous day tours.
            </p>
            <p>
              Until the organization shares its founding year, license numbers, and the people behind the desk, this page will not pretend to. Roles are enough: trip designers in Colombo, hosts on the road, and a person who reads your dates before recommending a beach.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pillars.map((item) => (
              <article key={item.title} className="rounded-[28px] bg-paper p-6">
                <h2 className="font-display text-3xl">{item.title}</h2>
                <p className="mt-3 text-mute">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ["Trip designers", "Turn a month and a mood into a day-by-day that a driver can drive."],
              ["Road hosts", "Temple timing, water stops, and the moment the back seat has had enough."],
              ["The Colombo desk", "Quotes, changes, and the boring brilliance of airport buffers."],
            ].map(([title, text]) => (
              <article key={title} className="rounded-[28px] border border-ink/10 p-6">
                <h2 className="font-display text-2xl">{title}</h2>
                <p className="mt-2 text-mute">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand
        title="Tell the desk who is traveling."
        text="Ages, dates, and the one place you refuse to miss. The route follows from that."
        primary={{ href: "/contact", label: "Write to the desk" }}
        secondary={{ href: "/plan", label: "Use the planner" }}
      />
    </>
  );
}
