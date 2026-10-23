"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Magnetic } from "./Magnetic";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "nav-solid" : "nav-clear"
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Magnetic strength={0.2}>
          <a
            href="#top"
            className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight text-[var(--ink)]"
            data-cursor="hover"
          >
            {profile.name.split(" ")[0]}
            <span className="text-[var(--accent)]">.</span>
          </a>
        </Magnetic>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Magnetic key={l.href} strength={0.25}>
              <a
                href={l.href}
                className="nav-link text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
                data-cursor="hover"
              >
                {l.label}
              </a>
            </Magnetic>
          ))}
          {/* <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn-primary text-sm" data-cursor="hover">
              Hire me
            </a>
          </Magnetic> */}
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Menu"
          data-cursor="hover"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`burger ${open ? "burger-open" : ""}`} />
        </button>
      </div>

      <motion.div
        className="fixed inset-0 z-40 bg-[var(--paper)]/95 backdrop-blur-md md:hidden"
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
        transition={{ duration: 0.35 }}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="font-[family-name:var(--font-display)] text-3xl font-semibold"
              data-cursor="hover"
              initial={{ opacity: 0, y: 20 }}
              animate={open ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: open ? 0.05 * i : 0 }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.header>
  );
}
