import type { Metadata } from "next";
import Link from "next/link";
import { SectionReveal, SplitTextReveal } from "@/components/ui/SectionReveal";
import { educationList } from "@/data/education";
import {
  FileCode,
  Hammer,
  CheckCircle,
  Rocket,
  Shield,
  Cpu,
  GraduationCap,
  ArrowRight,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Mary Neha, AI Solution Builder and ML Engineer in training. Background, engineering philosophy, education timeline, and development methodology.",
};

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

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      {/* 1. Header & Three Exact Paragraphs */}
      <section className="space-y-8 max-w-4xl">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>BIOGRAPHY & BACKGROUND // VERIFIED FACTS</span>
          </div>
        </SectionReveal>

        <SplitTextReveal
          text="AI SOLUTION BUILDER & ML ENGINEER IN TRAINING"
          tag="h1"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans"
        />

        {/* 3 Short Paragraphs (Exact facts, first person, strictly matching prompt) */}
        <SectionReveal delay={0.2}>
          <div className="rounded-2xl border border-white/10 bg-[#0e0e14]/70 p-6 sm:p-10 space-y-6 text-slate-200 text-base sm:text-lg leading-relaxed font-sans shadow-xl">
            <p className="border-l-2 border-cyan-400 pl-4 py-1">
              I&apos;m Mary Neha, an AI Solution Builder training at Brototype in Kochi, and a BCA student in Machine Learning & AI at Jain University.
            </p>

            <p className="border-l-2 border-white/20 pl-4 py-1">
              I build LLM agents, ML models, and smart hardware systems. My recent work includes Delulu, a Text-to-SQL agent, and Mitra, a BERT-based emotion detector.
            </p>

            <p className="border-l-2 border-cyan-400 pl-4 py-1">
              My goal is to become an ML engineer who builds AI systems that are reliable, secure, and useful in production. My background in cybersecurity and hardware shapes how I think about them.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* 2. "HOW I WORK" SECTION (Explain → Build → Test → Ship) */}
      <section className="space-y-10">
        <div>
          <SectionReveal>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              [ METHODOLOGY // 4-STAGE PIPELINE ]
            </div>
          </SectionReveal>
          <SplitTextReveal
            text="HOW I WORK: EXPLAIN → BUILD → TEST → SHIP"
            tag="h2"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase font-sans"
          />
          <SectionReveal delay={0.1}>
            <p className="mt-2 text-xs sm:text-sm font-mono text-slate-400 max-w-2xl">
              A systematic engineering methodology designed to guarantee reproducibility, verifiable claims, and secure production behavior.
            </p>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((wf, idx) => {
            const Icon = wf.icon;
            return (
              <SectionReveal key={wf.step} delay={idx * 0.12}>
                <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 h-full flex flex-col justify-between hover:border-cyan-500/40 transition-colors group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-bold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30">
                        {wf.step}
                      </span>
                      <Icon className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    </div>
                    <div className="font-mono text-lg font-bold text-white mb-2">
                      {wf.name}
                    </div>
                    <h3 className="text-xs font-mono text-cyan-300 mb-2">
                      {wf.headline}
                    </h3>
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
      </section>

      {/* 3. TIMELINE OF EDUCATION */}
      <section className="space-y-10">
        <div>
          <SectionReveal>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
              [ ACADEMIC & VOCATIONAL ROADMAP ]
            </div>
          </SectionReveal>
          <SplitTextReveal
            text="EDUCATION & TECHNICAL TRAINING TIMELINE"
            tag="h2"
            className="text-2xl sm:text-4xl font-bold tracking-tight text-white uppercase font-sans"
          />
        </div>

        <div className="space-y-6 relative border-l-2 border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8">
          {educationList.map((edu, idx) => (
            <SectionReveal key={edu.id} delay={idx * 0.1}>
              <div className="relative group">
                {/* Node indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#030305] border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-cyan-sm" />

                <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 hover:border-cyan-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 font-mono text-xs">
                    <span className="text-cyan-400 font-bold">
                      {edu.period}
                    </span>
                    <div className="flex items-center gap-2">
                      {edu.grade && (
                        <span className="px-2 py-0.5 rounded bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 font-semibold text-[11px]">
                          {edu.grade} ({edu.gradeBadge})
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10 text-[11px]">
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h3>
                  <div className="text-xs font-mono text-slate-400 mb-3">
                    {edu.institution} · {edu.location}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h, hIdx) => (
                      <span
                        key={hIdx}
                        className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/5 text-slate-400"
                      >
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* 4. Bottom Nav to Projects */}
      <section className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
        <div className="text-slate-400">
          Want to see these principles in practice?
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold uppercase tracking-wider hover:from-cyan-300 hover:to-blue-400 transition-colors shadow-cyan-sm"
        >
          <span>Examine Project Case Studies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
