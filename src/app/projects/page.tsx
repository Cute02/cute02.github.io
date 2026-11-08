import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/ProjectFilter";
import { SectionReveal, SplitTextReveal } from "@/components/ui/SectionReveal";
import { Terminal, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore AI agents, machine learning pipelines, computer vision models, and IoT automation systems engineered by Mary Neha.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>SELF-BUILT PROJECTS // PRODUCTION ARCHITECTURES</span>
          </div>
        </SectionReveal>

        <SplitTextReveal
          text="AI AGENTS, ML MODELS & EMBEDDED SYSTEMS"
          tag="h1"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans"
        />

        <SectionReveal delay={0.2}>
          <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed">
            Every project listed here represents hands-on systems designed, programmed, and benchmarked by Mary Neha. Filter by classification to examine technical architecture and key highlights.
          </p>
        </SectionReveal>
      </div>

      {/* Filterable Project Grid Component */}
      <ProjectFilter />

      {/* Fact Check Guarantee Footer */}
      <div className="pt-10 border-t border-white/5 flex items-center justify-between font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>STRICT REPO ACCURACY: REPOS LINKED ONLY WHEN CONFIRMED</span>
        </div>
        <span className="hidden sm:inline">ALL CLAIMS VERIFIED</span>
      </div>
    </div>
  );
}
