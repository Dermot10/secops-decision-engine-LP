"use client";
import { useEffect, useState } from "react";
import { painPoints } from "@/data/painPoints";

export default function PainPoints() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  
  return (
    <section
      id="problem"
      style={{
        padding: mobile ? "60px 24px" : "100px 40px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: mobile ? "40px" : "64px" }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px", color: "#38bdf8",
            letterSpacing: "0.12em", textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          The problem
        </div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800, letterSpacing: "-0.02em",
            color: "#e2e8f0", lineHeight: 1.1,
            maxWidth: "560px",
          }}
        >
          You know the risk.
          <br />
          <span style={{ color: "#2e3d52" }}>AI has changed the game</span>
        </h2>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: mobile ? "1fr" : "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "1px",
          background: "#1e2a3a",
          border: "1px solid #1e2a3a",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        {painPoints.map((p, i) => (
          <div
            key={p.id}
            style={{
              padding: "32px",
              background: "#080b0f",
              transition: "background 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#0d1117")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#080b0f")}
          >
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "10px", color: "#2e3d52",
                letterSpacing: "0.1em", marginBottom: "16px",
              }}
            >
              {p.id}
            </div>
            <h3
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "15px", fontWeight: 700,
                color: "#e2e8f0", lineHeight: 1.3,
                marginBottom: "10px",
                letterSpacing: "-0.01em",
              }}
            >
              {p.title}
            </h3>
            <p
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "12px", color: "#4a5a6e",
                lineHeight: 1.7,
              }}
            >
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}