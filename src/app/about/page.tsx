"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Cpu,
  Database,
  HardDrive,
  Lock,
  Mail,
  ShieldCheck,
  Terminal,
} from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21.5 2L2 9.5l7 3 2.5 7.5 3.5-4 4.5 3.5L21.5 2z" />
      <path d="M9 12.5l7-6" />
    </svg>
  );
}

export default function AboutPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactHandle, setContactHandle] = useState("");
  const [systemUrl, setSystemUrl] = useState("");
  const [selectedBottleneck, setSelectedBottleneck] = useState(
    "Database queries are slow / high latency"
  );
  const [problemDescription, setProblemDescription] = useState("");

  const bottleneckOptions = [
    "Database queries are slow / high latency",
    "Server crashes or throttles under traffic spikes",
    "Backend code is unorganized / hard to scale",
    "High server costs / need infrastructure optimization",
    "Other technical challenge",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@systems-architect.dev");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmitAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;

    setIsSubmitting(true);

    // Simulate diagnostic dispatch processing
    setTimeout(() => {
      const ticketId = `AUDIT-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedTicket(ticketId);
      setIsSubmitting(false);
    }, 1200);
  };

  const principles = [
    {
      id: "01",
      title: "Zero Silent Failures",
      tagline: "If something breaks, we know before the customer does.",
      desc: "Strict TypeScript compilation boundaries, defensive input sanitization, and structured JSON logs correlated with OpenTelemetry trace spans. No swallowed exceptions, no untracked 500 errors.",
      icon: Terminal,
      color: "emerald",
      badge: "OBSERVABILITY",
    },
    {
      id: "02",
      title: "Data Integrity Above All",
      tagline: "No data loss. No corrupt transactions. Ever.",
      desc: "ACID-compliant relational transactions with row-level locks, idempotent event consumer workers, and automated snapshot backup schemes tested through regular recovery drills.",
      icon: Database,
      color: "cyan",
      badge: "DURABILITY",
    },
    {
      id: "03",
      title: "Resource & Cost Awareness",
      tagline: "Efficiency before raw horsepower.",
      desc: "Profiling EXPLAIN ANALYZE query execution trees, eliminating N+1 ORM overhead, and tuning memory allocations before asking a founder or team to upgrade expensive cloud instances.",
      icon: Cpu,
      color: "emerald",
      badge: "EFFICIENCY",
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden bg-grid-pattern">
      {/* Background Lighting Accents */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {/* ========================================================================= */}
        {/* 1. PAGE HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
            <span className="font-bold">{"//"}</span>
            <span className="tracking-wider uppercase">
              The Engineer Behind The System
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            Built on Reliability,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Not Vanity.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed max-w-3xl">
            A backend-focused software engineer and systems hobbyist who treats software stability,
            predictable latency, and data integrity as non-negotiable foundations.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE STORY & ENGINEERING ETHOS                                          */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          {/* Why Backend & Infrastructure */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>{"// 01"}</span>
                <span className="text-zinc-600">·</span>
                <span>ENGINEERING PHILOSOPHY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Why Backend &amp; Infrastructure?
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
                Anyone can build a sleek UI or slap together a template. But real engineering begins when thousands of concurrent users attempt to check out simultaneously, network sockets begin dropping, and database locks start stacking up.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
                My passion is solving what happens beneath the surface: ensuring that when an edge proxy takes a hit, the application logic degrades gracefully instead of collapsing into a cascading outage.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-emerald-400">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    The &ldquo;WALL-E&rdquo; Mentality
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    RESOURCEFULNESS &amp; HARDWARE RESPECT
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                I built my primary homelab server—WALL-E—from repurposed bare-metal hardware. Running TrueNAS CORE, ZFS mirrored storage pools, and containerized microservices on an older machine forced me to understand resource constraints, I/O wait times, thermal budgets, and storage scrubbing at a hardware level.
              </p>
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-400 flex items-center justify-between">
                <span>HARDWARE MINDSET:</span>
                <span className="text-emerald-400 font-semibold">
                  DO MORE WITH LESS COMPUTE
                </span>
              </div>
            </div>
          </div>

          {/* Core Engineering Principles Cards */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              {"// NON-NEGOTIABLE CORE PRINCIPLES"}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {principles.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.id}
                    className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-emerald-400">
                          [{p.id}]
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-zinc-400">
                          {p.badge}
                        </span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-200 w-fit">
                        <Icon className="w-5 h-5 text-emerald-400" />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-100 font-sans">
                        {p.title}
                      </h3>
                      <div className="text-xs font-mono text-emerald-400 font-semibold">
                        &ldquo;{p.tagline}&rdquo;
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. THE LEAD MAGNET: FREE SYSTEM AUDIT FORM (#audit)                       */}
        {/* ========================================================================= */}
        <section id="audit" className="scroll-mt-24 space-y-8">
          <div className="rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-6 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>CONFIDENTIAL 48-HOUR DIAGNOSTIC REVIEW</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                Request a Free System Health-Check (Audit)
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Experiencing slow API responses, high server bills, or fear of downtime during peak traffic?
                Fill out this diagnostic intake and receive a concise 1-page action audit within 48 hours.
              </p>
            </div>

            {/* Diagnostic Form or Submitted Success State */}
            {submittedTicket ? (
              <div className="p-6 sm:p-8 rounded-xl bg-zinc-950 border border-emerald-500/40 font-mono text-xs space-y-4">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>DIAGNOSTIC DISPATCH CONFIRMED</span>
                </div>

                <div className="p-4 rounded-lg bg-zinc-900/70 border border-zinc-800 space-y-2 text-zinc-300">
                  <p>
                    <span className="text-zinc-500">TICKET_ID:</span>{" "}
                    <span className="text-emerald-400 font-bold">{submittedTicket}</span>
                  </p>
                  <p>
                    <span className="text-zinc-500">CLIENT:</span> {fullName} ({email})
                  </p>
                  <p>
                    <span className="text-zinc-500">PRIMARY_BOTTLENECK:</span>{" "}
                    {selectedBottleneck}
                  </p>
                  <p>
                    <span className="text-zinc-500">SLA_WINDOW:</span> &lt; 48 Hours
                  </p>
                </div>

                <p className="text-zinc-400 font-sans text-xs">
                  Diagnostics request received. I will review your system architecture, inspect query/bottleneck patterns, and deliver a prioritized 1-page action plan to your email.
                </p>

                <button
                  type="button"
                  aria-label="Submit another system audit"
                  onClick={() => setSubmittedTicket(null)}
                  className="px-5 py-2.5 min-h-[44px] inline-flex items-center justify-center rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 transition-colors font-medium text-xs"
                >
                  Submit Another System Audit
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitAudit} className="space-y-6 relative z-10">
                {/* Name & Contact Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider"
                    >
                      Your Name / Company *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan · ScaleOps SaaS"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm font-sans focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider"
                    >
                      Work Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="alex@scaleops.io"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm font-sans focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Contact Handle & System URL Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="contactHandle"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider"
                    >
                      Telegram / WhatsApp Handle (Optional)
                    </label>
                    <input
                      id="contactHandle"
                      type="text"
                      placeholder="@alex_scaleops"
                      value={contactHandle}
                      onChange={(e) => setContactHandle(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm font-sans focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="systemUrl"
                      className="block text-xs font-mono text-zinc-400 uppercase tracking-wider"
                    >
                      System URL / API Endpoint / Store Link (Optional)
                    </label>
                    <input
                      id="systemUrl"
                      type="text"
                      placeholder="https://api.scaleops.io"
                      value={systemUrl}
                      onChange={(e) => setSystemUrl(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm font-sans focus:outline-none focus:border-emerald-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Primary Bottleneck Selector */}
                <div className="space-y-2">
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Primary Bottleneck / Pain Point *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {bottleneckOptions.map((opt) => {
                      const isSelected = selectedBottleneck === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          aria-label={`Select bottleneck: ${opt}`}
                          aria-pressed={isSelected}
                          onClick={() => setSelectedBottleneck(opt)}
                          className={`p-3 min-h-[44px] flex items-center rounded-lg text-left text-xs font-mono transition-all border ${
                            isSelected
                              ? "bg-emerald-500/10 border-emerald-500/60 text-emerald-400 font-semibold"
                              : "bg-zinc-950/60 border-zinc-800/80 text-zinc-300 hover:text-white hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className={`h-2 w-2 rounded-full ${
                                isSelected ? "bg-emerald-400" : "bg-zinc-700"
                              }`}
                            />
                            <span>{opt}</span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Problem Description */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="problemDescription"
                    className="block text-xs font-mono text-zinc-400 uppercase tracking-wider"
                  >
                    Brief Problem Description / Symptoms
                  </label>
                  <textarea
                    id="problemDescription"
                    rows={4}
                    placeholder="Describe what happens under load: e.g. 'Postgres CPU hits 95% whenever we process over 500 orders/minute, causing checkout timeouts.'"
                    value={problemDescription}
                    onChange={(e) => setProblemDescription(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder:text-zinc-600 text-sm font-sans focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>

                {/* Submit Action Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-3 text-xs font-mono text-zinc-500">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>NDAs respected. Zero unsolicited marketing.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin text-zinc-950" />
                        <span>PROCESSING TELEMETRY...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4 text-zinc-950" />
                        <span>[ Request Free Technical Audit ]</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. DIRECT CHANNELS & AVAILABILITY                                         */}
        {/* ========================================================================= */}
        <section className="space-y-6 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {"// SECTION 03"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans">
                Direct Channels &amp; Availability
              </h2>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-400 font-medium">STATUS:</span>
              <span className="text-emerald-400 font-semibold">
                ACCEPTING AUDITS &amp; CONTRACTS
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub Profile (opens in new tab)"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white font-sans">
                  GitHub Profile
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 font-medium">
                  Direct code inspection &amp; open source
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn Profile (opens in new tab)"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/40 transition-colors space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-cyan-400 transition-colors">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white font-sans">
                  LinkedIn Network
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 font-medium">
                  Professional experience &amp; recommendations
                </p>
              </div>
            </a>

            {/* Direct Email with Copy */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors space-y-3 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <button
                    type="button"
                    aria-label="Copy email address to clipboard"
                    onClick={handleCopyEmail}
                    className="text-xs font-mono text-zinc-300 hover:text-emerald-400 p-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center gap-1.5 transition-colors font-medium rounded-md hover:bg-zinc-800/60"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white font-sans">
                  Direct Email
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 break-all font-medium">
                  contact@systems-architect.dev
                </p>
              </div>
              <a
                href="mailto:contact@systems-architect.dev"
                aria-label="Send email to contact@systems-architect.dev"
                className="text-[11px] font-mono text-emerald-400 hover:underline min-h-[44px] inline-flex items-center font-medium"
              >
                &gt; Launch mailto
              </a>
            </div>

            {/* Direct Telegram / WhatsApp */}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect via Direct Messenger (opens in new tab)"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/40 transition-colors space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-cyan-400 transition-colors">
                  <TelegramIcon className="w-5 h-5" />
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-200 group-hover:text-white font-sans">
                  Direct Messenger
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 font-medium">
                  Telegram / WhatsApp async triage
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
