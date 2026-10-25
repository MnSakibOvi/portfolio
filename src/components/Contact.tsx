"use client";

import { Mail, MapPin, Link2, Code2, Briefcase } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Magnetic } from "./Magnetic";
import { motion } from "framer-motion";

const nudge = {
  initial: { rotate: 0 },
  whileInView: { rotate: [0, -12, 8, -4, 0] },
  viewport: { once: true, amount: 0.8 },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

export function Contact() {
  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Software Engineer opportunity - Nazmus Sakib",
  )}`;

  return (
    <section id="contact" className="section relative overflow-hidden">
      <div className="contact-glow" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title max-w-2xl">
            Open to Software Engineer opportunities.
          </h2>
          <p className="mt-4 max-w-xl text-[var(--ink-soft)]">
            Looking for roles in ASP.NET Core, nopCommerce, or enterprise
            platform engineering. Happy to walk through projects, code, and how
            I work on a team.
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--ink-muted)]">
            <span className="inline-flex items-center gap-2">
              <motion.span
                {...nudge}
                className="inline-flex text-[var(--accent)]"
              >
                <MapPin size={15} />
              </motion.span>
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 text-[var(--accent-deep)]">
              <Briefcase size={15} strokeWidth={1.75} />
              {profile.availability}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-4">
          <Magnetic>
            <a
              href={mailHref}
              className="btn-primary text-base inline-flex items-center gap-2"
              data-cursor="hover"
            >
              <motion.span
                {...nudge}
                className="inline-flex"
                transition={{ ...nudge.transition, delay: 0.05 }}
              >
                <Mail size={17} strokeWidth={1.75} />
              </motion.span>
              Email about a role
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
              data-cursor="hover"
            >
              <motion.span
                {...nudge}
                className="inline-flex"
                transition={{ ...nudge.transition, delay: 0.12 }}
              >
                <Link2 size={17} strokeWidth={1.75} />
              </motion.span>
              LinkedIn
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2"
              data-cursor="hover"
            >
              <motion.span
                {...nudge}
                className="inline-flex"
                transition={{ ...nudge.transition, delay: 0.18 }}
              >
                <Code2 size={17} strokeWidth={1.75} />
              </motion.span>
              GitHub
            </a>
          </Magnetic>
          {profile.resumeUrl ? (
            <Magnetic>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2"
                data-cursor="hover"
              >
                Download resume
              </a>
            </Magnetic>
          ) : null}
        </Reveal>

        <Reveal
          delay={0.25}
          className="mt-16 border-t border-[var(--line)] pt-8"
        >
          <motion.p
            className="text-sm text-[var(--ink-muted)]"
            whileInView={{ opacity: [0.4, 1] }}
            transition={{ duration: 1 }}
          >
            Secondary:{" "}
            <a
              href={`mailto:${profile.emailSecondary}`}
              className="underline-offset-4 hover:text-[var(--accent)] hover:underline"
              data-cursor="hover"
            >
              {profile.emailSecondary}
            </a>
          </motion.p>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--line)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 px-5 text-sm text-[var(--ink-muted)] md:flex-row md:items-center md:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Software Engineer · ASP.NET · nopCommerce</p>
      </div>
    </footer>
  );
}
