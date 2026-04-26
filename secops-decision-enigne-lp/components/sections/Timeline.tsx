"use client";
import { useEffect, useState, useRef } from "react";
import { STAGES, INTENSITY_STYLE } from "@/data/stages";

export default function Timeline() {
  const [mobile, setMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { if (entries[0].isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.6; transform: scale(0.9); }
        }
        @keyframes pulse-mid {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes pulse-fast {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 28px rgba(56,189,248,0.6); }
          50%       { opacity: 0.7; transform: scale(0.8);  box-shadow: 0 0 48px rgba(56,189,248,0.9); }
        }
        @keyframes ring-pulse {
          0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.4; }
          100% { transform: translate(-50%, -50%) scale(2.4); opacity: 0; }
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          padding: mobile ? "60px 24px" : "100px 40px",
          maxWidth: "1200px",
          margin: "0 auto",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: mobile ? "48px" : "72px" }}>
          <div style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "10px", color: "#38bdf8",
            letterSpacing: "0.12em", textTransform: "uppercase",
            marginBottom: "16px",
          }}>
            Where you are
          </div>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 800, letterSpacing: "-0.02em",
            color: "#e2e8f0", lineHeight: 1.1, maxWidth: "560px",
          }}>
            The gap every
            <br />
            <span style={{ color: "#38bdf8" }}>growing team falls into.</span>
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "12px", color: "#2e3d52",
            marginTop: "16px", lineHeight: 1.6, maxWidth: "480px",
          }}>
            Security anxiety doesn't hit at the same size for everyone. Some teams feel it at ten people, some at fifty. The exposure curve doesn't wait for your headcount.
          </p>
        </div>

        {mobile ? (
          // ─── Mobile vertical ─────────────────────────────────────────
          <div style={{ display: "flex", flexDirection: "column" }}>
            {STAGES.map((stage, i) => {
              const ist = INTENSITY_STYLE[stage.intensity];
              return (
                <div key={stage.id} style={{ display: "flex", gap: "20px" }}>

                  {/* Dot + line */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      {stage.intensity >= 2 && visible && (
                        <div style={{
                          position: "absolute", top: "50%", left: "50%",
                          width: "24px", height: "24px", borderRadius: "50%",
                          border: `1px solid ${ist.dotColor}`,
                          animation: "ring-pulse 1.5s ease-out infinite",
                        }} />
                      )}
                      <div style={{
                        width: stage.you ? "14px" : stage.intensity > 0 ? "12px" : "10px",
                        height: stage.you ? "14px" : stage.intensity > 0 ? "12px" : "10px",
                        borderRadius: "50%",
                        background: ist.dotColor,
                        border: `1px solid ${ist.borderColor}`,
                        boxShadow: visible ? ist.glow : "none",
                        animation: visible ? ist.pulse : "none",
                        position: "relative", zIndex: 1,
                      }} />
                    </div>
                    {i < STAGES.length - 1 && (
                      <div style={{
                        width: "1px", flex: 1, minHeight: "60px",
                        background: stage.intensity >= 2
                          ? `linear-gradient(${ist.borderColor}, #1e2a3a)`
                          : "#1e2a3a",
                        margin: "4px 0",
                      }} />
                    )}
                  </div>

                  {/* Content card */}
                  <div
                    style={{
                      paddingBottom: "32px",
                      flex: 1,
                      borderRadius: "6px",
                      padding: "12px",
                      background: stage.you
                        ? "rgba(56,189,248,0.05)"
                        : stage.intensity >= 1
                        ? "rgba(255,255,255,0.01)"
                        : "transparent",
                      border: stage.you
                        ? "1px solid rgba(56,189,248,0.25)"
                        : stage.intensity >= 1
                        ? "1px solid #1e2a3a"
                        : "1px solid transparent",
                      transition: "transform 0.3s ease, background 0.2s ease, box-shadow 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-3px)";
                      el.style.background = stage.you
                        ? "rgba(56,189,248,0.09)"
                        : stage.intensity >= 1
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.01)";
                      el.style.boxShadow = stage.intensity >= 2
                        ? "0 8px 24px rgba(56,189,248,0.08)"
                        : "0 8px 20px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(0)";
                      el.style.background = stage.you
                        ? "rgba(56,189,248,0.05)"
                        : stage.intensity >= 1
                        ? "rgba(255,255,255,0.01)"
                        : "transparent";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {stage.you && (
                      <div style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "9px", color: "#38bdf8",
                        letterSpacing: "0.12em", textTransform: "uppercase",
                        marginBottom: "6px",
                      }}>
                        ◆ You are here
                      </div>
                    )}
                    <div style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "15px", fontWeight: 700,
                      color: stage.intensity > 0 ? "#e2e8f0" : "#4a5a6e",
                      marginBottom: "2px",
                    }}>
                      {stage.label}
                    </div>
                    <div style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "10px",
                      color: stage.intensity >= 2 ? "#38bdf8" : "#2e3d52",
                      marginBottom: "8px",
                    }}>
                      {stage.sub}
                    </div>
                    <p style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "11px",
                      color: stage.intensity > 0 ? "#4a5a6e" : "#2e3d52",
                      lineHeight: 1.6,
                    }}>
                      {stage.desc}
                    </p>
                    {stage.you && (
                      <div style={{
                        marginTop: "12px",
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "10px", color: "#38bdf8",
                      }}>
                        Obsidian Blue sits here →
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Mobile callout */}
            <div style={{
              marginTop: "16px", padding: "20px",
              background: "rgba(56,189,248,0.04)",
              border: "1px solid rgba(56,189,248,0.15)",
              borderLeft: "3px solid #38bdf8",
              borderRadius: "4px",
            }}>
              <div style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "10px", color: "#38bdf8",
                letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "8px",
              }}>
                Built for this moment
              </div>
              <p style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "12px", color: "#4a5a6e", lineHeight: 1.6,
              }}>
                Detection-as-code and AI triage that works before you have a security team — and scales with you until you do.
              </p>
            </div>
          </div>

        ) : (
          // ─── Desktop horizontal ──────────────────────────────────────
          <div>
            {/* Connector line */}
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", top: "20px", left: "10%", right: "10%",
                height: "1px",
                background: "linear-gradient(90deg, #1e2a3a 0%, #2e3d52 25%, #38bdf8 40%, #38bdf8 60%, #2e3d52 75%, #1e2a3a 100%)",
              }} />

              {/* Dots */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", position: "relative" }}>
                {STAGES.map((stage) => {
                  const ist = INTENSITY_STYLE[stage.intensity];
                  return (
                    <div key={stage.id} style={{ display: "flex", justifyContent: "center", paddingBottom: "32px" }}>
                      <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {stage.intensity >= 2 && visible && (
                          <>
                            <div style={{
                              position: "absolute", top: "50%", left: "50%",
                              width: "32px", height: "32px", borderRadius: "50%",
                              border: "1px solid rgba(56,189,248,0.4)",
                              animation: "ring-pulse 1.5s ease-out infinite",
                            }} />
                            {stage.intensity === 3 && (
                              <div style={{
                                position: "absolute", top: "50%", left: "50%",
                                width: "32px", height: "32px", borderRadius: "50%",
                                border: "1px solid rgba(56,189,248,0.3)",
                                animation: "ring-pulse 1.5s ease-out 0.5s infinite",
                              }} />
                            )}
                          </>
                        )}
                        <div style={{
                          width: stage.intensity === 3 ? "18px" : stage.intensity >= 1 ? "13px" : "10px",
                          height: stage.intensity === 3 ? "18px" : stage.intensity >= 1 ? "13px" : "10px",
                          borderRadius: "50%",
                          background: ist.dotColor,
                          border: `1px solid ${ist.borderColor}`,
                          boxShadow: visible ? ist.glow : "none",
                          animation: visible ? ist.pulse : "none",
                          position: "relative", zIndex: 1,
                          transition: "all 0.6s ease",
                        }} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stage cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
              {STAGES.map((stage) => {
                const ist = INTENSITY_STYLE[stage.intensity];
                return (
                  <div
                    key={stage.id}
                    style={{
                      padding: "20px 16px",
                      background: stage.you
                        ? "rgba(56,189,248,0.05)"
                        : stage.intensity >= 1
                        ? "rgba(255,255,255,0.01)"
                        : "transparent",
                      border: stage.you
                        ? "1px solid rgba(56,189,248,0.25)"
                        : stage.intensity >= 1
                        ? "1px solid #1e2a3a"
                        : "1px solid transparent",
                      borderRadius: "6px",
                      opacity: visible ? 1 : 0,
                      transform: visible ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.5s ease, transform 0.4s ease, background 0.2s ease, box-shadow 0.2s ease",
                      cursor: "default",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = "translateY(-4px)";
                      el.style.background = stage.you
                        ? "rgba(56,189,248,0.09)"
                        : stage.intensity >= 1
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(255,255,255,0.01)";
                      el.style.boxShadow = stage.intensity >= 2
                        ? "0 8px 32px rgba(56,189,248,0.08)"
                        : "0 8px 24px rgba(0,0,0,0.3)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.transform = visible ? "translateY(0)" : "translateY(8px)";
                      el.style.background = stage.you
                        ? "rgba(56,189,248,0.05)"
                        : stage.intensity >= 1
                        ? "rgba(255,255,255,0.01)"
                        : "transparent";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {stage.you && (
                      <div style={{
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "9px", color: "#38bdf8",
                        letterSpacing: "0.1em", textTransform: "uppercase",
                        marginBottom: "8px",
                        display: "flex", alignItems: "center", gap: "4px",
                      }}>
                        <span style={{ animation: visible ? "pulse-fast 1.2s ease-in-out infinite" : "none" }}>◆</span>
                        You are here
                      </div>
                    )}
                    <div style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "14px", fontWeight: 700,
                      color: stage.intensity > 0 ? "#e2e8f0" : "#2e3d52",
                      marginBottom: "4px", letterSpacing: "-0.01em",
                    }}>
                      {stage.label}
                    </div>
                    <div style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "10px",
                      color: stage.intensity >= 2 ? "#38bdf8" : "#2e3d52",
                      marginBottom: "10px",
                    }}>
                      {stage.sub}
                    </div>
                    <p style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "11px",
                      color: stage.intensity > 0 ? "#4a5a6e" : "#2e3d52",
                      lineHeight: 1.6,
                    }}>
                      {stage.desc}
                    </p>
                    {stage.you && (
                      <div style={{
                        marginTop: "16px", paddingTop: "16px",
                        borderTop: "1px solid rgba(56,189,248,0.15)",
                        fontFamily: "'IBM Plex Mono', monospace",
                        fontSize: "10px", color: "#38bdf8",
                        letterSpacing: "0.04em",
                      }}>
                        Obsidian Blue sits here →
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}