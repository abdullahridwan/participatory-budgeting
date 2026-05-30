"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

function PostHogInit() {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

    if (key && typeof window !== "undefined") {
      posthog.init(key, {
        api_host: host,
        capture_pageview: false, // We capture manually below
        capture_pageleave: true,
        loaded: (ph) => {
          if (process.env.NODE_ENV === "development") {
            ph.debug();
          }
        },
      });

      // Register ?source= param as a session property on all events
      const source = new URLSearchParams(window.location.search).get("source");
      if (source) {
        posthog.register({ source });
      }

      // Capture initial pageview
      posthog.capture("$pageview");
    }
  }, []);

  return null;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
  const host =
    process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com";

  return (
    <PostHogProvider
      apiKey={key}
      options={{
        api_host: host,
        capture_pageview: false,
      }}
    >
      <PostHogInit />
      {children}
    </PostHogProvider>
  );
}
