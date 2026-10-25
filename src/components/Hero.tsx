"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Briefcase, MapPin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Magnetic } from "./Magnetic";
import { ProfilePhoto } from "./ProfilePhoto";
import { SkillRotator } from "./SkillRotator";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const mailHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    "Software Engineer opportunity - Nazmus Sakib",
  )}`;

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-20 pt-28 md:pb-28 md:pt-32"
    >
      <div className="hero-atmosphere" aria-hidden>
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="grid-fade" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 md:grid-cols-[1fr_1fr] md:gap-8 md:px-8"
      >
        <div>
          <motion.p
            className="mb-4 inline-flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium uppercase tracking-[0.18em] text-[var(--accent)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} strokeWidth={2} />
              {profile.location}
            </span>
            <span className="hidden text-[var(--line)] sm:inline" aria-hidden>
              ·
            </span>
            <span className="inline-flex items-center gap-2 normal-case tracking-normal text-[var(--accent-deep)]">
              <Briefcase size={14} strokeWidth={2} />
              {profile.availability}
            </span>
          </motion.p>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-[clamp(2.75rem,8vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-[var(--ink)]"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {profile.name}
          </motion.h1>

          <motion.p
            className="mt-3 text-base font-semibold text-[var(--ink-soft)] md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
          >
            {profile.title}
            <span className="font-normal text-[var(--ink-muted)]">
              {" "}
              · {profile.focus}
            </span>
          </motion.p>

          <motion.p
            className="mt-4 max-w-xl text-base leading-relaxed text-[var(--ink-soft)] md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35 }}
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
          >
            <SkillRotator />
          </motion.div>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <Magnetic>
              <a
                href="#work"
                className="btn-primary inline-flex items-center gap-2"
                data-cursor="hover"
              >
                View experience
                <ArrowRight size={16} strokeWidth={2} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#projects"
                className="btn-ghost inline-flex items-center gap-2"
                data-cursor="hover"
              >
                Case studies
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={mailHref}
                className="btn-ghost inline-flex items-center gap-2"
                data-cursor="hover"
              >
                <Mail size={16} strokeWidth={1.75} />
                Email me
              </a>
            </Magnetic>
          </motion.div>
        </div>

        <div className="flex justify-center md:justify-end md:self-center">
          <ProfilePhoto />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <a
          href="#about"
          className="scroll-hint flex flex-col items-center gap-2 text-[var(--ink-muted)]"
          data-cursor="hover"
          aria-label="Scroll to about"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <span className="scroll-line" />
        </a>
      </motion.div>
    </section>
  );
}
