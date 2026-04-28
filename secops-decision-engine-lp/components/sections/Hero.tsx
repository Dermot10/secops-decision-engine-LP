"use client";
import { useEffect, useState } from "react";
import { handleSignup } from "@/lib/useSignup";
import { STRIPE_LINK } from "@/lib/config";

export default function Hero({ toast }: any) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("success") === "true") {
      toast.showPaidToast();
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, [toast]);

  const submit = async () => {
    if (!email) return;
    const res = await handleSignup(email);
    if (res.error) {
      setError(true);
      setTimeout(() => setError(false), 2000);
      return;
    }
    setEmail("");
    toast.showSignupToast();
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: mobile ? "100px 24px 60px" : "120px 40px 80px",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(56,189,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          color: "#38bdf8",
          padding: "6px 14px",
          borderRadius: "3px",
          border: "1px solid rgba(56,189,248,0.2)",
          background: "rgba(56,189,248,0.05)",
          marginBottom: "32px",
          letterSpacing: "0.06em",
        }}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
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
          fontSize: "clamp(36px, 6vw, 52px)",
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          color: "#e2e8f0",
          maxWidth: "900px",
          marginBottom: "24px",
        }}
      >
        <span>Security your </span>
        <span>engineers</span>
        <span style={{ display: "block", color: "#38bdf8" }}>
          actually own.
        </span>
      </h1>

      {/* Sub */}
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "12px",
          lineHeight: 1.7,
          color: "#4a5a6e",
          maxWidth: "540px",
          marginBottom: "16px",
        }}
      >
        Intelligent Detection-as-code, AI-assisted triage, and Threat Intelligence.
      </p>

      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "13px",
          color: "#4a5a6e",
          lineHeight: 1.7,
          maxWidth: "440px",
          margin: "0 auto 40px",
        }}
      >
        Free beta access for early users.<br />
        £49/month founding access includes early features + locked pricing forever.<br />
      </p>

      {/* FORM + BUTTONS */}
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          gap: mobile ? "8px" : "0",
          maxWidth: "460px",
          width: "100%",
        }}
      >
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
            border: error
              ? "1px solid #ff4444"
              : "1px solid #243040",
            borderRadius: mobile ? "4px" : "4px 0 0 4px",
            color: "#e2e8f0",
            outline: "none",
            caretColor: "#38bdf8",
          }}
        />

        {/* PRIMARY CTA */}
        <button
          onClick={submit}
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            fontWeight: 600,
            padding: "12px 20px",
            background: "#38bdf8",
            color: "#06080c",
            border: "none",
            borderRadius: mobile ? "4px" : "0 4px 4px 0",
            cursor: "pointer",
            whiteSpace: "nowrap",
            letterSpacing: "0.04em",
          }}
        >
          Join free →
        </button>
      </div>

      {/* SECONDARY CTA (Stripe) */}
      <div style={{ marginTop: "12px" }}>
        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px",
            fontWeight: 600,
            color: "#38bdf8",
            textDecoration: "none",
            border: "1px solid rgba(56,189,248,0.3)",
            padding: "10px 14px",
            borderRadius: "4px",
            display: "inline-block",
          }}
        >
          Become founding team (£49) →
        </a>
      </div>
    </section>
  );
}