"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Activity } from "lucide-react";
import Link from "next/link";

export default function RefinedMissionPortal() {
  return (
    <div className="h-screen w-full bg-[#050505] text-white font-sans overflow-hidden flex flex-col relative selection:bg-yellow-500">

      {/* ================= BACKGROUND GLOW (DESKTOP ONLY) ================= */}
      <div className="hidden md:block absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_0%,transparent_70%)]" />

      {/* ================= TOP NAV ================= */}
      <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-start">
        <div className="flex flex-col border-l-2 border-yellow-500 pl-5">
          <h1 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase">
            MISSION LOGISTICS
          </h1>
          <p className="text-[9px] font-mono tracking-[0.5em] text-gray-500 uppercase mt-1">
            PROTOCOL // FLUX 2026
          </p>
        </div>

        {/* HUD – DESKTOP ONLY */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[7px] font-mono uppercase text-gray-600 tracking-widest">
              DATA_SYNC
            </span>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-1.5 h-1.5 bg-yellow-500/40" />
                ))}
                <div className="w-1.5 h-1.5 bg-yellow-500 animate-pulse" />
              </div>
              <span className="text-[9px] font-bold text-yellow-500 tracking-widest">
                STABLE
              </span>
            </div>
          </div>
          <Activity size={18} className="text-yellow-500 opacity-50" />
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="flex flex-col h-full">

        {/* ================= WORKSHOPS ================= */}
        <div className="relative flex-1 overflow-hidden border-b border-white/5">

          {/* IMAGE */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1600"
              className="w-full h-full object-cover brightness-[0.35] md:group-hover:scale-110 md:group-hover:brightness-[0.25] transition-all duration-[2s]"
              alt="Workshops"
            />
            <div className="absolute inset-0 bg-blue-900/20 md:group-hover:bg-transparent transition-colors duration-700" />
          </div>

          {/* CONTENT */}
          <div className="relative z-20 h-full flex items-center px-6 md:px-24">
            <div className="max-w-2xl">

              <span className="text-[10px] font-bold tracking-[0.6em] text-yellow-500 uppercase">
                INNOVATE • BUILD • LEARN
              </span>
              <Link href="/FluxEvents">
              <div className="mt-4 inline-flex items-center gap-4">
              <h2 className="mt-4 text-4xl md:text-8xl font-black italic uppercase leading-none">
                WORKSHOPS
              </h2>
              <div className="hidden md:flex bg-yellow-500 p-4 text-black rotate-45">
                    <MoveRight size={32} className="-rotate-45" />
                  </div>
                  </div>
                  </Link>
              <p className="mt-4 text-[11px] md:text-[10px] font-mono text-gray-400 uppercase tracking-widest max-w-sm">
                Hands-on technical sessions designed for real-world engineering exposure.
              </p>
            </div>
          </div>
        </div>

        {/* ================= EVENTS ================= */}
        <div className="relative flex-1 overflow-hidden">

          {/* IMAGE */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600"
              className="w-full h-full object-cover brightness-[0.3] md:group-hover:scale-110 md:group-hover:brightness-[0.2] transition-all duration-[2s]"
              alt="Events"
            />
            <div className="absolute inset-0 bg-red-900/20 md:group-hover:bg-transparent transition-colors duration-700" />
          </div>

          {/* CONTENT */}
          <div className="relative z-20 h-full flex items-center justify-end px-6 md:px-24 text-right">
            <div className="max-w-2xl">

              <span className="text-[10px] font-bold tracking-[0.6em] text-yellow-500 uppercase">
                COMPETE • CONQUER • GLORY
              </span>

              <Link href="/FluxEvents">
                <div className="mt-4 inline-flex items-center gap-4">
                  <h2 className="text-4xl md:text-8xl font-black italic uppercase leading-none">
                    EVENTS
                  </h2>
                  <div className="hidden md:flex bg-yellow-500 p-4 text-black rotate-45">
                    <MoveRight size={32} className="-rotate-45" />
                  </div>
                </div>
              </Link>

              <p className="mt-4 text-[11px] md:text-[10px] font-mono text-gray-400 uppercase tracking-widest max-w-sm">
                Competitive challenges engineered to test logic, speed, and strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= NOISE (VERY LIGHT) ================= */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}
