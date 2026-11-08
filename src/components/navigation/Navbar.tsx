"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Cpu } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Stack", href: "/stack" },
  { name: "Education", href: "/education" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(Math.max((window.scrollY / totalScroll) * 100, 0), 100);
        setScrollProgress(progress);
      }
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Top Scroll Progress Line */}
      <div
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
        className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-white/5"
      >
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-200 transition-all duration-75 ease-out shadow-[0_0_8px_rgba(0,212,255,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#050608]/85 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo: MN. with telemetry sub-label */}
            <Link
              href="/"
              className="group flex items-center gap-3 text-slate-100 hover:text-white transition-colors"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded bg-surface-card border border-white/10 group-hover:border-cyan-500/50 transition-colors">
                <span className="font-mono font-bold tracking-tight text-cyan-400 text-sm">
                  MN.
                </span>
                <span className="absolute -bottom-0.5 -right-0.5 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping opacity-75" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-mono font-semibold tracking-widest text-slate-200 uppercase group-hover:text-cyan-400 transition-colors">
                  Mary Neha
                </span>
                <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                  SYS: ONLINE // 2026
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 border border-white/10 rounded-full px-3 py-1.5 bg-surface/60 backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-200 rounded-full ${
                      isActive
                        ? "text-cyan-400 font-bold"
                        : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Right Action: Quick Status / Contact CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(0,212,255,0.4)] hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]"
              >
                <span>INITIATE CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg bg-surface border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-cyan-400" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-30 bg-[#050608]/95 backdrop-blur-xl md:hidden flex flex-col justify-between pt-24 pb-8 px-6 border-b border-white/10"
          >
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2 px-3 py-1 mb-4 rounded border border-cyan-500/20 bg-cyan-950/20 text-cyan-400 text-xs font-mono">
                <Cpu className="w-3.5 h-3.5 animate-pulse" />
                <span>NAVIGATION MATRIX // SYSTEM ACTIVE</span>
              </div>

              {NAV_LINKS.map((link, idx) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-sm font-mono tracking-wider transition-colors ${
                      isActive
                        ? "border-cyan-500/40 bg-cyan-950/20 text-cyan-300 font-bold"
                        : "border-white/5 bg-surface/40 text-slate-300 hover:border-white/20 hover:text-white"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[10px] text-cyan-500 font-mono">
                        [0{idx + 1}]
                      </span>
                      <span>{link.name}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-lg bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(0,212,255,0.4)]"
              >
                Initiate Contact →
              </Link>
              <div className="text-center font-mono text-[11px] text-slate-500">
                maryneha248@gmail.com · Ernakulam, Kerala
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
