"use client";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <div className="logo-mark" />
        Sentinel
      </div>
      <ul className="nav-links">
        <li><a href="#how-it-works">How it works</a></li>
        <li><a href="#pipeline">Pipeline</a></li>
        <li><a href="#waitlist">Early access</a></li>
      </ul>
      <button
        className="nav-cta"
        onClick={() => document.getElementById('waitlist-input')?.focus()}
      >
        Join waitlist
      </button>
    </nav>
  )
}