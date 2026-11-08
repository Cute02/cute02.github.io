"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import {
  X,
  Github,
  Lock,
  CheckCircle2,
  Clock,
  Layers,
  Cpu,
  ShieldCheck,
  Terminal,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isCompleted = project.status === "Completed";

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#050608]/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-[#090b10] p-6 sm:p-8 shadow-2xl z-10 space-y-6 text-slate-100"
        >
          {/* Top Bar: Category, ID & Close Button */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-cyan-400">
                [{project.id}] // {project.category.toUpperCase()}
              </span>
              <div
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border ${
                  isCompleted
                    ? "bg-emerald-950/30 text-emerald-400 border-emerald-500/30"
                    : "bg-cyan-950/30 text-cyan-300 border-cyan-500/40"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                ) : (
                  <Clock className="w-3 h-3 text-cyan-400 animate-spin-slow" />
                )}
                <span>{project.status}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white uppercase font-sans">
              {project.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              {project.tagline}
            </p>
          </div>

          {/* Links Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono pt-1">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-400 text-black font-bold uppercase tracking-wider hover:bg-cyan-300 transition-colors shadow-cyan-sm"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0e0e14] border border-white/10 text-slate-400 text-[11px]">
                <Lock className="w-3.5 h-3.5 text-slate-400" />
                <span>Repository Status: Private / Coming soon</span>
              </div>
            )}

            <div className="text-slate-400 text-[11px]">
              Timeline: <span className="text-white font-semibold">{project.timeline || "2026"}</span>
            </div>
          </div>

          {/* Problem & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="rounded-xl border border-white/10 bg-[#0e0e14] p-5 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0e0e14] p-5 space-y-2">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Engineering Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Architecture Notes */}
          {project.architectureNotes && (
            <div className="rounded-xl border border-cyan-500/30 bg-[#060c14] p-5 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs text-cyan-400">
                <span className="font-bold flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>DATA FLOW & EXECUTION PIPELINE</span>
                </span>
                <span className="text-[10px] text-slate-400">LOW-LATENCY PIPELINE</span>
              </div>
              <div className="p-3.5 rounded-lg bg-black/40 border border-white/5 font-mono text-xs text-slate-200 overflow-x-auto whitespace-pre-wrap leading-relaxed">
                {project.architectureNotes}
              </div>
            </div>
          )}

          {/* Tech Stack */}
          <div className="rounded-xl border border-white/10 bg-[#0e0e14] p-5 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase">
              <Layers className="w-4 h-4" />
              <span>Technologies & Libraries</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="rounded-xl border border-white/10 bg-[#0e0e14] p-5 space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Engineering Highlights</span>
            </div>
            <ul className="space-y-2">
              {project.keyHighlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

