"use client";

import { useState, useRef, MouseEvent } from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, Github, Lock, CheckCircle2, Clock } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
  onSelect?: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // Subtle 3D tilt calculation
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -6;
    const tiltY = ((x - centerX) / centerX) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(project);
    }
  };

  const isCompleted = project.status === "Completed";

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)",
        transition: isHovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
      }}
      className="group relative rounded-xl bg-gradient-to-b from-[#0e0e14] to-[#07070b] border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-lg transition-colors hover:border-cyan-500/50"
    >
      {/* Dynamic Cursor-Following Cyan Border Glow */}
      <div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(0, 212, 255, 0.25), transparent 70%)`,
        }}
      />

      {/* Top Header: ID, Category & Status Badge */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400">
              [{project.id}]
            </span>
            <span className="text-[10px] font-mono tracking-wider text-slate-400 uppercase">
              {project.category}
            </span>
          </div>

          {/* Status Badge */}
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

        {/* Title */}
        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
          {onSelect ? (
            <button
              type="button"
              onClick={handleCardClick}
              className="text-left hover:underline flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ) : (
            <Link
              href={`/projects/${project.slug}`}
              className="hover:underline flex items-center gap-2 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </h3>

        {/* Verified One-Line Summary */}
        <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-3">
          {project.tagline}
        </p>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 border border-white/10 text-slate-300 group-hover:border-cyan-500/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Action Links */}
      <div className="relative z-10 mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono">
        {onSelect ? (
          <button
            type="button"
            onClick={handleCardClick}
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1.5"
          >
            <span>Deep Dive Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <Link
            href={`/projects/${project.slug}`}
            className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium flex items-center gap-1.5"
          >
            <span>Deep Dive Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        )}

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Repository</span>
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-slate-400 text-[11px] cursor-not-allowed">
            <Lock className="w-3 h-3 text-slate-400" />
            <span>Private / Coming soon</span>
          </span>
        )}
      </div>
    </div>
  );
}
