"use client";

import { useMemo } from "react";
import {
  EmbeddingNode,
  EMBEDDING_NODES,
  getTopSimilarNodes,
} from "@/data/embeddings";
import {
  RotateCcw,
  Sparkles,
  Compass,
  Cpu,
  Eye,
  Sliders,
  Play,
  Pause,
} from "lucide-react";

interface EmbeddingTelemetryHUDProps {
  selectedNode: EmbeddingNode;
  onSelectNode: (node: EmbeddingNode) => void;
  autoRotate: boolean;
  onToggleAutoRotate: () => void;
}

export function EmbeddingTelemetryHUD({
  selectedNode,
  onSelectNode,
  autoRotate,
  onToggleAutoRotate,
}: EmbeddingTelemetryHUDProps) {
  const topSimilar = useMemo(() => {
    return getTopSimilarNodes(selectedNode.id, 5);
  }, [selectedNode]);

  // Featured anchor nodes for quick jump
  const quickAnchors = [
    "delulu",
    "bert",
    "zero-leakage",
    "text-to-sql",
    "esp8266",
    "ai-solution-builder",
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-20 flex flex-col justify-between p-2 sm:p-5 select-none">

      {/* ── TOP BAR ─────────────────────────────────────────────── */}
      <div className="flex items-start justify-between gap-2">

        {/* Top Left: Active Vector Telemetry — collapsed on mobile */}
        <div className="pointer-events-auto hud-bracket bg-[#050608]/85 backdrop-blur-md border border-white/10 p-2 sm:p-3 rounded-lg text-xs space-y-1 max-w-[160px] sm:max-w-xs">
          <div className="flex items-center gap-1.5 text-cyan-400 font-mono font-bold text-[10px]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping shrink-0" />
            <span className="hidden sm:inline">ACTIVE EMBEDDING VECTOR</span>
            <span className="sm:hidden">VECTOR</span>
          </div>
          <div className="text-white font-bold text-xs sm:text-sm tracking-wide truncate">
            {selectedNode.label}
          </div>
          <div className="text-[10px] font-mono text-slate-400">
            <span className="text-cyan-300">{selectedNode.category}</span>
          </div>
          {/* Description hidden on mobile to save vertical space */}
          <p className="hidden sm:block text-[10px] text-slate-300 line-clamp-2 leading-relaxed font-sans pt-0.5">
            {selectedNode.description}
          </p>
        </div>

        {/* Top Right: Formula + orbit toggle — formula hidden on mobile */}
        <div className="pointer-events-auto flex flex-col items-end gap-1.5 sm:gap-2">
          <div className="hidden sm:block hud-bracket bg-[#050608]/85 backdrop-blur-md border border-white/10 p-2 rounded text-[10px] font-mono text-slate-400 text-right space-y-0.5">
            <div className="text-cyan-400 font-bold">COSINE SIMILARITY METRIC</div>
            <div className="text-slate-200 font-serif italic text-xs">
              cos(θ) = (u · v) / (||u|| ||v||)
            </div>
            <div className="text-[9px] text-slate-400">
              SPACE: R^6 → R^3 ISOMETRIC PROJECTION
            </div>
          </div>

          <button
            type="button"
            onClick={onToggleAutoRotate}
            className={`px-2.5 sm:px-3 py-1 rounded-full text-[10px] font-mono tracking-wider transition-all flex items-center gap-1.5 border ${
              autoRotate
                ? "bg-cyan-950/60 border-cyan-400 text-cyan-300 shadow-cyan-sm"
                : "bg-[#0c1420]/80 border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            {autoRotate ? (
              <Pause className="w-3 h-3 text-cyan-400" />
            ) : (
              <Play className="w-3 h-3 text-slate-400" />
            )}
            <span className="hidden sm:inline">ORBIT: {autoRotate ? "ACTIVE" : "PAUSED"}</span>
            <span className="sm:hidden">{autoRotate ? "⏸" : "▶"}</span>
          </button>
        </div>
      </div>

      {/* ── BOTTOM BAR ───────────────────────────────────────────── */}
      <div className="flex flex-row items-end justify-between gap-2">

        {/* Bottom Left: Quick Jump Anchor Pills
            On mobile: show only 3 pills so they don't overflow */}
        <div className="pointer-events-auto flex flex-wrap items-center gap-1 bg-[#050608]/85 p-1.5 sm:p-2 rounded-lg border border-white/10 backdrop-blur-md max-w-[180px] sm:max-w-md">
          <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 mr-0.5 hidden sm:inline">
            TARGET:
          </span>
          {quickAnchors
            .slice(0, 6)   /* all 6 on desktop, filtered below on mobile */
            .map((anchorId, i) => {
              const node = EMBEDDING_NODES.find((n) => n.id === anchorId);
              if (!node) return null;
              const isSelected = selectedNode.id === node.id;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => onSelectNode(node)}
                  /* hide pills 4-6 on small screens to avoid crowding */
                  className={`px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono transition-all ${
                    i >= 3 ? "hidden sm:inline-block" : ""
                  } ${
                    isSelected
                      ? "bg-cyan-400 text-black font-bold shadow-cyan-sm"
                      : "bg-[#0f172a] text-slate-300 hover:text-white hover:border-cyan-500/40 border border-white/5"
                  }`}
                >
                  {node.label.replace(" (Agent)", "").replace(" (GoEmotions)", "")}
                </button>
              );
            })}
        </div>

        {/* Bottom Right: Cosine Similarity Ranking Card
            On mobile: collapsed to 3 results, full 5 on sm+ */}
        <div className="pointer-events-auto hud-bracket bg-[#050608]/90 backdrop-blur-md border border-white/10 p-2 sm:p-3 rounded-lg text-xs w-[160px] sm:w-72 space-y-1 sm:space-y-2 shrink-0">
          <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-mono border-b border-white/10 pb-1 sm:pb-1.5">
            <span className="text-cyan-400 font-bold flex items-center gap-1">
              <Sparkles className="w-3 h-3 shrink-0" />
              <span className="hidden sm:inline">NEAREST COGNATE VECTORS</span>
              <span className="sm:hidden">SIMILAR</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">SIMILARITY</span>
          </div>

          <div className="space-y-1 sm:space-y-1.5">
            {topSimilar
              .slice(0, 3)   /* 3 on mobile, all 5 visible via sm:block override */
              .map(({ node, similarity }, i) => (
                <div
                  key={node.id}
                  onClick={() => onSelectNode(node)}
                  className={`group/item flex items-center justify-between gap-1 sm:gap-2 p-0.5 sm:p-1 rounded hover:bg-white/5 cursor-pointer transition-colors`}
                >
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover/item:scale-125 transition-transform shrink-0" />
                    <span className="text-[9px] sm:text-[11px] font-mono text-slate-300 group-hover/item:text-white truncate">
                      {node.label}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 shrink-0">
                    <div className="w-8 sm:w-12 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"
                        style={{ width: `${Math.round(similarity * 100)}%` }}
                      />
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold text-cyan-400 w-7 sm:w-8 text-right">
                      {similarity.toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            {/* Rows 4–5 shown only on sm+ */}
            {topSimilar.slice(3).map(({ node, similarity }) => (
              <div
                key={node.id}
                onClick={() => onSelectNode(node)}
                className="hidden sm:flex group/item items-center justify-between gap-2 p-1 rounded hover:bg-white/5 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 group-hover/item:scale-125 transition-transform" />
                  <span className="text-[11px] font-mono text-slate-300 group-hover/item:text-white truncate">
                    {node.label}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <div className="w-12 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full"
                      style={{ width: `${Math.round(similarity * 100)}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-cyan-400 w-8 text-right">
                    {similarity.toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden sm:block pt-1 border-t border-white/5 text-[9px] font-mono text-slate-400 text-center">
            DRAG TO ORBIT · SCROLL TO ZOOM · CLICK NODE TO TEST
          </div>
        </div>
      </div>
    </div>
  );
}
