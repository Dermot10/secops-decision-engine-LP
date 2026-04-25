"use client";
import { pipelineSteps } from "@/data/pipelineSteps";

export default function Pipeline() {
  return (
    <section
      id="pipeline"
      style={{ padding: "100px 40px", maxWidth: "1100px", margin: "0 auto" }}
    >
      <div style={{ marginBottom: "64px" }}>
        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px", color: "#38bdf8",
            letterSpacing: "0.12em", textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          The pipeline
        </div>
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800, letterSpacing: "-0.02em",
            color: "#e2e8f0", lineHeight: 1.1,
          }}
        >
          From log line
          <br />
          <span style={{ color: "#38bdf8" }}>to decision.</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {pipelineSteps.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr",
              gap: "32px",
              padding: "32px 0",
              borderBottom: i < pipelineSteps.length - 1 ? "1px solid #1e2a3a" : "none",
              alignItems: "start",
            }}
          >
            {/* Number */}
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "11px", color: "#2e3d52",
                letterSpacing: "0.1em", paddingTop: "4px",
              }}
            >
              {step.num}
            </div>

            {/* Title + outcome */}
            <div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "18px", fontWeight: 700,
                  color: "#e2e8f0", letterSpacing: "-0.01em",
                  marginBottom: "6px",
                }}
              >
                {step.title}
              </div>
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "11px", color: "#38bdf8",
                  letterSpacing: "0.04em",
                }}
              >
                → {step.outcome}
              </div>
            </div>

            {/* Description + status */}
            <div>
              <p
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "12px", color: "#4a5a6e",
                  lineHeight: 1.7, marginBottom: "10px",
                }}
              >
                {step.description}
              </p>
              <span
                style={{
                  fontFamily: "'IBM Plex Mono', monospace",
                  fontSize: "10px",
                  padding: "2px 8px", borderRadius: "3px",
                  ...(step.status === "live"
                    ? { color: "#22c55e", background: "#0d2e1a", border: "1px solid #22c55e" }
                    : step.status === "beta"
                    ? { color: "#eab308", background: "#332d08", border: "1px solid #eab308" }
                    : { color: "#4a5a6e", background: "#0d1117", border: "1px solid #1e2a3a" }),
                }}
              >
                {step.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}