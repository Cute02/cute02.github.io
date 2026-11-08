"use client";

import Link from "next/link";
import { ArrowUp, Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#050608] text-slate-400 z-10">
      {/* Subtle top cyan line glow */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Identity & Mission */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-surface-card border border-cyan-500/40 flex items-center justify-center font-mono font-bold text-cyan-400 text-xs shadow-cyan-sm">
                MN.
              </div>
              <span className="font-mono text-base font-bold text-white tracking-wider uppercase">
                Mary Neha
              </span>
            </div>
            <p className="text-xs font-mono text-cyan-400/90 tracking-wide">
              AI Solution Builder · ML Engineer in training
            </p>
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Designing reliable LLM agents, leakage-free supervised machine learning architectures, and responsive embedded IoT systems. Focused on clean engineering discipline and verifiable outcomes.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Ernakulam, Kerala, India</span>
            </div>
          </div>

          {/* Quick Route Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              [ INDEX ]
            </div>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link
                  href="/"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-500/60">01.</span> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-500/60">02.</span> About & Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-500/60">03.</span> Projects & Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/stack"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-500/60">04.</span> Technology Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/education"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-500/60">05.</span> Education & Accolades
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-2"
                >
                  <span className="text-cyan-500/60">06.</span> Contact Terminal
                </Link>
              </li>
            </ul>
          </div>

          {/* Channels & Telemetry */}
          <div className="space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-slate-200">
              [ CHANNELS ]
            </div>
            <div className="flex flex-col space-y-2.5 text-xs font-mono">
              <a
                href="mailto:maryneha248@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>maryneha248@gmail.com</span>
              </a>
              <a
                href="https://github.com/Cute02"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Github className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>github.com/Cute02</span>
              </a>
              <a
                href="https://linkedin.com/in/mary-neha-0036a5264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors group"
              >
                <Linkedin className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                <span>linkedin.com/in/mary-neha-0036a5264</span>
              </a>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-white/10 hover:border-cyan-500/40 text-[11px] font-mono text-slate-400 hover:text-cyan-400 transition-colors bg-surface-card"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>TOP OF REEL</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Telemetry Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>CORE NODE: PRODUCTION READY // GITHUB PAGES EXPORT</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-slate-300">TELEMETRY: VERIFIED</span>
            </span>
            <span>© {new Date().getFullYear()} Mary Neha.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
