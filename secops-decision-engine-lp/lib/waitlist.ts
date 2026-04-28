import { supabase } from "./supabase";

export async function createUser(email: string): Promise<{ error?: string }> {

  console.log("submitToWaitlist called with:", email);
  console.log("supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);
  
  const { error } = await supabase
    .from("users")
    .insert({
      email: email.trim().toLowerCase(),
      paid: false,
    });

  if (error) {
    if (error.code === "23505") return { error: "already_registered" };
    return { error: "failed" };
  }

  return {};
}
