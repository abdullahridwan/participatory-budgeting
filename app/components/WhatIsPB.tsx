"use client";

import { useRef } from "react";
import { usePostHogTrack, useScrollReveal } from "@/lib/posthog";

export default function WhatIsPB() {
  const sectionRef = useRef<HTMLElement>(null);
  usePostHogTrack(sectionRef, "what_is_pb");
  useScrollReveal(sectionRef);

  return (
    <section id="what-is-pb" ref={sectionRef} className="py-16 md:py-[120px] px-5 md:px-6 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        <div>
          <p className="reveal" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0094FF", marginBottom: "20px" }}>What is PB</p>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: "Satoshi, system-ui, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: "24px" }}>
            Democracy beyond<br />
            <span className="italic-accent" style={{ color: "#525252" }}>the ballot box.</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: "16px", lineHeight: 1.75, color: "#525252", marginBottom: "20px" }}>
            Participatory budgeting (PB) is a democratic process that gives community members direct control over a portion of a public budget. Instead of elected officials deciding alone, residents propose, deliberate on, and vote for the projects they want funded.
          </p>
          <p className="reveal reveal-delay-3" style={{ fontSize: "16px", lineHeight: 1.75, color: "#525252" }}>
            New York City pioneered PB in the United States starting in 2011. Since then, it has spread to school districts, housing authorities, and city councils across the country, with the Bronx being one of the most active boroughs.
          </p>
        </div>

        <div className="reveal reveal-delay-2 flex flex-col gap-3">
          {[
            { label: "Founded", value: "NYC adopted PB in 2011, one of the first US cities to do so." },
            { label: "Who decides", value: "Any resident 11 or older can vote, regardless of citizenship or immigration status." },
            { label: "What gets funded", value: "Parks, school supplies, street safety, senior centers, and more." },
            { label: "Scale", value: "Over $300 million allocated to community-chosen projects in NYC since launch." },
          ].map((item) => (
            <div key={item.label} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "16px", padding: "20px 24px" }}>
              <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#a3a3a3", marginBottom: "6px" }}>{item.label}</div>
              <div style={{ fontSize: "15px", fontWeight: 500, color: "#0a0a0a", lineHeight: 1.5 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
