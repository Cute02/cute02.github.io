"use client";

import { useState, useRef } from "react";
import { sendContactMessage } from "@/lib/supabase";
import confetti from "canvas-confetti";
import { Send, CheckCircle2, AlertCircle, Loader2, ShieldCheck, Mail } from "lucide-react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    honeypot: "", // Bot trap
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");
  const [feedbackMode, setFeedbackMode] = useState<"supabase" | "simulated" | null>(
    null
  );
  const lastSubmitTimeRef = useRef<number>(0);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check: If the hidden honeypot field is filled, silently discard bot spam
    if (formData.honeypot) {
      console.warn("Security Honeypot triggered. Bot dispatch discarded.");
      setStatus("success");
      return;
    }

    // Client-side rate limiting / cooldown (1 submission every 4 seconds)
    const now = Date.now();
    if (now - lastSubmitTimeRef.current < 4000) {
      setStatus("error");
      setErrorMessage("Transmission rate limit active. Please wait 4 seconds before resending.");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!EMAIL_REGEX.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address (e.g. name@domain.com).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");
    lastSubmitTimeRef.current = now;

    try {
      const res = await sendContactMessage({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || "Portfolio Inbound Inquiry",
        message: formData.message,
      });

      setStatus("success");
      setFeedbackMode(res.mode);

      // Trigger celebratory cyan confetti
      confetti({
        particleCount: 55,
        spread: 65,
        origin: { y: 0.7 },
        colors: ["#00D4FF", "#38BDF8", "#FFFFFF", "#0284C7"],
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        honeypot: "",
      });
    } catch (err: any) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage(
        err?.message || "Transmission failed. You can also email directly at maryneha248@gmail.com"
      );
    }
  };

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#0e0e14]/85 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
      {/* HUD corner brackets */}
      <div className="hud-bracket mb-6 pb-4 border-b border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2 text-cyan-400 font-bold">
          <ShieldCheck className="w-4 h-4" />
          <span>SECURE INBOX // SUPABASE ANON INSERT</span>
        </div>
        <span className="text-[10px] text-slate-400">ENCRYPTION: TLS 1.3</span>
      </div>

      {status === "success" ? (
        <div className="py-10 text-center space-y-4">
          <div className="w-14 h-14 mx-auto rounded-full bg-cyan-950/60 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shadow-[0_0_20px_rgba(0,212,255,0.4)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Transmission Received
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Your message has been safely delivered to Mary Neha&apos;s transmission queue.
          </p>
          {feedbackMode === "simulated" && (
            <p className="text-[11px] font-mono text-cyan-300/90 max-w-sm mx-auto bg-cyan-950/30 p-2.5 rounded border border-cyan-500/30">
              [Preview Mode Active]: Message logged safely. To connect live Supabase DB, supply NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.
            </p>
          )}
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:from-cyan-300 hover:to-blue-400 transition-colors shadow-cyan-sm"
          >
            Send Another Dispatch
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field (hidden from genuine users, traps malicious spam bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="honeypot">Leave this blank</label>
            <input
              type="text"
              id="honeypot"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
              >
                Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                maxLength={80}
                value={formData.name}
                onChange={handleChange}
                placeholder="Ada Lovelace"
                className="w-full px-4 py-2.5 rounded-lg bg-[#060609] border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
              >
                Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                maxLength={100}
                value={formData.email}
                onChange={handleChange}
                placeholder="ada@domain.com"
                className="w-full px-4 py-2.5 rounded-lg bg-[#060609] border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              maxLength={120}
              value={formData.subject}
              onChange={handleChange}
              placeholder="Collaboration / AI Agent Architecture / Recruiter Discussion"
              className="w-full px-4 py-2.5 rounded-lg bg-[#060609] border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-mono tracking-wider uppercase text-slate-300 mb-1.5"
            >
              Message Content <span className="text-cyan-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              maxLength={2500}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline project scope, team role, or inquiry details..."
              className="w-full px-4 py-2.5 rounded-lg bg-[#060609] border border-white/10 text-white placeholder-slate-400 text-xs sm:text-sm font-sans focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
            />
            <div className="mt-1 text-right text-[10px] font-mono text-slate-500">
              {formData.message.length} / 2500 characters
            </div>
          </div>

          {/* Error notice */}
          {status === "error" && (
            <div className="flex items-center gap-2 p-3 rounded bg-rose-950/60 border border-rose-500/40 text-rose-300 text-xs font-mono">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 disabled:opacity-60 transition-all shadow-[0_0_20px_rgba(0,212,255,0.45)]"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-black" />
                <span>Transmitting Packet...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Transmit Message</span>
              </>
            )}
          </button>

          <div className="pt-2 text-center text-[10px] font-mono text-slate-400">
            Protected by client-side honeypot verification, input sanitization & TLS encryption.
          </div>
        </form>
      )}
    </div>
  );
}
