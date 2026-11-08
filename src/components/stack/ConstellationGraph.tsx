"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { stackData, stackCategories, StackItem } from "@/data/stack";
import { Sparkles, BookOpen, Layers, Terminal } from "lucide-react";

interface NodePoint {
  item: StackItem;
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  category: string;
}

function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y, x + r, y + h);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export function ConstellationGraph() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<StackItem | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const nodesRef = useRef<NodePoint[]>([]);

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
    let width = canvas.parentElement?.clientWidth || 900;
    let height = width < 640 ? 440 : 520;

    const categoryColors: Record<string, string> = {
      "AI & LLM": "#00D4FF",
      "ML & Data": "#38BDF8",
      "Backend & Data": "#818CF8",
      "Hardware & IoT": "#34D399",
      "Dev Tools": "#A78BFA",
    };

    // Category cluster centers for natural astronomical galaxy formation
    const clusterCenters: Record<string, { ox: number; oy: number }> = {
      "AI & LLM": { ox: -0.22, oy: -0.22 },
      "ML & Data": { ox: 0.22, oy: -0.22 },
      "Backend & Data": { ox: -0.25, oy: 0.2 },
      "Hardware & IoT": { ox: 0.0, oy: 0.28 },
      "Dev Tools": { ox: 0.25, oy: 0.2 },
    };

    const setupDPIAndSize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.parentElement.clientWidth || 900;
      height = width < 640 ? 440 : 520;

      // High-DPI Retina scaling for razor-sharp canvas text and lines
      const dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    setupDPIAndSize();

    // Initialize node physics points with clean cluster layout & generous spacing
    const centerX = width / 2;
    const centerY = height / 2;

    const initializedNodes: NodePoint[] = filteredItems.map((item, idx) => {
      let baseX = centerX;
      let baseY = centerY;

      if (selectedCategory === "All") {
        const offset = clusterCenters[item.category] || { ox: 0, oy: 0 };
        const clusterCenterX = centerX + offset.ox * width;
        const clusterCenterY = centerY + offset.oy * height;

        const categoryGroup = filteredItems.filter((i) => i.category === item.category);
        const subIndex = categoryGroup.findIndex((i) => i.name === item.name);
        const subAngle = (subIndex / Math.max(1, categoryGroup.length)) * Math.PI * 2;
        const spreadRadius = 45 + (subIndex % 3) * 28;

        baseX = clusterCenterX + Math.cos(subAngle) * spreadRadius;
        baseY = clusterCenterY + Math.sin(subAngle) * spreadRadius;
      } else {
        const angle = (idx / filteredItems.length) * Math.PI * 2;
        const radiusDist = 70 + (idx % 3) * 45;
        baseX = centerX + Math.cos(angle) * (radiusDist * 1.3);
        baseY = centerY + Math.sin(angle) * radiusDist;
      }

      // Constrain within safe canvas margins
      baseX = Math.max(45, Math.min(width - 140, baseX));
      baseY = Math.max(35, Math.min(height - 40, baseY));

      return {
        item,
        x: baseX,
        y: baseY,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: item.status === "Core" ? 5.5 : 4.5,
        category: item.category,
      };
    });

    nodesRef.current = initializedNodes;

    const handleResize = () => {
      setupDPIAndSize();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let foundNode: StackItem | null = null;
      for (const node of nodesRef.current) {
        const dist = Math.hypot(node.x - mouseX, node.y - mouseY);
        // Generous hit area around node dot and label badge
        if (dist < 26 || (mouseX >= node.x && mouseX <= node.x + 90 && Math.abs(node.y - mouseY) < 14)) {
          foundNode = node.item;
          break;
        }
      }

      if (foundNode) {
        setActiveItem(foundNode);
        canvas.style.cursor = "pointer";
      } else {
        canvas.style.cursor = "crosshair";
      }
    };

    const handleMouseLeave = () => {
      setActiveItem(null);
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    let pulseStep = 0;

    const render = () => {
      pulseStep += 0.02;
      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;

      // 1. Draw subtle ambient cyber grid in background
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw central galaxy orbital ring and telemetry pulses
      ctx.beginPath();
      ctx.arc(centerX, centerY, 32 + Math.sin(pulseStep) * 3, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 212, 255, 0.04)";
      ctx.fill();
      ctx.strokeStyle = "rgba(0, 212, 255, 0.25)";
      ctx.setLineDash([3, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.beginPath();
      ctx.arc(centerX, centerY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#00D4FF";
      ctx.fill();

      // 3. Pairwise repulsion physics to prevent label collision and clumping
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy) || 1;
          const minDist = 80;

          if (dist < minDist) {
            const force = ((minDist - dist) / minDist) * 0.08;
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;
            nodes[i].vx += fx;
            nodes[i].vy += fy;
            nodes[j].vx -= fx;
            nodes[j].vy -= fy;
          }
        }
      }

      // 4. Connecting constellation edges (drawn BEHIND nodes so text is never cut)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);

          const sameCategory = nodes[i].item.category === nodes[j].item.category;
          const maxDist = sameCategory ? 165 : 85;

          if (dist < maxDist) {
            const isHighlighted =
              activeItem &&
              (activeItem.name === nodes[i].item.name || activeItem.name === nodes[j].item.name);

            const baseAlpha = (1 - dist / maxDist) * (sameCategory ? 0.38 : 0.1);
            const alpha = isHighlighted ? 0.85 : baseAlpha;

            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);

            if (isHighlighted) {
              ctx.strokeStyle = "rgba(0, 212, 255, 0.9)";
              ctx.lineWidth = 1.8;
            } else {
              ctx.strokeStyle = sameCategory
                ? `rgba(0, 212, 255, ${alpha})`
                : `rgba(255, 255, 255, ${alpha})`;
              ctx.lineWidth = sameCategory ? 1.0 : 0.5;
            }
            ctx.stroke();
          }
        }
      }

      // 5. Draw Nodes & Ultra-Crisp Backdrop Badges
      for (const node of nodes) {
        const isHovered = activeItem?.name === node.item.name;
        const color = categoryColors[node.category] || "#00D4FF";

        // Update physics position
        node.vx = Math.max(-0.35, Math.min(0.35, node.vx * 0.99));
        node.vy = Math.max(-0.35, Math.min(0.35, node.vy * 0.99));
        node.x += node.vx;
        node.y += node.vy;

        // Boundary containment
        const marginX = 40;
        const marginY = 30;
        if (node.x < marginX) {
          node.x = marginX;
          node.vx = Math.abs(node.vx);
        }
        if (node.x > width - marginX - 110) {
          node.x = width - marginX - 110;
          node.vx = -Math.abs(node.vx);
        }
        if (node.y < marginY) {
          node.y = marginY;
          node.vy = Math.abs(node.vy);
        }
        if (node.y > height - marginY) {
          node.y = height - marginY;
          node.vy = -Math.abs(node.vy);
        }

        // Draw pulsing halo if hovered
        if (isHovered) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 8 + Math.sin(pulseStep * 3) * 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 212, 255, 0.25)";
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius + 4, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(0, 212, 255, 0.5)";
          ctx.fill();
        }

        // Node dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isHovered ? "#FFFFFF" : color;
        ctx.fill();
        ctx.strokeStyle = "#050608";
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // 6. HIGH-QUALITY CRISP LABEL BADGE
        // Uses crisp mono font and dark contrast backdrop pill so letters never blur or clash with lines
        ctx.font = isHovered
          ? "700 12px ui-monospace, 'JetBrains Mono', 'Space Mono', Consolas, monospace"
          : "600 11px ui-monospace, 'JetBrains Mono', 'Space Mono', Consolas, monospace";

        const labelText = node.item.name;
        const textMetrics = ctx.measureText(labelText);
        const textWidth = textMetrics.width;

        const badgePadX = 6;
        const badgeWidth = textWidth + badgePadX * 2;
        const badgeHeight = 18;

        // Position badge to the right or flip left if close to edge
        let badgeX = node.x + node.radius + 6;
        if (badgeX + badgeWidth > width - 15) {
          badgeX = node.x - node.radius - 6 - badgeWidth;
        }
        const badgeY = node.y - badgeHeight / 2;

        // Draw dark translucent backdrop pill
        ctx.fillStyle = isHovered
          ? "rgba(4, 28, 44, 0.96)"
          : "rgba(9, 12, 18, 0.88)";
        drawRoundedRect(ctx, badgeX, badgeY, badgeWidth, badgeHeight, 4);
        ctx.fill();

        // Badge border
        ctx.strokeStyle = isHovered
          ? "#00D4FF"
          : node.item.status === "Learning"
          ? "rgba(245, 158, 11, 0.25)"
          : "rgba(255, 255, 255, 0.1)";
        ctx.lineWidth = isHovered ? 1.5 : 1;
        ctx.stroke();

        // High-contrast razor-sharp text
        ctx.fillStyle = isHovered
          ? "#00D4FF"
          : node.item.status === "Learning"
          ? "#FCD34D"
          : "#F1F5F9";
        ctx.textBaseline = "middle";
        ctx.fillText(labelText, badgeX + badgePadX, node.y);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [filteredItems, activeItem, selectedCategory]);

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
        <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between font-mono text-[11px] text-slate-400 bg-[#090b10]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-semibold">TOPOLOGY: RETINA HIGH-DEFINITION CONSTELLATION GRAPH</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span>ACTIVE VIEW: <span className="text-cyan-400 font-bold">{selectedCategory.toUpperCase()}</span></span>
            <span>TOTAL SKILLS: <span className="text-white">{filteredItems.length}</span></span>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          className="w-full h-[440px] sm:h-[520px] cursor-crosshair block"
        />

        {/* Legend & Instructions */}
        <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-slate-400 pointer-events-none">
          <div className="flex items-center gap-4 bg-[#030305]/95 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
              <span className="text-slate-200">Core Tool</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span className="text-amber-300">Learning (No Fake Bars)</span>
            </span>
          </div>
          <div className="hidden md:block bg-[#030305]/95 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md text-cyan-400 font-bold">
            // HOVER ANY NODE FOR TELEMETRY
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
                ? "border-cyan-500 bg-cyan-950/20 shadow-[0_0_20px_rgba(0,212,255,0.25)] ring-1 ring-cyan-500/50"
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
              <span className="text-slate-400">{item.category}</span>
              <span className="text-cyan-500/80 font-semibold">VERIFIED USAGE</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
