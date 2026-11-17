"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { profile, recommendations } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "./Reveal";

export function Recommendations() {
  if (recommendations.length === 0) return null;

  return (
    <section id="recommendations" className="section">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="section-label">Recommendations</p>
          <h2 className="section-title max-w-2xl">
            What clients say about working with me
          </h2>
        </Reveal>

        <Stagger className="rec-grid mt-10">
          {recommendations.map((r) => (
            <StaggerItem key={r.name}>
              <figure className="rec-card">
                <span className="rec-quote-mark" aria-hidden>
                  &ldquo;
                </span>
                <blockquote className="rec-quote">{r.quote}</blockquote>
                <figcaption className="rec-person">
                  <Image
                    src={r.photo}
                    alt={r.name}
                    width={56}
                    height={56}
                    className="rec-photo"
                  />
                  <div>
                    <div className="rec-name">{r.name}</div>
                    <div className="rec-role">{r.role}</div>
                    <div className="rec-meta">
                      {r.relationship} · {r.date}
                    </div>
                  </div>
                  <a
                    href={`${profile.linkedin}/details/recommendations/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rec-source"
                    data-cursor="hover"
                  >
                    View on LinkedIn
                    <ExternalLink size={13} strokeWidth={2} aria-hidden />
                  </a>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
