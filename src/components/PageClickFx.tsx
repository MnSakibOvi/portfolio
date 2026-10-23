"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Ripple = { id: number; x: number; y: number };

function isButtonLike(target: EventTarget | null) {
  if (!(target instanceof Element)) return false;
  return Boolean(
    target.closest(
      "a.btn-primary, a.btn-ghost, button, [class*='btn-primary'], [class*='btn-ghost']"
    )
  );
}

export function PageClickFx() {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  useEffect(() => {
    let id = 0;
    const onClick = (e: MouseEvent) => {
      // Soft ring on buttons / CTAs only
      if (!isButtonLike(e.target)) return;
      const next = { id: ++id, x: e.clientX, y: e.clientY };
      setRipples((r) => [...r.slice(-5), next]);
      window.setTimeout(() => {
        setRipples((r) => r.filter((item) => item.id !== next.id));
      }, 800);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998]" aria-hidden>
      <AnimatePresence>
        {ripples.map((r) => (
          <motion.span
            key={r.id}
            className="click-ripple"
            style={{ left: r.x, top: r.y }}
            initial={{ scale: 0, opacity: 0.55 }}
            animate={{ scale: 2.8, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
