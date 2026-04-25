"use client";
export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 40px",
        borderTop: "1px solid #1e2a3a",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "6px", height: "6px", borderRadius: "50%",
            background: "#38bdf8", opacity: 0.5,
          }}
        />
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px", color: "#2e3d52",
            letterSpacing: "0.06em",
          }}
        >
          OBSIDIAN BLUE
        </span>
      </div>
      <span
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px", color: "#2e3d52",
        }}
      >
        © 2026 · Built in public
      </span>
    </footer>
  );
}