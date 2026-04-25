"use client";
import { useState } from "react";
import { handleSignup } from "@/lib/useSignup";
import Toast from "@/components/ui/Toast";

export default function Hero() {
  const [email, setEmail]       = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError]       = useState(false);

  const submit = () => {
    const res = handleSignup(email);
    if (res.error) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    setEmail("");
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <>
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 40px 80px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Glow */}
        <div
          style={{
            position: "absolute", top: "20%", left: "50%",
            transform: "translateX(-50%)",
            width: "600px", height: "300px",
            background: "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px", color: "#38bdf8",
            padding: "6px 14px", borderRadius: "3px",
            border: "1px solid rgba(56,189,248,0.2)",
            background: "rgba(56,189,248,0.05)",
            marginBottom: "32px",
            letterSpacing: "0.06em",
          }}
        >
          <span
            style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: "#38bdf8",
              boxShadow: "0 0 8px #38bdf8",
              animation: "pulse 2s ease-in-out infinite",
            }}
          />
          PRIVATE BETA — Q3 2026
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(36px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#e2e8f0",
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          Security your engineers
          <br />
          <span style={{ color: "#38bdf8" }}>actually own.</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "15px", lineHeight: 1.7,
            color: "#4a5a6e",
            maxWidth: "540px",
            marginBottom: "16px",
          }}
        >
          Detection-as-code, AI-assisted triage, and threat intelligence
          for developer-led teams who can't justify a security hire —
          and shouldn't have to.
        </p>

        {/* Problem hook */}
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            color: "#2e3d52",
            marginBottom: "40px",
            letterSpacing: "0.02em",
          }}
        >
          // your logs are evidence. right now, nobody's reading them.
        </p>

        {/* Form */}
        <div style={{ display: "flex", gap: "0", maxWidth: "460px", width: "100%" }}>
          <input
            id="waitlist-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="you@company.com"
            style={{
              flex: 1,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px",
              padding: "12px 16px",
              background: "rgba(13, 17, 23, 0.8)",
              border: error ? "1px solid #ff4444" : "1px solid #243040",
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
              color: "#e2e8f0",
              outline: "none",
              transition: "border-color 0.15s ease",
            }}
            onFocus={(e) => {
              if (!error)(e.target as HTMLElement).style.borderColor = "#38bdf8";
            }}
            onBlur={(e) => {
              if (!error)(e.target as HTMLElement).style.borderColor = "#243040";
            }}
          />
          <button
            onClick={submit}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px", fontWeight: 600,
              padding: "12px 20px",
              background: "#38bdf8",
              color: "#06080c",
              border: "none",
              borderRadius: "0 4px 4px 0",
              cursor: "pointer",
              whiteSpace: "nowrap",
              letterSpacing: "0.04em",
              transition: "background 0.15s ease",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#7dd3fc")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#38bdf8")}
          >
            Get early access →
          </button>
        </div>

        {/* Note */}
        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px", color: "#2e3d52",
            marginTop: "14px", letterSpacing: "0.04em",
          }}
        >
          No credit card · First 100 teams get 12 months free
        </p>
      </section>
      <Toast show={showToast} />
    </>
  );
}