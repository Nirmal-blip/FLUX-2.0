"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ConcertRealmPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full bg-transparent text-white overflow-hidden py-12 md:py-24 font-sans">
      
      {/* 🎬 BACKGROUND TYPOGRAPHY (RESPONSIVE SIZE) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-[0.05] leading-[0.8]">
        {[...Array(3)].map((_, i) => (
          <motion.h1 
            key={i}
            style={{ x: i % 2 === 0 ? -30 : 30 }}
            className="text-[25vw] md:text-[20vw] font-[1000] italic tracking-tighter uppercase"
          >
            CONCERT
          </motion.h1>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          
          {/* 🎸 SLICED IMAGE SECTION (CENTERED ON MOBILE) */}
          <motion.div
            style={{ y: yMove, rotate: rotateZ }}
            className="col-span-12 lg:col-span-6 relative flex justify-center mb-8 lg:mb-0"
          >
            <div className="relative w-full max-w-[350px] md:max-w-full aspect-[3/4] group">
              <div className="absolute inset-0 bg-red-600/20 blur-[60px] md:blur-[100px] rounded-full scale-110" />

              {[
                "polygon(0 0, 100% 0, 100% 20%, 0 35%)",
                "polygon(0 38%, 100% 23%, 100% 45%, 0 60%)",
                "polygon(0 63%, 100% 48%, 100% 70%, 0 85%)",
                "polygon(0 88%, 100% 73%, 100% 100%, 0 100%)"
              ].map((clip, i) => (
                <motion.div
                  key={i}
                  initial={{ x: i % 2 === 0 ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: clip }}
                >
                  <Image
                    src="/images/fluxImages/concert.png"
                    alt="Artist"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </motion.div>
              ))}
              <div className="absolute -inset-2 border-2 border-white/5 pointer-events-none skew-y-[-5deg]" />
            </div>
          </motion.div>

          {/* 📝 CONTENT BOX (ADAPTIVE PADDING) */}
          <div className="col-span-12 lg:col-span-6 bg-[#111111] p-6 md:p-12 border border-white/10 relative shadow-2xl">
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-red-600" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-red-600" />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <span className="text-red-600 font-mono font-bold tracking-[0.2em] text-[10px] md:text-sm uppercase">
                / THE FINAL ASCENSION: NIGHT 03
              </span>
              
              <h2 className="text-5xl md:text-8xl font-[1000] italic leading-none mt-4 uppercase tracking-tighter">
                SONIC <span className="text-red-600">OR</span> <br />
                MAYHEM
              </h2>

              <div className="h-1 w-full bg-red-600/30 my-6 md:my-8" />

              <p className="text-base md:text-xl text-gray-300 leading-relaxed italic border-l-4 border-red-600 pl-4 md:pl-6">
                The war ends. The celebration begins. Feel the ground shake at the Flux Grand Finale. 
                Where engineering excellence meets earth-shattering sound.
              </p>

              {/* TICKET SECTION (STACKED ON VERY SMALL SCREENS) */}
              <div className="mt-8 md:mt-12 space-y-6 md:space-y-8">
                 <div className="flex justify-between items-end">
                    <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">Link / Tickets</span>
                    <div className="flex gap-1">
                       {[...Array(6)].map((_,i) => (
                         <div key={i} className="w-1 h-3 md:w-1.5 md:h-4 bg-red-600" style={{ opacity: (i+1)/6 }} />
                       ))}
                    </div>
                 </div>

                <Link href="/FluxTickets">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-5 md:py-6 bg-red-600 flex items-center justify-between px-6 md:px-8 group relative overflow-hidden"
                  >
                    <span className="text-lg md:text-2xl font-black italic uppercase tracking-widest relative z-10">
                      Secure Access
                    </span>
                    <div className="h-full w-1/3 bg-white absolute right-0 top-0 skew-x-[-20deg] translate-x-12 group-hover:translate-x-0 transition-transform duration-500" />
                  </motion.button>
                </Link>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                   <div className="flex gap-1 animate-pulse">
                      <div className="w-1.5 h-3 bg-cyan-400" />
                      <div className="w-1.5 h-5 bg-cyan-400" />
                      <div className="w-1.5 h-3 bg-cyan-400" />
                   </div>
                   <span className="text-[10px] md:text-xs font-mono text-red-500 uppercase tracking-widest">
                     Status: High Frequency Detected
                   </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-red-600/10 to-transparent pointer-events-none" />
      {/* ================= BOTTOM BORDER (Original) ================= */}
      <div className="absolute bottom-0 left-0 w-full z-[80] pointer-events-none">
        <div className="h-[12px] w-full bg-white rounded-b-[48px] shadow-[0_-12px_45px_rgba(255,255,255,0.45)]" />
      </div>
    </div>
  );
}