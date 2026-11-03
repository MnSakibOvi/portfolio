import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { getAllCaseStudySlugs, getCaseStudy } from "@/data/caseStudies";
import { caseStudyDescription, caseStudyJsonLd } from "@/data/site";
import { CaseStudyView } from "@/components/CaseStudyView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study" };
  const description = caseStudyDescription(study);
  const path = `/case-studies/${study.slug}`;
  return {
    title: `${study.title} · Case Study`,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${study.title} · Case Study | Nazmus Sakib`,
      description,
      url: path,
      type: "article",
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${study.title} · Case Study | Nazmus Sakib`,
      description,
      images: ["/og.png"],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main className="case-study-page relative z-10 min-h-screen bg-[var(--paper)]">
      <JsonLd data={caseStudyJsonLd(study)} />
      <CaseStudyView study={study} />
    </main>
  );
}
