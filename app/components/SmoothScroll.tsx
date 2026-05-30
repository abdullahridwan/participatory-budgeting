"use client";

import { useEffect } from "react";

/**
 * SmoothScroll
 *
 * Initialises Lenis for buttery smooth scrolling. The library is loaded
 * dynamically to avoid SSR issues. Wraps children in a plain fragment so the
 * DOM structure stays clean.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
    } | null = null;

    let rafId: number;

    async function initLenis() {
      try {
        const LenisModule = await import("@studio-freight/lenis");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Lenis = (LenisModule as any).default ?? (LenisModule as any).Lenis;

        lenis = new (Lenis as new (options: {
          duration: number;
          easing: (t: number) => number;
          smoothWheel: boolean;
          wheelMultiplier: number;
          touchMultiplier: number;
        }) => {
          raf: (time: number) => void;
          destroy: () => void;
        })({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        });

        function raf(time: number) {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
      } catch {
        // If Lenis fails to load, native scroll still works fine
      }
    }

    initLenis();

    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
