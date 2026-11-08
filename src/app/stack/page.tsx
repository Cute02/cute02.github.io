import type { Metadata } from "next";
import { ConstellationGraph } from "@/components/stack/ConstellationGraph";
import { SectionReveal, SplitTextReveal } from "@/components/ui/SectionReveal";
import { Terminal, ShieldCheck, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Stack",
  description:
    "Interactive technology constellation and tool graph of Mary Neha: AI & LLM, Machine Learning & Data, Backend, Hardware & IoT, and Developer Tooling.",
};

export default function StackPage() {
  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <SectionReveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>TOPOLOGY MATRIX // VERIFIED CAPABILITIES</span>
          </div>
        </SectionReveal>

        <SplitTextReveal
          text="TECHNOLOGY STACK & CONSTELLATION GRAPH"
          tag="h1"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans"
        />

        <SectionReveal delay={0.2}>
          <p className="text-sm sm:text-base font-mono text-slate-400 leading-relaxed">
            A transparent inventory of tools, libraries, and frameworks deployed across AI agent development, machine learning pipelines, and smart hardware. Only tools actively used in production or marked as in-progress learning are presented—no fabricated percentage bars.
          </p>
        </SectionReveal>
      </div>

      {/* Interactive Constellation Visual Map */}
      <SectionReveal delay={0.3}>
        <ConstellationGraph />
      </SectionReveal>

      {/* Verification Standard Banner */}
      <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>TRANSPARENCY STANDARD: SKILLS MARKED HONESTLY AS ACTIVE OR LEARNING</span>
        </div>
        <span className="text-cyan-400/90">NO INVENTED METRICS</span>
      </div>
    </div>
  );
}
