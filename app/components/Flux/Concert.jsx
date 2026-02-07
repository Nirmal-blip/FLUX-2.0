"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ConcertRealmPage() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  /* ================= MOBILE DETECTION ================= */
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* ================= SCROLL (DESKTOP IMAGE PARALLAX ONLY) ================= */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yMove = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const rotateZ = useTransform(scrollYProgress, [0, 1], [-1.5, 1.5]);

  /* ================= ONE-TIME ENTRY ================= */
  const inView = useInView(contentRef, { once: true, margin: "-120px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated && !isMobile) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated, isMobile]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-transparent text-white overflow-hidden py-12 md:py-24 font-sans"
    >
      {/* ================= BACKGROUND TYPOGRAPHY ================= */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none opacity-[0.05] leading-[0.8]">
        {[...Array(3)].map((_, i) => (
          <h1
            key={i}
            className="text-[25vw] md:text-[20vw] font-[1000] italic tracking-tighter uppercase"
            style={{ transform: `translateX(${i % 2 === 0 ? "-30px" : "30px"})` }}
          >
            CONCERT
          </h1>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">

          {/* ================= IMAGE SECTION (CLEAN, NO CUTS) ================= */}
          <motion.div
            style={isMobile ? undefined : { y: yMove, rotate: rotateZ }}
            className="col-span-12 lg:col-span-6 relative flex justify-center mb-8 lg:mb-0"
          >
            <motion.div
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              animate={hasAnimated || isMobile ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full max-w-[380px] md:max-w-full aspect-[3/4]"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-red-600/20 blur-[80px] rounded-full scale-110 -z-10" />

              <Image
                src="/images/fluxImages/concert.png"
                alt="Concert Artist"
                fill
                priority
                className="object-cover rounded-md"
              />

              <div className="absolute -inset-2 border-2 border-white/5 pointer-events-none skew-y-[-5deg]" />
            </motion.div>
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            ref={contentRef}
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={hasAnimated || isMobile ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-12 lg:col-span-6 bg-[#111111] p-6 md:p-12 border border-white/10 relative shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-red-600" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-red-600" />

            <span className="text-red-600 font-mono font-bold tracking-[0.2em] text-[10px] md:text-sm uppercase">
              / THE FINAL ASCENSION : NIGHT 03
            </span>

            <h2 className="text-5xl md:text-8xl font-[1000] italic leading-none mt-4 uppercase tracking-tighter">
              SONIC <span className="text-red-600">OR</span>
              <br />
              MAYHEM
            </h2>

            <div className="h-1 w-full bg-red-600/30 my-6 md:my-8" />

            <p className="text-base md:text-xl text-gray-300 leading-relaxed italic border-l-4 border-red-600 pl-4 md:pl-6">
              The war ends. The celebration begins. Feel the ground shake at the Flux
              Grand Finale — where engineering excellence meets
              earth-shattering sound.
            </p>

            <div className="mt-10">
              <Link href="/FluxTickets">
                <button className="w-full py-5 bg-red-600 flex items-center justify-between px-6 group relative overflow-hidden">
                  <span className="text-lg md:text-2xl font-black italic uppercase tracking-widest relative z-10">
                    Secure Access
                  </span>
                  <div className="h-full w-1/3 bg-white absolute right-0 top-0 skew-x-[-20deg] translate-x-12 group-hover:translate-x-0 transition-transform duration-500" />
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ================= BOTTOM GLOW ================= */}
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-red-600/10 to-transparent pointer-events-none" />
    </div>
  );
}
