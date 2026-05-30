"use client";

import { useRef } from "react";
import { usePostHogTrack, useScrollReveal } from "@/lib/posthog";

const steps = [
  { n: "01", title: "Ideas", body: "Community members submit ideas for projects they want funded, from fixing broken sidewalks to adding after-school programs." },
  { n: "02", title: "Proposals", body: "Volunteer budget delegates work with city agencies to develop feasible, costed proposals from the submitted ideas." },
  { n: "03", title: "Vote", body: "Residents 11 and older vote on the proposals they want funded. Voting is open to all, regardless of citizenship status." },
  { n: "04", title: "Implementation", body: "Winning projects receive funding and are implemented by the relevant city agency. Residents track progress publicly." },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  usePostHogTrack(sectionRef, "how_it_works");
  useScrollReveal(sectionRef);

  return (
    <section id="how-it-works" ref={sectionRef} className="py-16 md:py-[120px] px-5 md:px-6 bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[1100px] mx-auto">
        <p className="reveal" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0094FF", marginBottom: "20px" }}>How it Works</p>
        <h2 className="reveal reveal-delay-1" style={{ fontFamily: "Satoshi, system-ui, sans-serif", fontWeight: 900, fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0a0a0a", marginBottom: "64px", maxWidth: "540px" }}>
          Four steps.<br />
          <span className="italic-accent" style={{ color: "#525252" }}>Real results.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {steps.map((step, i) => (
            <div
              key={step.n}
              className={`reveal reveal-delay-${i + 1} flex flex-col gap-4`}
              style={{ background: "#fff", border: "1px solid #e5e5e5", borderRadius: "20px", padding: "28px 24px" }}
            >
              <span style={{ fontFamily: "Satoshi, system-ui, sans-serif", fontWeight: 900, fontSize: "36px", letterSpacing: "-0.04em", color: "#e5e5e5" }}>{step.n}</span>
              <h3 style={{ fontFamily: "Satoshi, system-ui, sans-serif", fontWeight: 700, fontSize: "18px", letterSpacing: "-0.02em", color: "#0a0a0a" }}>{step.title}</h3>
              <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#737373" }}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
