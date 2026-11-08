"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { stackData, stackCategories, StackItem, StackCategory } from "@/data/stack";
import { Sparkles, BookOpen, Layers, Terminal } from "lucide-react";

interface NodePoint {
  item: StackItem;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export function ConstellationGraph() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<StackItem | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return stackData;
    return stackData.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 420);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 420;
    };

    window.addEventListener("resize", handleResize);

    // Initialize node physics points in an aesthetic radial constellation
    const nodes: NodePoint[] = filteredItems.map((item, idx) => {
      const angle = (idx / filteredItems.length) * Math.PI * 2;
      const radiusDist = Math.random() * (height * 0.35) + 60;
      return {
        item,
        x: width / 2 + Math.cos(angle) * radiusDist,
        y: height / 2 + Math.sin(angle) * (radiusDist * 0.7),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: item.status === "Core" ? 6 : 4.5,
      };
    });

    const categoryColors: Record<string, string> = {
      "AI & LLM": "#00D4FF",
      "ML & Data": "#38BDF8",
      "Backend & Data": "#818CF8",
      "Hardware & IoT": "#34D399",
      "Dev Tools": "#A78BFA",
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw center core network pulse in electric cyan
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, 28, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 212, 255, 0.06)";
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 212, 255, 0.35)";
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw connecting edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const sameCategory = nodes[i].item.category === nodes[j].item.category;
          const maxDist = sameCategory ? 160 : 100;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (sameCategory ? 0.4 : 0.12);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = sameCategory
              ? `rgba(0, 212, 255, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = sameCategory ? 1.2 : 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const isHovered = activeItem?.name === node.item.name;
        const color = categoryColors[node.item.category] || "#00D4FF";

        // Outer glow on hover or active
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 6, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 212, 255, 0.3)";
          ctx.fill();
        }

        // Inner node body
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.strokeStyle = "#030305";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Node label
        ctx.font = isHovered ? "bold 11px monospace" : "9px monospace";
        ctx.fillStyle = isHovered ? "#ffffff" : "rgba(226, 232, 240, 0.65)";
        ctx.fillText(node.item.name, node.x + 10, node.y + 3);

        // Update position within canvas boundaries
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 30 || node.x > width - 80) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [filteredItems, activeItem]);

  return (
    <div className="w-full space-y-6">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setSelectedCategory("All")}
          className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
            selectedCategory === "All"
              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.4)]"
              : "bg-[#0c0c12] border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-white"
          }`}
        >
          ALL NODES ({stackData.length})
        </button>

        {stackCategories.map((cat) => {
          const count = stackData.filter((i) => i.category === cat).length;
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all ${
                isActive
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.4)]"
                  : "bg-[#0c0c12] border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-white"
              }`}
            >
              {cat.toUpperCase()} ({count})
            </button>
          );
        })}
      </div>

      {/* Interactive Constellation Visual Canvas */}
      <div className="relative rounded-2xl border border-white/10 bg-[#07070b] overflow-hidden shadow-2xl">
        {/* Top bar with telemetry info */}
        <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>TOPOLOGY: ELECTRIC CYAN CONSTELLATION GRAPH</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>ACTIVE VIEW: {selectedCategory.toUpperCase()}</span>
            <span>TOTAL SKILLS: {filteredItems.length}</span>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          className="w-full h-[420px] cursor-crosshair block"
        />

        {/* Legend */}
        <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-slate-400 pointer-events-none">
          <div className="flex items-center gap-4 bg-[#030305]/90 px-3 py-1.5 rounded border border-white/10 backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span>Core Tool</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <span>Learning (No Fake Bars)</span>
            </span>
          </div>
          <div className="hidden md:block bg-[#030305]/90 px-3 py-1.5 rounded border border-white/10 backdrop-blur-md text-cyan-400">
            // INTERACTIVE TOPOLOGY MATRIX
          </div>
        </div>
      </div>

      {/* Grid of Nodes in Selected Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
        {filteredItems.map((item) => (
          <div
            key={item.name}
            onMouseEnter={() => setActiveItem(item)}
            onMouseLeave={() => setActiveItem(null)}
            className={`group rounded-xl border p-4 transition-all duration-300 ${
              activeItem?.name === item.name
                ? "border-cyan-500 bg-cyan-950/20 shadow-[0_0_20px_rgba(0,212,255,0.25)]"
                : "border-white/10 bg-[#0e0e14] hover:border-cyan-500/40"
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-mono text-xs">◆</span>
                <span className="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </span>
              </div>

              {item.status === "Learning" ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-amber-950/40 text-amber-300 border border-amber-500/30">
                  <BookOpen className="w-2.5 h-2.5" />
                  <span>Learning</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-cyan-950/40 text-cyan-400 border border-cyan-500/40">
                  <Sparkles className="w-2.5 h-2.5" />
                  <span>Core</span>
                </span>
              )}
            </div>

            <p className="mt-2.5 text-xs text-slate-300 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>{item.category}</span>
              <span className="text-cyan-500/70">VERIFIED USAGE</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
