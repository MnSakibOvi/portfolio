"use client";

import { CheckCircle2, Store, Package, Trophy, Users } from "lucide-react";
import { highlights, summary } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { BounceIcon } from "./BounceIcon";

const statIcons = [Store, Package, Trophy, Users];

export function About() {
  return (
    <section id="about" className="section relative">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title max-w-3xl">
            Technical engineer for live ecommerce platforms.
          </h2>
          <p className="mt-3 max-w-2xl text-[var(--ink-muted)]">
            Ecommerce domain depth plus systems skills: .NET plugins, SQL,
            integrations, and AIDLC-enabled delivery with forward-deploy
            ownership.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-[var(--ink-soft)] md:text-xl">
              {summary.lead}
            </p>
            <ul className="mt-8 space-y-3">
              {summary.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-[var(--ink-muted)]">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[var(--accent)]"
                    size={18}
                    strokeWidth={1.75}
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.2} direction="right">
            <div className="stack-panel">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {summary.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {highlights.map((h, i) => {
            const Icon = statIcons[i] ?? Store;
            return (
              <StaggerItem key={h.label}>
                <div className="stat-cell card-fx">
                  <span className="corner-spark corner-tl" aria-hidden />
                  <span className="corner-spark corner-br" aria-hidden />
                  <BounceIcon className="mb-3 inline-flex text-[var(--accent)]">
                    <Icon size={22} strokeWidth={1.6} />
                  </BounceIcon>
                  <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[var(--ink)]">
                    {h.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-[var(--ink-muted)]">
                    {h.label}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
