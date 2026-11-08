import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes("your-project.supabase.co")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface ContactMessagePayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactMessage(payload: ContactMessagePayload) {
  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: payload.name,
          email: payload.email,
          subject: payload.subject,
          message: payload.message,
          created_at: new Date().toISOString(),
        },
      ]);
    if (error) throw error;
    return { success: true, mode: "supabase" as const };
  } else {
    // Graceful offline/preview fallback when Supabase keys are not set yet
    console.info(
      "[Supabase Preview Mode] Contact form submitted successfully (stored in local preview log):",
      payload
    );
    // Simulate brief network latency for realistic feedback
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { success: true, mode: "simulated" as const };
  }
}

