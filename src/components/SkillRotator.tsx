"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { allSkills } from "@/data/portfolio";

export function SkillRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % allSkills.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  const skill = allSkills[index];

  return (
    <div className="skill-rotator">
      <div className="skill-rotator-stage" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.span
            key={skill}
            className="skill-rotator-value"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {skill}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
