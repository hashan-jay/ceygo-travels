export const regions = [
  {
    id: "west",
    name: "Colombo & the West",
    blurb: "Arrival, neighborhoods, and the first swim.",
  },
  {
    id: "triangle",
    name: "Cultural Triangle",
    blurb: "Rock fortresses, sacred cities, and reservoirs.",
  },
  {
    id: "hills",
    name: "Hill Country",
    blurb: "Temples, tea, and the slow train.",
  },
  {
    id: "south",
    name: "South Coast",
    blurb: "Forts, whales in season, and quiet coves.",
  },
  {
    id: "east",
    name: "East Coast",
    blurb: "Calmer seas when the southwest is rough.",
  },
  {
    id: "north",
    name: "The North",
    blurb: "Jaffna, islands, and a different Sri Lanka.",
  },
] as const;

export type RegionId = (typeof regions)[number]["id"];

export const interestOptions = [
  {
    id: "culture",
    label: "Ancient cities",
    text: "Sigiriya, living temples, sacred cities",
  },
  {
    id: "tea",
    label: "Tea country",
    text: "Estates, cool air, the hill railway",
  },
  {
    id: "coast",
    label: "Coast and forts",
    text: "Galle, swims, unhurried beach time",
  },
  {
    id: "wildlife",
    label: "Wildlife",
    text: "Leopards, elephants, licensed parks",
  },
  {
    id: "food",
    label: "Food",
    text: "Rice and curry, markets, coastal crab",
  },
  {
    id: "wellness",
    label: "Wellness",
    text: "Ayurveda, quiet hotels, a slower pace",
  },
] as const;

export type InterestId = (typeof interestOptions)[number]["id"];

export type Pace = "slow" | "balanced" | "full";

export type Photo = {
  src: string;
  alt: string;
  credit: string;
  source: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: RegionId;
  tagline: string;
  excerpt: string;
  stay: string;
  bestTime: string;
  pace: string;
  bestFor: string[];
  image: string;
  gallery: Photo[];
  overview: string[];
  highlights: { title: string; text: string }[];
  gettingThere: string;
  know: string[];
  seo: { title: string; description: string };
};

export type Experience = {
  slug: string;
  title: string;
  destination: string;
  duration: string;
  interest: InterestId;
  image: string;
  excerpt: string;
  story: string[];
  unfolds: string[];
  includes: string[];
  excludes: string[];
  know: string[];
  seo: { title: string; description: string };
};

export type JourneyDay = {
  title: string;
  place: string;
  text: string;
};

export type Journey = {
  slug: string;
  title: string;
  subtitle: string;
  days: number;
  pace: Pace;
  priceFrom: number;
  interests: InterestId[];
  bestMonths: number[];
  route: string[];
  summary: string;
  idealFor: string;
  image: string;
  includes: string[];
  excludes: string[];
  daysPlan: JourneyDay[];
  seo: { title: string; description: string };
};

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type Guide = {
  slug: string;
  title: string;
  excerpt: string;
  read: string;
  image: string;
  updated: string;
  sections: GuideSection[];
  seo: { title: string; description: string };
};

export type Faq = {
  group: "Planning" | "On the island" | "Practical";
  question: string;
  answer: string;
};
