"use client";
import { pipelineSteps } from "@/data/pipelineSteps";
import { useEffect, useState } from "react";

export default function Pipeline() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="pipeline"
      style={{ padding: mobile ? "60px 20px" : "100px 40px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={{ marginBottom: "64px" }}>
        <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", color: "#38bdf8", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px" }}>
          The pipeline
        </div>
        <h2 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#e2e8f0", lineHeight: 1.1 }}>
          From log line
          <br />
          <span style={{ color: "#38bdf8" }}>to decision.</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {pipelineSteps.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: "grid",
              gridTemplateColumns: mobile ? "40px 1fr" : "80px 1fr 1fr",
              gap: mobile ? "16px" : "32px",
              padding: "32px 0",
              borderBottom: i < pipelineSteps.length - 1 ? "1px solid #1e2a3a" : "none",
              alignItems: "start",
            }}
          >
            <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#2e3d52", letterSpacing: "0.1em", paddingTop: "4px" }}>
              {step.num}
            </div>

            {mobile ? (
              <div>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "16px", fontWeight: 700, color: "#e2e8f0", letterSpacing: "-0.01em", marginBottom: "6px" }}>
                  {step.title}
                </div>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#38bdf8", letterSpacing: "0.04em", marginBottom: "10px" }}>
                  → {step.outcome}
                </div>
                <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#4a5a6e", lineHeight: 1.7, marginBottom: "10px" }}>
                  {step.description}
                </p>
                <span style={{
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px",
                  padding: "2px 8px", borderRadius: "3px",
                  ...(step.status === "live"
                    ? { color: "#22c55e", background: "#0d2e1a", border: "1px solid #22c55e" }
                    : { color: "#4a5a6e", background: "#0d1117", border: "1px solid #1e2a3a" }),
                }}>
                  {step.status}
                </span>
              </div>
            ) : (
              <>
                <div>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "18px", fontWeight: 700, color: "#e2e8f0", letterSpacing: "-0.01em", marginBottom: "6px" }}>
                    {step.title}
                  </div>
                  <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#38bdf8", letterSpacing: "0.04em" }}>
                    → {step.outcome}
                  </div>
                </div>
                <div>
                  <p style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px", color: "#4a5a6e", lineHeight: 1.7, marginBottom: "10px" }}>
                    {step.description}
                  </p>
                  <span style={{
                    fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px",
                    padding: "2px 8px", borderRadius: "3px",
                    ...(step.status === "live"
                      ? { color: "#22c55e", background: "#0d2e1a", border: "1px solid #22c55e" }
                      : { color: "#4a5a6e", background: "#0d1117", border: "1px solid #1e2a3a" }),
                  }}>
                    {step.status}
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}