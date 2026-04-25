"use client";
import { useState } from "react";
import { handleSignup } from "@/lib/useSignup";
import Toast from "@/components/ui/Toast";

export default function CTA() {
  const [email, setEmail]         = useState("");
  const [showToast, setShowToast] = useState(false);
  const [error, setError]         = useState(false);

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
        id="waitlist"
        style={{
          padding: "120px 40px",
          textAlign: "center",
          borderTop: "1px solid #1e2a3a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute", top: 0, left: "50%",
            transform: "translateX(-50%)",
            width: "800px", height: "400px",
            background: "radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px", color: "#38bdf8",
            letterSpacing: "0.12em", textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Early access
        </div>

        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 800, letterSpacing: "-0.03em",
            color: "#e2e8f0", lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Be one of the first
          <br />
          <span style={{ color: "#38bdf8" }}>100 teams.</span>
        </h2>

        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "13px", color: "#4a5a6e",
            lineHeight: 1.7, maxWidth: "440px",
            margin: "0 auto 40px",
          }}
        >
          Founding teams get 12 months free, direct access to the roadmap,
          and onboarding support. No credit card. No sales call.
        </p>

        <div
          style={{
            display: "flex", gap: "0",
            maxWidth: "460px", margin: "0 auto",
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder="you@company.com"
            style={{
              flex: 1,
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "13px", padding: "12px 16px",
              background: "rgba(13, 17, 23, 0.8)",
              border: error ? "1px solid #ff4444" : "1px solid #243040",
              borderRight: "none",
              borderRadius: "4px 0 0 4px",
              color: "#e2e8f0", outline: "none",
            }}
          />
          <button
            onClick={submit}
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "12px", fontWeight: 600,
              padding: "12px 20px",
              background: "#38bdf8", color: "#06080c",
              border: "none", borderRadius: "0 4px 4px 0",
              cursor: "pointer", whiteSpace: "nowrap",
              letterSpacing: "0.04em",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#7dd3fc")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#38bdf8")}
          >
            Join the waitlist →
          </button>
        </div>

        <p
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px", color: "#2e3d52",
            marginTop: "14px",
          }}
        >
          // no credit card · 12 months free for founding teams · private beta Q3 2026
        </p>
      </section>
      <Toast show={showToast} />
    </>
  );
}