import { Eyebrow } from "@/components/ui/Bits";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Privacy Note",
  description:
    "How this CeyGo Travels preview stores a shortlist, newsletter address, and trip enquiry only in your browser.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="px-5 pb-20 pt-32 md:px-8">
      <div className="mx-auto max-w-3xl">
        <Eyebrow>Privacy</Eyebrow>
        <h1 className="mt-4 font-display text-5xl tracking-tight">What this preview keeps.</h1>
        <div className="prose-cey mt-6 text-lg leading-relaxed text-mute">
          <p>
            This frontend does not send your details to a server. A shortlist, a newsletter address, and a trip enquiry are saved in local storage on your own device so the screens can remember them.
          </p>
          <p>
            Clear the shortlist in the heart panel, or clear this site’s data in your browser, and those notes go with it. When a backend is connected, this note should be replaced with CeyGo’s real privacy policy before any live collection starts.
          </p>
          <p>
            Sample email, phone, and street details on the contact page are placeholders. They are not an invitation to send personal documents anywhere yet.
          </p>
        </div>
      </div>
    </section>
  );
}
