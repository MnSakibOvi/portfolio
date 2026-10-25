"use client";

import {
  Code2,
  Boxes,
  Handshake,
  Braces,
  Database,
  Globe2,
} from "lucide-react";
import { skills } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { BounceIcon } from "./BounceIcon";
import { motion } from "framer-motion";

const groupMeta = [
  { title: "Languages & runtime", items: skills.core, Icon: Code2 },
  { title: "Platform engineering", items: skills.domains, Icon: Boxes },
  { title: "Delivery & AIDLC", items: skills.soft, Icon: Handshake },
];

const itemIcons = [Braces, Database, Globe2, Code2, Boxes];

export function Skills() {
  return (
    <section
      id="skills"
      className="section section-alt relative overflow-hidden"
    >
      <div className="section-orb" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical skills for engineering roles</h2>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Stack depth for .NET / nopCommerce jobs, plus AIDLC-enabled
            practices and forward-deploy habits from production client work.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-8 md:grid-cols-3">
          {groupMeta.map((g) => (
            <StaggerItem key={g.title}>
              <div className="skill-group card-fx">
                <span className="corner-spark corner-tl" aria-hidden />
                <span className="corner-spark corner-br" aria-hidden />
                <div className="flex items-center gap-3">
                  <BounceIcon className="icon-badge">
                    <g.Icon size={18} strokeWidth={1.75} />
                  </BounceIcon>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--ink)]">
                    {g.title}
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {g.items.map((item, i) => {
                    const RowIcon = itemIcons[i % itemIcons.length];
                    return (
                      <motion.li
                        key={item}
                        className="skill-row"
                        whileHover={{ x: 8 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        data-cursor="hover"
                      >
                        <RowIcon
                          size={15}
                          className="shrink-0 text-[var(--accent)]"
                          strokeWidth={1.75}
                        />
                        {item}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
