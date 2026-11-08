"use client";

import { motion } from "framer-motion";

interface Chapter {
  id: string;
  number: string;
  name: string;
  targetId: string;
}

const CHAPTERS: Chapter[] = [
  { id: "agents", number: "01", name: "AI AGENTS", targetId: "chapter-agents" },
  { id: "nlp", number: "02", name: "NLP & BERT", targetId: "chapter-nlp" },
  { id: "ml", number: "03", name: "SUPERVISED ML", targetId: "chapter-ml" },
  { id: "iot", number: "04", name: "IOT EDGE", targetId: "chapter-iot" },
];

interface ChapterScrubberProps {
  activeChapter: number;
  onSelectChapter: (index: number) => void;
}

export function ChapterScrubber({
  activeChapter,
  onSelectChapter,
}: ChapterScrubberProps) {
  const handleChapterClick = (index: number, targetId: string) => {
    onSelectChapter(index);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative inline-flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#050608]/85 border border-white/10 backdrop-blur-xl shadow-2xl">
      {CHAPTERS.map((chap, idx) => {
        const isActive = activeChapter === idx;

        return (
          <button
            key={chap.id}
            type="button"
            onClick={() => handleChapterClick(idx, chap.targetId)}
            className={`relative px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-mono uppercase tracking-wider transition-all duration-300 flex items-center gap-1.5 ${
              isActive
                ? "text-cyan-400 font-bold"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeScrubberIndicator"
                className="absolute inset-0 rounded-full bg-cyan-950/40 border border-cyan-400/50 shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative z-10 text-[9px] text-cyan-500/70 font-bold">
              {chap.number}
            </span>
            <span className="relative z-10 hidden sm:inline">{chap.name}</span>
          </button>
        );
      })}
    </div>
  );
}
