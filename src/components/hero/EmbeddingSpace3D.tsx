"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import {
  EMBEDDING_NODES,
  EmbeddingNode,
  calculateCosineSimilarity,
  getTopSimilarNodes,
} from "@/data/embeddings";

interface EmbeddingSpace3DProps {
  selectedNode: EmbeddingNode;
  onSelectNode: (node: EmbeddingNode) => void;
  autoRotate?: boolean;
}

const CATEGORY_COLORS: Record<string, string> = {
  "AI & LLM": "#00D4FF",
  "ML & Data": "#38BDF8",
  "Backend": "#818CF8",
  "IoT & Hardware": "#34D399",
  "Core Identity": "#FFFFFF",
};

function EmbeddingScene({
  selectedNode,
  onSelectNode,
  autoRotate = false,
}: EmbeddingSpace3DProps) {
  const controlsRef = useRef<any>(null);
  const [hoveredNode, setHoveredNode] = useState<EmbeddingNode | null>(null);

  // Compute top similar neighbors to selected node
  const topNeighbors = useMemo(() => {
    return getTopSimilarNodes(selectedNode.id, 6);
  }, [selectedNode]);

  // Build connecting vector chords between selected node and top similar neighbors
  const linePositions = useMemo(() => {
    const coords: number[] = [];
    const [sx, sy, sz] = selectedNode.position;

    topNeighbors.forEach(({ node, similarity }) => {
      if (similarity > 0.6) {
        coords.push(sx, sy, sz);
        coords.push(node.position[0], node.position[1], node.position[2]);
      }
    });

    return new Float32Array(coords);
  }, [selectedNode, topNeighbors]);

  // Subtle ambient rotation when autoRotate is on
  useFrame((_, delta) => {
    if (autoRotate && controlsRef.current) {
      controlsRef.current.autoRotate = true;
      controlsRef.current.autoRotateSpeed = 0.8;
      controlsRef.current.update();
    } else if (controlsRef.current) {
      controlsRef.current.autoRotate = false;
    }
  });

  return (
    <>
      <OrbitControls
        ref={controlsRef}
        enablePan={true}
        enableZoom={true}
        minDistance={2.5}
        maxDistance={12}
        rotateSpeed={0.8}
        zoomSpeed={1.0}
        dampingFactor={0.05}
        enableDamping={true}
      />

      <ambientLight intensity={0.4} />
      <pointLight position={[5, 8, 5]} intensity={1.5} color="#FFFFFF" />
      <pointLight position={[-5, -5, -5]} intensity={2.0} color="#00D4FF" />

      {/* Origin reference coordinate plane */}
      <gridHelper args={[10, 20, 0x0f2b38, 0x09141c]} position={[0, -2.4, 0]} />

      {/* Vector Chords linking active node to nearest cosine neighbors */}
      {linePositions.length > 0 && (
        <lineSegments>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={linePositions.length / 3}
              array={linePositions}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial
            color="#00D4FF"
            transparent
            opacity={0.8}
            linewidth={1.5}
          />
        </lineSegments>
      )}

      {/* Embedding Nodes in 3D Space */}
      {EMBEDDING_NODES.map((node) => {
        const isSelected = selectedNode.id === node.id;
        const isHovered = hoveredNode?.id === node.id;
        const neighbor = topNeighbors.find((tn) => tn.node.id === node.id);
        const similarity = isSelected ? 1.0 : neighbor ? neighbor.similarity : 0;
        const isHighSim = similarity > 0.75;

        const color = CATEGORY_COLORS[node.category] || "#00D4FF";

        return (
          <group key={node.id} position={node.position}>
            {/* 3D Sphere Node */}
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                onSelectNode(node);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                setHoveredNode(node);
              }}
              onPointerOut={() => setHoveredNode(null)}
              scale={isSelected ? 1.5 : isHovered ? 1.3 : isHighSim ? 1.15 : 0.9}
            >
              <sphereGeometry args={[0.09, 20, 20]} />
              <meshStandardMaterial
                color={isSelected ? "#FFFFFF" : color}
                emissive={isSelected ? "#00D4FF" : isHighSim ? color : "#000000"}
                emissiveIntensity={isSelected ? 2.5 : isHighSim ? 1.2 : 0.2}
                roughness={0.2}
                metalness={0.8}
              />
            </mesh>

            {/* Glowing Ring for Selected or Nearest Neighbors */}
            {(isSelected || isHighSim) && (
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <ringGeometry args={[0.13, 0.16, 24]} />
                <meshBasicMaterial
                  color="#00D4FF"
                  transparent
                  opacity={isSelected ? 0.9 : 0.5}
                  side={THREE.DoubleSide}
                />
              </mesh>
            )}

            {/* 3D Billboarding HTML Text Label */}
            <Html
              center
              distanceFactor={8}
              className="pointer-events-none select-none transition-opacity duration-200"
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectNode(node);
                }}
                className={`pointer-events-auto cursor-pointer whitespace-nowrap px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-mono tracking-wider transition-all duration-200 ${
                  isSelected
                    ? "bg-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.8)] border border-white scale-110"
                    : isHovered
                    ? "bg-cyan-950/90 text-cyan-200 border border-cyan-400 shadow-cyan-sm scale-105"
                    : isHighSim
                    ? "bg-[#0c1420]/90 text-cyan-300 border border-cyan-500/40 opacity-95"
                    : "bg-[#06080e]/75 text-slate-400 border border-white/5 opacity-70 hover:opacity-100"
                }`}
              >
                <span>{node.label}</span>
                {isSelected && (
                  <span className="ml-1 text-[8px] text-black/80 font-black">●</span>
                )}
                {neighbor && !isSelected && (
                  <span className="ml-1 text-[9px] text-cyan-400 font-bold">
                    {(neighbor.similarity * 100).toFixed(0)}%
                  </span>
                )}
              </div>
            </Html>
          </group>
        );
      })}
    </>
  );
}

export function EmbeddingSpace3D({
  selectedNode,
  onSelectNode,
  autoRotate = false,
}: EmbeddingSpace3DProps) {
  return (
    <div
      data-lenis-prevent
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
    >
      <Canvas
        camera={{ position: [0, 1.4, 6.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <EmbeddingScene
          selectedNode={selectedNode}
          onSelectNode={onSelectNode}
          autoRotate={autoRotate}
        />
      </Canvas>
    </div>
  );
}
