"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck, Terminal, Cpu } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "01 // Core", exact: true },
    { href: "/projects", label: "02 // Systems & Homelab", exact: false },
    { href: "/about", label: "03 // About & Audit", exact: false },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Identity & Live Status Badge */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/"
              className="group flex items-center gap-2 font-mono text-xs sm:text-sm font-bold tracking-wider text-zinc-100 hover:text-emerald-400 transition-colors"
            >
              <Terminal className="w-4 h-4 text-emerald-400 group-hover:rotate-6 transition-transform" />
              <span>
                &gt; [BACKBONE] <span className="text-zinc-500">{"//"}</span> SYS.ENG
              </span>
            </Link>

            {/* Live Reliability Status Badge */}
            <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800/80 text-[11px] font-mono text-zinc-400 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-500">SYS:</span>
              <span className="text-emerald-400 font-semibold tracking-wide">
                ONLINE
              </span>
              <span className="text-zinc-700">|</span>
              <span className="text-zinc-400 flex items-center gap-1">
                <Cpu className="w-3 h-3 text-cyan-400" />
                WALL-E: ACTIVE
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href, link.exact);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md font-mono text-xs tracking-wide transition-all ${
                    active
                      ? "text-emerald-400 bg-zinc-900 border border-emerald-500/30 font-semibold shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-transparent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            {/* Direct Audit CTA */}
            <Link
              href="/about#audit"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-zinc-900 hover:bg-emerald-500 hover:text-zinc-950 border border-emerald-500/50 text-emerald-400 font-mono text-xs font-semibold tracking-wider transition-all duration-200 group shadow-sm hover:shadow-emerald-500/20"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 group-hover:text-zinc-950 transition-colors" />
              <span>[ Request Audit ]</span>
            </Link>

            {/* Mobile Hamburger Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-md text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border border-zinc-800/80 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-emerald-400" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-zinc-800/80 bg-zinc-950/95 px-4 pt-3 pb-6 space-y-3"
          >
            {/* Mobile Status Row */}
            <div className="flex items-center justify-between px-3 py-2 rounded bg-zinc-900/80 border border-zinc-800 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span className="text-zinc-400">SYSTEM STATUS:</span>
                <span className="text-emerald-400 font-medium">ONLINE</span>
              </div>
              <span className="text-[11px] text-cyan-400 font-semibold">
                WALL-E: ACTIVE
              </span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href, link.exact);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-md font-mono text-xs tracking-wide transition-all ${
                      active
                        ? "text-emerald-400 bg-zinc-900 border border-emerald-500/30 font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="pt-2">
              <Link
                href="/about#audit"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded bg-emerald-500 text-zinc-950 font-mono text-xs font-bold tracking-wider hover:bg-emerald-400 transition-colors shadow-sm"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>[ Request Architecture Audit ]</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
