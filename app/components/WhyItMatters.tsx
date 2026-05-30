"use client";

import { useRef } from "react";
import { usePostHogTrack, useScrollReveal } from "@/lib/posthog";

export default function WhyItMatters() {
  const sectionRef = useRef<HTMLElement>(null);
  usePostHogTrack(sectionRef, "why_it_matters");
  useScrollReveal(sectionRef);

  return (
    <section id="why-it-matters" ref={sectionRef} className="py-16 md:py-[120px] px-5 md:px-6 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0094FF", marginBottom: "20px" }}>Why it Matters</p>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "Satoshi, system-ui, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: "16px", maxWidth: "600px" }}>
          The Bronx deserves<br />
          <span className="italic-accent" style={{ color: "#525252" }}>a real seat at the table.</span>
        </h2>
        <p className="reveal reveal-delay-2" style={{ fontSize: "16px", lineHeight: 1.75, color: "#525252", maxWidth: "560px", marginBottom: "64px" }}>
          Low-income neighborhoods have historically had less influence over public spending decisions that directly affect their health and quality of life. PB changes that.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { stat: "44%", label: "of Bronx residents live below 200% of the federal poverty line" },
            { stat: "2x", label: "higher hospitalization rates in low-income Bronx neighborhoods vs. wealthier ones" },
            { stat: "3x", label: "increase in civic engagement reported in communities that participate in PB" },
          ].map((item, i) => (
            <div key={item.label} className={`reveal reveal-delay-${i + 1}`} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "20px", padding: "36px 28px" }}>
              <div style={{ fontFamily: "Satoshi, system-ui, sans-serif", fontWeight: 900, fontSize: "clamp(40px, 5vw, 60px)", letterSpacing: "-0.04em", color: "#0a0a0a", marginBottom: "12px" }}>{item.stat}</div>
              <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#737373" }}>{item.label}</p>
            </div>
          ))}
        </div>

        <blockquote className="reveal" style={{ borderLeft: "2px solid #FF90EA", paddingLeft: "28px", margin: "0" }}>
          <p className="italic-accent" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.4, color: "#0a0a0a", marginBottom: "12px" }}>
            "When communities control their budgets, they invest in what actually keeps them healthy."
          </p>
          <cite style={{ fontSize: "13px", fontWeight: 500, color: "#a3a3a3", fontStyle: "normal" }}>Participatory Budgeting Project, 2023</cite>
        </blockquote>
      </div>
    </section>
  );
}
