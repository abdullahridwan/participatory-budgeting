export default function Footer() {
  return (
    <footer style={{ padding: "32px 24px", borderTop: "1px solid #e5e5e5", background: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
        <span style={{ fontWeight: 700, fontSize: "14px", letterSpacing: "-0.02em", color: "#0a0a0a" }}>Bronx PB</span>
        <span style={{ fontSize: "13px", color: "#a3a3a3" }}>© 2026 · Participatory Budgeting in the Bronx</span>
      </div>
    </footer>
  );
}
