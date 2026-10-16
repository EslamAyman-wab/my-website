"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Database,
  HardDrive,
  Server,
  Terminal,
  Zap,
} from "lucide-react";

export default function Home() {
  const statusCards = [
    {
      label: "CURRENT FOCUS",
      value: "Node.js core",
      subtext:
        "core modules, the event loop and HTTP servers — every topic committed with the code that proves it",
      icon: Terminal,
      accent: "text-emerald-400",
      borderGlow: "group-hover:border-emerald-500/40",
    },
    {
      label: "CORE STACK",
      value: "Node.js · TS · SQL",
      subtext:
        "the stack I'm building on, in that order: JavaScript, then TypeScript, then data",
      icon: Database,
      accent: "text-cyan-400",
      borderGlow: "group-hover:border-cyan-500/40",
    },
    {
      label: "HOMELAB",
      value: "TrueNAS SCALE",
      subtext:
        "running on a repurposed i5-3470 with 16 GB RAM — where Linux, storage and limits stopped being theory",
      icon: Server,
      accent: "text-zinc-200",
      borderGlow: "group-hover:border-zinc-400/40",
    },
  ];

  const focusAreas = [
    {
      id: "01",
      title: "The Node.js runtime",
      symptom:
        "Studying: the event loop, non-blocking I/O, and why Node can hold many connections on a single thread.",
      solution:
        "I write a small runnable example for every topic with the core modules — fs, path, events — and build the same server twice: once with the raw http module, once with Express, so I can see what the framework is hiding.",
      diagnostic: "CHAPTER_01 COMMITTED",
      icon: Terminal,
      color: "emerald",
    },
    {
      id: "02",
      title: "HTTP servers & routing",
      symptom:
        "Studying: how a URL turns into a handler, plus status codes, request bodies and query strings.",
      solution:
        "Rebuilding the first server on Express and splitting the routes into their own file instead of letting one index.js grow forever.",
      diagnostic: "IN PROGRESS",
      icon: Server,
      color: "cyan",
    },
    {
      id: "03",
      title: "REST API design",
      symptom:
        "Studying: resources, consistent error responses, and validating input before it ever reaches the database.",
      solution:
        "Designing the endpoints for a small domain before writing handlers, so the shape of the API is a decision rather than an accident.",
      diagnostic: "NEXT ON MY ROADMAP",
      icon: Zap,
      color: "emerald",
    },
    {
      id: "04",
      title: "Data & SQL",
      symptom:
        "Studying: relational modelling, writing queries, and keeping data access out of the route handlers.",
      solution:
        "Working through the roadmap I wrote in my Node.js-Learning repo, chapter by chapter, until a request survives a real database.",
      diagnostic: "PLANNED",
      icon: Database,
      color: "cyan",
    },
  ];

  const backendStack = [
    { name: "JavaScript (ES6+)", note: "the foundation — 14 chapters of exercises, plus Edabit and CodeWars katas" },
    { name: "Node.js core modules", note: "fs, path and events — practised with runnable examples instead of notes" },
    { name: "Express", note: "routing and middleware; my first framework on top of the raw http module" },
    { name: "TypeScript", note: "23 typed exercises so far, with the compiler enforcing the rules" },
    { name: "SQL & data modelling", note: "next on the roadmap: relations, queries and a real data layer" },
    { name: "Git & GitHub", note: "one commit per topic, a README per repo — nothing left undocumented" },
  ];

  const homelabStack = [
    { name: "TrueNAS SCALE", note: "the operating system on the repurposed i5-3470 that runs everything below" },
    { name: "ZFS datasets", note: "separate pools for applications and data — snapshots instead of hope" },
    { name: "Docker containers", note: "each service in its own container rather than installed on the host" },
    { name: "Linux & the shell", note: "services, scheduled jobs and permissions — learned by breaking them first" },
    { name: "Networking & TLS", note: "making self-hosted services reachable from outside without leaving them open" },
    { name: "Backups & logging", note: "scheduled jobs that archive and report, so nothing fails silently" },
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
              Backend Developer · Node.js &amp; TypeScript
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </div>

          {/* Main Headline — plain h1 for immediate LCP */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl font-sans">
            Learning how the backend works —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              and building in public.
            </span>
          </h1>

          {/* Sub-headline — plain p for immediate render */}
          <p className="text-base sm:text-lg lg:text-xl text-zinc-400 max-w-3xl leading-relaxed font-sans">
            I&apos;m Eslam Ayman, a backend developer based in Egypt. I&apos;m working through
            Node.js from the runtime up — core modules, HTTP servers, REST APIs, databases — and
            every topic ends up as code in a public repository with a README that explains what it
            does and how to run it.
          </p>

          {/* Dual CTAs — plain div, min-h-[44px] for tap targets */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 group"
            >
              <Terminal className="w-4 h-4 text-zinc-950" />
              <span>[ See What I&apos;m Building ]</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[44px] rounded-lg bg-zinc-900/90 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-700/80 hover:border-zinc-500 font-mono text-xs sm:text-sm font-semibold tracking-wider transition-all duration-200"
            >
              <Server className="w-4 h-4 text-cyan-400" />
              <span>[ About Me &amp; My Setup ]</span>
            </Link>
          </div>

          {/* Telemetry Quick-Bar — keeps subtle entrance animation (decorative) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full pt-8 text-left"
          >
            {statusCards.map((item) => {
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
        {/* 2. STUDY LOG — WHAT I'M LEARNING RIGHT NOW                                */}
        {/* ========================================================================= */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-800/80 pb-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400">
                <span>{"// 01"}</span>
                <span className="text-zinc-600">·</span>
                <span>CURRENT STUDY LOG</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                What I&apos;m Learning Right Now
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-sans">
                The topics on my desk today, and what each one looks like as code.
              </p>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-zinc-500">
              STATUS: LEARNING IN PUBLIC
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {focusAreas.map((item) => {
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
                        <span>TOPIC</span>
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
                    <span className="text-zinc-500">STATUS</span>
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
        {/* 3. STACK & SETUP                                                          */}
        {/* ========================================================================= */}
        <section className="space-y-10">
          <div className="space-y-2 border-b border-zinc-800/80 pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
              <span>{"// 02"}</span>
              <span className="text-zinc-600">·</span>
              <span>STACK &amp; SETUP</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              What I Work With
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-sans">
              The tools I&apos;m actually using day to day — and the hardware that runs them.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column A: Backend */}
            <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 font-sans">
                      Backend
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      Runtime, language &amp; data
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  LEARNING
                </span>
              </div>

              <div className="space-y-3.5">
                {backendStack.map((tech) => (
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

            {/* Column B: Homelab */}
            <div className="p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-100 font-sans">
                      Homelab
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono">
                      Hardware, storage &amp; self-hosting
                    </p>
                  </div>
                </div>
                <span className="text-xs font-mono text-cyan-400 font-semibold px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  RUNNING
                </span>
              </div>

              <div className="space-y-3.5">
                {homelabStack.map((tech) => (
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
                  <span>HOMELAB // THE MACHINE BEHIND THIS SITE</span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                  WALL-E: the desktop I refused to retire
                </h2>

                <p className="text-sm sm:text-base text-zinc-300 max-w-2xl leading-relaxed font-sans">
                  WALL-E is the third-generation i5 machine I used before my current PC. Rather than
                  let it sit idle, it now runs TrueNAS SCALE with ZFS datasets and containerised
                  services I depend on daily — and it&apos;s where Linux, storage and resource limits
                  stopped being theory for me.
                </p>

                {/* Hardware row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
                  <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">OS</span>
                    <span className="text-zinc-200 font-bold">TrueNAS SCALE</span>
                  </div>
                  <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">STORAGE</span>
                    <span className="text-emerald-400 font-bold">ZFS datasets</span>
                  </div>
                  <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">CPU</span>
                    <span className="text-cyan-400 font-bold">Core i5-3470</span>
                  </div>
                  <div className="p-2.5 rounded bg-zinc-950/70 border border-zinc-800">
                    <span className="text-zinc-500 block text-[10px]">MEMORY</span>
                    <span className="text-zinc-200 font-bold">16 GB</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-cyan-500/20 group"
                >
                  <span>[ See The Server Setup ]</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <span className="text-[11px] font-mono text-zinc-500 mt-2">
                  Hardware, datasets and what runs on it
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
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>OPEN TO JUNIOR BACKEND ROLES</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Looking for a junior backend developer who documents everything?
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed">
                I&apos;m at the start of my backend career and I&apos;m looking for a team where I
                can keep learning on real problems. Everything I&apos;ve built is public — you can
                read the code and the reasoning behind it before we ever talk.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Link
                href="/about#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 min-h-[44px] rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20"
              >
                <CheckCircle2 className="w-4 h-4 text-zinc-950" />
                <span>[ Get In Touch ]</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-zinc-500 border-t border-zinc-800/60 max-w-xl mx-auto">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Based in Egypt</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Remote-friendly</span>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Code public on GitHub</span>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
