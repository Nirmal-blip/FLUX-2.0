"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GamingRealmPage() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-transparent text-white overflow-hidden flex flex-col justify-center">
      
      {/* 🔹 TOP REALM */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute top-0 md:left-25 w-full flex justify-center pointer-events-none select-none z-0"
      >
        <h1 className="realm-style md:text-[20vw] text-[40vw] font-black tracking-tighter leading-none uppercase -mt-[2vw]">
          REALM
        </h1>
      </motion.div>

      {/* 🔹 BOTTOM REALM */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-0 md:left-25 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden"
      >
        <h1 className="realm-style md:text-[20vw] text-[40vw] font-black tracking-tighter leading-none uppercase -mb-[5vw]">
          REALM
        </h1>
      </motion.div>

      {/* 🔹 BACKGROUND RADIAL GLOW */}
      <motion.div 
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1),transparent_70%)] pointer-events-none" 
      />

      {/* 🔹 MAIN CONTENT */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-8 grid grid-cols-12 items-center gap-10"
      >

        {/* LEFT IMAGE SECTION */}
        <motion.div
          variants={fadeInUp}
          className="col-span-12 lg:col-span-5 relative flex justify-center"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
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

        {/* RIGHT CONTENT SECTION */}
        <motion.div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
          <motion.div variants={fadeInUp} className="space-y-0">
            <motion.h3 
              initial={{ letterSpacing: "0.1em" }}
              whileInView={{ letterSpacing: "0.4em" }}
              transition={{ duration: 1.5 }}
              className="text-3xl font-bold text-gray-500 uppercase"
            >
              Skills
            </motion.h3>
            <h2 className="text-7xl lg:text-9xl font-black leading-[0.85] tracking-tighter text-red-600 uppercase italic overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="inline-block"
              >
                Dungeon
              </motion.span>
            </h2>
          </motion.div>

          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-4 border-red-600 pl-6"
          >
            Show off your skills and conquer the arena at{" "}
            <span className="text-white font-bold underline decoration-red-600 underline-offset-4">
              Events Conclave
            </span>
            {", where only the best rise to the top."}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-6 flex flex-col gap-4">
            <Link href="/FluxEvents" className="w-fit group">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-4 md:bg-white/5 border bg-white border-white/20 hover:border-red-600 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 text-sm font-black tracking-[0.6em] md:text-white text-black uppercase group-hover:text-red-500">
                  Enter Arena
                </span>
                <div className="absolute inset-0 bg-red-600/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </motion.div>
            </Link>

            {/* UI Dots */}
            <div className="flex gap-2 opacity-20">
              {[...Array(10)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                  className="w-1.5 h-1.5 bg-white rounded-full" 
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

      </motion.div>

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