import { CinematicHero } from "@/components/hero/CinematicHero";
import { DeluluPlayground } from "@/components/hero/DeluluPlayground";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { ConstellationGraph } from "@/components/stack/ConstellationGraph";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionReveal, SplitTextReveal } from "@/components/ui/SectionReveal";
import { educationList, achievementsList } from "@/data/education";
import {
  FileCode,
  Hammer,
  CheckCircle,
  Rocket,
  GraduationCap,
  Award,
  ShieldCheck,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Terminal,
  Clock,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Activity,
  Cpu,
  Code2,
  AlertCircle,
  FileBadge,
  Sparkles,
} from "lucide-react";

const WORKFLOW_STEPS = [
  {
    step: "01",
    name: "Explain",
    icon: FileCode,
    headline: "Deconstruct & Scope Rigorously",
    description:
      "Clarify user requirements, business schema constraints, and edge failure points before writing code. Formulate formal problem definitions to avoid speculative overhead.",
  },
  {
    step: "02",
    name: "Build",
    icon: Hammer,
    headline: "Architect Clean, Leakage-Free Systems",
    description:
      "Implement autonomous agent loops, prompt templates, and ML pipelines. Enforce strict separation between train/test splits prior to preprocessing to eliminate data leakage.",
  },
  {
    step: "03",
    name: "Test",
    icon: CheckCircle,
    headline: "Validate Against Ground Truth",
    description:
      "Benchmark classification metrics (ROC-AUC, Precision, Recall), run test suites on AST SQL queries, and evaluate hardware interrupts against physical bounce anomalies.",
  },
  {
    step: "04",
    name: "Ship",
    icon: Rocket,
    headline: "Package with Production Discipline",
    description:
      "Deploy with reproducible environments, type-safe API boundaries, comprehensive documentation, and secure access protocols (e.g. Supabase RLS, MQTT topics).",
  },
];

