"use client";

import { motion } from "framer-motion";
import { type ReactNode, useEffect, useState } from "react";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: SectionRevealProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: 16 };
      case "down":
        return { y: -16 };
      case "left":
        return { x: 16 };
      case "right":
        return { x: -16 };
      case "none":
        return {};
    }
  };

  // During SSR / initial HTML prerendering, render directly so pages are never blank
  if (!mounted) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...getOffset() }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.45,
        delay: Math.min(delay, 0.3),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SplitTextReveal({
  text,
  className = "",
  tag = "h2",
}: {
  text: string;
  className?: string;
  tag?: "h1" | "h2" | "h3";
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const Component = tag;

  if (!mounted) {
    return <Component className={className}>{text}</Component>;
  }

  const words = text.split(" ");

  return (
    <Component className={`flex flex-wrap items-center gap-x-2.5 ${className}`}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: i * 0.02,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  );
}
