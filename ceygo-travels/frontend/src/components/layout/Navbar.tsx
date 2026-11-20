"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useWishlist } from "@/components/providers/WishlistProvider";
import { SearchDialog } from "@/components/layout/SearchDialog";
import { destinations, regionName } from "@/data/destinations";
import { navLinks } from "@/data/site";
import { regions } from "@/data/types";
import { cn } from "@/lib/utils";

const heroCities = ["sigiriya", "galle", "ella", "kandy", "mirissa", "yala"];

export function Navbar() {
  const pathname = usePathname();
  const { items, setOpen } = useWishlist();
  const [scrolled, setScrolled] = useState(false);
  const [mega, setMega] = useState(false);
  const [menu, setMenu] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [featured, setFeatured] = useState(heroCities[0]);
  const featuredCity = destinations.find((item) => item.slug === featured) ?? destinations[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMega(false);
    setMenu(false);
    setCitiesOpen(false);
    setSearch(false);
  }, [pathname]);

  useEffect(() => {
    if (!menu && !search) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenu(false);
        setSearch(false);
      }
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [menu, search]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-ink/10">
        <ScrollBar />
      </div>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled || mega || menu ? "bg-cream/95 shadow-card backdrop-blur" : "bg-cream/80 backdrop-blur-sm",
        )}
        onMouseLeave={() => setMega(false)}
      >
        <div className="mx-auto flex h-[4.6rem] max-w-wide items-center justify-between gap-4 px-4 md:px-8">
          <Link href="/" className="flex items-center gap-2" aria-label="CeyGo Travels home">
            <Image
              src="/brand/cgo-logo.jpg"
              alt=""
              width={1280}
              height={1280}
              priority
              className="h-14 w-14 rounded-2xl object-cover"
            />
            <span className="hidden text-[0.78rem] font-semibold tracking-[0.16em] sm:block">
              CEY<span className="text-palm">GO</span> <span className="text-saffron">TRAVELS</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            <div onMouseEnter={() => setMega(true)}>
              <button
                className={cn(
                  "text-sm font-medium",
                  pathname.startsWith("/destinations") && "underline decoration-saffron decoration-2 underline-offset-8",
                )}
                aria-expanded={mega}
                onClick={() => setMega((value) => !value)}
              >
                Destinations
              </button>
            </div>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? "page" : undefined}
                className={cn(
                  "text-sm font-medium",
                  pathname.startsWith(link.href) && "underline decoration-saffron decoration-2 underline-offset-8",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button className="btn btn-line hidden min-h-10 px-3 sm:inline-flex" onClick={() => setSearch(true)}>
              Search
            </button>
            <button
              className="btn btn-line min-h-10 px-3"
              onClick={() => setOpen(true)}
              aria-label={`Open shortlist, ${items.length} saved`}
            >
              ♡ {items.length > 0 ? items.length : ""}
            </button>
            <Link href="/plan" className="btn btn-ink hidden min-h-10 px-4 md:inline-flex">
              Plan a journey
            </Link>
            <button
              className="btn btn-ink min-h-10 px-3 lg:hidden"
              aria-expanded={menu}
              aria-controls="mobile-nav"
              onClick={() => setMenu((value) => !value)}
            >
              {menu ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {mega ? (
          <div className="hidden border-t border-ink/10 bg-paper lg:block">
            <div className="mx-auto grid max-w-wide gap-8 px-8 py-8 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {regions.map((region) => (
                  <div key={region.id}>
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-palm-ink">
                      {region.name}
                    </p>
                    <ul className="mt-3 grid gap-1.5">
                      {destinations
                        .filter((city) => city.region === region.id)
                        .map((city) => (
                          <li key={city.slug}>
                            <Link
                              href={`/destinations/${city.slug}`}
                              className="text-sm hover:text-palm-ink"
                              onMouseEnter={() => setFeatured(city.slug)}
                              onFocus={() => setFeatured(city.slug)}
                            >
                              {city.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link href={`/destinations/${featuredCity.slug}`} className="group relative min-h-56 overflow-hidden rounded-3xl">
                <Image
                  src={featuredCity.image}
                  alt=""
                  fill
                  sizes="360px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute bottom-0 p-5 text-cream">
                  <p className="text-xs uppercase tracking-[0.16em] text-saffron">{regionName(featuredCity.region)}</p>
                  <p className="font-display text-3xl">{featuredCity.name}</p>
                  <p className="mt-1 max-w-xs text-sm text-cream/80">{featuredCity.tagline}</p>
                </div>
              </Link>
            </div>
            <div className="border-t border-ink/10 px-8 py-3 text-sm">
              <Link href="/destinations" className="font-medium">
                Browse all cities →
              </Link>
            </div>
          </div>
        ) : null}
      </header>

      {menu ? (
        <div id="mobile-nav" className="fixed inset-0 z-40 overflow-y-auto bg-cream px-5 pb-28 pt-24 lg:hidden">
          <button className="btn btn-line mb-6" onClick={() => setSearch(true)}>
            Search the island
          </button>
          <button
            className="flex w-full items-center justify-between border-t border-ink/10 py-4 text-left font-display text-4xl"
            aria-expanded={citiesOpen}
            onClick={() => setCitiesOpen((value) => !value)}
          >
            Destinations
            <span aria-hidden className="text-lg">{citiesOpen ? "–" : "+"}</span>
          </button>
          {citiesOpen ? (
            <div className="grid gap-4 pb-4">
              {regions.map((region) => (
                <div key={region.id}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-palm-ink">{region.name}</p>
                  <ul className="mt-2 grid gap-1">
                    {destinations
                      .filter((city) => city.region === region.id)
                      .map((city) => (
                        <li key={city.slug}>
                          <Link href={`/destinations/${city.slug}`} className="text-lg">
                            {city.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : null}
          {navLinks.slice(1).map((link) => (
            <Link key={link.href} href={link.href} className="block border-t border-ink/10 py-4 font-display text-4xl">
              {link.label}
            </Link>
          ))}
          <Link href="/gallery" className="block border-t border-ink/10 py-4 font-display text-4xl">
            Gallery
          </Link>
          <Link href="/contact" className="block border-t border-ink/10 py-4 font-display text-4xl">
            Contact
          </Link>
          <Link href="/plan" className="btn btn-saffron mt-6">
            Plan a journey
          </Link>
        </div>
      ) : null}

      <SearchDialog open={search} onClose={() => setSearch(false)} />
    </>
  );
}

function ScrollBar() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScale(height > 0 ? window.scrollY / height : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <span
      className="block h-full origin-left bg-saffron"
      style={{ transform: `scaleX(${scale})` }}
    />
  );
}

export function MobileDock() {
  const pathname = usePathname();
  if (pathname === "/plan") return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-cream/95 p-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <Link href="/destinations" className="btn btn-line">
          Cities
        </Link>
        <Link href="/plan" className="btn btn-saffron">
          Plan a journey
        </Link>
      </div>
    </div>
  );
}
