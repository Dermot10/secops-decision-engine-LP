export async function submitToWaitlist(email: string): Promise<boolean> {
  // swap between providers without touching any component
  // Resend, ConvertKit, or your own endpoint
  try {
    const res = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    })
    return res.ok
  } catch {
    return false
  }
}