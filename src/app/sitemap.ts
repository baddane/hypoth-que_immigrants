import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { wizardVariants } from "@/data/wizardVariants";
import { SITE_URL } from "@/lib/constants";

const BASE_URL = SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/wizard`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/politique-confidentialite`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const wizardPages: MetadataRoute.Sitemap = wizardVariants.map((v) => ({
    url: `${BASE_URL}/wizard/${v.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const toolPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/outils/calculateur-prime-schl`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/outils/simulateur-stress-test`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/outils/checklist-documents`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE_URL}/outils/eligibilite-achat-non-canadien`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  return [...staticPages, ...wizardPages, ...toolPages, ...blogPages];
}
