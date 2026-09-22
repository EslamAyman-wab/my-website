import type { Metadata } from "next";
import Link from "next/link";
import { WallEServerCard } from "@/components/WallEServerCard";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  Lock,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Architecture, Systems & WALL-E Homelab | The Backbone",
  description:
    "Real backend architectures, database schemas, incident post-mortems, and bare-metal server infrastructure.",
};

export default function ProjectsPage() {
  const productionProjects = [
    {
      id: "PROD-SYS-01",
      title: "High-Throughput E-Commerce Inventory & Checkout Engine",
      tag: "FINANCIAL TRANSACTION INTEGRITY",
      status: "PRODUCTION ACTIVE",
      tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Redis", "Docker"],
      overview:
        "Engineered to eliminate overselling during high-concurrency flash sales and marketing surges. Replaced naive read-then-write logic with ACID-compliant relational isolation and Redis distributed token locks.",
      architectureHighlights: [
        "PostgreSQL SELECT ... FOR UPDATE row-level locks ensuring absolute stock consistency under concurrent checkout requests.",
        "Idempotency token validation with 24-hour TTL in Redis to safely withstand customer duplicate submits and network retries.",
        "Asynchronous worker pool processing order fulfillment events detached from the synchronous checkout path.",
      ],
      metrics: [
        { label: "P99 LATENCY", val: "42 ms", detail: "Under 2,500 req/sec simulated spike" },
        { label: "RACE CONDITIONS", val: "0 Oversells", detail: "Over 100,000 stress transactions" },
        { label: "TRANSACTION ABORTS", val: "< 0.04%", detail: "Optimized lock hold duration" },
      ],
      icon: Database,
    },
    {
      id: "PROD-SYS-02",
      title: "Multi-Tenant SaaS REST API & Authentication Service",
      tag: "DISTRIBUTED PLATFORM & SECURITY",
      status: "PRODUCTION ACTIVE",
      tech: ["Node.js", "TypeScript", "SQL (Postgres)", "Docker", "JWT / OAuth2", "Nginx"],
      overview:
        "Architected an enterprise multi-tenant API core with strict schema-level tenant isolation, automated migrations, zero-downtime rolling deploys, and sub-millisecond session authentication.",
      architectureHighlights: [
        "Tenant context resolution middleware enforcing row-level schema boundaries with zero cross-tenant leakage vulnerability.",
        "Cryptographically signed refresh/access token rotation with Redis revocation lists preventing session replay attacks.",
        "Centralized RFC-7807 compliant error handling and structured JSON logging with OpenTelemetry trace correlation.",
      ],
      metrics: [
        { label: "AUTH OVERHEAD", val: "1.2 ms", detail: "Local cryptographic signature verify" },
        { label: "SCHEMA ISOLATION", val: "100%", detail: "Hard-isolated tenant queries" },
        { label: "API AVAILABILITY", val: "99.95%", detail: "Containerized zero-downtime rolling deploys" },
      ],
      icon: Lock,
    },
  ];

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-hidden bg-grid-pattern">
      {/* Background Radial Ambiance */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">
        {/* ========================================================================= */}
        {/* 1. PAGE HEADER                                                            */}
        {/* ========================================================================= */}
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-cyan-400">
            <span className="font-bold">{"//"}</span>
            <span className="tracking-wider uppercase">
              Architecture, Systems &amp; Hardware Infrastructure
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            Systems Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              Resilience &amp; Scale
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed max-w-2xl">
            Real backend architectures, database schemas, and hands-on bare-metal server management.
            Explore live homelab telemetry, incident post-mortems, and production transaction engines.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. SIGNATURE FEATURE: WALL-E HOMELAB SERVER DASHBOARD                     */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {"// SECTION 01"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans mt-0.5">
                Bare-Metal Server Architecture: WALL-E
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              TELEMETRY REFRESH: REALTIME HOST
            </span>
          </div>

          {/* Interactive Server Dashboard Component */}
          <WallEServerCard />
        </section>

        {/* ========================================================================= */}
        {/* 3. CASE STUDY SPOTLIGHT: WALL-E INCIDENT POST-MORTEM                      */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {"// SECTION 02"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans mt-0.5">
                Incident Report #01: Concurrency Under Pressure
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              SEVERITY: P1 · STATUS: RESOLVED
            </span>
          </div>

          <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-6 shadow-xl">
            {/* Incident Header Meta */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400">
                  <ShieldAlert className="w-4 h-4" />
                </span>
                <div>
                  <div className="text-zinc-200 font-bold">
                    POST-MORTEM: PEAK STREAMING BUFFERING COLLAPSE
                  </div>
                  <div className="text-zinc-500 text-[11px]">
                    TARGET NODE: WALL-E (TrueNAS) · SERVICE: JELLYFIN
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[11px]">
                <div>
                  <span className="text-zinc-500 block">TIME TO MITIGATION</span>
                  <span className="text-emerald-400 font-bold">18 Minutes</span>
                </div>
                <div>
                  <span className="text-zinc-500 block">DATA LOSS</span>
                  <span className="text-emerald-400 font-bold">0 Bytes</span>
                </div>
              </div>
            </div>

            {/* Narrative Breakdown Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* The Crisis */}
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
                  <AlertTriangle className="w-4 h-4" />
                  <span>01 // THE CRISIS</span>
                </div>
                <h3 className="text-sm font-bold text-zinc-200 font-sans">
                  Simultaneous 4K/1080p Streams Spike
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  During a family gathering, 5 simultaneous media streams started playing across multiple rooms.
                  Playback began stuttering, I/O latency jumped from &lt; 5ms to &gt; 850ms, and Jellyfin web UI stopped responding.
                </p>
              </div>

              {/* Root Cause Analysis */}
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                  <Cpu className="w-4 h-4" />
                  <span>02 // ROOT CAUSE ANALYSIS</span>
                </div>
                <h3 className="text-sm font-bold text-zinc-200 font-sans">
                  Transcode Thrashing &amp; ZFS ARC Eviction
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Two mobile clients requested unsupported codecs, triggering simultaneous FFmpeg software CPU transcodes on the 3rd-gen i5.
                  This caused 100% CPU lock, starved the ZFS ARC cache, and generated disk head thrashing across the 1TB HDD media pool.
                </p>
              </div>

              {/* Engineering Fix */}
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>03 // THE ENGINEERING FIX</span>
                </div>
                <h3 className="text-sm font-bold text-zinc-200 font-sans">
                  Direct Play Enforcement &amp; Resource Pinning
                </h3>
                <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                  Enforced client-side Direct Play video profiles (H.264/AAC compatibility fallback), isolated transcode scratch storage into SSD RAM-disk (/dev/shm), and set container CPU quotas to preserve 20% headroom for TrueNAS kernel operations.
                </p>
              </div>
            </div>

            {/* Business & Production Takeaway Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-emerald-950/30 via-zinc-900 to-zinc-950 border border-emerald-500/30 space-y-2 font-sans">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5" />
                <span>Production Engineering Takeaway for High-Scale Applications</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                &ldquo;The exact same diagnostic rigor applied here is what saves an E-commerce store or SaaS platform during sudden peak traffic spikes (e.g., Black Friday campaigns). Profiling whether bottlenecks stem from compute saturation, disk I/O thrashing, or unbuffered client payloads separates reliable systems from catastrophic downtime.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PRODUCTION BACKEND CASE STUDIES                                        */}
        {/* ========================================================================= */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {"// SECTION 03"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans mt-0.5">
                Production Backend Architectures
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-500">
              DISCIPLINE: CONCURRENCY, DATA INTEGRITY &amp; ISOLATION
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {productionProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-6 hover:border-zinc-700 transition-colors shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-emerald-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            [{project.id}]
                          </span>
                          <span className="text-[11px] font-mono text-zinc-500">
                            {project.tag}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="self-start sm:self-center px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-400">
                      {project.status}
                    </span>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project Overview */}
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                      {"// ARCHITECTURAL SAFEGUARDS"}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {project.architectureHighlights.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800/70 text-xs font-sans text-zinc-400 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-emerald-400 font-mono font-bold text-xs mt-0.5">
                            &gt;
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Performance / Stability Metrics Bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/90 font-mono"
                      >
                        <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">
                          {m.label}
                        </span>
                        <span className="text-lg font-bold text-zinc-100 block mt-0.5">
                          {m.val}
                        </span>
                        <span className="text-[11px] text-zinc-400 block font-sans mt-0.5">
                          {m.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. BOTTOM CALL TO ACTION                                                  */}
        {/* ========================================================================= */}
        <section className="pb-8">
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>ZERO-DOWNTIME ARCHITECTURAL ENGINEERING</span>
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Want this level of architectural stability for your backend?
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                Whether you need to eliminate database deadlocks, architect high-concurrency checkout flows, or build bulletproof server infrastructure, let&apos;s talk systems.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/about#audit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 group"
              >
                <ShieldCheck className="w-4 h-4 text-zinc-950" />
                <span>[ Request a System Health Check ]</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
