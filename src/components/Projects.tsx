"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  ExternalLink,
  Target,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  projectPrograms,
  projects,
  type Project,
} from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";

type Filter = (typeof projectPrograms)[number];

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants = {
  hidden: { opacity: 0, scale: 0.94, y: 36 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease,
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.92,
    y: -16,
    transition: { duration: 0.35, ease },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

function ProjectCard({
  project,
  index,
  expanded,
  onToggle,
}: {
  project: Project;
  index: number;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      layout
      className="project-block"
      variants={cardVariants}
      initial="hidden"
      whileInView="show"
      exit="exit"
      viewport={{ once: false, amount: 0.22, margin: "0px 0px -6% 0px" }}
      transition={{ layout: { duration: 0.45, ease } }}
      style={{ originY: 0.5 }}
      data-cursor="hover"
    >
      <motion.div
        className="flex flex-wrap items-start justify-between gap-4"
        variants={lineVariants}
      >
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="program-badge">{project.program}</span>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
              {String(index + 1).padStart(2, "0")} · {project.role}
            </span>
          </div>
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl font-semibold text-[var(--ink)] md:text-3xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-[var(--ink-muted)]">{project.stack}</p>
        </div>
        {project.url && (
          <Magnetic strength={0.2}>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-1.5 text-sm"
              data-cursor="hover"
            >
              Visit site
              <ExternalLink size={14} strokeWidth={1.75} />
            </a>
          </Magnetic>
        )}
      </motion.div>

      <motion.div className="challenge-panel mt-6" variants={lineVariants}>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
          Challenge
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-soft)] md:text-base">
          {project.challenge}
        </p>
      </motion.div>

      <motion.p
        className="mt-5 max-w-3xl leading-relaxed text-[var(--ink-soft)]"
        variants={lineVariants}
      >
        {project.summary}
      </motion.p>

      <motion.div
        className="mt-8 grid gap-8 md:grid-cols-2"
        variants={lineVariants}
      >
        <div>
          <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            <Target size={13} strokeWidth={2} />
            Business outcomes
          </h4>
          <ul className="mt-3 space-y-2.5">
            {project.outcomes.map((item, i) => (
              <motion.li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink-soft)]"
                variants={lineVariants}
                custom={i}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">
            <Sparkles size={13} strokeWidth={2} />
            What I delivered
          </h4>
          <ul className="mt-3 space-y-2.5">
            {(expanded
              ? project.solutions
              : project.solutions.slice(0, 4)
            ).map((item) => (
              <motion.li
                key={item}
                className="flex gap-2.5 text-sm leading-relaxed text-[var(--ink-soft)]"
                variants={lineVariants}
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink-muted)]" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
          {project.solutions.length > 4 && (
            <button
              type="button"
              className="mt-3 text-sm font-medium text-[var(--accent)] underline-offset-4 hover:underline"
              data-cursor="hover"
              onClick={onToggle}
            >
              <span className="inline-flex items-center gap-1">
                {expanded ? (
                  <>
                    Show less <ChevronUp size={14} />
                  </>
                ) : (
                  <>
                    Show {project.solutions.length - 4} more details{" "}
                    <ChevronDown size={14} />
                  </>
                )}
              </span>
            </button>
          )}
        </div>
      </motion.div>

      {project.stores && project.stores.length > 0 && (
        <motion.div
          className="mt-8 border-t border-[var(--line)] pt-5"
          variants={lineVariants}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">
            Live stores
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.stores.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="chip hover:border-[var(--accent)] hover:text-[var(--accent-deep)]"
                data-cursor="hover"
              >
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.program === filter);
  }, [filter]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { All: projects.length };
    for (const p of projects) {
      map[p.program] = (map[p.program] ?? 0) + 1;
    }
    return map;
  }, []);

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-label">Selected work</p>
          <h2 className="section-title max-w-2xl">
            Client projects — not buried under umbrella labels.
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--ink-soft)]">
            Each store and program below is a focused delivery: challenge,
            outcomes, and what shipped. Filter by program to dig in.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
          {projectPrograms.map((program) => {
            const active = filter === program;
            return (
              <button
                key={program}
                type="button"
                data-cursor="hover"
                onClick={() => {
                  setFilter(program);
                  setOpenId(null);
                }}
                className={`filter-chip ${active ? "filter-chip-active" : ""}`}
              >
                {program}
                <span className="opacity-60">{counts[program] ?? 0}</span>
              </button>
            );
          })}
        </Reveal>

        <motion.div layout className="mt-10 space-y-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                expanded={openId === project.id}
                onToggle={() =>
                  setOpenId((id) => (id === project.id ? null : project.id))
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
