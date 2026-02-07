"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

export default function GalleryFlux() {
  const images = [ 
    { id: 1, src: "/images/fluxImages/CPJ_9046.JPG", category: "OPENING", desc: "MISSION START" },
    { id: 2, src: "/images/fluxImages/CPJ_9053.JPG", category: "WORKSHOP", desc: "INTEL GATHERING" },
    { id: 3, src: "/images/fluxImages/CPJ_9055.JPG", category: "HACKATHON", desc: "CODE BREAKER" },
    { id: 4, src: "/images/fluxImages/CPJ_9174.JPG", category: "EXPO", desc: "GADGET SCAN" },
    { id: 5, src: "/images/fluxImages/CPJ_9245.JPG", category: "TEAM", desc: "THE ALLIANCE" },
    { id: 6, src: "/images/fluxImages/IMG_4229.JPG", category: "VICTORY", desc: "AWARD CEREMONY" },
    { id: 7, src: "/images/fluxImages/IMG_4252.JPG", category: "KEYNOTE", desc: "MASTER PLAN" },
    { id: 8, src: "/images/fluxImages/IMG_5233.JPG", category: "MOMENT", desc: "SECRET FILES" },
    { id: 9, src: "/images/fluxImages/IMG_5238.JPG", category: "CULTURAL", desc: "ENERGY SURGE" },
    { id: 10, src: "/images/fluxImages/IMG_5242.JPG", category: "FINALE", desc: "THE CLIMAX" },
  ];

  return (
    <section className="relative min-h-screen bg-white text-black py-24 px-4 overflow-hidden border-t-[12px] border-black selection:bg-red-600 selection:text-white">
      
      {/* HALFTONE OVERLAY */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:10px_10px] z-0" />

      {/* HERO DEADPOOL */}
      <div className="relative mb-24 flex flex-col items-center justify-center z-10">
        <motion.div 
          initial={{ opacity: 0, x: -100, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, rotate: -5 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-[1000] text-black/5 italic uppercase tracking-tighter select-none z-0">
            SNAPSHOT!
          </h2>

          <Image
            src="/images/fluxImages/deadpool.png"
            alt="Deadpool"
            width={500}
            height={500}
            className="relative z-10 drop-shadow-[15px_15px_0px_#ef4444]"
          />

          <motion.div 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-10 md:-right-20 -right-5 bg-yellow-400 border-[6px] border-black md:px-8 md:py-4 px-6 py-3 font-[1000] md:text-4xl text-3xl italic rotate-12 shadow-[8px_8px_0px_#000] z-20"
          >
            SMILE!
          </motion.div>
        </motion.div>
      </div>

      {/* SWIPER */}
      <div className="max-w-6xl mx-auto mb-32 z-10 relative">
        <Swiper
          modules={[Autoplay, EffectCreative]}
          effect="creative"
          creativeEffect={{
            prev: { shadow: true, translate: ["-120%", 0, -500] },
            next: { shadow: true, translate: ["120%", 0, -500] },
          }}
          autoplay={{ delay: 3000 }}
          loop
          className="border-[10px] border-black shadow-[20px_20px_0px_#000] overflow-hidden"
        >
          {images.slice(0, 5).map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative h-[450px] md:h-[650px] w-full bg-black group">
                <Image src={img.src} alt={img.desc} fill className="object-cover" />

                <div className="absolute top-10 left-10 bg-red-600 text-white px-6 py-2 font-black italic uppercase border-4 border-black -rotate-3 shadow-[5px_5px_0px_#000]">
                  {img.category}
                </div>

                <div className="absolute bottom-10 right-10 bg-white border-[6px] border-black p-6 max-w-sm shadow-[10px_10px_0px_#facc15]">
                  <h3 className="text-3xl font-[1000] italic uppercase tracking-tighter leading-none">
                    {img.desc}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= MISSION LOGS (FIXED) ================= */}
      <div className="max-w-7xl mx-auto hidden md:block px-4 z-10 relative">
        <div className="flex items-center gap-6 mb-16">
          <h4 className="text-5xl font-[1000] italic uppercase tracking-tighter border-b-8 border-red-600">
            MISSION LOGS
          </h4>
          <div className="flex-1 border-t-8 border-dashed border-black opacity-20" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              whileHover={{ y: -15, rotate: i % 2 === 0 ? 2 : -2 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative aspect-[3/4] border-[6px] border-black bg-white shadow-[8px_8px_0px_#000] overflow-hidden group cursor-pointer"
            >
              <Image 
                src={img.src} 
                alt={img.desc} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-red-600/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* POPUP (UNCHANGED) */}
              <div className="absolute bottom-4 left-4 right-4 bg-white border-4 border-black p-2 translate-y-20 group-hover:translate-y-0 transition-transform duration-300 shadow-[4px_4px_0px_#000]">
                <p className="text-[10px] font-black text-red-600 uppercase mb-1">
                  DATA_STREAM_{img.id}
                </p>
                <h5 className="text-xs font-[1000] uppercase truncate">
                  {img.desc}
                </h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
}
