"use client";

import { CustomCursor } from "./CustomCursor";
import { SmoothScroll } from "./SmoothScroll";
import { PageClickFx } from "./PageClickFx";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <PageClickFx />
      {children}
    </SmoothScroll>
  );
}
