"use client";

import { useState } from "react";

export default function ResearchBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: "#0a0a0a",
        borderTop: "1px solid #262626",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <p
        style={{
          fontSize: "13px",
          color: "#a3a3a3",
          lineHeight: 1.5,
          maxWidth: "700px",
          textAlign: "center",
          margin: 0,
        }}
      >
        This website is part of a research study at Children's Hospital at Montefiore. Your visit is tracked anonymously by QR code only. No personal information is collected. Anonymous data may be used for research.
      </p>
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        style={{
          flexShrink: 0,
          background: "transparent",
          border: "none",
          color: "#525252",
          cursor: "pointer",
          padding: "4px",
          lineHeight: 1,
          fontSize: "18px",
        }}
      >
        ×
      </button>
    </div>
  );
}
