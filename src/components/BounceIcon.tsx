"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** One-time scale bounce when scrolled into view, then stays still. */
export function BounceIcon({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.span
      className={className}
      initial={{ scale: 0.55, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: "spring", stiffness: 420, damping: 16 }}
    >
      {children}
    </motion.span>
  );
}
