import type { Metadata } from "next";
import Link from "next/link";
import { educationList, achievementsList } from "@/data/education";
import { SectionReveal, SplitTextReveal } from "@/components/ui/SectionReveal";
import {
  GraduationCap,
  Award,
  ShieldCheck,
  ArrowRight,
  Terminal,
  FileBadge,
  Sparkles,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Achievements",
  description:
    "Academic credentials, distinctions, and verified buildathon achievements of Mary Neha.",
};

export default function EducationPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>CREDENTIAL RECORD // ACADEMIC & BUILDATHONS</span>
          </div>
        </SectionReveal>

        <SplitTextReveal
          text="EDUCATION, DISTINCTIONS & ACHIEVEMENTS"
          tag="h1"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans"
        />

        <SectionReveal delay={0.2}>
          <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed">
            Verified academic track record demonstrating high analytical rigor, consecutive distinctions, intensive specialized software training, and competitive buildathon participation.
          </p>
        </SectionReveal>
      </div>

      {/* 1. Academic Credentials Grid with Grades */}
      <section className="space-y-8">
        <SectionReveal>
          <div className="flex items-center justify-between font-mono text-xs text-cyan-400 pb-2 border-b border-white/5">
            <span className="font-bold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>[ 01 // FORMAL EDUCATION & INTENSIVE PROGRAMS ]</span>
            </span>
            <span className="text-slate-400">GRADES & DISTINCTIONS</span>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationList.map((edu, idx) => (
            <SectionReveal key={edu.id} delay={idx * 0.1}>
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
                    Core Coursework & Highlights:
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
      </section>

      {/* 2. Buildathons & Honors */}
      <section className="space-y-8">
        <SectionReveal>
          <div className="flex items-center justify-between font-mono text-xs text-cyan-400 pb-2 border-b border-white/5">
            <span className="font-bold flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>[ 02 // BUILDATHONS & HONORS ]</span>
            </span>
            <span className="text-slate-400">COMPETITIVE SPRINT EXPERIENCE</span>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsList.map((item, idx) => (
            <SectionReveal key={item.id} delay={idx * 0.1}>
              <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 hover:border-cyan-500/40 transition-colors group">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono text-cyan-400 font-bold">
                    {item.year} // {item.type.toUpperCase()}
                  </span>

                  {/* Status Badge */}
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
      </section>

      {/* 3. Link to Self-Built Projects Notice */}
      <section className="rounded-2xl border border-white/10 bg-[#0e0e14]/70 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
            <ShieldCheck className="w-4 h-4" />
            <span>PRACTICAL INDUSTRY CAPABILITY</span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Replacing Traditional Experience with Rigorous Self-Built Systems
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            As an emerging engineer in training, all production capability is demonstrated through 6 rigorously documented, functioning AI and ML systems.
          </p>
        </div>

        <Link
          href="/projects"
          className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-mono text-xs font-bold uppercase tracking-wider hover:from-cyan-300 hover:to-blue-400 transition-all shadow-cyan-sm"
        >
          <span>View Self-Built Projects</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
