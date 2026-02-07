"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GamingRealmPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-transparent text-white overflow-hidden flex flex-col justify-center">

      {/* 🔹 TOP REALM */}
      <motion.div
        initial={isMobile ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 w-full flex justify-center pointer-events-none select-none z-0"
      >
        <h1 className="realm-style md:text-[20vw] text-[40vw] font-black tracking-tighter leading-none uppercase -mt-[2vw]">
          REALM
        </h1>
      </motion.div>

      {/* 🔹 BOTTOM REALM */}
      <motion.div
        initial={isMobile ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <h1 className="realm-style md:text-[20vw] text-[40vw] font-black tracking-tighter leading-none uppercase -mb-[5vw]">
          REALM
        </h1>
      </motion.div>

      {/* 🔹 BACKGROUND RADIAL GLOW (LIGHTWEIGHT) */}
      {!isMobile && (
        <motion.div
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)] pointer-events-none"
        />
      )}

      {/* 🔹 MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-8 grid grid-cols-12 items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="col-span-12 lg:col-span-5 relative flex justify-center">
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={
                isMobile
                  ? false
                  : { y: [0, -15, 0] }
              }
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full scale-75" />
              <Image
                src="/images/fluxImages/gaming-hero.webp"
                alt="Gaming Hero"
                width={700}
                height={1000}
                className="object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.3)] relative z-10"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={isMobile ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="col-span-12 lg:col-span-7 flex flex-col gap-6"
        >
          {/* SKILLS TEXT (ONE TIME, NO REPEAT) */}
          <h3 className="text-3xl font-bold text-gray-500 uppercase tracking-[0.3em]">
            Skills
          </h3>

          {/* DUNGEON TITLE */}
          <h2 className="text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter text-red-600 uppercase italic">
            Dungeon
          </h2>

          <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-4 border-red-600 pl-6">
            Show off your skills and conquer the arena at{" "}
            <span className="text-white font-bold underline decoration-red-600 underline-offset-4">
              Events Conclave
            </span>
            , where only the best rise to the top.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <Link href="/FluxEvents" className="w-fit group">
              <motion.div
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                whileTap={!isMobile ? { scale: 0.95 } : {}}
                className="relative px-12 py-4 md:bg-white/5 border bg-white border-white/20 hover:border-red-600 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 text-sm font-black tracking-[0.6em] md:text-white text-black uppercase group-hover:text-red-500">
                  Enter Arena
                </span>
                {!isMobile && (
                  <div className="absolute inset-0 bg-red-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                )}
              </motion.div>
            </Link>

            {/* UI Dots (STATIC ON MOBILE) */}
            <div className="flex gap-2 opacity-20">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-white rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .realm-style {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            to right,
            transparent 0%,
            transparent 35%,
            rgba(255, 255, 255, 0.5) 50%,
            transparent 65%,
            transparent 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 10s linear infinite;
        }

        @keyframes shine {
          0% { background-position: -125% center; }
          100% { background-position: 125% center; }
        }
      `}</style>
    </div>
  );
}
