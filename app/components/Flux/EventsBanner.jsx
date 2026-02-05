"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight, Zap, Target, Activity } from "lucide-react";
import Link from "next/link"; // Make sure this is at the top of your file
export default function RefinedMissionPortal() {
  return (
    <div className="h-screen w-full bg-[#050505] text-white font-sans overflow-hidden flex flex-col relative selection:bg-yellow-500">
      
      {/* 🔹 DYNAMIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.05)_0%,transparent_70%)]"></div>
      
      {/* 🔹 REFINED TOP NAVIGATION */}
      <div className="absolute top-0 left-0 w-full z-50 p-6 md:p-10 flex justify-between items-start pointer-events-none">
        <div className="flex flex-col border-l-2 border-yellow-500 pl-5">
          <h1 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-none text-white">
            MISSION LOGISTICS
          </h1>
          <p className="text-[9px] font-mono tracking-[0.5em] text-gray-500 uppercase mt-1">
            PROTOCOL // FLUX 2026
          </p>
        </div>

        {/* Minimal HUD Status */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-[7px] font-mono uppercase text-gray-600 tracking-widest">DATA_SYNC</span>
            <div className="flex items-center gap-2">
               <div className="flex gap-0.5">
                  {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-500/40"></div>)}
                  <div className="w-1.5 h-1.5 bg-yellow-500 animate-pulse"></div>
               </div>
               <span className="text-[9px] font-bold text-yellow-500 tracking-widest">STABLE</span>
            </div>
          </div>
          <Activity size={18} className="text-yellow-500 opacity-50" />
        </div>
      </div>

      {/* 🔹 MAIN SPLIT CONTENT */}
      <div className="flex flex-col h-full">
        
        {/* SECTION: WORKSHOPS */}
        <div className="relative flex-1 group overflow-hidden border-b border-white/5 cursor-pointer">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
              src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1600" 
              className="w-full h-full object-cover brightness-[0.35] group-hover:scale-110 group-hover:brightness-[0.25] transition-all duration-[2s] ease-out"
              alt="Workshops"
            />
            {/* Blue Tint Overlay for Workshops */}
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>

          <div className="relative z-20 h-full flex items-center px-10 md:px-24">
             <div className="flex flex-col max-w-2xl">
                <div className="flex items-center gap-3 mb-4 overflow-hidden">
                   <div className="h-[1px] w-8 bg-yellow-500"></div>
                   <span className="text-[10px] font-bold tracking-[0.6em] text-yellow-500 uppercase">INNOVATE • BUILD • LEARN</span>
                </div>
                
                <div className="relative">
                <div className="flex items-center gap-6 group">
                   <h2 className="text-5xl md:text-8xl font-black italic tracking-tight uppercase leading-none text-white group-hover:text-yellow-500 transition-colors duration-500">
                     WORKSHOPS
                   </h2>
                   <div className="bg-yellow-500 p-2 md:p-4 text-black rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <MoveRight size={32} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                   </div>
                   </div>
                   {/* Hover Sub-line */}
                   <motion.div 
                     initial={{ width: 0 }}
                     whileHover={{ width: "100%" }}
                     className="absolute -bottom-2 left-0 h-[3px] bg-yellow-500 shadow-[0_0_15px_#facc15]"
                   />
                </div>
                <p className="mt-6 text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   Enhance your technical proficiency through hands-on industrial simulation modules.
                </p>
             </div>
          </div>
          
          {/* Section Marker */}
          <div className="absolute top-1/2 right-10 -translate-y-1/2 hidden md:flex flex-col items-center gap-1 opacity-20 group-hover:opacity-100 transition-opacity">
            <span className="text-[8px] font-mono vertical-text mb-4 tracking-[0.5em]">ALPHA_01</span>
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent"></div>
          </div>
        </div>

        {/* SECTION: EVENTS */}
        <div className="relative flex-1 group overflow-hidden cursor-pointer">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600" 
              className="w-full h-full object-cover brightness-[0.3] group-hover:scale-110 group-hover:brightness-[0.2] transition-all duration-[2s] ease-out"
              alt="Events"
            />
            {/* Red Tint Overlay for Events */}
            <div className="absolute inset-0 bg-red-900/10 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>

          <div className="relative z-20 h-full flex items-center justify-end px-10 md:px-24 text-right">
             <div className="flex flex-col items-end max-w-2xl">
                <div className="flex items-center gap-3 mb-4 overflow-hidden">
                   <span className="text-[10px] font-bold tracking-[0.6em] text-yellow-500 uppercase">COMPETE • CONQUER • GLORY</span>
                   <div className="h-[1px] w-8 bg-yellow-500"></div>
                </div>
                
               
            
                   <Link href="/FluxEvents"  className="text-5xl md:text-8xl font-black italic tracking-tight uppercase leading-none text-white group-hover:text-yellow-500 transition-colors duration-500">
                   <div className="flex items-center gap-6 group">
                     EVENTS
                     <div className="bg-yellow-500 p-2 md:p-4 text-black rotate-45 group-hover:rotate-0 transition-transform duration-500">
                      <MoveRight size={32} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                   </div>
                   </div>
                   </Link>
                   
                  
                
                
                <p className="mt-6 text-[10px] font-mono text-gray-400 uppercase tracking-widest leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                   Enter the arena and test your tactical logic against the top-tier operational protocols.
                </p>
             </div>
          </div>

          {/* HUD Bars Bottom */}
          <div className="absolute bottom-6 right-24 flex gap-1 opacity-20">
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="w-1.5 h-1.5 bg-yellow-500"></div>)}
          </div>
        </div>

      </div>
       {/* ================= BOTTOM BORDER (Original) ================= */}
       <div className="absolute bottom-0 left-0 w-full z-[80] pointer-events-none">
        <div className="h-[12px] w-full bg-white rounded-b-[48px] shadow-[0_-12px_45px_rgba(255,255,255,0.45)]" />
      </div>

      {/* 🔹 DYNAMIC SCANLINE & NOISE */}
      <div className="absolute inset-0 pointer-events-none z-30 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}