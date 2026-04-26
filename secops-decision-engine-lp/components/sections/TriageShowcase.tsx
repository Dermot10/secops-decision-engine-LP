"use client";
import { useEffect, useRef, useState } from 'react'
import { signals } from '@/data/signals'
import { SignalRow } from '@/components/ui/SignalRow'

export default function TriageShowcase() {
  const [confidence, setConfidence] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          let p = 0
          const interval = setInterval(() => {
            p += 2
            setConfidence(p)
            if (p >= 100) clearInterval(interval)
          }, 20)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="triage-showcase" id="how-it-works">
      <div className="scan-container" ref={cardRef}>
        <div className="triage-card">
          <div className="card-header">
            <div className="card-dots">
              <div className="card-dot dot-red" />
              <div className="card-dot dot-amber" />
              <div className="card-dot dot-green" />
            </div>
            <span className="card-title">Obsidian Blue / triage-result / alert_id: a594966a</span>
          </div>
          <div className="card-body">
            <div className="decision-badge">
              <span className="decision-dot" />
              ESCALATE — confidence {confidence}%
            </div>

            <div className="indicator-row">
              <span className="indicator-ip">185.220.101.1</span>
              <div className="confidence-bar-wrap">
                <div className="confidence-label">
                  <span>confidence</span>
                  <span>{confidence}%</span>
                </div>
                <div className="confidence-bar">
                  <div
                    className="confidence-fill"
                    style={{ width: `${confidence}%`, transition: 'width 0.02s linear' }}
                  />
                </div>
              </div>
            </div>

            <div className="signals-title">// enrichment signals</div>

            {signals.map((signal, i) => (
              <SignalRow key={i} signal={signal} />
            ))}

            <div className="llm-summary">
              <div className="llm-label">
                <div className="llm-icon">AI</div>
                LLM analysis
              </div>
              <div className="llm-text">
                Known Tor exit node flagged critical across 3 independent sources. Immediate escalation recommended.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="showcase-text">
        <div className="section-label">explainability first</div>
        <h2>Every decision<br /><em>fully explained</em></h2>
        <p>
          Obsidian Blue doesn&apos;t just flag threats — it shows you exactly why and up-skills you. Every triage decision comes with the signals that contributed, the confidence score, and an AI-generated summary your team can act on immediately.
        </p>
        <ul className="feature-list">
          {[
            { icon: '⚡', cls: 'fi-blue', title: 'Multi-source, enrichment intel operating in parallel', desc: 'E.g AbuseIPDB, VirusTotal, and GreyNoise queried simultaneously — results in under 500ms.' },
            { icon: '🎯', cls: 'fi-teal', title: 'Deterministic rules before AI', desc: 'Clear-cut cases resolved instantly. LLM called only for ambiguous signals — keeping costs low and speed high.' },
            { icon: '🔒', cls: 'fi-red', title: 'AI reliability layer', desc: 'Confidence thresholds, fallback logic, and full audit trail. No black box decisions.' },
            { icon: '📋', cls: 'fi-amber', title: 'Human override with feedback loop', desc: 'Analyst decisions feed back into detection quality. The system gets smarter over time.' },
          ].map((f, i) => (
            <li key={i} className="feature-item">
              <div className={`feature-icon ${f.cls}`}>{f.icon}</div>
              <div className="feature-text">
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}