import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllCaseStudySlugs, getCaseStudy } from "@/data/caseStudies";
import { CaseStudyView } from "@/components/CaseStudyView";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study" };
  return {
    title: `${study.title} · Case Study | Nazmus Sakib`,
    description: study.background.slice(0, 160),
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <main className="case-study-page relative z-10 min-h-screen bg-[var(--paper)]">
      <CaseStudyView study={study} />
    </main>
  );
}
