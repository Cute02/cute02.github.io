"use client";

interface NeuralFallbackSVGProps {
  scrollProgress: number;
}

export function NeuralFallbackSVG({ scrollProgress }: NeuralFallbackSVGProps) {
  const rotation = (scrollProgress * 360) % 360;

  return (
    <div className="w-full h-full flex items-center justify-center relative select-none">
      <svg
        viewBox="0 0 500 500"
        className="w-full max-w-[420px] h-auto drop-shadow-[0_0_40px_rgba(0,212,255,0.4)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="svgGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
          <radialGradient id="nucleusGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#0284C7" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#030305" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ambient Nucleus Glow */}
        <circle cx="250" cy="250" r="110" fill="url(#nucleusGrad)" />

        {/* Outer Telemetry Ring 1 */}
        <circle
          cx="250"
          cy="250"
          r="180"
          stroke="#00D4FF"
          strokeWidth="1.2"
          strokeDasharray="8 6"
          opacity="0.45"
          transform={`rotate(${rotation} 250 250)`}
        />

        {/* Mid Telemetry Ring 2 */}
        <circle
          cx="250"
          cy="250"
          r="140"
          stroke="#38BDF8"
          strokeWidth="1.5"
          strokeDasharray="16 8 4 8"
          opacity="0.65"
          transform={`rotate(${-rotation * 1.5} 250 250)`}
        />

        {/* Inner Geometric Polygons */}
        <polygon
          points="250,160 328,205 328,295 250,340 172,295 172,205"
          stroke="#00D4FF"
          strokeWidth="2"
          fill="rgba(0, 212, 255, 0.08)"
          filter="url(#svgGlow)"
          transform={`rotate(${rotation * 0.5} 250 250)`}
        />

        {/* Crosshair & Axis Lines */}
        <line x1="250" y1="50" x2="250" y2="450" stroke="#00D4FF" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
        <line x1="50" y1="250" x2="450" y2="250" stroke="#00D4FF" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />

        {/* Orbiting Satellite Nodes */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i * 60 + rotation) * (Math.PI / 180);
          const cx = 250 + Math.cos(angle) * 140;
          const cy = 250 + Math.sin(angle) * 140;
          return (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r="4"
              fill="#00D4FF"
              filter="url(#svgGlow)"
            />
          );
        })}
      </svg>
    </div>
  );
}
