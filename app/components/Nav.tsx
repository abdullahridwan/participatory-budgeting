"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "What is PB", href: "#what-is-pb" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Why it Matters", href: "#why-it-matters" },
  { label: "Get Involved", href: "#get-involved" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-5 md:px-10 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.07)" : "none",
      }}
    >
      <a
        href="#"
        onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        style={{ fontSize: "15px", fontWeight: 700, color: "#0a0a0a", letterSpacing: "-0.02em" }}
      >
        Bronx PB
      </a>

      <div className="flex items-center">
        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={e => scrollTo(e, link.href)}
              style={{ fontSize: "14px", fontWeight: 500, color: "#525252", padding: "8px 16px", borderRadius: "100px", transition: "color 0.15s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "#0a0a0a"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "#525252"; }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#get-involved"
          onClick={e => scrollTo(e, "#get-involved")}
          className="ml-2"
          style={{ fontSize: "14px", fontWeight: 600, color: "#0a0a0a", background: "#FFDEDA", padding: "9px 20px", borderRadius: "100px", letterSpacing: "-0.01em", transition: "opacity 0.2s" }}
          onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = "0.75"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
        >
          Get Involved
        </a>
      </div>
    </nav>
  );
}
