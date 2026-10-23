"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProfilePhoto() {
  return (
    <motion.div
      className="profile-photo"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <span className="profile-glow" aria-hidden />
      <span className="profile-ring profile-ring-a" aria-hidden />
      <span className="profile-ring profile-ring-b" aria-hidden />
      <span className="profile-ring profile-ring-c" aria-hidden />
      {/* Dashed ring around photo */}
      <span className="profile-ring profile-ring-dash" aria-hidden />

      {/* More orbiting dots */}
      <span className="orbit-track orbit-track-1" aria-hidden>
        <span className="orbit-dot" />
      </span>
      <span className="orbit-track orbit-track-2" aria-hidden>
        <span className="orbit-dot" />
        <span className="orbit-dot orbit-dot-b" />
      </span>
      <span className="orbit-track orbit-track-3" aria-hidden>
        <span className="orbit-dot" />
      </span>
      <span className="orbit-track orbit-track-4" aria-hidden>
        <span className="orbit-dot" />
        <span className="orbit-dot orbit-dot-b" />
      </span>

      <div className="profile-frame">
        <Image
          src="/profile.jpg"
          alt="Nazmus Sakib"
          width={480}
          height={480}
          priority
          className="profile-img"
        />
      </div>
    </motion.div>
  );
}
