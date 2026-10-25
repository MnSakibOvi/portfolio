"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  GraduationCap,
  Gavel,
  FlaskConical,
  Medal,
  Users,
  BookOpen,
  Sparkles,
} from "lucide-react";
import {
  contestAchievements,
  mentoring,
  judging,
  research,
} from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { BounceIcon } from "./BounceIcon";

const blocks = [
  {
    id: "contests",
    title: "Contest achievements",
    Icon: Trophy,
    body: (
      <>
        <ul className="mt-5 space-y-3">
          {contestAchievements.highlights.map((item) => (
            <motion.li
              key={item}
              className="skill-row"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              data-cursor="hover"
            >
              <Medal
                size={15}
                className="shrink-0 text-[var(--accent)]"
                strokeWidth={1.75}
              />
              {item}
            </motion.li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {contestAchievements.platforms.map((p) => (
            <span key={p.name} className="beyond-chip">
              {p.name}
              <span className="text-[var(--ink-muted)]"> · {p.note}</span>
            </span>
          ))}
        </div>
        <ul className="mt-4 space-y-1.5 border-t border-[var(--line)] pt-4">
          {contestAchievements.icpcTeams.map((t) => (
            <li
              key={t.team + t.year}
              className="text-xs text-[var(--ink-muted)] md:text-sm"
            >
              <span className="font-medium text-[var(--ink-soft)]">
                {t.team}
              </span>
              {" · "}
              {t.year} · {t.event}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "mentoring",
    title: "Mentoring & teaching",
    Icon: GraduationCap,
    body: (
      <>
        <p className="mt-3 text-sm text-[var(--ink-soft)]">
          {mentoring.role} · {mentoring.org}
        </p>
        <p className="mt-1 text-xs font-medium text-[var(--accent)]">
          {mentoring.period}
        </p>
        <ul className="mt-5 space-y-3">
          {[...mentoring.camps, ...mentoring.courses.slice(0, 2)].map(
            (item) => (
              <motion.li
                key={item}
                className="skill-row"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                data-cursor="hover"
              >
                <BookOpen
                  size={15}
                  className="shrink-0 text-[var(--accent)]"
                  strokeWidth={1.75}
                />
                {item}
              </motion.li>
            ),
          )}
        </ul>
        <ul className="mt-4 space-y-3 border-t border-[var(--line)] pt-4">
          {mentoring.impact.map((item) => (
            <motion.li
              key={item}
              className="skill-row"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              data-cursor="hover"
            >
              <Users
                size={15}
                className="shrink-0 text-[var(--accent)]"
                strokeWidth={1.75}
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "judging",
    title: "Judging & problem setting",
    Icon: Gavel,
    body: (
      <>
        <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">
          {judging.summary}
        </p>
        <p className="mt-2 text-xs font-medium text-[var(--accent)]">
          {judging.role}
        </p>
        <ul className="mt-5 space-y-3">
          {judging.contests.map((item) => (
            <motion.li
              key={item}
              className="skill-row"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              data-cursor="hover"
            >
              <Gavel
                size={15}
                className="shrink-0 text-[var(--accent)]"
                strokeWidth={1.75}
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "research",
    title: "Research",
    Icon: FlaskConical,
    body: (
      <>
        <h4 className="mt-3 font-[family-name:var(--font-display)] text-base font-semibold text-[var(--ink)]">
          {research.title}
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {research.focus.map((f) => (
            <span key={f} className="beyond-chip">
              {f}
            </span>
          ))}
        </div>
        <ul className="mt-5 space-y-3">
          {research.contributions.map((item) => (
            <motion.li
              key={item}
              className="skill-row"
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              data-cursor="hover"
            >
              <Sparkles
                size={15}
                className="shrink-0 text-[var(--accent)]"
                strokeWidth={1.75}
              />
              {item}
            </motion.li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-[var(--ink-muted)]">
          {research.status}
        </p>
      </>
    ),
  },
];

export function Beyond() {
  return (
    <section id="beyond" className="section relative overflow-hidden">
      <div className="section-orb section-orb-left" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-label inline-flex items-center gap-2">
            <BounceIcon>
              <Trophy size={14} strokeWidth={2} />
            </BounceIcon>
            Beyond code
          </p>
          <h2 className="section-title">
            Problem-solving, mentoring &amp; research
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Competitive programming and contest leadership that back up how I
            debug, design, and teach - plus academic research in fair AI
            writing.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contestAchievements.stats.map((stat, i) => (
            <StaggerItem key={stat.label}>
              <motion.div
                className="stat-cell card-fx beyond-stat"
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 360, damping: 22 }}
                data-cursor="hover"
              >
                <span className="corner-spark corner-tl" aria-hidden />
                <span className="corner-spark corner-br" aria-hidden />
                <motion.p
                  className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight text-[var(--accent)] md:text-3xl"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5 }}
                >
                  {stat.value}
                </motion.p>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">
                  {stat.label}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <Stagger className="mt-10 grid gap-8 md:grid-cols-2">
          {blocks.map((block) => (
            <StaggerItem key={block.id}>
              <motion.div
                className="skill-group card-fx beyond-card h-full"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                data-cursor="hover"
              >
                <span className="corner-spark corner-tl" aria-hidden />
                <span className="corner-spark corner-br" aria-hidden />
                <div className="flex items-center gap-3">
                  <BounceIcon className="icon-badge">
                    <block.Icon size={18} strokeWidth={1.75} />
                  </BounceIcon>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                    {block.title}
                  </h3>
                </div>
                {block.body}
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
