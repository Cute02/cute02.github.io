"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col relative w-full">
      {/* Subtle Electric Cyan Top Wipe Line during route navigation */}
      <motion.div
        key={`bar-${pathname}`}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-cyan-300 to-cyan-500 z-50 pointer-events-none shadow-[0_0_12px_rgba(0,212,255,0.8)]"
        initial={{ scaleX: 0, opacity: 1, originX: 0 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      />

      {/* Main Page Container: Rendered directly so content is never blank or stuck */}
      <main className="flex-grow flex flex-col w-full relative z-10">
        {children}
      </main>
    </div>
  );
}
