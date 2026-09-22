"use client";

import { useState } from "react";
import {
  AlertCircle,
  ArrowRight,
  Check,
  CheckCircle2,
  Copy,
  Cpu,
  Database,
  ExternalLink,
  HardDrive,
  Mail,
  MessageSquare,
  Radio,
  Send,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Zap,
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

export default function AboutPage() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactHandle: "",
    systemUrl: "",
    bottleneck: "Database queries are slow / high latency",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const bottleneckOptions = [
    "Database queries are slow / high latency",
    "Server crashes or throttles under traffic spikes",
    "Backend code is unorganized / hard to scale",
    "High server costs / need infrastructure optimization",
    "Other technical challenge",
  ];

  const engineeringPrinciples = [
    {
      id: "PRINCIPLE_01",
      title: "Zero Silent Failures",
      tag: "DEFENSIVE RUNTIMES",
      desc: "Strict TypeScript typing, boundary validation, and structured telemetry. If an anomaly occurs, we detect and isolate it before the customer ever experiences downtime.",
      icon: AlertCircle,
      accent: "text-amber-400",
      borderGlow: "hover:border-amber-500/40",
    },
    {
      id: "PRINCIPLE_02",
      title: "Data Integrity Above All",
      tag: "TRANSACTION RELIABILITY",
      desc: "ACID-compliant SQL isolation, declarative schema migrations, automated WAL archiving, and verified 3-2-1 backup pipelines. Zero data loss, ever.",
      icon: Database,
      accent: "text-emerald-400",
      borderGlow: "hover:border-emerald-500/40",
    },
    {
      id: "PRINCIPLE_03",
      title: "Resource & Cost Awareness",
      tag: "EFFICIENCY FIRST",
      desc: "Optimizing query execution plans, memory buffers, and connection pooling before recommending expensive cloud server upgrades. Real engineering over brute force.",
      icon: Cpu,
      accent: "text-cyan-400",
      borderGlow: "hover:border-cyan-500/40",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate audit intake processing
    setTimeout(() => {
      const generatedId = `DIAG-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@systems-architect.dev");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden bg-grid-pattern">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {/* ========================================================================= */}
        {/* 1. PAGE HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400">
            <span className="font-bold">{"//"}</span>
            <span className="tracking-wider uppercase">
              The Engineer Behind The System
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            Built on Reliability, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Not Vanity.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed">
            A backend-focused software engineer and systems hobbyist who treats software stability
            and data integrity as non-negotiable foundations.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE STORY & ENGINEERING ETHOS                                          */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          {/* Why Backend & Infrastructure Deep-Dive */}
          <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-8 sm:p-12 space-y-8 shadow-xl">
            <div className="space-y-2 border-b border-zinc-800/80 pb-4">
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                {"// ETHOS 01"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans">
                Why Backend &amp; Infrastructure?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
              <div className="space-y-4">
                <p>
                  Anyone can make a user interface look modern with component libraries,
                  but real engineering happens underneath when the traffic arrives. When a flash
                  sale or viral launch floods an API with thousands of concurrent checkouts, flashy
                  animations mean nothing if the database deadlocks or workers drop tasks.
                </p>
                <p className="text-zinc-400">
                  I gravitated toward backend systems because that is where businesses actually succeed
                  or fail. Data corruption, lost financial transactions, and minutes of downtime directly
                  destroy trust and revenue.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-zinc-950/70 border border-zinc-800 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                  <HardDrive className="w-4 h-4" />
                  <span>THE WALL-E MENTALITY: HARDWARE MASTERY</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                  My software engineering philosophy is grounded in physical hardware realities. Running
                  a bare-metal TrueNAS server (WALL-E) taught me the value of resource budgeting,
                  I/O constraints, copy-on-write file systems, and thermal headroom.
                </p>
                <p className="text-xs text-zinc-400 font-mono">
                  &gt; Hands-on with Linux kernels · Docker container isolation · ZFS mirror datasets · Low-wattage 24/7 reliability.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Engineering Principles Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-bold text-zinc-200 uppercase tracking-wider">
                  Core Engineering Principles
                </span>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                DISCIPLINE: CODE &amp; INFRASTRUCTURE
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {engineeringPrinciples.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`p-6 sm:p-7 rounded-xl bg-zinc-900/60 border border-zinc-800/80 transition-all duration-300 space-y-3 flex flex-col justify-between ${item.borderGlow}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-zinc-500 font-bold tracking-wider">
                          [{item.tag}]
                        </span>
                        <Icon className={`w-4 h-4 ${item.accent}`} />
                      </div>
                      <h3 className="text-lg font-bold text-white font-sans">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-zinc-800/60 font-mono text-[10px] text-zinc-500">
                      ID: {item.id} · STANDARD: VERIFIED
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. THE LEAD MAGNET: FREE BACKEND & INFRASTRUCTURE HEALTH-CHECK (#audit)   */}
        {/* ========================================================================= */}
        <section id="audit" className="scroll-mt-24 space-y-6">
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-6 sm:p-12 space-y-8 relative overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -right-24 -top-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

            {/* Section Header */}
            <div className="relative z-10 space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>CONFIDENTIAL 1-ON-1 SYSTEM AUDIT</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                Request a Free System Health-Check (Audit)
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Experiencing slow API responses, high server bills, or fear of downtime during peak traffic?
                Fill out this diagnostic intake and receive a concise 1-page action audit within 48 hours.
              </p>
            </div>

            {/* Interactive Form or Success Terminal Screen */}
            <div className="relative z-10">
              {isSubmitted ? (
                /* Terminal-styled Success Confirmation Receipt */
                <div className="p-6 sm:p-8 rounded-xl bg-zinc-950 border border-emerald-500/40 font-mono text-xs space-y-6 shadow-xl">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-4 text-emerald-400 font-bold">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>[DIAGNOSTICS_RECEIVED] INTAKE CONFIRMED</span>
                    </div>
                    <span className="text-zinc-500 text-[11px]">STATUS: 200 OK</span>
                  </div>

                  <div className="space-y-3 text-zinc-300">
                    <p>
                      <span className="text-zinc-500">TICKET_ID:</span>{" "}
                      <span className="text-emerald-400 font-bold">{ticketId}</span>
                    </p>
                    <p>
                      <span className="text-zinc-500">CLIENT:</span> {formData.name} &lt;{formData.email}&gt;
                    </p>
                    <p>
                      <span className="text-zinc-500">SYSTEM TARGET:</span>{" "}
                      {formData.systemUrl || "Not specified / Private environment"}
                    </p>
                    <p>
                      <span className="text-zinc-500">IDENTIFIED BOTTLENECK:</span>{" "}
                      <span className="text-cyan-400">{formData.bottleneck}</span>
                    </p>
                    <p className="text-zinc-400 font-sans text-xs pt-2 border-t border-zinc-800">
                      I have queued your system parameters. I will analyze the symptoms and deliver an actionable 1-page technical audit report to your inbox within 48 hours.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          contactHandle: "",
                          systemUrl: "",
                          bottleneck: bottleneckOptions[0],
                          description: "",
                        });
                      }}
                      className="px-4 py-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700 font-mono text-xs transition-colors"
                    >
                      &gt; Submit Another System Diagnostic
                    </button>

                    <a
                      href="mailto:contact@systems-architect.dev"
                      className="text-xs text-emerald-400 hover:underline flex items-center gap-1 font-mono"
                    >
                      Need immediate assistance? Dispatch directly via email &rarr;
                    </a>
                  </div>
                </div>
              ) : (
                /* Diagnostic Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name / Company */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                        Full Name / Company Name <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Alex Vance (Nexus SaaS)"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm font-sans transition-colors"
                      />
                    </div>

                    {/* Email Address */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                        Email Address <span className="text-emerald-400">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="alex@nexus-saas.com"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm font-sans transition-colors"
                      />
                    </div>

                    {/* Contact Handle */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                        WhatsApp / Telegram Handle <span className="text-zinc-500">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        value={formData.contactHandle}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactHandle: e.target.value,
                          })
                        }
                        placeholder="@username or +1 555-0199"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm font-sans transition-colors"
                      />
                    </div>

                    {/* System URL */}
                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                        System URL or Store Link <span className="text-zinc-500">(Optional)</span>
                      </label>
                      <input
                        type="url"
                        value={formData.systemUrl}
                        onChange={(e) =>
                          setFormData({ ...formData, systemUrl: e.target.value })
                        }
                        placeholder="https://api.nexus-saas.com or store link"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm font-sans transition-colors"
                      />
                    </div>
                  </div>

                  {/* Primary Bottleneck Selection Chips */}
                  <div className="space-y-3">
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                      Primary Bottleneck / Pain Point <span className="text-emerald-400">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {bottleneckOptions.map((opt) => {
                        const isSelected = formData.bottleneck === opt;
                        return (
                          <button
                            key={opt}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, bottleneck: opt })
                            }
                            className={`px-3.5 py-2 rounded-lg text-xs font-mono text-left transition-all border ${
                              isSelected
                                ? "bg-emerald-500/15 border-emerald-500 text-emerald-300 font-semibold shadow-sm"
                                : "bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Brief Problem Description */}
                  <div className="space-y-2">
                    <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider font-semibold">
                      Brief Problem Description &amp; Stack <span className="text-emerald-400">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      placeholder="Describe what happens under high load, your existing stack (e.g. Node.js + Postgres), error status codes, or cloud hosting setup..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm font-sans transition-colors"
                    />
                  </div>

                  {/* Submit Action */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 group cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Radio className="w-4 h-4 animate-spin" />
                          <span>ANALYZING PARAMETERS...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>[ Request Free Technical Audit ]</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>SLA: 1-Page Audit Within 48h · 100% Confidential</span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. DIRECT CHANNELS & AVAILABILITY                                         */}
        {/* ========================================================================= */}
        <section className="space-y-6 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {"// CHANNELS 03"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-sans mt-0.5">
                Direct Channels &amp; Availability
              </h2>
            </div>

            {/* Real-time Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-400 font-semibold shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>STATUS: ACCEPTING AUDITS &amp; CONTRACT PROJECTS</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* GitHub Card */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <GithubIcon className="w-4 h-4" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100 font-sans">
                  GitHub Profile
                </h4>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  Inspect repositories, commits &amp; open source code
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 block pt-1">
                &gt; View Codebase &rarr;
              </span>
            </a>

            {/* LinkedIn Card */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-cyan-500/40 transition-colors space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-cyan-400 transition-colors">
                  <LinkedinIcon className="w-4 h-4" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100 font-sans">
                  LinkedIn Network
                </h4>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  Professional experience, background &amp; career track
                </p>
              </div>
              <span className="text-[11px] font-mono text-cyan-400 block pt-1">
                &gt; Connect on LinkedIn &rarr;
              </span>
            </a>

            {/* Direct Email Card with Copy Action */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                    <Mail className="w-4 h-4 text-emerald-400" />
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="text-[11px] font-mono px-2 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-emerald-400 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <h4 className="text-sm font-bold text-zinc-100 font-sans">
                  Direct Email
                </h4>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 break-all">
                  contact@systems-architect.dev
                </p>
              </div>

              <a
                href="mailto:contact@systems-architect.dev?subject=Systems%20Architecture%20Inquiry"
                className="text-[11px] font-mono text-emerald-400 hover:underline pt-1 block"
              >
                &gt; Send Email Dispatch &rarr;
              </a>
            </div>

            {/* Direct Instant Chat Card */}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-emerald-500/40 transition-colors space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600 group-hover:text-emerald-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-100 font-sans">
                  Instant Message
                </h4>
                <p className="text-xs text-zinc-400 font-sans mt-0.5">
                  WhatsApp / Telegram for rapid synchronous conversations
                </p>
              </div>
              <span className="text-[11px] font-mono text-emerald-400 block pt-1">
                &gt; Launch Quick Connect &rarr;
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
