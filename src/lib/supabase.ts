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

// Defensive payload sanitization to prevent injection & payload bloat
function sanitizeInput(str: string, maxLength: number): string {
  if (!str) return "";
  return str
    .slice(0, maxLength)
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "") // strip control characters
    .trim();
}

export async function sendContactMessage(payload: ContactMessagePayload) {
  // Enforce defensive length limits before transmission
  const sanitized = {
    name: sanitizeInput(payload.name, 80),
    email: sanitizeInput(payload.email, 100),
    subject: sanitizeInput(payload.subject || "Portfolio Inbound Inquiry", 120),
    message: sanitizeInput(payload.message, 2500),
  };

  if (isSupabaseConfigured && supabase) {
    const { error } = await supabase
      .from("contact_messages")
      .insert([
        {
          name: sanitized.name,
          email: sanitized.email,
          subject: sanitized.subject,
          message: sanitized.message,
          created_at: new Date().toISOString(),
        },
      ]);
    if (error) throw error;
    return { success: true, mode: "supabase" as const };
  } else {
    // Safe offline/preview fallback when Supabase keys are not set yet
    console.info(
      "[Supabase Preview Mode] Contact form submitted safely:",
      sanitized
    );
    await new Promise((resolve) => setTimeout(resolve, 600));
    return { success: true, mode: "simulated" as const };
  }
}
