"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, CheckCircle2 } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { profile } from "@/data/portfolio";

export function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <article className="case-study">
      <header className="case-study-topbar">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--accent-deep)]"
            data-cursor="hover"
          >
            <ArrowLeft size={16} strokeWidth={1.75} />
            Back to case studies
          </Link>
          <Link
            href="/"
            className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-[var(--ink)]"
            data-cursor="hover"
          >
            {profile.brand}
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 pb-24 pt-10 md:px-8 md:pt-14">
        <Reveal>
          <p className="section-label">{study.program}</p>
          <h1 className="section-title max-w-3xl">{study.title}</h1>
          <p className="project-role-subtitle mt-3">{study.role}</p>
          <p className="mt-3 max-w-2xl text-sm text-[var(--ink-muted)]">
            {study.stack}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {study.liveUrl && (
              <Magnetic strength={0.2}>
                <a
                  href={study.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost inline-flex items-center gap-1.5 text-sm"
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
                className="btn-ghost inline-flex items-center gap-1.5 text-sm"
                data-cursor="hover"
              >
                All projects
              </Link>
            </Magnetic>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <section className="case-study-section mt-14">
            <h2 className="case-study-heading">Background</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
              {study.background}
            </p>
          </section>
        </Reveal>

        <Reveal delay={0.1}>
          <section className="case-study-section mt-14">
            <h2 className="case-study-heading">Challenges</h2>
            <ul className="mt-6 space-y-3">
              {study.challenges.map((item) => (
                <li
                  key={item}
                  className="challenge-panel flex gap-3 text-[var(--ink-soft)]"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.12}>
          <section className="case-study-section mt-14">
            <h2 className="case-study-heading">Solution</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {study.solutionBlocks.map((block) => (
                <div key={block.title} className="case-study-block">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                    {block.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-muted)] md:text-[0.95rem]">
                    {block.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.14}>
          <section className="case-study-section mt-14">
            <h2 className="case-study-heading">Results</h2>
            <ul className="mt-6 space-y-3">
              {study.results.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[var(--ink-soft)]"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[var(--accent)]"
                    size={18}
                    strokeWidth={1.75}
                  />
                  <span className="text-sm leading-relaxed md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal delay={0.16}>
          <section className="case-study-section mt-14 border-t border-[var(--line)] pt-10">
            <p className="max-w-2xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg">
              {study.closing}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic strength={0.2}>
                <Link
                  href="/#projects"
                  className="btn-primary inline-flex items-center gap-1.5 text-sm"
                  data-cursor="hover"
                >
                  <ArrowLeft size={14} strokeWidth={1.75} />
                  Back to projects
                </Link>
              </Magnetic>
              {study.liveUrl && (
                <Magnetic strength={0.2}>
                  <a
                    href={study.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost inline-flex items-center gap-1.5 text-sm"
                    data-cursor="hover"
                  >
                    Visit live site
                    <ExternalLink size={14} strokeWidth={1.75} />
                  </a>
                </Magnetic>
              )}
            </div>
          </section>
        </Reveal>
      </div>
    </article>
  );
}
