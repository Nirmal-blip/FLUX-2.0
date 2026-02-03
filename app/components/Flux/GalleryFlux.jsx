"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

/**
 * GalleryFlux — Cinematic Header + Swiper + Flip Grid
 * Deadpool header preserved
 */
export default function GalleryFlux() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const images = [ { id: 1, src: "/images/fluxImages/CPJ_9046.JPG", category: "EVENT LOG", desc: "Opening Ceremony Protocol" }, { id: 2, src: "/images/fluxImages/CPJ_9053.JPG", category: "WORKSHOP", desc: "Neural Network Training" }, { id: 3, src: "/images/fluxImages/CPJ_9055.JPG", category: "COMPETITION", desc: "Hackathon Mainframe Access" }, { id: 4, src: "/images/fluxImages/CPJ_9174.JPG", category: "EVENT LOG", desc: "Tech Exhibition Scan" }, { id: 5, src: "/images/fluxImages/CPJ_9245.JPG", category: "MOMENT", desc: "Team Synergy Analysis" }, { id: 6, src: "/images/fluxImages/IMG_4229.JPG", category: "VICTORY", desc: "Award Distribution Sequence" }, { id: 7, src: "/images/fluxImages/IMG_4252.JPG", category: "WORKSHOP", desc: "Keynote Data Transfer" }, { id: 8, src: "/images/fluxImages/IMG_5233.JPG", category: "MOMENT", desc: "Networking Node Active" }, { id: 9, src: "/images/fluxImages/IMG_5238.JPG", category: "EVENT LOG", desc: "Cultural Frequency Test" }, { id: 10, src: "/images/fluxImages/IMG_5242.JPG", category: "VICTORY", desc: "Grand Finale Output" }, ];

  
  
  return (
    <section
      ref={ref}
      className="relative min-h-screen bg-transparent px-6 pb-24 overflow-hidden text-white"
    >
      {/* ================= DEADPOOL HEADER ================= */}
      <div className="relative max-w-6xl mt-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          {/* LEFT TEXT */}
          <h2
            className="hidden md:block absolute left-[80px] text-[8vw] font-black uppercase text-white/90 select-none pointer-events-none"
            style={{
              fontFamily: "var(--font-rajdhani)",
              textShadow: "0 0 60px rgba(225,6,0,0.45)",
            }}
          >
            VISUAL
          </h2>

          {/* RIGHT TEXT */}
          <h2
            className="hidden md:block absolute right-[0px] text-[8vw] font-black uppercase text-white/90 select-none pointer-events-none"
            style={{
              fontFamily: "var(--font-rajdhani)",
              textShadow: "0 0 60px rgba(225,6,0,0.45)",
            }}
          >
            DATABASE
          </h2>

          {/* DEADPOOL IMAGE */}
          <div className="relative z-20">
            <Image
              src="/images/fluxImages/deadpool.png"
              alt="Deadpool"
              width={520}
              height={520}
              priority
              className="
                w-[560px]
                sm:w-[60vw]
                md:w-[680px]
                object-contain
                drop-shadow-[0_0_140px_rgba(225,6,0,0.55)]
              "
            />
          </div>
        </motion.div>
      </div>

      {/* ================= SWIPER ================= */}
      <div className="relative w-full my-0">
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          slidesPerView="auto"
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 40,
            depth: 140,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-12"
          style={{
            "--swiper-pagination-color": "#E10600",
            "--swiper-pagination-bullet-inactive-color": "#333",
          }}
        >
          {images.map((img) => (
            <SwiperSlide
              key={img.id}
              className="w-[320px] h-[520px] sm:w-[380px] sm:h-[600px] md:w-[480px] md:h-[700px]"
            >
              <div className="relative w-full h-full bg-black border border-white/10 rounded-xl overflow-hidden">
                <Image src={img.src} alt={img.desc} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[#E10600] font-mono text-xs tracking-widest">
                    {img.category}
                  </span>
                  <h3 className="text-white font-bold text-2xl uppercase mt-1 leading-tight">
                    {img.desc}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= GRID (IRON MAN FLIP CARDS) ================= */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-10">
          <h3 className="text-2xl font-black uppercase tracking-wider">
            FULL DATA STREAM
          </h3>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {images.map((img) => (
            <div key={img.id} className="group [perspective:1200px]">
              <div
                className="
                  relative w-full aspect-[3/4]
                  transition-transform duration-700
                  [transform-style:preserve-3d]
                  md:group-hover:rotate-y-180
                "
              >
                {/* FRONT — SUPERHERO */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl overflow-hidden
                    border-4 border-white 
                    bg-black
                    [backface-visibility:hidden]
                  "
                >
                  <Image
                    src="/images/fluxImages/card1.png"
                    alt="Iron Man"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>

                {/* BACK — EVENT IMAGE */}
                <div
                  className="
                    absolute inset-0
                    rounded-2xl overflow-hidden
                    border border-white/10
                    bg-black
                    rotate-y-180
                    [backface-visibility:hidden]
                  "
                >
                  <Image
                    src={img.src}
                    alt={img.desc}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
