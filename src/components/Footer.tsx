import Link from "next/link";
import { Mail, Terminal, Shield, ArrowUpRight } from "lucide-react";

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-800/60 bg-zinc-950/80 backdrop-blur-sm text-zinc-300 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        {/* Top Telemetry & Micro-stats Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-800/40">
          <div className="flex items-center gap-2 text-zinc-200">
            <span className="text-emerald-400" aria-hidden="true">&gt;</span>
            <span className="font-semibold tracking-wide text-zinc-100">
              STACK:
            </span>
            <span className="text-zinc-300">
              Node.js <span className="text-zinc-500" aria-hidden="true">·</span> TypeScript{" "}
              <span className="text-zinc-500" aria-hidden="true">·</span> SQL (PostgreSQL){" "}
              <span className="text-zinc-500" aria-hidden="true">·</span> Docker{" "}
              <span className="text-zinc-500" aria-hidden="true">·</span> TrueNAS
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-zinc-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              UPTIME: 99.99%
            </span>
            <span className="text-zinc-600" aria-hidden="true">|</span>
            <span className="text-zinc-300">NODE: HOMELAB-CORE-01</span>
            <span className="text-zinc-600" aria-hidden="true">|</span>
            <span className="text-cyan-400 font-semibold">ENCRYPTED: TLSv1.3</span>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Signature */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 text-zinc-100 font-bold">
              <Terminal className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>THE BACKBONE <span className="text-zinc-500" aria-hidden="true">{"//"}</span> SYSTEMS ARCHITECTURE</span>
            </div>
            <p className="text-zinc-300 text-xs font-sans leading-relaxed max-w-md">
              &ldquo;Engineered as the backbone of resilient applications.&rdquo;
              Specializing in low-latency APIs, distributed data pipelines, database reliability, and self-hosted infrastructure.
            </p>
          </div>

          {/* Quick Route Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
              {"// INDEX NAVIGATION"}
            </div>
            <ul className="space-y-1.5 font-mono text-xs">
              <li>
                <Link
                  href="/"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>01</span>
                  <span className="text-zinc-500" aria-hidden="true">/</span>
                  <span>Core Engine (Home)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>02</span>
                  <span className="text-zinc-500" aria-hidden="true">/</span>
                  <span>Systems &amp; Homelab</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-300 hover:text-emerald-400 transition-colors flex items-center gap-1"
                >
                  <span>03</span>
                  <span className="text-zinc-500" aria-hidden="true">/</span>
                  <span>Profile &amp; Audit</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Terminal & Social Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">
              {"// TELECOMM & CHANNELS"}
            </div>
            <div className="flex flex-col space-y-2 font-mono text-xs">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub Profile (opens in new tab)"
                className="inline-flex items-center justify-between text-zinc-300 hover:text-emerald-400 transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-emerald-400 transition-colors" aria-hidden="true" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn Profile (opens in new tab)"
                className="inline-flex items-center justify-between text-zinc-300 hover:text-cyan-400 transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-cyan-400 transition-colors" aria-hidden="true" />
              </a>

              <a
                href="mailto:contact@systems-architect.dev"
                aria-label="Send email via terminal dispatch"
                className="inline-flex items-center justify-between text-zinc-300 hover:text-emerald-400 transition-colors group"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Terminal Dispatch</span>
                </span>
                <span className="text-[11px] text-emerald-400 font-medium">
                  [MAILTO]
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and status code line */}
        <div className="pt-6 border-t border-zinc-800/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400 font-medium">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
            <span suppressHydrationWarning>
              &copy; {currentYear} Backbone Systems. All rights reserved.
            </span>
          </div>
          <div className="font-mono text-zinc-400">
            HTTP_STATUS: <span className="text-emerald-400 font-semibold">200 OK</span> · HOST: PRODUCTION
          </div>
        </div>
      </div>
    </footer>
  );
}
