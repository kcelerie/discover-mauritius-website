import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { products } from "@/content/tours";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/tours", priority: 0.9, freq: "weekly" },
    { path: "/airport-transfers", priority: 0.8, freq: "monthly" },
    { path: "/packages", priority: 0.8, freq: "monthly" },
    { path: "/air-ticketing", priority: 0.8, freq: "monthly" },
    { path: "/hotel-booking", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "monthly" },
    { path: "/faq", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.9, freq: "monthly" },
    { path: "/privacy", priority: 0.2, freq: "yearly" },
    { path: "/terms", priority: 0.2, freq: "yearly" },
  ];

  const staticEntries = staticRoutes.map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const tourEntries = products.map((p) => ({
    url: `${site.url}/tours/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...tourEntries];
}
