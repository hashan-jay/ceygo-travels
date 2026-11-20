import { FaqExplorer } from "@/components/explore/FaqExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaBand, Eyebrow } from "@/components/ui/Bits";
import { faqs } from "@/data/faqs";
import { faqJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Sri Lanka Trip FAQ",
  description:
    "Questions international travelers ask CeyGo Travels about private Sri Lanka journeys, timing, families, food, and this preview site.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <section className="px-5 pb-8 pt-32 md:px-8">
        <div className="mx-auto max-w-page">
          <Eyebrow>FAQ</Eyebrow>
          <h1 className="mt-4 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">Questions, answered in the open.</h1>
          <p className="mt-5 max-w-2xl text-lg text-mute">
            Planning, life on the island, and how this preview handles an enquiry. Search or filter if you are here for one thing.
          </p>
          <div className="mt-10">
            <FaqExplorer />
          </div>
        </div>
      </section>
      <CtaBand
        title="Still specific to your group?"
        text="Ages, mobility, and a flight time change the answer. Send them."
        primary={{ href: "/contact", label: "Write to the desk" }}
      />
    </>
  );
}
