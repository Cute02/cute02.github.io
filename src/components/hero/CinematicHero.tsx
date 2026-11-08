"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Compass, ShieldCheck, Cpu } from "lucide-react";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import { ChapterScrubber } from "./ChapterScrubber";
import { EmbeddingTelemetryHUD } from "./EmbeddingTelemetryHUD";
import { EmbeddingSpaceFallback } from "./EmbeddingSpaceFallback";
import { EMBEDDING_NODES, EmbeddingNode } from "@/data/embeddings";
import dynamic from "next/dynamic";

// Dynamic import for Three.js Embedding Space with OrbitControls
const EmbeddingSpace3D = dynamic(
  () => import("./EmbeddingSpace3D").then((mod) => mod.EmbeddingSpace3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          <span>PROJECTING WIDE WORD EMBEDDING UNIVERSE (PCA/t-SNE)...</span>
        </div>
      </div>
    ),
  }
);

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeChapter, setActiveChapter] = useState(0);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);

  // Active selected skill/concept vector
  const [selectedNode, setSelectedNode] = useState<EmbeddingNode>(
    EMBEDDING_NODES.find((n) => n.id === "delulu") || EMBEDDING_NODES[0]
  );

  useEffect(() => {
    // Check prefers-reduced-motion
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(motionQuery.matches);

    // Check WebGL support
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      setWebGLSupported(Boolean(gl));
    } catch {
      setWebGLSupported(false);
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;

      const progress = Math.min(
        Math.max((windowHeight - rect.top) / (containerHeight + windowHeight), 0),
        1
      );
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between pt-20 pb-6 overflow-hidden bg-[#050608]"
    >
      {/* Top Telemetry Strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between font-mono text-[10px] sm:text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/40 border border-cyan-500/40 text-cyan-400 font-bold shadow-cyan-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>SYS: ONLINE // 2026</span>
          </div>
          <span className="hidden md:inline text-slate-600">·</span>
          <span className="hidden md:inline text-slate-300">
            3D WORD EMBEDDING UNIVERSE: LATENT SKILL VECTORS & COSINE SIMILARITY
          </span>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <div className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>9.9816° N, 76.2999° E [ERNAKULAM, IN]</span>
          </div>
        </div>
      </div>

      {/* Hero Headline & Identity Strip */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-2 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs font-mono mb-3 shadow-cyan-sm"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>AUTONOMOUS INTELLIGENCE // AI SOLUTION BUILDER</span>
        </motion.div>

        {/* Large Monumental Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase font-sans leading-tight"
        >
          WHERE LOGIC SHAPES AUTONOMOUS INTELLIGENCE.
        </motion.h1>

        {/* Tagline Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-2 text-base sm:text-xl font-mono text-cyan-400 font-medium"
        >
          Mary Neha · Building LLM agents and ML systems
        </motion.p>

        {/* Interactive Header Actions: Photo Slot & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 flex flex-wrap items-center justify-center gap-5"
        >
          <PhotoPlaceholder />

          <div className="flex items-center gap-3">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_20px_rgba(0,212,255,0.45)] hover:shadow-[0_0_30px_rgba(0,212,255,0.7)]"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-200 border border-white/15 hover:border-cyan-400/60 hover:text-white bg-surface-card/70 backdrop-blur-md transition-all hover:bg-white/5"
            >
              <span>Initiate Contact</span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* FULL-WIDTH IMMERSIVE 3D WORD EMBEDDING UNIVERSE */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-3">
        <div className="relative w-full h-[520px] sm:h-[600px] lg:h-[640px] rounded-2xl border border-white/10 bg-[#06080E]/90 overflow-hidden shadow-2xl">
          {/* Subtle Ambient Background Watermark Text ("NEHA") */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          >
            <span className="font-sans font-black text-[140px] sm:text-[220px] lg:text-[280px] tracking-widest text-cyan-500/[0.03]">
              NEHA
            </span>
          </div>

          {/* Full-Width Zoomable & Orbitable 3D Embedding Canvas */}
          <div className="w-full h-full relative z-10">
            {!prefersReducedMotion && webGLSupported ? (
              <EmbeddingSpace3D
                selectedNode={selectedNode}
                onSelectNode={(node) => setSelectedNode(node)}
                autoRotate={autoRotate}
              />
            ) : (
              <EmbeddingSpaceFallback
                selectedNode={selectedNode}
                onSelectNode={(node) => setSelectedNode(node)}
              />
            )}
          </div>

          {/* Overlaid Cosine Similarity & Vector Telemetry HUD */}
          <EmbeddingTelemetryHUD
            selectedNode={selectedNode}
            onSelectNode={(node) => setSelectedNode(node)}
            autoRotate={autoRotate}
            onToggleAutoRotate={() => setAutoRotate(!autoRotate)}
          />
        </div>
      </div>

      {/* Bottom Telemetry & Chapter Scrubber */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-3 border-t border-white/5">
        <div className="flex items-center gap-3 font-mono text-[11px] text-slate-400">
          <span className="text-cyan-400 font-bold">N · 04 DOMAINS</span>
          <span className="text-slate-600">/</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3" /> VERIFIED PIPELINE
          </span>
        </div>

        <ChapterScrubber
          activeChapter={activeChapter}
          onSelectChapter={(idx) => setActiveChapter(idx)}
        />

        <div className="font-mono text-[10px] text-slate-400 hidden sm:block text-right">
          <span>LATENCY: 14MS</span>
          <span className="text-slate-600 mx-2">·</span>
          <span className="text-cyan-400">DISPLACEMENT: {(scrollProgress * 100).toFixed(0)}%</span>
        </div>
      </div>
    </section>
  );
}