export default function SinglePagePortfolio() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. CINEMATIC HERO (Full-Width 3D Word Embedding Universe & Live Telemetry HUD) */}
      <CinematicHero />

      {/* 2. STATS TELEMETRY COUNTER STRIP */}
      <section className="relative py-12 border-y border-white/10 bg-[#07070c]/95 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
                  Agents, Models &amp; IoT
                </div>
              </div>
            </SectionReveal>

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

      {/* 3. ABOUT & PHILOSOPHY (Section ID: #about) */}
      <section id="about" className="relative py-24 bg-[#050608] z-10 border-b border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-6 max-w-4xl">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>BIOGRAPHY &amp; ENGINEERING PHILOSOPHY // VERIFIED FACTS</span>
              </div>
            </SectionReveal>

            <SplitTextReveal
              text="AI SOLUTION BUILDER & ML ENGINEER IN TRAINING"
              tag="h2"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans"
            />

            {/* 3 Verified Paragraphs */}
            <SectionReveal delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-[#0e0e14]/70 p-6 sm:p-10 space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed font-sans shadow-xl">
                <p className="border-l-2 border-cyan-400 pl-4 py-1">
                  I&apos;m Mary Neha, an AI Solution Builder training at Brototype in Kochi, and a BCA student in Machine Learning &amp; AI at Jain University.
                </p>

                <p className="border-l-2 border-white/20 pl-4 py-1">
                  I build LLM agents, ML models, and smart hardware systems. My recent work includes Delulu, a Text-to-SQL agent, and Mitra, a BERT-based emotion detector.
                </p>

                <p className="border-l-2 border-cyan-400 pl-4 py-1">
                  My goal is to become an ML engineer who builds AI systems that are reliable, secure, and useful in production. My background in cybersecurity and hardware shapes how I think about them.
                </p>
              </div>
            </SectionReveal>
          </div>

          {/* 4-Stage Workflow: Explain → Build → Test → Ship */}
          <div className="space-y-8">
            <div>
              <SectionReveal>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  [ METHODOLOGY // 4-STAGE PIPELINE ]
                </div>
              </SectionReveal>
              <SplitTextReveal
                text="HOW I WORK: EXPLAIN → BUILD → TEST → SHIP"
                tag="h3"
                className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-sans"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {WORKFLOW_STEPS.map((wf, idx) => {
                const Icon = wf.icon;
                return (
                  <SectionReveal key={wf.step} delay={idx * 0.08}>
                    <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 h-full flex flex-col justify-between hover:border-cyan-500/40 transition-colors group">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
                            {wf.step}
                          </span>
                          <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                        <div className="font-mono text-lg font-bold text-white mb-1">
                          {wf.name}
                        </div>
                        <div className="text-xs font-mono text-cyan-300 mb-2">
                          {wf.headline}
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {wf.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-3 border-t border-white/5 font-mono text-[10px] text-slate-400 flex items-center justify-between">
                        <span>STAGE {wf.step} OF 04</span>
                        <span className="text-cyan-400">ACTIVE STANDARD</span>
                      </div>
                    </div>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. SELF-BUILT PROJECTS (Section ID: #projects) */}
      <section id="projects" className="relative py-24 bg-[#07070b]/90 z-10 border-b border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>SELF-BUILT PROJECTS // PRODUCTION ARCHITECTURES</span>
              </div>
            </SectionReveal>

            <SplitTextReveal
              text="AI AGENTS, ML MODELS & EMBEDDED SYSTEMS"
              tag="h2"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans"
            />

            <SectionReveal delay={0.15}>
              <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed">
                Every project listed here represents hands-on systems designed, programmed, and benchmarked by Mary Neha. Click any card to launch an instant in-depth architectural breakdown without leaving the page.
              </p>
            </SectionReveal>
          </div>

          {/* Filterable Project Grid Component with In-Page Modal */}
          <ProjectFilter />
        </div>
      </section>

      {/* 5. DEVELOPER FLEX: LIVE DELULU TEXT-TO-SQL AGENT SIMULATOR (Section ID: #delulu) */}
      <section id="delulu" className="relative py-24 bg-[#030305] z-10 border-b border-white/10 scroll-mt-20">
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

            <SectionReveal delay={0.15}>
              <p className="text-xs sm:text-sm font-mono text-slate-400 max-w-md">
                Experience real-time natural language query deconstruction, read-only AST guardrail validation, and business insight synthesis in the browser.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.2}>
            <DeluluPlayground />
          </SectionReveal>
        </div>
      </section>

      {/* 6. TECHNOLOGY STACK CONSTELLATION GRAPH (Section ID: #stack) */}
      <section id="stack" className="relative py-24 bg-[#050608] z-10 border-b border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>TOPOLOGY MATRIX // VERIFIED CAPABILITIES</span>
              </div>
            </SectionReveal>

            <SplitTextReveal
              text="TECHNOLOGY STACK & CONSTELLATION GRAPH"
              tag="h2"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans"
            />

            <SectionReveal delay={0.15}>
              <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed">
                A transparent inventory of tools, libraries, and frameworks deployed across AI agent development, machine learning pipelines, and smart hardware. Only tools actively used or in-progress learning are shown—no fabricated skill percentage bars.
              </p>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.2}>
            <ConstellationGraph />
          </SectionReveal>
        </div>
      </section>

      {/* 7. EDUCATION, DISTINCTIONS & ACHIEVEMENTS (Section ID: #education) */}
      <section id="education" className="relative py-24 bg-[#07070b]/90 z-10 border-b border-white/10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="space-y-4 max-w-3xl">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>CREDENTIAL RECORD // ACADEMIC &amp; BUILDATHONS</span>
              </div>
            </SectionReveal>

            <SplitTextReveal
              text="EDUCATION, DISTINCTIONS & ACHIEVEMENTS"
              tag="h2"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans"
            />

            <SectionReveal delay={0.15}>
              <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed">
                Verified academic track record demonstrating high analytical rigor, consecutive distinctions, intensive specialized software training, and competitive buildathon participation.
              </p>
            </SectionReveal>
          </div>

          {/* Academic Credentials Grid with Distinction Badges */}
          <div className="space-y-8">
            <SectionReveal>
              <div className="flex items-center justify-between font-mono text-xs text-cyan-400 pb-2 border-b border-white/5">
                <span className="font-bold flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>[ 01 // FORMAL EDUCATION &amp; INTENSIVE PROGRAMS ]</span>
                </span>
                <span className="text-slate-400">GRADES &amp; DISTINCTIONS</span>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationList.map((edu, idx) => (
                <SectionReveal key={edu.id} delay={idx * 0.08}>
                  <div className="rounded-2xl border border-white/10 bg-[#0d0d14] p-6 sm:p-8 h-full flex flex-col justify-between hover:border-cyan-500/40 transition-colors group">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <span className="font-mono text-xs text-cyan-400 px-2.5 py-1 rounded bg-cyan-950/50 border border-cyan-500/30 font-bold">
                          {edu.period}
                        </span>

                        <div className="flex items-center gap-2">
                          {edu.grade && (
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950/40 text-emerald-300 border border-emerald-500/40 shadow-sm">
                              <Award className="w-3.5 h-3.5 text-emerald-400" />
                              <span>
                                {edu.grade} — {edu.gradeBadge}
                              </span>
                            </div>
                          )}

                          <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                            {edu.status}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>

                      <div className="mt-1 text-xs font-mono text-slate-400">
                        {edu.institution} · {edu.location}
                      </div>

                      <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {edu.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5">
                      <div className="text-[11px] font-mono text-cyan-400/90 mb-2 uppercase">
                        Core Coursework &amp; Highlights:
                      </div>
                      <ul className="space-y-1.5">
                        {edu.highlights.map((h, hIdx) => (
                          <li
                            key={hIdx}
                            className="text-xs text-slate-400 font-sans flex items-start gap-2"
                          >
                            <span className="text-cyan-400 font-mono text-[10px] mt-0.5">
                              ▸
                            </span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>

          {/* Buildathons & Honors */}
          <div className="space-y-8">
            <SectionReveal>
              <div className="flex items-center justify-between font-mono text-xs text-cyan-400 pb-2 border-b border-white/5">
                <span className="font-bold flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>[ 02 // BUILDATHONS &amp; HONORS ]</span>
                </span>
                <span className="text-slate-400">COMPETITIVE SPRINT EXPERIENCE</span>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievementsList.map((item, idx) => (
                <SectionReveal key={item.id} delay={idx * 0.08}>
                  <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 hover:border-cyan-500/40 transition-colors group">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono text-cyan-400 font-bold">
                        {item.year} // {item.type.toUpperCase()}
                      </span>

                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold ${
                          item.requiresConfirmation
                            ? "bg-amber-950/40 text-amber-300 border border-amber-500/30"
                            : "bg-cyan-950/40 text-cyan-300 border border-cyan-500/30"
                        }`}
                      >
                        <FileBadge className="w-3.5 h-3.5" />
                        <span>{item.statusBadge}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-400 mb-3">
                      Organized by: {item.organization}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    {item.requiresConfirmation && (
                      // TODO: confirm Google Startup Buildathon line
                      <div className="mt-3 flex items-center gap-1.5 text-[10px] font-mono text-amber-400/90 bg-amber-950/20 p-2 rounded border border-amber-500/20">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>Note: Marked as &apos;Applied&apos; pending final confirmation.</span>
                      </div>
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONTACT & DIRECT TRANSMISSION (Section ID: #contact) */}
      <section id="contact" className="relative py-24 bg-[#050608] z-10 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-4 max-w-3xl">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>COMMUNICATION TERMINAL // SECURE DISPATCH</span>
              </div>
            </SectionReveal>

            <SplitTextReveal
              text="DIRECT TRANSMISSION & INQUIRIES"
              tag="h2"
              className="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase font-sans"
            />

            <SectionReveal delay={0.15}>
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
              <SectionReveal delay={0.2}>
                <ContactForm />
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
