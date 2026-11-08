import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#050608",
        surface: "#0A0D14",
        "surface-raised": "#10141F",
        "surface-card": "#121724",
        border: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          subtle: "rgba(255, 255, 255, 0.04)",
          glow: "rgba(0, 212, 255, 0.35)",
        },
        cyan: {
          DEFAULT: "#00D4FF",
          50: "#ECFDFF",
          100: "#CFF8FE",
          200: "#A5F1FD",
          300: "#67E5FA",
          400: "#22D1F4",
          500: "#00D4FF",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#082F49",
          950: "#031726",
        },
        slate: {
          850: "#131826",
          950: "#07090E",
        },
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "var(--font-space-mono)", "monospace"],
      },
      boxShadow: {
        "cyan-sm": "0 0 12px -2px rgba(0, 212, 255, 0.35)",
        "cyan-md": "0 0 24px -4px rgba(0, 212, 255, 0.45)",
        "cyan-lg": "0 0 48px -8px rgba(0, 212, 255, 0.55)",
        "inner-cyan": "inset 0 0 20px 0 rgba(0, 212, 255, 0.2)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "scan-line": "scanLine 3s linear infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
