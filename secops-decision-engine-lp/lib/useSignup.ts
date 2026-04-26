import { submitToWaitlist } from "./waitlist";

function isValidEmail(email: string): boolean {
  return email.includes("@") && email.includes(".") && email.trim().length > 5;
}

export async function handleSignup(email: string): Promise<{ error?: string }> {
  const cleaned = email.trim().toLowerCase();
  console.log("cleaned email:", cleaned, "valid:", isValidEmail(cleaned));
  if (!cleaned || !isValidEmail(cleaned)) return { error: "invalid_email" };
  return submitToWaitlist(cleaned);
}