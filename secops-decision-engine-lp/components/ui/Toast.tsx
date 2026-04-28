"use client";

import { STRIPE_LINK } from "@/lib/config";

interface ToastProps {
  show: boolean;
  mode: "signup" | "paid" | null;
  onClose: () => void;
}

export default function Toast({ show, mode, onClose }: ToastProps) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "32px",
        right: "32px",
        zIndex: 9999,
        maxWidth: "320px",
        width: "100%",
        background: "#0d1117",
        border: "1px solid #1e2a3a",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "0 16px 48px rgba(0,0,0,0.4)",
        transform: show ? "translateY(0)" : "translateY(120%)",
        opacity: show ? 1 : 0,
        transition: "transform 0.35s ease, opacity 0.35s ease",
        pointerEvents: show ? "auto" : "none",
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: "absolute", top: "12px", right: "12px",
          background: "transparent", border: "none",
          color: "#2e3d52", cursor: "pointer",
          fontFamily: "'IBM Plex Mono', monospace", fontSize: "12px",
        }}
      >
        ✕
      </button>

      {mode === "signup" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

          {/* Confirmation */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#22c55e", fontSize: "13px", flexShrink: 0,
            }}>
              ✓
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "13px", color: "#e2e8f0", fontWeight: 500 }}>
                You&apos;re on the list
              </div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#4a5a6e", marginTop: "2px" }}>
                We&apos;ll be in touch before launch
              </div>
            </div>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "#1e2a3a" }} />

          {/* Payment prompt */}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "9px", color: "#38bdf8",
              letterSpacing: "0.12em", textTransform: "uppercase",
            }}>
              Founding team pricing
            </div>
            <div style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "22px", fontWeight: 800,
              color: "#e2e8f0", letterSpacing: "-0.02em",
            }}>
              £49<span style={{ fontSize: "12px", fontWeight: 400, color: "#4a5a6e" }}>/month</span>
            </div>
            <p style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "11px", color: "#4a5a6e", lineHeight: 1.6,
            }}>
              Lock in this rate forever. First 100 teams only. Cancel anytime.
            </p>
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "12px", fontWeight: 600,
                padding: "10px 16px", borderRadius: "4px",
                background: "#38bdf8", color: "#06080c",
                textDecoration: "none", letterSpacing: "0.04em",
                textAlign: "center", display: "block",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#7dd3fc")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#38bdf8")}
            >
              Secure your spot →
            </a>
            <span style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "10px", color: "#2e3d52", textAlign: "center",
            }}>
              // not ready yet? we&apos;ll reach out at launch
            </span>
          </div>
        </div>
      )}

      {mode === "paid" && (
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{
              width: "28px", height: "28px", borderRadius: "50%",
              background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#38bdf8", fontSize: "13px", flexShrink: 0,
            }}>
              ★
            </div>
            <div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "13px", color: "#e2e8f0", fontWeight: 500 }}>
                Founding team confirmed
              </div>
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "11px", color: "#4a5a6e", marginTop: "2px" }}>
                £49/month · locked in forever
              </div>
            </div>
          </div>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "11px", color: "#4a5a6e", lineHeight: 1.6,
          }}>
            You&apos;ll hear from us before anyone else. Thank you for betting on this early.
          </p>
        </div>
      )}
    </div>
  );
}