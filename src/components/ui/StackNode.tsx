"use client";

import { StackItem } from "@/data/stack";
import { Sparkles, BookOpen } from "lucide-react";

interface StackNodeProps {
  item: StackItem;
  isActive?: boolean;
  onClick?: () => void;
}

export function StackNode({ item, isActive, onClick }: StackNodeProps) {
  const isLearning = item.status === "Learning";

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-xl border p-4 transition-all duration-300 cursor-pointer ${
        isActive
          ? "border-cyan-500 bg-cyan-950/30 shadow-[0_0_20px_rgba(0,212,255,0.25)]"
          : "border-white/10 bg-[#0e0e14]/70 hover:border-cyan-500/40 hover:bg-[#0e0e14]"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h4 className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
          {item.name}
        </h4>

        {isLearning ? (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-amber-950/40 text-amber-300 border border-amber-500/30">
            <BookOpen className="w-2.5 h-2.5" />
            <span>Learning</span>
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider bg-cyan-950/40 text-cyan-400 border border-cyan-500/30">
            <Sparkles className="w-2.5 h-2.5" />
            <span>Active</span>
          </span>
        )}
      </div>

      <p className="mt-2 text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
        {item.description}
      </p>

      <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-slate-400">
        <span>{item.category}</span>
        <span className="text-cyan-500/70 group-hover:text-cyan-400 transition-colors">
          // NODE
        </span>
      </div>
    </div>
  );
}
