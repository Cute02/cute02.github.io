"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface NeuralCore3DProps {
  scrollProgress: number; // 0 to 1
  mousePos?: { x: number; y: number };
}

function NeuralCoreModel({ scrollProgress, mousePos = { x: 0, y: 0 } }: NeuralCore3DProps) {
  const coreGroup = useRef<THREE.Group>(null);
  const innerNucleus = useRef<THREE.Mesh>(null);
  const outerWireframe = useRef<THREE.Mesh>(null);
  const ring1 = useRef<THREE.Mesh>(null);
  const ring2 = useRef<THREE.Mesh>(null);
  const ring3 = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate 250 ambient floating ruby ember sparks
  const [particlePositions] = useMemo(() => {
    const count = 250;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [positions];
  }, []);

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    if (coreGroup.current) {
      // Smooth mouse follow parallax
      const targetRotY = time * 0.15 + (mousePos.x * 0.6);
      const targetRotX = Math.sin(time * 0.2) * 0.1 - (mousePos.y * 0.4);

      coreGroup.current.rotation.y = THREE.MathUtils.lerp(
        coreGroup.current.rotation.y,
        targetRotY,
        0.05
      );
      coreGroup.current.rotation.x = THREE.MathUtils.lerp(
        coreGroup.current.rotation.x,
        targetRotX,
        0.05
      );

      // Camera dolly zoom effect derived from scroll
      const scaleFactor = 1 + scrollProgress * 0.8;
      coreGroup.current.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }

    if (innerNucleus.current) {
      innerNucleus.current.rotation.x = time * 0.4;
      innerNucleus.current.rotation.y = time * 0.6;
    }

    if (outerWireframe.current) {
      outerWireframe.current.rotation.y = -time * 0.25;
      outerWireframe.current.rotation.z = time * 0.15;
    }

    // Telemetry rings counter-rotation
    if (ring1.current) ring1.current.rotation.z = time * 0.3;
    if (ring2.current) ring2.current.rotation.x = time * 0.2;
    if (ring3.current) ring3.current.rotation.y = -time * 0.35;

    // Pulse ambient particle clouds
    if (particlesRef.current) {
      particlesRef.current.rotation.y = time * 0.05;
    }
  });

  return (
    <group ref={coreGroup}>
      {/* 1. Core Glowing Ruby Crimson Nucleus */}
      <mesh ref={innerNucleus}>
        <icosahedronGeometry args={[1.1, 1]} />
        <meshStandardMaterial
          color={0xff1a3c}
          emissive={0x660012}
          roughness={0.15}
          metalness={0.9}
          wireframe={false}
        />
      </mesh>

      {/* 2. Outer Geometric Tensor Wireframe */}
      <mesh ref={outerWireframe}>
        <dodecahedronGeometry args={[1.7, 0]} />
        <meshBasicMaterial
          color={0xff2a4d}
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* 3. Orbiting Crimson Telemetry Rings */}
      <mesh ref={ring1} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshBasicMaterial color={0xff2a4d} transparent opacity={0.65} />
      </mesh>

      <mesh ref={ring2} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <torusGeometry args={[2.5, 0.012, 16, 100]} />
        <meshBasicMaterial color={0xff4d6d} transparent opacity={0.45} />
      </mesh>

      <mesh ref={ring3} rotation={[Math.PI / 6, -Math.PI / 3, 0]}>
        <torusGeometry args={[2.8, 0.01, 16, 100]} />
        <meshBasicMaterial color={0xff758f} transparent opacity={0.35} />
      </mesh>

      {/* 4. Synapse Node Markers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const phi = (i / 12) * Math.PI * 2;
        const x = Math.sin(phi) * 1.7;
        const y = Math.cos(phi) * 1.7;
        return (
          <mesh key={i} position={[x, y, 0]}>
            <sphereGeometry args={[0.045, 12, 12]} />
            <meshBasicMaterial color={0xff2a4d} />
          </mesh>
        );
      })}

      {/* 5. Ruby Ember Particle Field */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.045}
          color={0xff2a4d}
          transparent
          opacity={0.7}
          blending={THREE.AdditiveBlending}
        />
      </points>

      {/* Ambient Crimson Light */}
      <pointLight color={0xff1a3c} intensity={4} distance={9} />
    </group>
  );
}

export function NeuralCore3D({ scrollProgress, mousePos }: NeuralCore3DProps) {
  return (
    <div className="w-full h-full relative select-none">
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} color={0xffffff} />
        <directionalLight position={[-5, -5, -5]} intensity={1.5} color={0xff1a3c} />
        <NeuralCoreModel scrollProgress={scrollProgress} mousePos={mousePos} />
      </Canvas>
    </div>
  );
}
