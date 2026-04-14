'use client'
import { useState } from 'react'
import { handleSignup } from '@/lib/useSignup'
import Toast from '@/components/ui/toast'

export default function CTA() {
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
      <section className="cta-section" id="waitlist">
        <div className="section-label" style={{ justifyContent: 'center', marginBottom: '24px' }}>
          early access
        </div>
        <h2>
          Security that grows<br />
          <span>with your company</span>
        </h2>
        <p>
          Join the waitlist for private beta access. We&apos;re onboarding a small group of SaaS companies to validate the platform with real environments.
        </p>
        <div className="cta-form">
          <input
            type="email"
            id="waitlist-input"
            className={`hero-input ${error ? 'input-error' : ''}`}
            value={email}
            onChange={e => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && submit()}
            placeholder="your@company.com"
          />
          <button className="hero-btn" onClick={submit}>
            Request access →
          </button>
        </div>
        <p className="hero-note">// We&apos;ll reach out personally. No automated drip sequences.</p>
      </section>
      <Toast show={showToast} />
    </>
  )
}