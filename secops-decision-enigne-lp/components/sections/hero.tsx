'use client'
import { useState } from 'react'
import { handleSignup } from '@/lib/useSignup'
import Toast from '@/components/ui/toast'

export default function Hero() {
  const [email, setEmail] = useState('')
  const [showToast, setShowToast] = useState(false)
  const [error, setError] = useState(false)

  const submit = () => {
    const res = handleSignup(email)
    if (res.error) {
      setError(true)
      setTimeout(() => setError(false), 2000)
      return
    }
    setEmail('')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 4000)
  }

  return (
    <>
      <section className="hero">
        <div className="hero-badge">
          <span className="badge-dot" />
          AI-powered security operations
        </div>
        <h1 className="hero-headline">
          <span className="line-1">Security that</span>
          <span className="line-2">thinks for itself</span>
        </h1>
        <p className="hero-sub">
          Enterprise-grade threat detection and AI-assisted triage for growing companies — without the SOC overhead.
        </p>
        <div className="hero-form">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            placeholder="your@company.com"
            className={`hero-input ${error ? 'input-error' : ''}`}
          />
          <button className="hero-btn" onClick={submit}>
            Request early access →
          </button>
        </div>
        <p className="hero-note">// No credit card required &nbsp;·&nbsp; Private beta launching Q3 2026</p>
      </section>
      <Toast show={showToast} />
    </>
  )
}