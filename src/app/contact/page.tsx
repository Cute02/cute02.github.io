import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionReveal, SplitTextReveal } from "@/components/ui/SectionReveal";
import { Mail, Github, Linkedin, MapPin, Terminal, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mary Neha, AI Solution Builder & ML Engineer. Direct communication terminal for technical inquiries, AI agent architecture, and engineering roles.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="space-y-4 max-w-3xl">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>COMMUNICATION TERMINAL // SECURE DISPATCH</span>
          </div>
        </SectionReveal>

        <SplitTextReveal
          text="DIRECT TRANSMISSION & INQUIRIES"
          tag="h1"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans"
        />

        <SectionReveal delay={0.2}>
          <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed">
            Reach out regarding technical discussions, LLM agent collaborations, machine learning engineering, or software opportunities. All verified contact channels are monitored directly.
          </p>
        </SectionReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          {/* Status & Availability Slot */}
          {/* TODO: confirm Open to opportunities badge - Do not render active until confirmed */}
          <SectionReveal delay={0.1}>
            <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 space-y-3">
              <div className="flex items-center justify-between font-mono text-xs text-slate-400">
                <span className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>TRANSMISSION WINDOW</span>
                </span>
                <span className="text-slate-400">TIMEZONE: IST (UTC+5:30)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Based in Ernakulam, Kerala, India. Responsive to asynchronous messages and scheduled technical syncs.
              </p>
              {/* Placement marker for Open to opportunities badge */}
              {/* <!-- TODO: confirm Open to opportunities badge --> */}
            </div>
          </SectionReveal>

          {/* Verified Contact Details Cards */}
          <SectionReveal delay={0.2}>
            <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-white/5">
                // DIRECT COMMS CHANNELS
              </div>

              {/* Email */}
              <a
                href="mailto:maryneha248@gmail.com"
                className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#060609] hover:border-cyan-500/40 hover:bg-[#08080d] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      Email Address
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-white group-hover:text-cyan-300 transition-colors">
                      maryneha248@gmail.com
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Cute02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#060609] hover:border-cyan-500/40 hover:bg-[#08080d] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      GitHub Profile
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-white group-hover:text-cyan-300 transition-colors">
                      github.com/Cute02
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/mary-neha-0036a5264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-[#060609] hover:border-cyan-500/40 hover:bg-[#08080d] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase">
                      LinkedIn Network
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-white group-hover:text-cyan-300 transition-colors">
                      mary-neha-0036a5264
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-lg border border-white/5 bg-[#060609]">
                <div className="w-8 h-8 rounded bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">
                    Location
                  </div>
                  <div className="text-xs sm:text-sm font-mono text-white">
                    Ernakulam, Kerala, India
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Right Column: Supabase Form */}
        <div className="lg:col-span-7">
          <SectionReveal delay={0.25}>
            <ContactForm />
          </SectionReveal>
        </div>
      </div>
    </div>
  );
}
