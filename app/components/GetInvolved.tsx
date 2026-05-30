"use client";

import { useRef } from "react";
import { usePostHogTrack, useScrollReveal } from "@/lib/posthog";

export default function GetInvolved() {
  const sectionRef = useRef<HTMLElement>(null);
  usePostHogTrack(sectionRef, "get_involved");
  useScrollReveal(sectionRef);

  return (
    <section id="get-involved" ref={sectionRef} style={{ padding: "120px 24px", background: "#fff", borderTop: "1px solid #e5e5e5" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start", marginBottom: "80px" }}>
          <div>
            <p className="reveal" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0094FF", marginBottom: "20px" }}>Get Involved</p>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: "Satoshi, system-ui, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: "24px" }}>
              Your vote is<br />
              <span className="italic-accent" style={{ color: "#525252" }}>more powerful than you think.</span>
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: "16px", lineHeight: 1.75, color: "#525252" }}>
              Voting in participatory budgeting is open to anyone 11 or older who lives, works, or goes to school in the district, regardless of citizenship or immigration status. No registration required.
            </p>
          </div>

          <div className="reveal reveal-delay-2" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { title: "When to vote", body: "Voting typically happens each spring, with proposal development in the fall and winter." },
              { title: "Where to vote", body: "In-person voting sites across the Bronx, plus online voting through the NYC Council website." },
              { title: "What you need", body: "Nothing. No ID, no registration, no citizenship required. Just show up." },
            ].map((item) => (
              <div key={item.title} style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "16px", padding: "20px 24px" }}>
                <div style={{ fontWeight: 700, fontSize: "15px", color: "#0a0a0a", marginBottom: "4px" }}>{item.title}</div>
                <div style={{ fontSize: "14px", color: "#737373", lineHeight: 1.6 }}>{item.body}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal" style={{ background: "#0a0a0a", borderRadius: "24px", padding: "56px 48px", textAlign: "center" }}>
          <h3 style={{ fontFamily: "Satoshi, system-ui, sans-serif", fontWeight: 900, fontSize: "clamp(28px, 3.5vw, 44px)", letterSpacing: "-0.03em", color: "#fff", marginBottom: "16px" }}>
            Ready to shape<br />
            <span className="italic-accent" style={{ color: "#a3a3a3" }}>your neighborhood?</span>
          </h3>
          <p style={{ fontSize: "16px", color: "#737373", marginBottom: "32px" }}>Find your district and learn when voting opens near you.</p>
          <a
            href="https://council.nyc.gov/pb/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "14px", fontWeight: 600, color: "#0a0a0a", background: "#fff", padding: "13px 28px", borderRadius: "106px", transition: "opacity 0.2s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.85"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
          >
            NYC Council PB Page
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}
