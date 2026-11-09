"use client";

import { useState } from "react";
import Image from "next/image";
import { Camera, Sparkles } from "lucide-react";

// TODO: add photo - Replace /photo.jpg with Mary Neha's official portrait
export function PhotoPlaceholder() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative group flex flex-col items-center">
      {/* Outer Rotating Glowing Ring */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full p-[3px] bg-gradient-to-tr from-cyan-500/70 via-cyan-400/20 to-transparent shadow-[0_0_30px_rgba(0,212,255,0.35)] transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(0,212,255,0.55)]">
        {/* Inner Circle Frame */}
        <div className="w-full h-full rounded-full bg-[#07090e] border border-white/10 flex flex-col items-center justify-center overflow-hidden relative">
          {!imageError ? (
            <Image
              src="/photo.jpg"
              alt="Mary Neha"
              fill
              className="object-cover"
              onError={() => setImageError(true)}
              priority
            />
          ) : null}

          {/* Placeholder Graphic when photo.jpg is not yet provided */}
          {imageError && (
            <div className="flex flex-col items-center justify-center p-2 text-center select-none">
              <Camera className="w-6 h-6 text-cyan-400/80 mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-mono font-semibold tracking-wider text-cyan-300 uppercase">
                Add photo
              </span>
              <span className="text-[8px] font-mono text-slate-400">
                /public/photo.jpg
              </span>
            </div>
          )}

          {/* Cyan Sweep Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>

        {/* Status indicator dot */}
        <div
          title="Profile Matrix Slot"
          className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-cyan-400 border-2 border-[#050608] flex items-center justify-center shadow-cyan-sm"
        >
          <Sparkles className="w-3 h-3 text-black" />
        </div>
      </div>

      {/* Frame Label */}
      <span className="mt-2 text-[10px] font-mono tracking-widest text-slate-400 uppercase">
        [ PORTRAIT // SLOT ]
      </span>
    </div>
  );
}
