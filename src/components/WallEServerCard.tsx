"use client";

import { useState } from "react";
import {
  Server,
  HardDrive,
  Cpu,
  CheckCircle2,
  Radio,
  Thermometer,
  Film,
  Image,
  Cloud,
  Bot,
} from "lucide-react";

export function WallEServerCard() {
  const [selectedPoolId, setSelectedPoolId] = useState<string>("pool-02");

  const storagePools = [
    {
      id: "pool-01",
      name: "Pool 01: OS Root & System Caches",
      type: "SSD",
      capacity: "120 GB",
      used: "42 GB",
      percent: 35,
      mount: "/mnt/system-root",
      filesystem: "ZFS Mirror (ZRoot)",
      iops: "High IOPS / NVMe Cache",
      temperature: "32°C",
      scrubStatus: "Scrubbed 4d ago (0 errors)",
      desc: "Dedicated to TrueNAS OS kernel, container metadata, and ARC write/read staging for instant response times.",
      color: "emerald",
    },
    {
      id: "pool-02",
      name: "Pool 02: Media Assets & Streaming",
      type: "HDD",
      capacity: "1.0 TB",
      used: "740 GB",
      percent: 74,
      mount: "/mnt/tank/media-pool",
      filesystem: "ZFS Dataset (Compression: lz4)",
      iops: "Sequential Read Optimized",
      temperature: "36°C",
      scrubStatus: "Scrubbed 2d ago (0 errors)",
      desc: "Dedicated high-density storage hosting the Jellyfin streaming library with direct-play audio/video catalogs.",
      color: "cyan",
    },
    {
      id: "pool-03",
      name: "Pool 03: Vault, Repos & Cloud Sync",
      type: "HDD",
      capacity: "500 GB",
      used: "215 GB",
      percent: 43,
      mount: "/mnt/tank/vault-data",
      filesystem: "ZFS Encrypted Dataset",
      iops: "Balanced Read/Write",
      temperature: "34°C",
      scrubStatus: "Scrubbed 6d ago (0 errors)",
      desc: "Stores OwnCloud / NextCloud private sync directories, private git mirrors, and sensitive configuration vaults.",
      color: "emerald",
    },
    {
      id: "pool-04",
      name: "Pool 04: Cold Backups & Disaster Recovery",
      type: "HDD",
      capacity: "160 GB",
      used: "98 GB",
      percent: 61,
      mount: "/mnt/cold-archive",
      filesystem: "ZFS Snapshot Destination",
      iops: "Sequential Batch Writes",
      temperature: "31°C",
      scrubStatus: "Scrubbed 1d ago (0 errors)",
      desc: "Isolated target for automated cron-triggered incremental ZFS snapshots, preserving disaster recovery points.",
      color: "zinc",
    },
  ];

  const deployedServices = [
    {
      name: "Jellyfin",
      role: "Media Server & Transcoding",
      port: ":8096",
      status: "Online",
      statusColor: "text-emerald-400",
      bgBadge: "bg-emerald-500/10 border-emerald-500/30",
      icon: Film,
      traffic: "Direct Play Enforced",
    },
    {
      name: "Immich",
      role: "High-Performance Photo Storage",
      port: ":2283",
      status: "Online",
      statusColor: "text-emerald-400",
      bgBadge: "bg-emerald-500/10 border-emerald-500/30",
      icon: Image,
      traffic: "Background ML Indexing",
    },
    {
      name: "OwnCloud / NextCloud",
      role: "Data Sovereignty & Secure Sync",
      port: ":443 / SSL",
      status: "Online",
      statusColor: "text-emerald-400",
      bgBadge: "bg-emerald-500/10 border-emerald-500/30",
      icon: Cloud,
      traffic: "AES-256 Remote Sync",
    },
    {
      name: "Hermes Agents",
      role: "Automated Tasks, Cron & Probes",
      port: "Daemon Worker",
      status: "Active",
      statusColor: "text-cyan-400",
      bgBadge: "bg-cyan-500/10 border-cyan-500/30",
      icon: Bot,
      traffic: "Telemetry & Health Checks",
    },
  ];

  const activePool =
    storagePools.find((p) => p.id === selectedPoolId) || storagePools[1];

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
              <Server className="w-6 h-6 text-emerald-400" />
              <span>WALL-E</span>
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
              Bare-Metal HomeLab
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
              TrueNAS Core/Scale
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 font-mono flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="text-zinc-300 font-medium">SPECS:</span>
            <span>Intel Core i5 (3rd Gen)</span>
            <span className="text-zinc-600">|</span>
            <span>16 GB DDR3 RAM</span>
            <span className="text-zinc-600">|</span>
            <span className="text-emerald-400">Low TDP Energy Profile (~38W)</span>
          </p>
        </div>

        {/* Live Status Indicator */}
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-zinc-950/80 border border-zinc-800 text-xs font-mono">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <div className="flex flex-col">
            <span className="text-emerald-400 font-bold tracking-wide">
              UPTIME: 99.98%
            </span>
            <span className="text-zinc-500 text-[10px]">
              ALL DAEMONS OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      {/* Storage Pools Interactive Visualizer */}
      <div className="relative z-10 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <HardDrive className="w-4 h-4 text-cyan-400" />
            <span className="text-zinc-200 font-bold uppercase tracking-wider">
              Storage Pools &amp; Data Tiering Visualizer
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-[11px] text-zinc-500 hidden sm:inline">
              Click a pool to inspect ZFS dataset properties
            </span>
          </div>
          <span className="text-xs font-mono text-zinc-500">
            TOTAL DISKS: 4
          </span>
        </div>

        {/* Disk Pool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {storagePools.map((pool) => {
            const isSelected = pool.id === selectedPoolId;
            return (
              <button
                key={pool.id}
                type="button"
                onClick={() => setSelectedPoolId(pool.id)}
                className={`p-4 rounded-xl text-left transition-all duration-200 border flex flex-col justify-between space-y-3 cursor-pointer ${
                  isSelected
                    ? "bg-zinc-950 border-emerald-500/60 shadow-lg shadow-emerald-500/10 ring-1 ring-emerald-500/40"
                    : "bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-950/90"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                        pool.type === "SSD"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      }`}
                    >
                      {pool.type}
                    </span>
                    <span className="text-xs font-mono font-bold text-zinc-200">
                      {pool.capacity}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-zinc-200 font-sans line-clamp-1">
                    {pool.name.split(":")[1] || pool.name}
                  </h4>
                </div>

                {/* Progress bar */}
                <div className="space-y-1 w-full font-mono">
                  <div className="flex items-center justify-between text-[10px] text-zinc-500">
                    <span>{pool.used} used</span>
                    <span>{pool.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        pool.percent > 70
                          ? "bg-gradient-to-r from-cyan-500 to-emerald-400"
                          : "bg-emerald-500"
                      }`}
                      style={{ width: `${pool.percent}%` }}
                    />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Pool Inspector Panel */}
        <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800/90 font-mono text-xs space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/60 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">&gt; [INSPECTING]</span>
              <span className="text-zinc-200 font-bold">{activePool.name}</span>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-zinc-500">
              <span className="flex items-center gap-1">
                <Thermometer className="w-3 h-3 text-cyan-400" />
                {activePool.temperature}
              </span>
              <span>MOUNT: {activePool.mount}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px]">
            <div className="space-y-0.5">
              <span className="text-zinc-500 block">FILE SYSTEM / DATASET</span>
              <span className="text-zinc-300 font-semibold">{activePool.filesystem}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-zinc-500 block">IO PROFILE</span>
              <span className="text-cyan-400 font-semibold">{activePool.iops}</span>
            </div>
            <div className="space-y-0.5">
              <span className="text-zinc-500 block">INTEGRITY SCRUB</span>
              <span className="text-emerald-400 font-semibold">{activePool.scrubStatus}</span>
            </div>
          </div>

          <p className="text-zinc-400 text-xs font-sans pt-1 leading-relaxed border-t border-zinc-900">
            {activePool.desc}
          </p>
        </div>
      </div>

      {/* Deployed Self-Hosted Services Grid */}
      <div className="relative z-10 space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span className="text-zinc-200 font-bold uppercase tracking-wider">
              Active Production Microservices
            </span>
            <span className="text-zinc-600">{"//"}</span>
            <span className="text-[11px] text-zinc-500 hidden sm:inline">
              Supervised via systemd &amp; isolated Docker runtimes
            </span>
          </div>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
            <Radio className="w-3 h-3 animate-pulse" />
            4/4 HEALTHY
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deployedServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.name}
                className="p-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 transition-colors space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
                    <Icon className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${svc.bgBadge} ${svc.statusColor} flex items-center gap-1`}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {svc.status}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-zinc-100 font-sans">
                    {svc.name}
                  </h4>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">
                    {svc.role}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                  <span>{svc.port}</span>
                  <span className="text-zinc-400">{svc.traffic}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
