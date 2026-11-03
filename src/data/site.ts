import type { CaseStudy } from "./caseStudies";
import { profile } from "./portfolio";

export const siteUrl = "https://portfolio-mn-sakib-se.vercel.app";

export const siteTitle =
  "Nazmus Sakib · Software Engineer | ASP.NET · nopCommerce";

export const siteDescription =
  "Nazmus Sakib (M N Sakib), Software Engineer in Dhaka. ASP.NET Core, nopCommerce, ERP integration, and multi-store platforms at Brain Station 23.";

const personId = `${siteUrl}/#person`;
const websiteId = `${siteUrl}/#website`;

const person = {
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  alternateName: [profile.brand, "MN Sakib"],
  url: siteUrl,
  image: `${siteUrl}/profile.jpg`,
  jobTitle: profile.title,
  description: siteDescription,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  worksFor: {
    "@type": "Organization",
    name: "Brain Station 23 PLC",
  },
  knowsAbout: [
    "ASP.NET Core",
    "ASP.NET",
    "nopCommerce",
    "C#",
    ".NET",
    "SQL Server",
    "ERP integration",
    "Software engineering",
  ],
  sameAs: [profile.linkedin, profile.github],
};

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: profile.name,
        alternateName: [profile.brand, "MN Sakib"],
        description: siteDescription,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: siteTitle,
        description: siteDescription,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        about: { "@id": personId },
        mainEntity: { "@id": personId },
      },
      person,
    ],
  };
}

export function caseStudyDescription(study: Pick<CaseStudy, "title" | "stack">) {
  const text = `${study.title} case study by Nazmus Sakib (M N Sakib), Software Engineer. ${study.stack}.`;
  if (text.length <= 160) return text;
  const shorter = `${study.title} by Nazmus Sakib (M N Sakib). ${study.stack}.`;
  if (shorter.length <= 160) return shorter;
  return shorter.slice(0, 157).replace(/\s+\S*$/, "") + "…";
}

export function caseStudyJsonLd(study: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: `${study.title} · Case Study`,
    description: caseStudyDescription(study),
    url: `${siteUrl}/case-studies/${study.slug}`,
    mainEntityOfPage: `${siteUrl}/case-studies/${study.slug}`,
    inLanguage: "en",
    author: { "@id": personId },
    about: study.stack.split(" · ").map((name) => ({
      "@type": "Thing",
      name,
    })),
    keywords: [
      "Nazmus Sakib",
      "M N Sakib",
      "Software Engineer",
      "ASP.NET",
      "nopCommerce",
      study.title,
    ].join(", "),
  };
}
