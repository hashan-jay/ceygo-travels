import Link from "next/link";
import { destinations } from "@/data/destinations";
import { site } from "@/data/site";
import { NewsletterForm } from "@/components/layout/NewsletterForm";

export function Footer() {
  return (
    <footer className="bg-ink px-4 pb-[calc(6.5rem+env(safe-area-inset-bottom))] pt-14 text-cream sm:px-5 md:px-8 md:pb-16 md:pt-16">
      <div className="mx-auto grid max-w-page gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-[0.18em]">
            CEY<span className="text-palm">GO</span> <span className="text-saffron">TRAVELS</span>
          </p>
          <p className="mt-4 max-w-sm text-cream/75">
            Private Sri Lanka journeys for people visiting from abroad. Cities, tea country, wildlife, and the coast — in an order the roads can keep.
          </p>
          <p className="mt-4 text-sm text-cream/60">
            Desk details on this preview are placeholders and are not a live booking line yet.
          </p>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-saffron">Explore</p>
          <ul className="mt-4 grid gap-2 text-sm">
            <li><Link href="/destinations" className="hover:text-saffron">Destinations</Link></li>
            <li><Link href="/experiences" className="hover:text-saffron">Experiences</Link></li>
            <li><Link href="/journeys" className="hover:text-saffron">Journeys</Link></li>
            <li><Link href="/guides" className="hover:text-saffron">Field notes</Link></li>
            <li><Link href="/gallery" className="hover:text-saffron">Gallery</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-saffron">Cities</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {destinations.slice(0, 6).map((city) => (
              <li key={city.slug}>
                <Link href={`/destinations/${city.slug}`} className="hover:text-saffron">
                  {city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-saffron">The desk</p>
          <ul className="mt-4 grid gap-2 text-sm text-cream/80">
            <li>{site.email}</li>
            <li>{site.phoneDisplay}</li>
            <li>{site.addressLine}</li>
            <li>{site.hours}</li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="/contact" className="underline underline-offset-4">Contact</Link>
            <Link href="/faq" className="underline underline-offset-4">FAQ</Link>
            <Link href="/plan" className="underline underline-offset-4">Plan</Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-page border-t border-cream/15 pt-8">
        <NewsletterForm />
        <div className="mt-8 flex flex-col gap-3 text-sm text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} CeyGo Travels. Sample content for the frontend preview.</p>
          <p>
            Designed and Developed by{" "}
            <a
              href="https://www.zyntaks.lk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream underline decoration-cream/40 underline-offset-4 hover:text-saffron"
            >
              Zyntaks
            </a>
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-cream">Privacy note</Link>
            <Link href="/credits" className="hover:text-cream">Photo credits</Link>
            <Link href="/about" className="hover:text-cream">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
