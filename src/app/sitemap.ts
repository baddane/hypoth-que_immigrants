import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { wizardVariants } from "@/data/wizardVariants";
import { SITE_URL } from "@/lib/constants";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: "2026-03-28", changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/wizard`, lastModified: "2026-03-28", changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: "2026-03-28", changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: "2026-03-15", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: "2026-02-01", changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: "2026-01-15", changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: "2026-01-15", changeFrequency: "yearly", priority: 0.3 },
  ];

  const wizardPages: MetadataRoute.Sitemap = wizardVariants.map((v) => ({
    url: `${BASE_URL}/wizard/${v.slug}`,
    lastModified: "2026-03-28",
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.dateModified,
    changeFrequency: "monthly" as const,
    priority: post.category === "Guide Principal" ? 0.9 : 0.7,
  }));

  return [...staticPages, ...wizardPages, ...blogPages];
}
