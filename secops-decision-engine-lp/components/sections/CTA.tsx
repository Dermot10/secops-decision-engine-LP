"use client";
import { useEffect, useState } from "react";
import { handleSignup } from "@/lib/useSignup";
import { STRIPE_LINK } from "@/lib/config";

export default function CTA({ toast }: any) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
      id="waitlist"
      style={{
        padding: mobile ? "80px 24px" : "120px 40px",
        textAlign: "center",
        borderTop: "1px solid #1e2a3a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background:
            "radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Badge */}
      <div
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "10px",
          color: "#38bdf8",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}
      >
        Early access program
      </div>

      {/* Headline */}
      <h2
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#e2e8f0",
          lineHeight: 1.1,
          marginBottom: "16px",
        }}
      >
        Get early access
        <br />
        <span style={{ color: "#38bdf8" }}>before everyone else.</span>
      </h2>

      {/* Copy */}
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "13px",
          color: "#4a5a6e",
          lineHeight: 1.7,
          maxWidth: "500px",
          margin: "0 auto 32px",
        }}
      >
        Demos coming soon · Sign-ups receive product updates as we ship
      </p>

      {/* Input */}
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          gap: mobile ? "8px" : "0",
          maxWidth: "460px",
          margin: "0 auto 18px",
          cursor: "default",
        }}
      >
        <input
          id="waitlist-input-cta"
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
            borderTop: error ? "1px solid #ff4444" : "1px solid #243040",
            borderBottom: error ? "1px solid #ff4444" : "1px solid #243040",
            borderLeft: error ? "1px solid #ff4444" : "1px solid #243040",
            borderRight: mobile
              ? error
                ? "1px solid #ff4444"
                : "1px solid #243040"
              : "none",
            borderRadius: mobile ? "4px" : "4px 0 0 4px",
            color: "#e2e8f0",
            outline: "none",
            caretColor: "#38bdf8",
            width: "100%",
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
            letterSpacing: "0.04em",
          }}
        >
          Join free →
        </button>
      </div>

      {/* SECONDARY CTA (paid path) */}
      <a
        href={STRIPE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "12px",
          fontWeight: 600,
          padding: "10px 14px",
          color: "#38bdf8",
          border: "1px solid rgba(56,189,248,0.3)",
          borderRadius: "4px",
          textDecoration: "none",
          letterSpacing: "0.04em",
          marginBottom: "10px",
        }}
      >
        Become founding team (£49) →
      </a>

      {/* MICROCOPY */}
      <p
        style={{
          fontFamily: "'IBM Plex Mono', monospace",
          fontSize: "11px",
          color: "#2e3d52",
          marginTop: "12px",
          lineHeight: 1.6,
        }}
      >
        Free beta access · or £49 founding rate (locked forever) · limited to 100 teams
      </p>
    </section>
  );
}