"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GamingRealmPage() {
  return (
    <div className="relative min-h-screen w-full bg-transparent text-white overflow-hidden flex flex-col justify-center">

      {/* 🔹 TOP REALM (DESKTOP ONLY) */}
      <div className="hidden md:flex absolute top-0 w-full justify-center pointer-events-none select-none z-0">
        <h1 className="realm-style text-[20vw] font-black tracking-tighter uppercase -mt-[2vw]">
          REALM
        </h1>
      </div>

      {/* 🔹 BOTTOM REALM (DESKTOP ONLY) */}
      <div className="hidden md:flex absolute bottom-0 w-full justify-center pointer-events-none select-none z-0 overflow-hidden">
        <h1 className="realm-style text-[20vw] font-black tracking-tighter uppercase -mb-[5vw]">
          REALM
        </h1>
      </div>

      {/* 🔹 RADIAL GLOW (DESKTOP ONLY) */}
      <motion.div
        className="hidden md:block absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)] pointer-events-none"
        animate={{ opacity: [0.03, 0.07, 0.03] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 MAIN CONTENT */}
      <div className="relative z-10 container mx-auto px-6 grid grid-cols-12 items-center gap-10">

        {/* LEFT IMAGE */}
        <div className="col-span-12 lg:col-span-5 flex justify-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* glow only desktop */}
            <div className="hidden md:block absolute inset-0 bg-cyan-500/20 blur-[80px] rounded-full scale-75" />

            <Image
              src="/images/fluxImages/gaming-hero.webp"
              alt="Gaming Hero"
              width={600}
              height={850}
              priority={false}
              className="object-contain relative z-10"
            />
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="col-span-12 lg:col-span-7 flex flex-col gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-500 uppercase tracking-[0.3em]">
            Skills
          </h3>

          <h2 className="text-6xl md:text-9xl font-black leading-[0.9] tracking-tighter text-red-600 uppercase italic">
            Dungeon
          </h2>

          <p className="text-base md:text-lg text-gray-400 max-w-lg leading-relaxed border-l-4 border-red-600 pl-6">
            Show off your skills and conquer the arena at{" "}
            <span className="text-white font-bold underline decoration-red-600 underline-offset-4">
              Events Conclave
            </span>
            , where only the best rise to the top.
          </p>

          <div className="mt-6">
            <Link href="/FluxEvents">
              <button className="px-10 py-4 bg-white text-black md:bg-white/5 md:text-white border border-white/20 hover:border-red-600 transition-all uppercase tracking-[0.5em] font-black">
                Enter Arena
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .realm-style {
          color: transparent;
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.1);
          background: linear-gradient(
            to right,
            transparent 0%,
            transparent 35%,
            rgba(255, 255, 255, 0.4) 50%,
            transparent 65%,
            transparent 100%
          );
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 12s linear infinite;
          will-change: background-position;
        }

        @keyframes shine {
          from { background-position: -125% center; }
          to { background-position: 125% center; }
        }
      `}</style>
    </div>
  );
}
