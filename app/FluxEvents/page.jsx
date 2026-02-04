"use client";

import EventsFlux from "../components/Flux/EventsFlux";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import FluxBackground from "../components/Flux/FluxBackground";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-transparent text-white selection:bg-[#E10600] relative overflow-hidden">
      
      {/* 🔹 GLOBAL BACKGROUND */}
      <FluxBackground />

      {/* 🔹 BACKGROUND GLOW EFFECTS */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#E10600]/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-10 pb-24">

        {/* 🔹 BACK BUTTON */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-10"
        >
          <Link
            href="/Flux"
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition w-fit"
          >
            <div className="p-2 border border-white/10 group-hover:border-[#E10600] rounded-sm transition">
              <ArrowLeft
                size={18}
                className="group-hover:-translate-x-1 transition-transform"
              />
            </div>
            <span className="text-xs font-black tracking-[0.3em] uppercase">
              Return to Base
            </span>
          </Link>
        </motion.div>

        {/* 🔥 HERO TITLE WITH IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative mb-24 overflow-hidden rounded-xl"
        >
          {/* 🔻 Background Image */}
          <motion.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src="/images/fluxImages/screen.jpg"   // 🔴 IMAGE PATH YAHAN CHANGE KAR
              alt="Mission Background"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* 🔻 Dark + Red Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black z-10" />
          <div className="absolute inset-0 bg-[#E10600]/10 mix-blend-overlay z-10" />

          {/* 🔻 Title Content */}
          <div className="relative z-20 px-4 py-24 md:py-32">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none"
            >
              UPCOMING <br />
              <span className=" text-[#e73f39] ">
                EVENTS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-6 text-gray-400 max-w-md uppercase tracking-[0.25em] text-[10px] font-bold"
            >
              Select your deployment. Each event is a gateway to the next generation of tech.
            </motion.p>
          </div>

          {/* 🔻 Bottom Glow Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent z-30" />
        </motion.div>

        {/* 🔹 EVENTS SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <EventsFlux />
        </motion.div>

      </div>

      {/* 🔹 SCANLINE EFFECT */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[100] bg-[length:100%_2px,3px_100%]" />
    </main>
  );
}
