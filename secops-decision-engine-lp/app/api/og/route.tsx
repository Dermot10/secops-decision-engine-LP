import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#06080c",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          border: "1px solid #1e2a3a",
        }}
      >
        {/* Grid lines */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.3, backgroundImage: "linear-gradient(#1e2a3a 1px, transparent 1px), linear-gradient(90deg, #1e2a3a 1px, transparent 1px)", backgroundSize: "60px 60px", display: "flex" }} />

        {/* Dot */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "32px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#38bdf8", boxShadow: "0 0 20px #38bdf8", display: "flex" }} />
          <span style={{ fontSize: "14px", color: "#38bdf8", letterSpacing: "0.1em" }}>OBSIDIAN BLUE</span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: "56px", fontWeight: 800, color: "#e2e8f0", lineHeight: 1.1, marginBottom: "24px", display: "flex", flexDirection: "column" }}>
          <span>Security your engineers</span>
          <span style={{ color: "#38bdf8" }}>actually own.</span>
        </div>

        {/* Sub */}
        <div style={{ fontSize: "20px", color: "#4a5a6e", maxWidth: "700px", lineHeight: 1.5, display: "flex" }}>
          Detection-as-code, AI triage, and threat intelligence for developer-led teams.
        </div>

        {/* Badge */}
        <div style={{ position: "absolute", bottom: "80px", right: "80px", fontSize: "13px", color: "#2e3d52", letterSpacing: "0.06em", display: "flex" }}>
          Private beta · Q3 2026
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}