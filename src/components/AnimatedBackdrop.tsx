"use client";

import { useEffect, useRef } from "react";
import {
  ShoppingCart,
  ShoppingBag,
  Package,
  Tag,
  CreditCard,
  Truck,
  Store,
  Wallet,
  Percent,
  Boxes,
  Code2,
  Database,
  Cloud,
  Server,
  Globe2,
  Layers,
  Braces,
  Search,
  ShieldCheck,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Body = {
  id: number;
  Icon: LucideIcon;
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  size: number;
  push: number;
};

const ICON_DEFS: { Icon: LucideIcon; size: number }[] = [
  { Icon: ShoppingCart, size: 22 },
  { Icon: ShoppingBag, size: 20 },
  { Icon: Package, size: 20 },
  { Icon: Tag, size: 18 },
  { Icon: CreditCard, size: 20 },
  { Icon: Truck, size: 20 },
  { Icon: Store, size: 21 },
  { Icon: Wallet, size: 18 },
  { Icon: Percent, size: 17 },
  { Icon: Boxes, size: 19 },
  { Icon: Code2, size: 19 },
  { Icon: Braces, size: 17 },
  { Icon: Database, size: 19 },
  { Icon: Server, size: 18 },
  { Icon: Cloud, size: 20 },
  { Icon: Layers, size: 18 },
  { Icon: Globe2, size: 19 },
  { Icon: Search, size: 17 },
  { Icon: ShieldCheck, size: 18 },
  { Icon: BarChart3, size: 18 },
];

function seedBodies(w: number, h: number): Body[] {
  return ICON_DEFS.map((def, i) => {
    const r = def.size * 0.85;
    const angle = (i / ICON_DEFS.length) * Math.PI * 2;
    const speed = 0.45 + (i % 5) * 0.12;
    return {
      id: i,
      Icon: def.Icon,
      x: r + 40 + Math.random() * Math.max(40, w - r * 2 - 80),
      y: r + 40 + Math.random() * Math.max(40, h - r * 2 - 80),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r,
      size: def.size,
      push: 0,
    };
  });
}

/** Returns hit point if a real bounce happened. */
function resolveCollision(
  a: Body,
  b: Body
): { x: number; y: number } | null {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 0.001;
  const minDist = a.r + b.r;

  if (dist >= minDist) return null;

  const nx = dx / dist;
  const ny = dy / dist;
  const overlap = minDist - dist;
  const push = overlap / 2 + 0.5;
  a.x -= nx * push;
  a.y -= ny * push;
  b.x += nx * push;
  b.y += ny * push;

  const dvx = a.vx - b.vx;
  const dvy = a.vy - b.vy;
  const rel = dvx * nx + dvy * ny;
  if (rel > 0) return null;

  const impulse = rel * 1.45;
  a.vx -= impulse * nx;
  a.vy -= impulse * ny;
  b.vx += impulse * nx;
  b.vy += impulse * ny;

  const cap = 2.1;
  for (const body of [a, b]) {
    const s = Math.hypot(body.vx, body.vy);
    if (s > cap) {
      body.vx = (body.vx / s) * cap;
      body.vy = (body.vy / s) * cap;
    }
    body.push = 1;
  }

  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function spawnBurst(layer: HTMLElement, x: number, y: number) {
  const burst = document.createElement("span");
  burst.className = "physics-burst";
  burst.style.left = `${x}px`;
  burst.style.top = `${y}px`;
  layer.appendChild(burst);

  for (let i = 0; i < 6; i++) {
    const spark = document.createElement("span");
    spark.className = "physics-spark";
    const ang = (i / 6) * Math.PI * 2;
    spark.style.setProperty("--sx", `${Math.cos(ang) * 28}px`);
    spark.style.setProperty("--sy", `${Math.sin(ang) * 28}px`);
    burst.appendChild(spark);
  }

  window.setTimeout(() => burst.remove(), 650);
}

/** Fling two random icons toward each other so they collide. */
function forcePairCollision(bodies: Body[]) {
  if (bodies.length < 2) return;
  let i = Math.floor(Math.random() * bodies.length);
  let j = Math.floor(Math.random() * bodies.length);
  while (j === i) j = Math.floor(Math.random() * bodies.length);

  const a = bodies[i];
  const b = bodies[j];
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dist = Math.hypot(dx, dy) || 1;
  const nx = dx / dist;
  const ny = dy / dist;
  const speed = 3.2;

  a.vx = nx * speed;
  a.vy = ny * speed;
  b.vx = -nx * speed;
  b.vy = -ny * speed;
  a.push = 0.6;
  b.push = 0.6;
}

export function AnimatedBackdrop() {
  const layerRef = useRef<HTMLDivElement>(null);
  const bodiesRef = useRef<Body[]>([]);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    bodiesRef.current = seedBodies(w, h);

    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Every 7s: force two icons to collide
    const forceId = window.setInterval(() => {
      forcePairCollision(bodiesRef.current);
    }, 7000);
    // First forced hit soon after load
    const firstHit = window.setTimeout(() => {
      forcePairCollision(bodiesRef.current);
    }, 2500);

    const tick = () => {
      const bodies = bodiesRef.current;

      for (const b of bodies) {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x < b.r) {
          b.x = b.r;
          b.vx = Math.abs(b.vx) * 1.05;
          b.push = 1;
        } else if (b.x > w - b.r) {
          b.x = w - b.r;
          b.vx = -Math.abs(b.vx) * 1.05;
          b.push = 1;
        }
        if (b.y < b.r) {
          b.y = b.r;
          b.vy = Math.abs(b.vy) * 1.05;
          b.push = 1;
        } else if (b.y > h - b.r) {
          b.y = h - b.r;
          b.vy = -Math.abs(b.vy) * 1.05;
          b.push = 1;
        }

        if (b.push > 0) b.push = Math.max(0, b.push - 0.055);
      }

      for (let i = 0; i < bodies.length; i++) {
        for (let j = i + 1; j < bodies.length; j++) {
          const hit = resolveCollision(bodies[i], bodies[j]);
          if (hit) {
            spawnBurst(layer, hit.x, hit.y);
            const ea = nodeRefs.current[i];
            const eb = nodeRefs.current[j];
            ea?.classList.add("physics-icon--hit");
            eb?.classList.add("physics-icon--hit");
            window.setTimeout(() => {
              ea?.classList.remove("physics-icon--hit");
              eb?.classList.remove("physics-icon--hit");
            }, 420);
          }
        }
      }

      for (let i = 0; i < bodies.length; i++) {
        const el = nodeRefs.current[i];
        const b = bodies[i];
        if (!el) continue;
        const scale = 1 + b.push * 0.4;
        el.style.transform = `translate3d(${b.x - b.r}px, ${b.y - b.r}px, 0) scale(${scale})`;
        el.style.opacity = String(0.09 + b.push * 0.16);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.clearInterval(forceId);
      window.clearTimeout(firstHit);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="site-backdrop" aria-hidden>
      <div className="backdrop-mesh" />
      <div className="backdrop-beam backdrop-beam-a" />
      <div className="backdrop-beam backdrop-beam-b" />

      <div ref={layerRef} className="physics-layer">
        {ICON_DEFS.map((def, i) => {
          const Icon = def.Icon;
          return (
            <div
              key={i}
              className="physics-icon"
              ref={(el) => {
                nodeRefs.current[i] = el;
              }}
            >
              <Icon size={def.size} strokeWidth={1.5} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
