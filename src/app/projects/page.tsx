import type { Metadata } from "next";
import Link from "next/link";
import { WallEServerCard } from "@/components/WallEServerCard";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cpu,
  Database,
  GitBranch,
  Server,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "What I'm Building | Eslam Ayman",
  description:
    "Public repositories, study log and homelab server setup of Eslam Ayman — backend development with Node.js, TypeScript and SQL.",
};

export default function ProjectsPage() {
  const repositories = [
    {
      id: "REPO-01",
      title: "Node.js Learning Roadmap",
      tag: "BACKEND ROADMAP",
      status: "IN PROGRESS",
      repo: "https://github.com/EslamAyman-wab/Node.js-Learning",
      tech: ["Node.js", "Express", "JavaScript", "CommonJS", "nodemon"],
      overview:
        "My step-by-step path to Node.js and backend development. Every topic gets a runnable example and a checklist entry in the README — chapter_01 currently covers the filesystem module and the first Express server.",
      highlights: [
        "The same problem built twice: a raw http server, then the Express version, so I can see exactly what the framework abstracts away.",
        "Routes split into their own file instead of one index.js that grows forever.",
        "A published study checklist covering foundations, the runtime, HTTP and REST, data, testing and deployment.",
      ],
      metrics: [
        { label: "STATUS", val: "In progress", detail: "chapter_01 committed, HTTP & REST next" },
        { label: "TRACKED FILES", val: "13", detail: "after ~900 node_modules files left version control" },
        { label: "GOAL", val: "A tested, deployed API", detail: "the last item on my checklist" },
      ],
      icon: Terminal,
    },
    {
      id: "REPO-02",
      title: "JavaScript Practice Log",
      tag: "FUNDAMENTALS · COURSE WORK",
      status: "14 CHAPTERS",
      repo: "https://github.com/EslamAyman-wab/JS_Learning",
      tech: ["JavaScript", "ES6+", "DOM", "Regular Expressions"],
      overview:
        "My JavaScript practice from the Elzero Web School course: 14 chapters, each with its own challenge brief and solution files, plus a folder of CodeWars kata solutions.",
      highlights: [
        "Every chapter documents the challenge, its constraints and the required output before any solution code.",
        "The README states openly what is finished and what still needs another pass — including the chapters that are missing.",
        "Covers arrays and higher-order functions, objects, destructuring, Set/Map, regular expressions and classes.",
      ],
      metrics: [
        { label: "CHAPTERS", val: "14", detail: "chapter_02 through chapter_19" },
        { label: "SOLUTION FILES", val: "73", detail: "plus a DOM exercise in HTML" },
        { label: "EXTRAS", val: "CodeWars", detail: "kata solutions kept in their own folder" },
      ],
      icon: BookOpen,
    },
    {
      id: "REPO-03",
      title: "TypeScript Practice Log",
      tag: "TYPED JAVASCRIPT",
      status: "ONGOING",
      repo: "https://github.com/EslamAyman-wab/TS_Learning",
      tech: ["TypeScript", "tsx", "Strict types"],
      overview:
        "TypeScript practice: 23 exercises across four chapters, one file per lesson, each runnable on its own with no build step.",
      highlights: [
        "Types and inference, then functions, then objects and interfaces, then unions and narrowing.",
        "Each exercise is a standalone file, so nothing is hidden behind shared setup.",
        "Reading the compiler error is the point — the files are written to fail first and then be fixed.",
      ],
      metrics: [
        { label: "EXERCISES", val: "23", detail: "chapter_01 through chapter_04" },
        { label: "HOW TO RUN", val: "npx tsx <file>", detail: "one file at a time" },
        { label: "NEXT", val: "Typing an API layer", detail: "applying the types to my Node.js work" },
      ],
      icon: Cpu,
    },
    {
      id: "REPO-04",
      title: "Java Coursework (OOP)",
      tag: "COURSEWORK · OOP BASICS",
      status: "ARCHIVED COURSE",
      repo: "https://github.com/EslamAyman-wab/Java-Course",
      tech: ["Java", "OOP", "IntelliJ"],
      overview:
        "Java coursework on object-oriented programming: class design, inheritance and small console projects, each committed next to the brief that produced it.",
      highlights: [
        "BankAccount and Customer models, each with a Main class that demonstrates them.",
        "Small projects — a calculator, a Person model — kept beside their exercise briefs in Markdown.",
        "A 'Rebild' folder where I re-solved earlier chapters from scratch to check what actually stuck.",
      ],
      metrics: [
        { label: "JAVA FILES", val: "243", detail: "challenges, projects and re-solved exercises" },
        { label: "WHY IT MATTERS", val: "Static typing", detail: "where I first met classes and strict types" },
      ],
      icon: Database,
    },
  ];

  const studyMethod = [
    {
      icon: Terminal,
      title: "Code before claims",
      desc: "Nothing goes on this site or my CV until there is a repository behind it. If I can't point at the code, I don't list the skill.",
    },
    {
      icon: GitBranch,
      title: "One commit per topic",
      desc: "Every topic I study produces committed code and a README explaining what it does, why it exists and how to run it.",
    },
    {
      icon: BookOpen,
      title: "Move on when I can explain it",
      desc: "I only advance when I can rebuild a small example without following the tutorial — and I write down what I got wrong along the way.",
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
            <span className="font-bold" aria-hidden="true">{"//"}</span>
            <span className="tracking-wider uppercase">
              Repositories, Study Log &amp; Homelab
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            What I&apos;ve Built{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              &amp; What I&apos;m Building
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-sans leading-relaxed max-w-2xl">
            Four public repositories, an honest study log, and the repurposed server they run on.
            Everything here is work in progress — the READMEs say so too.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. SIGNATURE FEATURE: WALL-E HOMELAB SERVER                               */}
        {/* ========================================================================= */}
        <section className="space-y-6" aria-labelledby="section-walle-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold" aria-hidden="true">
                {"// SECTION 01"}
              </span>
              <h2 id="section-walle-heading" className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans mt-0.5">
                My Homelab Server: WALL-E
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400 font-medium">
              HARDWARE FACT SHEET
            </span>
          </div>

          {/* Interactive Server Overview Component */}
          <WallEServerCard />
        </section>

        {/* ========================================================================= */}
        {/* 3. HOW I STUDY                                                            */}
        {/* ========================================================================= */}
        <section className="space-y-6" aria-labelledby="section-method-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold" aria-hidden="true">
                {"// SECTION 02"}
              </span>
              <h2 id="section-method-heading" className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans mt-0.5">
                How I Study
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400 font-medium">
              THREE RULES I DON&apos;T BREAK
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {studyMethod.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80 space-y-3"
                >
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-semibold">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                    <span>RULE</span>
                  </div>
                  <h3 className="text-sm font-bold text-zinc-200 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. PUBLIC REPOSITORIES                                                    */}
        {/* ========================================================================= */}
        <section className="space-y-6" aria-labelledby="section-repos-heading">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-zinc-800/80 pb-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 font-semibold" aria-hidden="true">
                {"// SECTION 03"}
              </span>
              <h2 id="section-repos-heading" className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans mt-0.5">
                Public Repositories
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400 font-medium">
              DISCIPLINE: SMALL COMMITS, HONEST READMES
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {repositories.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.id}
                  className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-6 hover:border-zinc-700 transition-colors shadow-lg"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-emerald-400">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-emerald-400">
                            [{project.id}]
                          </span>
                          <span className="text-[11px] font-mono text-zinc-400 font-medium">
                            {project.tag}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-0.5">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <span className="self-start sm:self-center px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300 font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project Overview */}
                  <p className="text-sm text-zinc-300 font-sans leading-relaxed">
                    {project.overview}
                  </p>

                  {/* What's inside */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-mono text-zinc-300 uppercase tracking-wider block font-semibold">
                      {"// WHAT'S IN IT"}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {project.highlights.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-3 rounded-lg bg-zinc-950/70 border border-zinc-800/70 text-xs font-sans text-zinc-300 leading-relaxed flex items-start gap-2"
                        >
                          <span className="text-emerald-400 font-mono font-bold text-xs mt-0.5" aria-hidden="true">
                            &gt;
                          </span>
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Facts bar */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800/90 font-mono"
                      >
                        <span className="text-[10px] text-zinc-400 block uppercase tracking-wider font-medium">
                          {m.label}
                        </span>
                        <span className="text-lg font-bold text-zinc-100 block mt-0.5">
                          {m.val}
                        </span>
                        <span className="text-[11px] text-zinc-300 block font-sans mt-0.5">
                          {m.detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Repo link */}
                  <div className="pt-1">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg bg-zinc-950 border border-zinc-700/80 hover:border-emerald-500/50 text-zinc-200 hover:text-white font-mono text-xs font-semibold tracking-wide transition-colors group"
                    >
                      <GitBranch className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>[ Open Repository ]</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. BOTTOM CALL TO ACTION                                                  */}
        {/* ========================================================================= */}
        <section className="pb-8" aria-label="Contact call to action">
          <div className="rounded-2xl bg-zinc-900 border border-zinc-800 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-20 -top-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 space-y-3 max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <Server className="w-3.5 h-3.5" aria-hidden="true" />
                <span>WANT THE FULL CONTEXT?</span>
              </span>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Read the code, then read the reasoning
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 font-sans leading-relaxed">
                Every repository above has a README written for someone joining today — what it
                does, how to run it, and what I got wrong on the way. If you want to know how I
                work before hiring me, that is the best place to start.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="https://github.com/EslamAyman-wab"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open my GitHub profile"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 shadow-lg shadow-emerald-500/20 group"
              >
                <CheckCircle2 className="w-4 h-4 text-zinc-950" aria-hidden="true" />
                <span>[ Open My GitHub Profile ]</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
