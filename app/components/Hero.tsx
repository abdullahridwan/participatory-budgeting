"use client";

import { useEffect, useRef } from "react";
import { usePostHogTrack } from "@/lib/posthog";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  usePostHogTrack(sectionRef, "hero");
  const els = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    els.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(18px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 120 + i * 120);
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Full-bleed gradient PNG */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          pointerEvents: "none",
        }}
      />

      {/* Center content — takes remaining space between nav and stats */}
      <div style={{
        position: "relative",
        zIndex: 1,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "64px 24px 0",  /* 64px top = nav height */
      }}>
        <h1
          ref={el => { els.current[0] = el; }}
          style={{
            fontFamily: "Satoshi, system-ui, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(52px, 8vw, 96px)",
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "#0a0a0a",
            marginBottom: "28px",
          }}
        >
          Your money.<br />
          <span style={{
            fontFamily: "Editors Note, Georgia, serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#ffffff",
            letterSpacing: "-0.025em",
          }}>
            your say.
          </span>
          <br />
          Your Bronx.
        </h1>

        <p
          ref={el => { els.current[1] = el; }}
          style={{
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: 1.7,
            color: "#525252",
            maxWidth: "420px",
            marginBottom: "36px",
          }}
        >
          Participatory budgeting lets Bronx residents directly decide how public
          funds are spent in their neighborhoods.
        </p>

        <div
          ref={el => { els.current[2] = el; }}
          style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}
        >
          <button
            onClick={() => document.querySelector("#get-involved")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600, letterSpacing: "-0.01em", color: "#fff", background: "#0a0a0a", padding: "12px 24px", borderRadius: "106px", border: "none", cursor: "pointer", transition: "opacity 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            How to Vote
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
          <button
            onClick={() => document.querySelector("#what-is-pb")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 500, color: "#525252", background: "rgba(255,255,255,0.55)", padding: "12px 22px", borderRadius: "106px", border: "1px solid rgba(0,0,0,0.1)", cursor: "pointer", backdropFilter: "blur(8px)", transition: "color 0.2s, border-color 0.2s" }}
            onMouseEnter={e => { const t = e.currentTarget as HTMLElement; t.style.color = "#0a0a0a"; t.style.borderColor = "rgba(0,0,0,0.25)"; }}
            onMouseLeave={e => { const t = e.currentTarget as HTMLElement; t.style.color = "#525252"; t.style.borderColor = "rgba(0,0,0,0.1)"; }}
          >
            Learn More
          </button>
        </div>
      </div>

    </section>
  );
}
