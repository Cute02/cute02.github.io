"use client";

import { useState, useMemo } from "react";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { Terminal, Filter } from "lucide-react";

const CATEGORIES = [
  "All",
  "AI Agents & LLM",
  "ML",
  "Computer Vision",
  "IoT",
] as const;

export function ProjectFilter() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-2 rounded-2xl bg-[#0e0e14]/70 border border-white/10 backdrop-blur-md">
        <div className="flex items-center gap-2 px-3 py-1 text-xs font-mono text-cyan-400">
          <Filter className="w-3.5 h-3.5" />
          <span>FILTER CLASSIFICATION:</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? projects.length
                : projects.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                    : "bg-[#060609] border border-white/5 text-slate-300 hover:border-cyan-500/40 hover:text-white"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Filtered Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <SectionReveal key={project.id} delay={idx * 0.1}>
            <ProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>

      {/* Empty State Fallback */}
      {filteredProjects.length === 0 && (
        <div className="py-16 text-center text-slate-400 font-mono text-sm border border-white/10 rounded-xl bg-[#08080d]">
          <Terminal className="w-8 h-8 text-cyan-400 mx-auto mb-2 opacity-60" />
          <span>No project records matching category &quot;{selectedCategory}&quot;.</span>
        </div>
      )}
    </div>
  );
}
