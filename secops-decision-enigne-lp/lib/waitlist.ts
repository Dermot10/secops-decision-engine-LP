import { supabase } from "./supabase";

export async function submitToWaitlist(email: string): Promise<{ error?: string }> {

  console.log("submitToWaitlist called with:", email);
  console.log("supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  
  const { data, error } = await supabase
    .from("waitlist")
    .insert({ email: email.trim().toLowerCase() });

  console.log("supabase response — data:", data, "error:", error);
  
  if (error) {
    if (error.code === "23505") return { error: "already_registered" };
    return { error: "failed" };
  }

  return {};
}