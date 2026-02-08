"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sponsors = [
  { name: "Title Sponsor", logo: "/sponsors/title.png", tier: "TITLE PARTNER", code: "H-Q_INTEL" },
  { name: "Powered By", logo: "/sponsors/powered.png", tier: "POWERED BY", code: "CORE_PWR" },
  { name: "Gold Sponsor", logo: "/sponsors/gold1.png", tier: "GOLD PARTNER", code: "GOLD_STRK" },
  { name: "Gold Sponsor", logo: "/sponsors/gold2.png", tier: "GOLD PARTNER", code: "GOLD_STRK" },
  { name: "Silver Sponsor", logo: "/sponsors/silver1.png", tier: "SILVER PARTNER", code: "SLVR_WING" },
  { name: "Silver Sponsor", logo: "/sponsors/silver2.png", tier: "SILVER PARTNER", code: "SLVR_WING" },
];

export default function SponsorsMovingGallery() {
  // Triple the array to ensure there's no gap during the infinite scroll
  const movingSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section className="relative min-h-screen bg-white text-black py-24 overflow-hidden border-t-[12px] border-black selection:bg-red-600 selection:text-white font-sans">
      
      {/* 🏁 THE "FLUX" HALFTONE OVERLAY */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:10px_10px] z-0" />

     {/* 🔴 HEADER SECTION (Deadpool Style) */}
          <div className="relative mb-32 flex flex-col items-center justify-center z-10">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              {/* Big Background Text */}
              <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-[1000] text-black/5 italic uppercase tracking-tighter select-none -z-10">
                BACKERS!
              </h2>
    
              <div className="relative inline-block">
                <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase tracking-tighter text-black drop-shadow-[8px_8px_0px_#ef4444] border-b-[12px] border-black pb-2">
                  THE SPONSORS
                </h1>
                
                {/* "SMILE" Style Floating Badge */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], rotate: [5, 8, 5] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-12 -right-12 md:-right-24 bg-yellow-400 border-[4px] border-black px-4 py-2 font-[1000] text-xl md:text-2xl italic shadow-[6px_6px_0px_#000] z-20"
                >
                  TOP SECRET!
                </motion.div>
              </div>
              
              <p className="mt-6 text-red-600 font-black tracking-[0.4em] uppercase text-sm md:text-lg">
                Supporting the Flux Multiverse
              </p>
            </motion.div>
          </div>

      {/* 🚀 SINGLE ROW INFINITE MARQUEE */}
      <div className="relative z-10 flex overflow-hidden py-10 group">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-10 whitespace-nowrap"
        >
          {movingSponsors.map((sponsor, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -20, rotate: i % 2 === 0 ? 3 : -3 }}
              className="relative w-[320px] h-[320px] flex-shrink-0 border-[8px] border-black bg-white shadow-[12px_12px_0px_#000] overflow-hidden cursor-pointer"
            >
              {/* Halftone Interior */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:6px_6px]" />

              {/* Logo Area */}
              <div className="relative w-full h-full flex items-center justify-center p-12">
                <Image 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  width={200} 
                  height={200} 
                  className="object-contain transition-transform duration-500 group-hover:scale-110" 
                />
              </div>

              {/* Mission Log Hover Popup (Matching GalleryFlux) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white border-4 border-black p-3 translate-y-32 group-hover:translate-y-0 transition-transform duration-300 shadow-[6px_6px_0px_#ef4444] z-20">
                <p className="text-[10px] font-black text-red-600 uppercase mb-1">
                  SECURE_FILE // {sponsor.tier}
                </p>
                <h5 className="text-sm font-[1000] uppercase truncate text-black italic">
                  {sponsor.name}
                </h5>
              </div>

              {/* Subtle Red Scanline Overlay */}
              <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>

        {/* 🎭 VIGNETTE GRADIENT (Makes it look like it's coming from off-screen) */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />
      </div>

      {/* 📢 BOTTOM ACTION TAPE */}
      <div className="mt-20 border-b-[12px] border-black w-full" />
      <div className="bg-black text-white py-5 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -800] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          className="whitespace-nowrap flex gap-16 font-[1000] italic text-3xl uppercase"
        >
          {[...Array(8)].map((_, i) => (
            <span key={i} className="tracking-tighter">
              * JOIN THE ALLIANCE * FLUX 2026 * JOIN THE ALLIANCE * FLUX 2026 *
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}