"use client";

import posthog from "posthog-js";
import { useEffect, useRef } from "react";

/**
 * usePostHogTrack
 *
 * Fires a `section_viewed` PostHog event the first time the target element
 * scrolls into the viewport. Pass the ref you attach to your section wrapper
 * and the section name (snake_case).
 */
export function usePostHogTrack(
  ref: React.RefObject<HTMLElement>,
  sectionName: string
) {
  const tracked = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !tracked.current) {
            tracked.current = true;
            try {
              posthog.capture("section_viewed", { section: sectionName });
            } catch {
              // PostHog may not be initialised yet in dev; fail silently
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [ref, sectionName]);
}

/**
 * useScrollReveal
 *
 * Adds the `visible` class to all `.reveal` descendants of the target element
 * when they enter the viewport. Supports staggered delays via the CSS classes
 * `reveal-delay-1` through `reveal-delay-4`.
 */
export function useScrollReveal(ref: React.RefObject<HTMLElement>) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const reveals = container.querySelectorAll<HTMLElement>(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [ref]);
}
