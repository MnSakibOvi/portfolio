"use client";

import { useState } from "react";
import { skillGroups, type Glyph, type SkillKey } from "@/data/skillKeys";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

const DEV = (n: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/${n}.svg`;
const SI = (n: string) =>
  `https://cdn.jsdelivr.net/npm/simple-icons@13.21.0/icons/${n}.svg`;

/** Line icons for ideas that have no brand logo */
const GLYPHS: Record<Glyph, React.ReactNode> = {
  plugin: <path d="M9 3v4M15 3v4M6 7h12v5a6 6 0 0 1-12 0zM12 18v3" />,
  card: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7" />
      <circle cx="7" cy="17" r="1.6" />
      <circle cx="17" cy="17" r="1.6" />
    </>
  ),
  stores: <path d="M4 10h16l-1.5-5h-13zM5 10v9h14v-9M10 19v-5h4v5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="M20 20l-4.5-4.5" />
    </>
  ),
  api: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" />,
  server: (
    <>
      <rect x="4" y="4" width="16" height="7" rx="1.5" />
      <rect x="4" y="13" width="16" height="7" rx="1.5" />
      <path d="M8 7.5h.01M8 16.5h.01" />
    </>
  ),
  sync: (
    <path d="M20 11a8 8 0 0 0-14-4.5L4 9M4 13a8 8 0 0 0 14 4.5l2-2.5M4 4v5h5M20 20v-5h-5" />
  ),
};

function Mono({ text }: { text: string }) {
  return <span className="keycap-mono">{text}</span>;
}

/** One-colour logo: the SVG is used as a mask and filled with the site accent */
function MaskedLogo({ url, label }: { url: string; label: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <Mono text={label.slice(0, 2)} />;
  const mask = `url(${url}) center/contain no-repeat`;
  return (
    <>
      <span
        className="keycap-glyph keycap-logo"
        style={{ WebkitMask: mask, mask }}
        aria-hidden
      />
      {/* hidden probe: if the logo can't load, show a text badge instead of an empty tile */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt="" hidden onError={() => setFailed(true)} />
    </>
  );
}

function KeyIcon({ k }: { k: SkillKey }) {
  if ("si" in k) return <MaskedLogo url={SI(k.si)} label={k.label} />;
  if ("dev" in k) return <MaskedLogo url={DEV(k.dev)} label={k.label} />;
  if ("mono" in k) return <Mono text={k.mono} />;
  return (
    <svg
      className="keycap-glyph"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {GLYPHS[k.glyph]}
    </svg>
  );
}

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
          <h2 className="section-title">
            The stack behind{" "}
            <span className="keycap-title-accent">
              the stores
              <svg
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d="M2 8 C 60 2, 140 12, 200 6 S 280 4, 298 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity=".7"
                />
              </svg>
            </span>
          </h2>
        </Reveal>

        <Stagger className="keycap-groups mt-14">
          {skillGroups.map((g) => (
            <StaggerItem key={g.title}>
              <div className="keycap-group-head">
                <h3>{g.title}</h3>
                <span>{g.note}</span>
              </div>
              <ul className="keycap-keys">
                {g.keys.map((k) => (
                  <li key={k.label} className="keycap" data-cursor="hover">
                    <KeyIcon k={k} />
                    <span>{k.label}</span>
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
