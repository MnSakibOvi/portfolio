"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { Magnetic } from "./Magnetic";
import { profile } from "@/data/portfolio";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Case studies" },
  { href: "#skills", label: "Skills" },
  { href: "#beyond", label: "Beyond" },
  { href: "#contact", label: "Contact" },
];

function scrollToId(hash: string) {
  const id = hash.replace(/^#/, "");
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const go = useCallback(
    (hash: string) => {
      setOpen(false);
      // Let the menu unmount / unlock body before scrolling (mobile Safari)
      window.setTimeout(() => scrollToId(hash), open ? 80 : 0);
    },
    [open],
  );

  const solid = scrolled || open;

  return (
    <>
      <motion.header
        className={`site-header fixed inset-x-0 top-0 z-[60] transition-colors duration-500 ${
          solid ? "nav-solid" : "nav-clear"
        }`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="site-header-inner mx-auto flex max-w-6xl items-center justify-between px-5 py-3 md:px-8 md:py-4">
          <Magnetic strength={0.2}>
            <a
              href="#top"
              className="brand-logo"
              aria-label={`${profile.brand} - home`}
              data-cursor="hover"
              onClick={(e) => {
                e.preventDefault();
                go("top");
              }}
            >
              <span className="brand-mark" aria-hidden>
                NS
              </span>
              <span className="brand-word">
                <span className="brand-initials">M N</span>
                <span className="brand-surname"> Sakib</span>
              </span>
            </a>
          </Magnetic>

          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Primary"
          >
            {links.map((l) => (
              <Magnetic key={l.href} strength={0.25}>
                <a
                  href={l.href}
                  className="nav-link text-sm font-medium text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
                  data-cursor="hover"
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.href);
                  }}
                >
                  {l.label}
                </a>
              </Magnetic>
            ))}
          </nav>

          <button
            type="button"
            className="burger-btn relative z-[70] flex h-11 w-11 items-center justify-center rounded-full md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            data-cursor="hover"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`burger ${open ? "burger-open" : ""}`} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            id="mobile-nav"
            className="mobile-nav fixed inset-0 z-[55] md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
          >
            <button
              type="button"
              className="mobile-nav-backdrop absolute inset-0"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            />
            <nav className="relative z-10 flex h-full flex-col items-center justify-center gap-2 px-6 pb-10 pt-24">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  className="mobile-nav-link font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]"
                  data-cursor="hover"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ delay: 0.04 * i, duration: 0.35 }}
                  onClick={(e) => {
                    e.preventDefault();
                    go(l.href);
                  }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
