import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { siteUrl } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this date when the content changes; a date that changes on every
  // request teaches Google to ignore the field.
  const lastModified = new Date("2026-11-18");

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
