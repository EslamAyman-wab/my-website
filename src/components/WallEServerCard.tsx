"use client";

import { useState } from "react";
import {
  Server,
  HardDrive,
  Cpu,
  CheckCircle2,
  Radio,
  Database,
  LayoutDashboard,
  Archive,
} from "lucide-react";

export function WallEServerCard() {
  const [selectedDatasetId, setSelectedDatasetId] = useState<string>("ds-02");

  // Figures below were read off the host itself (df -h inside the container),
  // not estimated. They are a snapshot, so they drift as the machine is used.
  const datasets = [
    {
      id: "ds-01",
      name: "Applications & Containers",
      tag: "APPS",
      capacity: "333 GB",
      used: "32 GB",
      percent: 10,
      dataset: "disk01/ix-apps/docker",
      pool: "disk01",
      usedFor: "Container images and their data",
      desc: "Docker's data root. Every self-hosted service on this machine runs from here in its own container, instead of being installed directly onto the host operating system.",
      color: "emerald",
    },
    {
      id: "ds-02",
      name: "Agent Data & Automations",
      tag: "DATA",
      capacity: "425 GB",
      used: "~1 GB",
      percent: 1,
      dataset: "disk02/hermes-agent",
      pool: "disk02",
      usedFor: "Agent workspace and scheduled jobs",
      desc: "The dataset mounted into the agent container: its workspace, logs and the scheduled archive jobs it runs. This is the reason the machine is worth keeping powered on.",
      color: "cyan",
    },
    {
      id: "ds-03",
      name: "Service Configuration",
      tag: "CONFIG",
      capacity: "425 GB",
      used: "< 1 GB",
      percent: 1,
      dataset: "disk02/glance",
      pool: "disk02",
      usedFor: "Dashboard configuration",
      desc: "A deliberately tiny dataset: one YAML file bind-mounted read-write into the dashboard container, so a configuration change is an edit on disk rather than a rebuild.",
      color: "zinc",
    },
  ];

  const services = [
    {
      name: "Hermes agent",
      role: "Automation, scheduled jobs and reports",
      mode: "Container",
      status: "Running",
      statusColor: "text-emerald-400",
      bgBadge: "bg-emerald-500/10 border-emerald-500/30",
      icon: LayoutDashboard,
      note: "Cron-driven tasks",
    },
    {
      name: "Glance dashboard",
      role: "Self-hosted dashboard for the whole homelab",
      mode: "Container",
      status: "Running",
      statusColor: "text-emerald-400",
      bgBadge: "bg-emerald-500/10 border-emerald-500/30",
      icon: Database,
      note: "Config on disk02",
    },
    {
      name: "Archive jobs",
      role: "Scheduled backups of what I don't want to lose",
      mode: "Cron",
      status: "Scheduled",
      statusColor: "text-cyan-400",
      bgBadge: "bg-cyan-500/10 border-cyan-500/30",
      icon: Archive,
      note: "Runs on a timer",
    },
  ];

  const activeDataset =
    datasets.find((d) => d.id === selectedDatasetId) || datasets[1];

  return (
    <div className="rounded-2xl bg-zinc-900/80 border border-zinc-800 p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />

      {/* Header & Machine Identity */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-zinc-800/80 pb-6">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono flex items-center gap-2.5">
              <Server className="w-6 h-6 text-emerald-400" aria-hidden="true" />
              <span>WALL-E</span>
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
              Repurposed Desktop
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
              TrueNAS SCALE
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 font-mono flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-zinc-200 font-semibold">SPECS:</span>
            <span>Intel Core i5-3470</span>
            <span className="text-zinc-500" aria-hidden="true">|</span>
            <span>16 GB RAM</span>
            <span className="text-zinc-500" aria-hidden="true">|</span>
            <span className="text-emerald-400">ZFS storage</span>
          </p>
        </div>

        {/* Status Indicator — describes reality: it's up, and this site runs on it */}
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono">
          <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <div className="flex flex-col">
            <span className="text-emerald-400 font-bold tracking-wide">
              POWERED ON
            </span>
            <span className="text-zinc-400 text-[10px] font-medium">
              THIS SITE IS BUILT ON IT
            </span>
          </div>
        </div>
      </div>

      {/* ZFS Datasets Interactive Visualizer */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <HardDrive className="w-4 h-4 text-cyan-400" aria-hidden="true" />
            <span className="text-zinc-100 font-bold uppercase tracking-wider">
              ZFS Datasets
            </span>
            <span className="text-zinc-500" aria-hidden="true">{"//"}</span>
            <span className="text-[11px] text-zinc-400 hidden sm:inline">
              Click a dataset to see what it holds
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            POOLS: DISK01 · DISK02
          </span>
        </div>

        {/* Dataset Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {datasets.map((dataset) => {
            const isSelected = dataset.id === selectedDatasetId;
            return (
              <button
                key={dataset.id}
                type="button"
                aria-label={`Inspect ${dataset.name}, ${dataset.used} of ${dataset.capacity} used`}
                aria-pressed={isSelected}
                onClick={() => setSelectedDatasetId(dataset.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between space-y-3 cursor-pointer ${
                  isSelected
                    ? "bg-zinc-950 border-emerald-500/60 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/40"
                    : "bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-950/90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase bg-zinc-900 text-zinc-300 border border-zinc-700/80">
                      {dataset.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-200">
                      {dataset.capacity}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-zinc-200 font-sans line-clamp-1">
                    {dataset.name}
                  </h4>
                </div>

                {/* Accessible progress bar */}
                <div className="space-y-1 w-full font-mono">
                  <div className="flex items-center justify-between text-[10px] text-zinc-400 font-medium">
                    <span>{dataset.used} used</span>
                    <span>{dataset.percent}%</span>
                  </div>
                  <div
                    role="progressbar"
                    aria-valuenow={dataset.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${dataset.name} storage utilisation`}
                    className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden"
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        dataset.percent > 70
                          ? "bg-gradient-to-r from-cyan-500 to-emerald-400"
                          : "bg-emerald-500"
                      }`}
                      style={{ width: `${dataset.percent}%` }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Dataset Inspector Panel */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 font-mono text-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/60 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">&gt; [INSPECTING]</span>
              <span className="text-zinc-200 font-bold">{activeDataset.name}</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-zinc-400 font-medium">
              <span className="flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
                POOL: {activeDataset.pool}
              </span>
              <span>USED: {activeDataset.used}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
            <div className="space-y-0.5">
              <span className="text-zinc-400 block font-medium">ZFS DATASET</span>
              <span className="text-zinc-200 font-semibold">{activeDataset.dataset}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-zinc-400 block font-medium">USED FOR</span>
              <span className="text-cyan-400 font-semibold">{activeDataset.usedFor}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-zinc-400 block font-medium">CAPACITY</span>
              <span className="text-emerald-400 font-semibold">
                {activeDataset.capacity} · {activeDataset.percent}% in use
              </span>
            </div>
          </div>

          <p className="text-zinc-300 text-xs font-sans pt-1 leading-relaxed border-t border-zinc-900">
            {activeDataset.desc}
          </p>
        </div>
      </div>

      {/* Self-Hosted Services */}
      <div className="relative z-10 space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
            <Cpu className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span className="text-zinc-100 font-bold uppercase tracking-wider">
              Services I Run And Maintain
            </span>
            <span className="text-zinc-500" aria-hidden="true">{"//"}</span>
            <span className="text-[11px] text-zinc-400 hidden sm:inline">
              Only what I actually keep running is listed here
            </span>
          </div>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 font-medium">
            <Radio className="w-3.5 h-3.5 animate-pulse" aria-hidden="true" />
            LISTED: 3
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.name}
                className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <Icon className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${svc.bgBadge} ${svc.statusColor} flex items-center gap-1`}
                  >
                    <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                    {svc.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-zinc-100 font-sans">
                    {svc.name}
                  </h4>
                  <p className="text-xs text-zinc-300 font-sans mt-0.5">
                    {svc.role}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-400 font-medium">
                  <span>{svc.mode}</span>
                  <span className="text-zinc-300">{svc.note}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
