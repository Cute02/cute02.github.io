"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import {
  EMBEDDING_NODES,
  EmbeddingNode,
  getTopSimilarNodes,
} from "@/data/embeddings";

interface EmbeddingSpaceFallbackProps {
  selectedNode: EmbeddingNode;
  onSelectNode: (node: EmbeddingNode) => void;
}

export function EmbeddingSpaceFallback({
  selectedNode,
  onSelectNode,
}: EmbeddingSpaceFallbackProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const topNeighbors = useMemo(() => {
    return getTopSimilarNodes(selectedNode.id, 6);
  }, [selectedNode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 500;
    };

    window.addEventListener("resize", handleResize);

    const project2D = (pos: [number, number, number]): [number, number] => {
      const [x, y, z] = pos;
      const scale = 75;
      const px = width / 2 + x * scale + z * 18;
      const py = height / 2 - y * scale + z * 12;
      return [px, py];
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect selected node to nearest neighbors
      const [sx, sy] = project2D(selectedNode.position);

      topNeighbors.forEach(({ node, similarity }) => {
        if (similarity > 0.6) {
          const [nx, ny] = project2D(node.position);
          ctx.beginPath();
          ctx.moveTo(sx, sy);
          ctx.lineTo(nx, ny);
          ctx.strokeStyle = `rgba(0, 212, 255, ${similarity * 0.85})`;
          ctx.lineWidth = similarity * 2;
          ctx.stroke();
        }
      });

      // Render Nodes
      EMBEDDING_NODES.forEach((node) => {
        const [px, py] = project2D(node.position);
        const isSelected = selectedNode.id === node.id;
        const neighbor = topNeighbors.find((tn) => tn.node.id === node.id);
        const isNeighbor = Boolean(neighbor);

        // Node circle
        ctx.beginPath();
        ctx.arc(px, py, isSelected ? 8 : isNeighbor ? 6 : 4, 0, Math.PI * 2);
        ctx.fillStyle = isSelected
          ? "#FFFFFF"
          : isNeighbor
          ? "#00D4FF"
          : "rgba(0, 212, 255, 0.4)";
        ctx.fill();

        if (isSelected) {
          ctx.strokeStyle = "#00D4FF";
          ctx.lineWidth = 3;
          ctx.stroke();
        }

        // Label
        ctx.font = isSelected ? "bold 11px monospace" : "9px monospace";
        ctx.fillStyle = isSelected
          ? "#FFFFFF"
          : isNeighbor
          ? "#67E5FA"
          : "rgba(226, 232, 240, 0.65)";
        ctx.fillText(node.label, px + 10, py + 3);
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, [selectedNode, topNeighbors]);

  return (
    <div className="w-full h-full relative cursor-crosshair">
      <canvas ref={canvasRef} className="w-full h-[500px] block" />
    </div>
  );
}
