"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 40px",
        height: "60px",
        background: scrolled ? "rgba(6, 8, 12, 0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "8px", height: "8px", borderRadius: "50%",
            background: "#38bdf8",
            boxShadow: "0 0 12px #38bdf8",
            animation: "pulse 2s ease-in-out infinite",
          }}
        />
        <span
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "15px", fontWeight: 800,
            color: "#e2e8f0", letterSpacing: "-0.02em",
          }}
        >
          OBSIDIAN BLUE
        </span>
      </div>

      {/* Links */}
      <ul
        style={{
          display: "flex", gap: "32px", listStyle: "none",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px", letterSpacing: "0.06em",
          margin: 0, padding: 0,
        }}
      >
        {[
          { href: "#problem",      label: "Problem" },
          { href: "#how-it-works", label: "How it works" },
          { href: "#pipeline",     label: "Pipeline" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{ color: "#4a5a6e", textDecoration: "none", transition: "color 0.15s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#e2e8f0"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#4a5a6e"; }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => document.getElementById("waitlist-input")?.focus()}
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px", fontWeight: 600,
          padding: "8px 18px", borderRadius: "4px",
          background: "transparent",
          border: "1px solid rgba(56, 189, 248, 0.4)",
          color: "#38bdf8", cursor: "pointer",
          letterSpacing: "0.04em",
          transition: "all 0.15s ease",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = "rgba(56, 189, 248, 0.08)";
          (e.currentTarget as HTMLElement).style.borderColor = "#38bdf8";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = "transparent";
          (e.currentTarget as HTMLElement).style.borderColor = "rgba(56, 189, 248, 0.4)";
        }}
      >
        Early access →
      </button>
    </nav>
  );
}