import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Cpu,
  HardDrive,
  Layers,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Eslam Ayman | Backend Developer",
  description:
    "Backend developer based in Egypt, learning Node.js, TypeScript and SQL in public. How I study, what I care about, and how to reach me.",
};

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
      aria-hidden="true"
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
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function AboutPage() {
  const values = [
    {
      id: "01",
      title: "Write it before I claim it",
      tagline: "If it isn't committed, it isn't a skill yet.",
      desc: "Nothing goes on my CV or this site until there is a repository behind it. That rule is why my GitHub shows small, honest progress instead of a long list of technologies I've read about.",
      icon: Terminal,
      badge: "HONESTY",
    },
    {
      id: "02",
      title: "Document for the next person",
      tagline: "Undocumented code is unusable code.",
      desc: "Every repository I own has a README that explains what it does, what is still missing and how to run it — written for someone joining the project today, not for me next week.",
      icon: BookOpen,
      badge: "CLARITY",
    },
    {
      id: "03",
      title: "Understand the layer below",
      tagline: "A framework you don't understand is a framework you can't debug.",
      desc: "That's why the same problem gets built twice in my Node.js repo: once with the raw http module and once with Express. Seeing what the framework hides is the whole point of the exercise.",
      icon: Layers,
      badge: "CURIOSITY",
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
            <span className="tracking-wider uppercase">About Me</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans">
            A backend developer{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
              still at the beginning.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-zinc-400 font-sans leading-relaxed max-w-3xl">
            I&apos;m Eslam Ayman, based in Egypt. I studied Management Information Systems and
            graduated in 2025, and I&apos;m now teaching myself backend development with Node.js,
            TypeScript and SQL — in the open, one topic at a time.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. THE STORY                                                              */}
        {/* ========================================================================= */}
        <section className="space-y-12">
          {/* Why backend */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400">
                <span>{"// 01"}</span>
                <span className="text-zinc-600">·</span>
                <span>THE STORY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
                Why backend?
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
                I came to programming through computers themselves — installing operating systems,
                swapping parts, and fixing things I broke on machines that were already old. Software
                was the next layer of the same curiosity.
              </p>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans">
                Backend is the part you can&apos;t see from the outside: how a request actually
                travels, where the data really lives, and what happens when two things try to write
                at the same time. That invisible layer is the part I find worth understanding, and
                it&apos;s where I&apos;m putting my effort.
              </p>
            </div>

            <div className="lg:col-span-6 rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-emerald-400">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-sans">
                    Doing more with older hardware
                  </h3>
                  <span className="text-xs font-mono text-zinc-500">
                    RESOURCEFULNESS BY NECESSITY
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 font-sans leading-relaxed">
                My first machines were years behind the curve, which turned out to be the best
                training I could have had. Rather than throwing hardware away, the machine I used
                before my current PC now runs as a home server: TrueNAS SCALE, ZFS datasets and
                containerised services. Managing that forces you to understand memory, storage and
                limits instead of ignoring them.
              </p>
              <div className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/80 font-mono text-xs text-zinc-400 flex items-center justify-between">
                <span>HARDWARE MINDSET:</span>
                <span className="text-emerald-400 font-semibold">
                  DO MORE WITH LESS COMPUTE
                </span>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-4">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              {"// HOW I WORK"}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((p) => {
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
        {/* 3. CONTACT & AVAILABILITY                                                 */}
        {/* ========================================================================= */}
        <section id="contact" className="scroll-mt-24 space-y-6 pb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                {"// SECTION 03"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 font-sans">
                Contact &amp; Availability
              </h2>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-zinc-400 font-medium">STATUS:</span>
              <span className="text-emerald-400 font-semibold">
                OPEN TO JUNIOR BACKEND ROLES
              </span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-zinc-400 font-sans leading-relaxed max-w-3xl">
            I&apos;m looking for a junior backend position where I can keep learning on real
            problems. The fastest way to reach me is LinkedIn — I check it daily and I&apos;m happy
            to walk through any of the code on my GitHub.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* GitHub */}
            <a
              href="https://github.com/EslamAyman-wab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open my GitHub profile"
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
                  GitHub
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 font-medium">
                  @EslamAyman-wab
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/eslamayman-web"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open my LinkedIn profile"
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
                  LinkedIn
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 font-medium">
                  /in/eslamayman-web
                </p>
              </div>
            </a>

            {/* Location & availability */}
            <div className="p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
                  <MapPin className="w-5 h-5 text-cyan-400" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold text-zinc-200 font-sans">
                  Based in Egypt
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-0.5 font-medium">
                  UTC+2 · remote-friendly
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-5 py-3 min-h-[44px] rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 hover:border-zinc-500 font-mono text-xs font-semibold tracking-wide transition-colors group"
            >
              <Cpu className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
              <span>[ See What I&apos;m Building ]</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
            </Link>

            <span className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              Email available on request via LinkedIn
            </span>
          </div>
        </section>
      </div>
    </div>
  );
}
