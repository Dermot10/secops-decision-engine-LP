'use client'
import { useEffect } from 'react'

export default function Toast({ show }: { show: boolean }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`} id="toast">
      <div className="toast-icon">✓</div>
      <div>
        <div className="toast-text">You&apos;re on the list</div>
        <div className="toast-sub">We&apos;ll be in touch before public launch</div>
      </div>
    </div>
  )
}