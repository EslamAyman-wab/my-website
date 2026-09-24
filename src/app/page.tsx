"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  HardDrive,
  Lock,
  Server,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

export default function Home() {
  const telemetryMetrics = [
    {
      label: "TARGET LATENCY",
      value: "< 50ms",
      subtext: "Sub-millisecond query execution & edge cache hits",
      icon: Zap,
      accent: "text-emerald-400",
      borderGlow: "group-hover:border-emerald-500/40",
    },
    {
      label: "CORE STACK",
      value: "Node.js · TS · SQL",
      subtext: "Strict typing, relational integrity & async pipelines",
      icon: Database,
      accent: "text-cyan-400",
      borderGlow: "group-hover:border-cyan-500/40",
    },
    {
      label: "INFRA MINDSET",
      value: "99.9% Uptime",
      subtext: "Resource budgeting, auto-recovery & zero data loss",
      icon: Activity,
      accent: "text-zinc-200",
      borderGlow: "group-hover:border-zinc-400/40",
    },
  ];

  const bottlenecks = [
    {
      id: "01",
      title: "Database Latency & Deadlocks",
      symptom: "Symptom: High CPU, unindexed table scans, connection pool exhaustion under flash sales.",
      solution:
        "Fixing unindexed SQL queries, locking bottlenecks, query execution plan tuning, and implementing connection pooling with read replicas.",
      diagnostic: "P99: 1400ms → 28ms · DEADLOCKS: 0",
      icon: Database,
      color: "emerald",
    },
    {
      id: "02",
      title: "Crash Resistance Under Peak Load",
      symptom: "Symptom: API gateways timing out, memory leaks, and cascading server crashes.",
      solution:
        "Building resilient background queues, asynchronous task workers, backpressure management, and memory-safe Node.js cluster processes.",
      diagnostic: "BACKPRESSURE: BUFFERED · UPTIME: 99.99%",
      icon: Activity,
      color: "cyan",
    },
    {
      id: "03",
      title: "Messy Code & Fragile APIs",
      symptom: "Symptom: Uncaught runtime errors, lack of schema validation, untyped breaking payloads.",
      solution:
        "Restructuring legacy monolithic code into clean, strictly-typed TypeScript architectures with automated error tracking and robust contract tests.",
      diagnostic: "TYPE SAFETY: 100% · UNCAUGHT ERR: 0",
      icon: Terminal,
      color: "emerald",
    },
    {
      id: "04",
      title: "Infrastructure & Data Loss Blindspots",
      symptom: "Symptom: Single points of failure, missing snapshot verification, raw exposed ports.",
      solution:
        "Implementing isolated Docker environments, reverse proxy configs with TLS termination, and rigorous automated 3-2-1 backup schemes.",
      diagnostic: "ISOLATION: DOCKER · BACKUPS: AUTOMATED",
      icon: Server,
      color: "cyan",
    },
  ];

  const coreBackendStack = [
    { name: "Node.js & Express / Fastify", note: "Event-driven asynchronous event loop tuning" },
    { name: "TypeScript", note: "End-to-end type safety and strict compiler boundaries" },
    { name: "PostgreSQL & SQL", note: "Complex indexing, EXPLAIN ANALYZE query planning, ACID transactions" },
    { name: "Redis Caching", note: "Distributed lock manager, session stores, and rate limiters" },
    { name: "RESTful & Event APIs", note: "Idempotency keys, webhook queues, and semantic error codes" },
    { name: "Clean Architecture", note: "Hexagonal decoupling of domain logic from transport protocols" },
  ];

  const systemsInfraStack = [
    { name: "Linux CLI & Bash", note: "Kernel tuning, systemd process supervision, automated cron jobs" },
    { name: "Docker Containerization", note: "Lightweight multi-stage builds, rootless containers, compose stacks" },
    { name: "TrueNAS & ZFS Storage", note: "Copy-on-write datasets, scrubbing routines, snapshot replication" },
    { name: "Reverse Proxies & Networking", note: "Nginx / Caddy, TLS certificates, load balancing, DNS routing" },
    { name: "Hardware Management", note: "Bare-metal maintenance, thermal management, UPS failover automation" },
    { name: "Observability & Telemetry", note: "Structured JSON logging, Prometheus metrics, Grafana dashboards" },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden bg-grid-pattern">
      {/* Subtle Background Glows */}
      <div className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute top-96 -right-48 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-24 sm:space-y-32">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION                                                           */}
        {/* ========================================================================= */}
        <section className="flex flex-col items-center text-center space-y-8 pt-4 sm:pt-8">
          {/* Monospace Badge — plain div for instant LCP render */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-300 shadow-sm">
            <span className="text-emerald-400 font-bold">{"//"}</span>
            <span className="tracking-wider uppercase">
              Specialized Backend &amp; Systems Architect
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Main Headline — plain h1 for immediate LCP */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl font-sans">
            The Backbone of Scalable Applications &amp;{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Resilient Systems.
            </span>
          </h1>

          {/* Sub-headline — plain p for immediate render */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans">
            I architect high-throughput backend APIs, optimize sluggish SQL databases,
            and build reliable server infrastructure. Helping SaaS platforms and
            E-commerce stores stay fast, secure, and unbreakable under peak load.
          </p>

          {/* Dual CTAs — plain div, min-h-[44px] for tap targets */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="/about#audit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 group"
            >
              <ShieldCheck className="w-4 h-4 text-zinc-950" />
              <span>[ Request Free System Audit ]</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-500 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200"
            >
              <Server className="w-4 h-4 text-cyan-400" />
              <span>[ View Systems &amp; WALL-E Lab ]</span>
            </Link>
          </div>

          {/* Telemetry Quick-Bar — keeps subtle entrance animation (decorative) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-8 text-left"
          >
            {telemetryMetrics.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.label}
                  className={`group p-5 rounded-lg bg-zinc-900/70 border border-zinc-800/80 transition-all duration-300 ${item.borderGlow}`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono tracking-wider text-zinc-500 uppercase">
                      {item.label}
                    </span>
                    <IconComponent className={`w-4 h-4 ${item.accent}`} />
                  </div>
                  <div
                    className={`text-xl sm:text-2xl font-mono font-bold tracking-tight ${item.accent}`}
                  >
                    {item.value}
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 font-sans leading-normal">
                    {item.subtext}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </section>

        {/* ========================================================================= */}
        {/* 2. BOTTLENECKS I SOLVE                                                    */}
        {/* ========================================================================= */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span>{"// 01"}</span>
                <span className="text-zinc-600">·</span>
                <span>SYSTEM BOTTLENECK DIAGNOSTICS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Engineered Solutions for Critical System Bottlenecks
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-sans">
                Where applications break under pressure, and how I fix them.
              </p>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-zinc-500">
              STATUS: ZERO-TOLERANCE TO DOWNTIME
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bottlenecks.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.id}
                  className="group relative p-6 sm:p-7 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                        <span className="text-emerald-400 font-semibold">
                          [{item.id}]
                        </span>
                        <span>DIAGNOSTIC_MODULE</span>
                      </div>
                      <div className="p-2 rounded-md bg-zinc-800/60 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100 group-hover:text-white transition-colors font-sans">
                      {item.title}
                    </h3>

                    <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800/60 font-mono text-xs text-zinc-400">
                      {item.symptom}
                    </div>

                    <p className="text-sm text-zinc-300 leading-relaxed font-sans">
                      {item.solution}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono">
                    <span className="text-zinc-500">RESULT METRIC</span>
                    <span className="text-emerald-400 font-semibold">
                      {item.diagnostic}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. ENGINEERING STACK & PRINCIPLES                                         */}
        {/* ========================================================================= */}
        <section className="space-y-10">
          <div className="space-y-2 border-b border-zinc-800/80 pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>{"// 02"}</span>
              <span className="text-zinc-600">·</span>
              <span>TECHNICAL COMPETENCY &amp; DISCIPLINE</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Engineering Stack &amp; Principles
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-sans">
              Built on battle-tested technologies and high-resilience engineering standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column A: Core Backend Engine */}
            <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 font-sans">
                      Core Backend Engine
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      High-throughput APIs &amp; Data Layers
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  APPLICATION
                </span>
              </div>

              <div className="space-y-3.5">
                {coreBackendStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                  >
                    <div className="font-mono text-xs font-bold text-zinc-200 flex items-center gap-2">
                      <span className="text-emerald-400">&gt;</span>
                      <span>{tech.name}</span>
                    </div>
                    <span className="text-xs text-zinc-400 font-sans">
                      {tech.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column B: Systems & Infrastructure */}
            <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 font-sans">
                      Systems &amp; Infrastructure
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      Bare-metal, Storage Pools &amp; Networking
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  PLATFORM
                </span>
              </div>

              <div className="space-y-3.5">
                {systemsInfraStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="p-3 rounded-lg bg-zinc-950/60 border border-zinc-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4"
                  >
                    <div className="font-mono text-xs font-bold text-zinc-200 flex items-center gap-2">
                      <span className="text-cyan-400">&gt;</span>
                      <span>{tech.name}</span>
                    </div>
                    <span className="text-xs text-zinc-400 font-sans">
                      {tech.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. THE WALL-E LAB TEASER                                                  */}
        {/* ========================================================================= */}
        <section>
          <div className="relative rounded-2xl bg-zinc-900/80 border border-zinc-800/90 p-8 sm:p-12 overflow-hidden shadow-2xl">
            {/* Ambient Lighting Accent */}
            <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-400">
                  <HardDrive className="w-3.5 h-3.5" />
                  <span>HOMELAB CASE STUDY // PROOF OF HARDWARE MASTERY</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                  Meet WALL-E: Repurposed Hardware, Enterprise Reliability
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed font-sans">
                  See how I run media streaming, automated backup tiers, and secure cloud sync
                  on a custom TrueNAS bare-metal machine. From ZFS pool configuration and
                  scrub automation to thermal headroom tuning, WALL-E runs 24/7 with zero downtime.
                </p>

                {/* Telemetry row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">OS / KERNEL</span>
                    <span className="text-zinc-200 font-bold">TrueNAS CORE</span>
                  </div>
                  <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">STORAGE POOL</span>
                    <span className="text-emerald-400 font-bold">ZFS RaidZ Mirror</span>
                  </div>
                  <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">POWER DRAW</span>
                    <span className="text-cyan-400 font-bold">~38W Idle</span>
                  </div>
                  <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">CONTINUOUS UPTIME</span>
                    <span className="text-zinc-200 font-bold">99.98%</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-cyan-500/20 group"
                >
                  <span>[ Inspect Server Architecture ]</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-mono text-zinc-500 mt-2">
                  Full hardware breakdown &amp; network diagram
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. BOTTOM CTA BANNER                                                      */}
        {/* ========================================================================= */}
        <section className="pb-8">
          <div className="rounded-xl bg-gradient-to-br from-zinc-900 via-zinc-900/90 to-zinc-950 border border-zinc-800 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL &amp; ZERO OBLIGATION</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Experiencing slow response times or preparing for high traffic?
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Whether you are troubleshooting locking database queries, migrating off a fragile monolith,
                or hardening server infrastructure, let&apos;s run a comprehensive systems review.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/about#audit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                <ShieldCheck className="w-4 h-4 text-zinc-950" />
                <span>[ Schedule a Technical Audit ]</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-zinc-500 border-t border-zinc-800/60 max-w-xl mx-auto">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>45-Min Architecture Deep-Dive</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Actionable Bottleneck Report</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>SLA: &lt; 24h Response</span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
