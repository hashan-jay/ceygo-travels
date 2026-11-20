export const site = {
  name: "CeyGo Travels",
  shortName: "CeyGo",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ceygotravels.com",
  description:
    "CeyGo Travels designs private Sri Lanka vacations for international travelers — cultural cities, tea country, wildlife, and the coast, paced with a local host.",
  tagline: "The island, unfolded city by city.",
  email: "hello@ceygotravels.com",
  phoneDisplay: "+94 11 000 0000",
  addressLine: "120 Sample Street, Colombo 03, Sri Lanka",
  hours: "Daily, 8:00–20:00 Sri Lanka time",
  /** Sample desk details. Replace when the organization shares the live ones. */
  placeholders: true,
} as const;

export const navLinks = [
  { href: "/destinations", label: "Destinations" },
  { href: "/experiences", label: "Experiences" },
  { href: "/journeys", label: "Journeys" },
  { href: "/guides", label: "Field notes" },
  { href: "/about", label: "About" },
] as const;

export const practicalFacts = [
  {
    label: "Arrivals",
    value: "Most international flights land at Bandaranaike (CMB), near Negombo.",
  },
  {
    label: "On the road",
    value: "Traffic keeps left. Multi-city trips are usually made with a private driver.",
  },
  {
    label: "Language",
    value: "Sinhala and Tamil are official. English is widely used in tourism.",
  },
  {
    label: "Money",
    value: "The rupee is everyday currency. CeyGo quotes international trips in USD.",
  },
] as const;
