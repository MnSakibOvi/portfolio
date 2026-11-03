"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const variantsDesktop: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -32 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 32 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.94 },
    show: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

/** Shorter travel on mobile so content isn't blank while scrolling into view. */
const variantsMobile: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -14 },
    show: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 14 },
    show: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.97 },
    show: { opacity: 1, scale: 1 },
  },
  fade: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
};

function useIsMobileViewport() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const sync = () => setMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return mobile;
}

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: keyof typeof variantsDesktop;
  once?: boolean;
  as?: "div" | "section" | "li" | "article";
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  as = "div",
}: Props) {
  const Comp = motion[as];
  const mobile = useIsMobileViewport();
  const reduce = useReducedMotion();
  const variants = mobile ? variantsMobile : variantsDesktop;

  // Positive bottom margin = start animating before the block fully enters
  // (fixes "next section appears too late" on mobile scroll).
  const viewport = mobile
    ? { once, amount: 0.01 as const, margin: "0px 0px 35% 0px" }
    : { once, amount: 0.08 as const, margin: "0px 0px 12% 0px" };

  return (
    <Comp
      className={className}
      variants={variants[direction]}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={viewport}
      transition={{
        duration: mobile ? 0.45 : 0.6,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Comp>
  );
}

export function Stagger({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "ul";
}) {
  const Comp = as === "ul" ? motion.ul : motion.div;
  const mobile = useIsMobileViewport();
  const reduce = useReducedMotion();

  const viewport = mobile
    ? { once: true, amount: 0.01 as const, margin: "0px 0px 30% 0px" }
    : { once: true, amount: 0.06 as const, margin: "0px 0px 10% 0px" };

  return (
    <Comp
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: reduce ? 0 : mobile ? 0.05 : 0.07,
          },
        },
      }}
    >
      {children}
    </Comp>
  );
}

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const Comp = as === "li" ? motion.li : motion.div;
  const mobile = useIsMobileViewport();
  const reduce = useReducedMotion();

  return (
    <Comp
      className={className}
      variants={{
        hidden: reduce
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: mobile ? 14 : 22 },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: mobile ? 0.4 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
    >
      {children}
    </Comp>
  );
}
