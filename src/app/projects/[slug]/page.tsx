import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { SectionReveal, SplitTextReveal } from "@/components/ui/SectionReveal";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  Lock,
  CheckCircle2,
  Clock,
  Layers,
  Terminal,
  Activity,
  ShieldCheck,
  Cpu,
} from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
  };
}

export default function ProjectCaseStudyPage({ params }: PageProps) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug);
  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? projects[projectIndex - 1] : projects[projects.length - 1];
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : projects[0];

  const isCompleted = project.status === "Completed";

  return (
    <div className="pt-28 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Back button & Breadcrumbs */}
      <div className="flex items-center justify-between text-xs font-mono">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>BACK TO ALL PROJECTS</span>
        </Link>

        <div className="flex items-center gap-2 text-slate-400">
          <span>PROJECT {project.id} OF 06</span>
          <span className="text-cyan-500/70">·</span>
          <span>{project.category}</span>
        </div>
      </div>

      {/* Main Title & Tagline */}
      <header className="space-y-4 border-b border-white/10 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono bg-cyan-950/40 border border-cyan-500/40 text-cyan-400">
            <Terminal className="w-3.5 h-3.5" />
            <span>CASE STUDY // TECHNICAL SPECIFICATION</span>
          </div>

          {/* Status Badge */}
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border ${
              isCompleted
                ? "bg-emerald-950/30 text-emerald-400 border-emerald-500/30"
                : "bg-cyan-950/30 text-cyan-300 border-cyan-500/40"
            }`}
          >
            {isCompleted ? (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            ) : (
              <Clock className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            )}
            <span>{project.status}</span>
          </div>
        </div>

        <SplitTextReveal
          text={project.title}
          tag="h1"
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans"
        />

        <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans max-w-3xl">
          {project.tagline}
        </p>

        {/* Links Bar */}
        <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold uppercase tracking-wider hover:from-cyan-300 hover:to-blue-400 transition-colors shadow-cyan-sm"
            >
              <Github className="w-4 h-4" />
              <span>View Source Code</span>
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0e0e14] border border-white/10 text-slate-400">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              <span>Repository Status: Private / Coming soon</span>
            </div>
          )}

          <div className="text-slate-400">
            Timeline: <span className="text-white">{project.timeline || "2026"}</span>
          </div>
        </div>
      </header>

      {/* Grid: Problem & Approach */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Problem */}
        <SectionReveal delay={0.1}>
          <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 h-full space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>The Problem Statement</span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Challenge & Constraints
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
        </SectionReveal>

        {/* Approach */}
        <SectionReveal delay={0.2}>
          <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 h-full space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Engineering Approach</span>
            </div>
            <h2 className="text-lg font-bold text-white tracking-tight">
              Architectural Solution
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.approach}
            </p>
          </div>
        </SectionReveal>
      </div>

      {/* Architecture Dataflow Box */}
      {project.architectureNotes && (
        <SectionReveal delay={0.25}>
          <div className="rounded-xl border border-cyan-500/30 bg-[#050c14] p-6 space-y-3">
            <div className="flex items-center justify-between font-mono text-xs text-cyan-400">
              <span className="font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>EXECUTION PIPELINE // DATA FLOW ARCHITECTURE</span>
              </span>
              <span className="text-[10px] text-slate-400 hidden sm:inline">
                LOW-LATENCY PIPELINE
              </span>
            </div>
            <div className="p-4 rounded-lg bg-[#040406] border border-white/5 font-mono text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {project.architectureNotes}
            </div>
          </div>
        </SectionReveal>
      )}

      {/* Tech Stack */}
      <SectionReveal delay={0.3}>
        <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
            <Layers className="w-4 h-4" />
            <span>Technologies & Libraries Deployed</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Key Highlights */}
      <SectionReveal delay={0.35}>
        <div className="rounded-xl border border-white/10 bg-[#0d0d14] p-6 space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase">
            <ShieldCheck className="w-4 h-4" />
            <span>Key Engineering Highlights & Verification</span>
          </div>

          <ul className="space-y-3">
            {project.keyHighlights.map((highlight, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-xs sm:text-sm text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>

      {/* Next / Previous Project Navigation */}
      <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
        <Link
          href={`/projects/${prevProject.slug}`}
          className="flex flex-col p-4 rounded-xl border border-white/5 bg-[#0e0e14]/60 hover:border-cyan-500/40 transition-colors group"
        >
          <span className="text-slate-400 flex items-center gap-1.5 mb-1 text-[11px]">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS PROJECT</span>
          </span>
          <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
            {prevProject.title}
          </span>
        </Link>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="flex flex-col items-end text-right p-4 rounded-xl border border-white/5 bg-[#0e0e14]/60 hover:border-cyan-500/40 transition-colors group"
        >
          <span className="text-slate-400 flex items-center gap-1.5 mb-1 text-[11px]">
            <span>NEXT PROJECT</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
          <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
            {nextProject.title}
          </span>
        </Link>
      </div>
    </div>
  );
}
