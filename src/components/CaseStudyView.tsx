"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";
import { getNextCaseStudy } from "@/data/caseStudies";
import { Magnetic } from "./Magnetic";
import { CaseStudyAmbient } from "./CaseStudyAmbient";
import { profile } from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;

function FadeIn({
  children,
  className,
  delay = 0,
  y = 36,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function StaggerList({
  children,
  className,
  as: Tag = "ul",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "ul" | "div";
}) {
  const reduce = useReducedMotion();
  const Comp = Tag === "ul" ? motion.ul : motion.div;

  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : 0.09,
            delayChildren: reduce ? 0 : 0.04,
          },
        },
      }}
    >
      {children}
    </Comp>
  );
}

function StaggerRow({
  children,
  className,
  as: Tag = "li",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "li" | "div";
}) {
  const reduce = useReducedMotion();
  const Comp = Tag === "li" ? motion.li : motion.div;

  return (
    <Comp
      className={className}
      variants={{
        hidden: reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease },
        },
      }}
    >
      {children}
    </Comp>
  );
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const next = getNextCaseStudy(study.slug);
  const reduce = useReducedMotion();

  return (
    <article className="case-study relative isolate">
      <CaseStudyAmbient />

      <header className="case-study-topbar relative z-40 sticky top-0 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-8 md:py-4">
          <Link
            href="/#projects"
            className="inline-flex min-w-0 items-center gap-1.5 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--accent-deep)]"
            data-cursor="hover"
          >
            <ArrowLeft size={16} strokeWidth={1.75} className="shrink-0" />
            <span className="sm:hidden">Back</span>
            <span className="hidden sm:inline">Back to projects</span>
          </Link>
          <Link
            href="/"
            className="shrink-0 font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[var(--ink)]"
            data-cursor="hover"
          >
            {profile.brand}
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-5 md:px-8 md:pb-24 md:pt-12">
        <FadeIn y={24}>
          <p className="section-label">{study.program}</p>
          <h1 className="section-title max-w-2xl break-words text-[clamp(1.65rem,6vw,2.75rem)] leading-[1.15]">
            {study.title}
          </h1>
          <motion.span
            className="mt-4 block h-1 w-16 origin-left rounded-full bg-[var(--accent)]"
            aria-hidden
            initial={reduce ? false : { scaleX: 0.35, opacity: 0.55 }}
            animate={
              reduce
                ? undefined
                : { scaleX: [0.35, 1, 0.55, 1], opacity: [0.55, 1, 0.7, 1] }
            }
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="project-role-subtitle mt-3 max-w-2xl text-[0.9rem] leading-snug sm:text-[0.95rem]">
            {study.role}
          </p>
          <p className="mt-3 max-w-xl text-[0.8125rem] leading-relaxed text-[var(--ink-muted)] sm:text-sm">
            {study.stack}
          </p>
          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3">
            {study.liveUrl && (
              <Magnetic strength={0.2}>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
                  data-cursor="hover"
                >
                  Live demo
                  <ExternalLink size={14} strokeWidth={1.75} />
                </a>
              </Magnetic>
            )}
            <Magnetic strength={0.2}>
              <Link
                href="/#projects"
                className="btn-ghost inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
                data-cursor="hover"
              >
                All projects
              </Link>
            </Magnetic>
          </div>
        </FadeIn>

        <FadeIn className="mt-10 md:mt-14" delay={0.06}>
          <section>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,4vw,1.75rem)] font-semibold tracking-[-0.02em] text-[var(--ink)]">
              Background
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg md:leading-relaxed">
              {study.background}
            </p>
          </section>
        </FadeIn>

        <section className="mt-10 md:mt-14">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,4vw,1.75rem)] font-semibold tracking-[-0.02em] text-[var(--ink)]">
              Challenges
            </h2>
          </FadeIn>
          <StaggerList className="mt-5 flex flex-col gap-2.5">
            {study.challenges.map((item) => (
              <StaggerRow
                key={item}
                className="challenge-panel flex gap-3 px-3.5 py-3 text-[0.9rem] leading-relaxed text-[var(--ink-soft)] transition-[transform,background,border-color] duration-300 hover:translate-x-1 hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--line))] hover:bg-[color-mix(in_srgb,var(--accent)_11%,transparent)] sm:px-4 sm:text-base"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                  aria-hidden
                />
                <span>{item}</span>
              </StaggerRow>
            ))}
          </StaggerList>
        </section>

        <section className="mt-10 md:mt-14">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,4vw,1.75rem)] font-semibold tracking-[-0.02em] text-[var(--ink)]">
              Solution
            </h2>
          </FadeIn>
          <StaggerList
            as="div"
            className="mt-5 grid grid-cols-1 gap-3.5 md:grid-cols-2 md:gap-4"
          >
            {study.solutionBlocks.map((block) => (
              <StaggerRow
                as="div"
                key={block.title}
                className="h-full rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,white_70%,var(--paper))] p-4 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--line))] hover:shadow-[0_12px_30px_color-mix(in_srgb,var(--ink)_7%,transparent)] md:p-[1.15rem_1.2rem]"
              >
                <h3 className="font-[family-name:var(--font-display)] text-[1.05rem] font-semibold leading-snug text-[var(--ink)]">
                  {block.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)] md:text-[0.95rem]">
                  {block.body}
                </p>
              </StaggerRow>
            ))}
          </StaggerList>
        </section>

        <section className="mt-10 md:mt-14">
          <FadeIn>
            <h2 className="font-[family-name:var(--font-display)] text-[clamp(1.25rem,4vw,1.75rem)] font-semibold tracking-[-0.02em] text-[var(--ink)]">
              Results
            </h2>
          </FadeIn>
          <StaggerList className="mt-5 flex flex-col gap-3">
            {study.results.map((item) => (
              <StaggerRow
                key={item}
                className="flex gap-3 text-[0.9rem] leading-relaxed text-[var(--ink-soft)] transition-transform duration-300 hover:translate-x-1 sm:text-base"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-[var(--accent)]"
                  size={18}
                  strokeWidth={1.75}
                />
                <span>{item}</span>
              </StaggerRow>
            ))}
          </StaggerList>
        </section>

        <FadeIn className="mt-10 border-t border-[var(--line)] pt-8 md:mt-14 md:pt-10" delay={0.05}>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
            {study.closing}
          </p>
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3">
            <Magnetic strength={0.2}>
              <Link
                href="/#projects"
                className="btn-ghost inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
                data-cursor="hover"
              >
                <ArrowLeft size={14} strokeWidth={1.75} />
                All projects
              </Link>
            </Magnetic>
            {study.liveUrl && (
              <Magnetic strength={0.2}>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex w-full items-center justify-center gap-2 text-sm sm:w-auto"
                  data-cursor="hover"
                >
                  Visit live site
                  <ExternalLink size={14} strokeWidth={1.75} />
                </a>
              </Magnetic>
            )}
          </div>
        </FadeIn>

        {next && (
          <FadeIn className="mt-8 mb-2 md:mt-10" delay={0.04} y={40}>
            <motion.div
              whileHover={reduce ? undefined : { y: -3 }}
              transition={{ duration: 0.25 }}
            >
              <Link
                href={`/case-studies/${next.slug}`}
                className="group flex items-start justify-between gap-3 rounded-2xl border border-[var(--line)] bg-[color-mix(in_srgb,var(--accent)_6%,var(--paper))] p-4 transition-[border-color,background] duration-300 hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--line))] hover:bg-[color-mix(in_srgb,var(--accent)_10%,var(--paper))] sm:items-center sm:gap-4 sm:p-5 md:p-6"
                data-cursor="hover"
              >
                <div className="min-w-0">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
                    Next case study
                  </p>
                  <p className="mt-1.5 font-[family-name:var(--font-display)] text-lg font-semibold leading-snug text-[var(--ink)] sm:text-xl md:text-[1.35rem]">
                    {next.title}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-[var(--ink-muted)] sm:text-sm">
                    {next.role}
                  </p>
                </div>
                <span
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--line)] bg-[color-mix(in_srgb,white_70%,var(--paper))] text-[var(--accent-deep)] transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  <ArrowRight size={20} strokeWidth={1.75} />
                </span>
              </Link>
            </motion.div>
          </FadeIn>
        )}
      </div>
    </article>
  );
}
