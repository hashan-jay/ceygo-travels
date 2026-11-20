import { ContactForm } from "@/components/contact/ContactForm";
import { Eyebrow, SampleNote } from "@/components/ui/Bits";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Contact CeyGo Travels",
  description:
    "Send a Sri Lanka trip enquiry to CeyGo Travels with your dates, party, and the cities you want. This preview stores the note in your browser.",
  path: "/contact",
});

type Query = Record<string, string | string[] | undefined>;

function one(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ContactPage({ searchParams }: { searchParams: Promise<Query> }) {
  const query = await searchParams;

  return (
    <section className="px-4 pb-16 pt-24 sm:px-5 md:px-8 md:pb-20 md:pt-32">
      <div className="mx-auto grid max-w-page gap-10 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">Write the desk.</h1>
          <p className="mt-4 text-lg text-mute">
            Dates, who is coming, and the place you refuse to miss. That is enough to start a real route.
          </p>
          <div className="mt-6">
            <SampleNote>
              {site.email}, {site.phoneDisplay}, and {site.addressLine} are sample details. They are not a live CeyGo desk yet. The form keeps your enquiry in this browser until delivery is connected.
            </SampleNote>
          </div>
          <dl className="mt-8 grid gap-4 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-palm-ink">Email</dt>
              <dd className="mt-1">{site.email}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-palm-ink">Phone</dt>
              <dd className="mt-1">{site.phoneDisplay}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-palm-ink">Studio</dt>
              <dd className="mt-1">{site.addressLine}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-palm-ink">Hours</dt>
              <dd className="mt-1">{site.hours}</dd>
            </div>
          </dl>
        </div>
        <ContactForm
          prefill={{
            journey: one(query.journey),
            month: one(query.month),
            days: one(query.days),
            pace: one(query.pace),
            interests: one(query.interests),
            saved: one(query.saved),
          }}
        />
      </div>
    </section>
  );
}
