import Link from "next/link";
import { CinematicHero } from "@/components/hero/CinematicHero";
import { DeluluPlayground } from "@/components/hero/DeluluPlayground";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionReveal, SplitTextReveal } from "@/components/ui/SectionReveal";
import { projects } from "@/data/projects";
import {
  Bot,
  BrainCircuit,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Terminal,
  Activity,
  Code2,
} from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured);
  const remainingProjects = projects.filter((p) => !p.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. CINEMATIC HERO (Matching KAGE video aesthetic & Electric Cyan Theme) */}
      <CinematicHero />

      {/* 2. STATS TELEMETRY COUNTER STRIP (Matching video counter layout: 05 / CHAPTERS, 90 / MINUTES) */}
      <section className="relative py-12 border-y border-white/10 bg-[#07070c]/95 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <SectionReveal delay={0.1}>
              <div className="space-y-1">
                <div className="font-mono text-xs text-cyan-400 tracking-wider">
                  [ 01 // PROJECTS ]
                </div>
                <div className="text-3xl sm:text-5xl font-mono font-bold text-white text-glow-cyan">
                  06
                </div>
                <div className="text-xs font-mono text-slate-300 uppercase">
                  Self-Built Systems
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Agents, Models & IoT
                </div>
              </div>
            </SectionReveal>

            {/* Stat 2 */}
            <SectionReveal delay={0.2}>
              <div className="space-y-1">
                <div className="font-mono text-xs text-cyan-400 tracking-wider">
                  [ 02 // INTEGRITY ]
                </div>
                <div className="text-3xl sm:text-5xl font-mono font-bold text-white">
                  100%
                </div>
                <div className="text-xs font-mono text-slate-300 uppercase">
                  Leakage-Free ML
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  Strict Pre-Split Feature Eng
                </div>
              </div>
            </SectionReveal>

            {/* Stat 3 */}
            <SectionReveal delay={0.3}>
              <div className="space-y-1">
                <div className="font-mono text-xs text-cyan-400 tracking-wider">
                  [ 03 // ACADEMIC ]
                </div>
                <div className="text-3xl sm:text-5xl font-mono font-bold text-cyan-400">
                  95.6%
                </div>
                <div className="text-xs font-mono text-slate-300 uppercase">
                  Secondary Distinction
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  86.4% CS Higher Secondary
                </div>
              </div>
            </SectionReveal>

            {/* Stat 4 */}
            <SectionReveal delay={0.4}>
              <div className="space-y-1">
                <div className="font-mono text-xs text-cyan-400 tracking-wider">
                  [ 04 // NLP EMOTIONS ]
                </div>
                <div className="text-3xl sm:text-5xl font-mono font-bold text-white">
                  28
                </div>
                <div className="text-xs font-mono text-slate-300 uppercase">
                  Affective Classes
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  BERT GoEmotions Architecture
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPER FLEX: INTERACTIVE DELULU AGENT PLAYGROUND */}
      <section id="chapter-agents" className="relative py-20 bg-[#030305] z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400 mb-3">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>CHAPTER 01 // LIVE AGENT RUNNER FLEX</span>
                </div>
              </SectionReveal>
              <SplitTextReveal
                text="TEST-DRIVE DELULU: TEXT-TO-SQL AGENT"
                tag="h2"
                className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase font-sans"
              />
            </div>

            <SectionReveal delay={0.2}>
              <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
                Experience real-time natural language query deconstruction, read-only AST guardrail validation, and business insight generation.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.3}>
            <DeluluPlayground />
          </SectionReveal>
        </div>
      </section>

      {/* 4. CHAPTER 02 & 03: FEATURED ML & NLP ARCHITECTURES */}
      <section id="chapter-nlp" className="relative py-24 bg-[#07070b]/80 z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionReveal>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  [ CHAPTER 02 // NLP TRANSFORMERS & SUPERVISED ML ]
                </div>
              </SectionReveal>
              <SplitTextReveal
                text="MODELS ENGINEERED FOR REAL-WORLD GENERALIZATION"
                tag="h2"
                className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase font-sans"
              />
            </div>

            <SectionReveal delay={0.2}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 hover:border-cyan-500/60 bg-[#0e0e14] text-xs font-mono text-slate-200 hover:text-white transition-all group"
              >
                <span>View All 6 Case Studies</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-cyan-400" />
              </Link>
            </SectionReveal>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, idx) => (
              <SectionReveal key={project.id} delay={idx * 0.15}>
                <ProjectCard project={project} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHAPTER 04: COMPUTER VISION & SMART HARDWARE SYSTEMS */}
      <section id="chapter-iot" className="relative py-24 bg-[#030305] z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <SectionReveal>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  [ CHAPTER 03 // VISION & SMART HARDWARE ]
                </div>
              </SectionReveal>
              <SplitTextReveal
                text="EXTENDING INTELLIGENCE TO THE PHYSICAL EDGE"
                tag="h2"
                className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase font-sans"
              />
            </div>

            <SectionReveal delay={0.2}>
              <div className="text-xs font-mono text-slate-400">
                PIR SENSORS · ESP8266 · MQTT PROTOCOL
              </div>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remainingProjects.map((project, idx) => (
              <SectionReveal key={project.id} delay={idx * 0.15}>
                <ProjectCard project={project} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHAT I BUILD STRIP */}
      <section className="relative py-20 bg-[#07070b]/90 z-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="flex items-center justify-between gap-4 mb-8 font-mono text-xs text-slate-400">
              <span className="text-cyan-400 font-bold tracking-widest uppercase">
                // SYSTEM ARCHITECTURE // CORE DOMAINS
              </span>
              <span className="hidden sm:inline">[ CAPABILITY MATRIX ]</span>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <SectionReveal delay={0.1}>
              <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 hover:border-cyan-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-base font-bold text-white mb-2">
                  AI Agents
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Autonomous task loops, dynamic reasoning, tool-calling interfaces, and schema-constrained database query synthesis.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 hover:border-cyan-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                  <BrainCircuit className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-base font-bold text-white mb-2">
                  LLM Applications
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Text-to-SQL systems, RAG retrieval pipelines, prompt engineering, structured output schemas, and security AST guardrails.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 hover:border-cyan-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-base font-bold text-white mb-2">
                  ML Models
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Supervised pipelines with 100% leakage-free train/test splits, BERT transformer fine-tuning, and cross-model benchmarking.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 hover:border-cyan-500/40 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-105 transition-transform">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-mono text-base font-bold text-white mb-2">
                  Smart Hardware & IoT
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Embedded systems integration with ESP8266 microcontrollers, MQTT publish-subscribe messaging, and PIR sensor interrupts.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* 7. COLLABORATION CTA */}
      <section className="relative py-20 bg-gradient-to-b from-[#07070b] to-[#030305] text-center z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
              <Code2 className="w-3.5 h-3.5" />
              <span>COLLABORATION // TECHNICAL RECRUITING</span>
            </div>
          </SectionReveal>

          <SplitTextReveal
            text="READY TO DISCUSS AGENTS, MODELS, OR INFRASTRUCTURE?"
            tag="h2"
            className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-white font-sans justify-center"
          />

          <SectionReveal delay={0.2}>
            <p className="text-xs sm:text-sm text-slate-400 font-mono max-w-xl mx-auto">
              Open to technical conversations with AI engineering teams, builders, and recruiters looking for rigorous execution.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.3}>
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 transition-all shadow-[0_0_20px_rgba(0,212,255,0.45)]"
              >
                Initiate Contact →
              </Link>
              <Link
                href="/stack"
                className="px-7 py-3 rounded-full text-xs font-mono uppercase tracking-wider text-slate-300 border border-white/15 hover:border-cyan-500/50 bg-[#0e0e14] transition-all"
              >
                Inspect Technology Stack
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
