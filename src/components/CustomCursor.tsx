"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Particle = { id: number; x: number; y: number };

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleId = useRef(0);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);
  const x = useSpring(rawX, { stiffness: 500, damping: 35, mass: 0.4 });
  const y = useSpring(rawY, { stiffness: 500, damping: 35, mass: 0.4 });
  const trailX = useSpring(rawX, { stiffness: 120, damping: 22, mass: 0.6 });
  const trailY = useSpring(rawY, { stiffness: 120, damping: 22, mass: 0.6 });
  const outerX = useSpring(rawX, { stiffness: 60, damping: 18, mass: 0.8 });
  const outerY = useSpring(rawY, { stiffness: 60, damping: 18, mass: 0.8 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };

    const onDown = (e: MouseEvent) => {
      setClicking(true);
      const id = ++particleId.current;
      setParticles((p) => [...p.slice(-8), { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setParticles((p) => p.filter((t) => t.id !== id));
      }, 700);
    };

    const onUp = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      const interactive = t?.closest(
        "a, button, [data-cursor='hover'], input, textarea, summary",
      );
      setHovering(Boolean(interactive));
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver);

    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]" aria-hidden>
      {particles.map((p) => (
        <span
          key={p.id}
          className="cursor-burst"
          style={{ left: p.x, top: p.y }}
        />
      ))}

      <motion.div
        className="cursor-ring"
        style={{
          x: outerX,
          y: outerY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovering ? 1.7 : clicking ? 0.75 : 1,
          opacity: hovering ? 0.55 : 0.35,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      <motion.div
        className="cursor-trail"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: hovering ? 1.4 : 1 }}
      />

      <motion.div
        className="cursor-dot"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: clicking ? 0.55 : hovering ? 0.35 : 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  );
}
