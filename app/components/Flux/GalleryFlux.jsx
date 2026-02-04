"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

export default function GalleryFlux() {
  const images = [ 
    { id: 1, src: "/images/fluxImages/CPJ_9046.JPG", category: "EVENT LOG", desc: "Opening Ceremony Protocol" },
    { id: 2, src: "/images/fluxImages/CPJ_9053.JPG", category: "WORKSHOP", desc: "Neural Network Training" },
    { id: 3, src: "/images/fluxImages/CPJ_9055.JPG", category: "COMPETITION", desc: "Hackathon Mainframe Access" },
    { id: 4, src: "/images/fluxImages/CPJ_9174.JPG", category: "EVENT LOG", desc: "Tech Exhibition Scan" },
    { id: 5, src: "/images/fluxImages/CPJ_9245.JPG", category: "MOMENT", desc: "Team Synergy Analysis" },
    { id: 6, src: "/images/fluxImages/IMG_4229.JPG", category: "VICTORY", desc: "Award Distribution Sequence" },
    { id: 7, src: "/images/fluxImages/IMG_4252.JPG", category: "WORKSHOP", desc: "Keynote Data Transfer" },
    { id: 8, src: "/images/fluxImages/IMG_5233.JPG", category: "MOMENT", desc: "Networking Node Active" },
    { id: 9, src: "/images/fluxImages/IMG_5238.JPG", category: "EVENT LOG", desc: "Cultural Frequency Test" },
    { id: 10, src: "/images/fluxImages/IMG_5242.JPG", category: "VICTORY", desc: "Grand Finale Output" },
  ];


  return (
    <section className="relative min-h-screen bg-transparent text-white px-4 pb-20 overflow-hidden">
      
      {/* --- BACKGROUND HUD OVERLAY --- */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="absolute top-20 left-10 w-32 h-32 border-l border-t border-red-600/40" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-r border-b border-red-600/40" />
      </div>

      {/* --- HERO SECTION --- */}
      <div className="relative pt-24 pb-12 flex flex-col items-center justify-center z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          {/* Large Background Text */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-red-900/10 uppercase tracking-tighter select-none whitespace-nowrap">
            VISUAL DB
          </h2>
          
          {/* Deadpool Image */}
          <Image
            src="/images/fluxImages/deadpool.png"
            alt="Deadpool"
            width={600}
            height={600}
            className="relative z-10 drop-shadow-[0_0_80px_rgba(225,6,0,0.4)]"
          />
        </motion.div>
      </div>

      {/* --- MAIN SLIDER (Simplified) --- */}
      <div className="max-w-6xl mx-auto mb-24 z-10 relative">
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 4000 }}
          loop
          className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative h-[400px] md:h-[600px] w-full">
                <Image src={img.src} alt={img.desc} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                <div className="absolute bottom-12 left-12">
                  <p className="text-red-600 font-mono tracking-[0.5em] mb-2">{img.category}</p>
                  <h3 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">{img.desc}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- GRID (Clean Scale Hover, No Flip) --- */}
      <div className="max-w-7xl mx-auto px-4 z-10 relative">
        <div className="flex items-center gap-6 mb-12">
          <h4 className="text-xl font-bold uppercase tracking-widest text-red-600">Data Stream</h4>
          <div className="h-px flex-1 bg-gradient-to-r from-red-600/50 to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((img) => (
            <motion.div
              key={img.id}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/5 bg-[#111] group cursor-pointer"
            >
              <Image 
                src={img.src} 
                alt={img.desc} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" 
              />
              {/* Overlay HUD effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-600/50 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-[10px] font-mono text-red-500 mb-1 opacity-0 group-hover:opacity-100 transition-opacity">FILE_{img.id}00X</p>
                <h5 className="text-sm font-bold uppercase truncate">{img.desc}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}