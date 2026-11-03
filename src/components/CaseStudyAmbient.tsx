"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Soft drifting washes behind case-study content.
 * Strong enough to notice, still under the text layer.
 */
export function CaseStudyAmbient() {
  const reduce = useReducedMotion();

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute -right-[18%] -top-[10%] h-[min(36rem,85vw)] w-[min(36rem,85vw)] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_55%,transparent)_0%,transparent_68%)] blur-[2px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -70, 40, 0],
                y: [0, 55, -35, 0],
                scale: [1, 1.18, 0.92, 1],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-[20%] top-[32%] h-[min(30rem,75vw)] w-[min(30rem,75vw)] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,#c4a574_48%,transparent)_0%,transparent_68%)] blur-[2px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, 80, -45, 0],
                y: [0, -60, 40, 0],
                scale: [1, 1.14, 1.2, 1],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[0%] right-[0%] h-[min(32rem,80vw)] w-[min(32rem,80vw)] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent-deep)_45%,transparent)_0%,transparent_68%)] blur-[2px]"
        animate={
          reduce
            ? undefined
            : {
                x: [0, -55, 50, 0],
                y: [0, -45, 55, 0],
                scale: [1, 1.16, 0.9, 1],
              }
        }
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
