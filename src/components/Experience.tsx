"use client";

import { motion } from "framer-motion";
import { Briefcase, CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { education, experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { BounceIcon } from "./BounceIcon";

export function Experience() {
  return (
    <section id="work" className="section section-alt relative overflow-hidden">
      <div className="section-orb section-orb-left" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-label inline-flex items-center gap-2">
            <BounceIcon>
              <Briefcase size={14} strokeWidth={2} />
            </BounceIcon>
            Experience
          </p>
          <h2 className="section-title">Career path</h2>
        </Reveal>

        <div className="mt-14 space-y-0">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 0.08}>
              <motion.article
                className="timeline-row group"
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                data-cursor="hover"
              >
                <div className="timeline-rail" aria-hidden>
                  <span className="timeline-dot" />
                  <span className="progress-tick" />
                </div>
                <div className="pb-12 pl-2 md:grid md:grid-cols-[200px_1fr] md:gap-10 md:pl-6">
                  <div>
                    <p className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)]">
                      <CalendarDays size={14} strokeWidth={1.75} />
                      {job.period}
                    </p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-[var(--ink-muted)]">
                      <MapPin size={12} strokeWidth={1.75} />
                      {job.location}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--ink)] md:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-[var(--ink-soft)]">{job.company}</p>
                    <ul className="mt-4 space-y-2">
                      {job.points.map((p) => (
                        <li
                          key={p}
                          className="text-sm leading-relaxed text-[var(--ink-muted)] md:text-base"
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-4 border-t border-[var(--line)] pt-12">
          <p className="section-label inline-flex items-center gap-2">
            <BounceIcon>
              <GraduationCap size={14} strokeWidth={2} />
            </BounceIcon>
            Education
          </p>
          <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold">
            {education.degree}
          </h3>
          <p className="mt-2 text-[var(--ink-soft)]">
            {education.school} · {education.period}
          </p>
          <p className="mt-1 text-sm text-[var(--accent)]">
            CGPA {education.gpa}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
