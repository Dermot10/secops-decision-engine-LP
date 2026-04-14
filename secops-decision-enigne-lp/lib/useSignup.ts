export function handleSignup(email: string): { success?: boolean; error?: boolean } {
  if (!email || !email.includes('@')) {
    return { error: true }
  }
  // replace with submitToWaitlist() when endpoint is ready
  console.log('Waitlist signup:', email)
  return { success: true }
}