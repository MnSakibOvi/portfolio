"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";

/** Free WebGL globe (cobe) — continuously rotating. */
export function SoftGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let phi = 0;
    let width = 0;
    let globe: ReturnType<typeof createGlobe> | undefined;

    const onResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.offsetWidth || canvas.parentElement.offsetWidth;
      if (width < 40) return;
      canvas.width = width * 2;
      canvas.height = width * 2;
    };

    onResize();

    if (width < 40) {
      const ro = new ResizeObserver(() => {
        onResize();
        if (width >= 40 && !globe) start();
      });
      ro.observe(canvas.parentElement!);
      return () => ro.disconnect();
    }

    function start() {
      if (!canvas || globe) return;
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: width * 2,
        height: width * 2,
        phi: 0,
        theta: 0.28,
        dark: 0,
        diffuse: 1.15,
        mapSamples: 14000,
        mapBrightness: 4.2,
        baseColor: [0.9, 0.91, 0.89],
        markerColor: [0.05, 0.43, 0.42],
        glowColor: [0.82, 0.88, 0.86],
        markers: [
          { location: [23.81, 90.41], size: 0.07 },
          { location: [-33.87, 151.21], size: 0.055 },
          { location: [44.79, 20.45], size: 0.055 },
          { location: [35.9, 14.51], size: 0.045 },
        ],
        onRender: (state) => {
          state.phi = phi;
          phi += 0.0045;
          state.width = width * 2;
          state.height = width * 2;
        },
      });
    }

    start();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      globe?.destroy();
    };
  }, []);

  return (
    <div className="soft-globe" aria-hidden>
      <canvas ref={canvasRef} className="soft-globe-canvas" />
    </div>
  );
}
