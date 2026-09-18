import type { MetadataRoute } from "next";
import { TOURS } from "@/lib/data";
import { BLOG } from "@/lib/blog";

const SITE_URL = "https://kasbahtrails.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/tours`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const tourCityRoutes: MetadataRoute.Sitemap = Array.from(new Set(TOURS.map((t) => t.from))).map(
    (city) => ({
      url: `${SITE_URL}/tours?city=${encodeURIComponent(city)}`,
      changeFrequency: "weekly",
      priority: 0.6,
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = BLOG.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...tourCityRoutes, ...blogRoutes];
}
