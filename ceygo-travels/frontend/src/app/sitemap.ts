import type { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { experiences } from "@/data/experiences";
import { guides } from "@/data/guides";
import { journeys } from "@/data/journeys";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = ["", "/destinations", "/experiences", "/journeys", "/plan", "/guides", "/about", "/gallery", "/contact", "/faq", "/privacy", "/credits"];
  const dynamicPaths = [
    ...destinations.map((item) => `/destinations/${item.slug}`),
    ...experiences.map((item) => `/experiences/${item.slug}`),
    ...journeys.map((item) => `/journeys/${item.slug}`),
    ...guides.map((item) => `/guides/${item.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
