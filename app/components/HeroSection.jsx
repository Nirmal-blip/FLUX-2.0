"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { cn } from "../../lib/utils";
import Button from "./ui/Button";
import sacLogo from "../../public/logo/2logo.png";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".hero-gradient", {
        backgroundPosition: "200% center",
        duration: 4,
        ease: "none",
        repeat: -1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white"
      ref={containerRef}
    >
      {/* Cinematic Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Deep Gradient Base */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-black to-black" />

        {/* Animated Spotlights */}
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.2, 1],
            x: [0, 50, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-pink-600/30 rounded-full blur-[120px] mix-blend-screen"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-cyan-600/30 rounded-full blur-[120px] mix-blend-screen"
        />
      </div>

      {/* Content Container */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Logo Mark - Minimalist */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-10 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 blur-xl rounded-full scale-110 opacity-50 animate-pulse" />
          <Image
            src={sacLogo}
            alt="SAC Logo"
            width={160}
            height={160}
            className="relative z-10 drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* Main Headline - Maximum Impact */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-8xl font-black tracking-tight mb-8 font-space-grotesk"
        >
          <span className="hero-gradient bg-clip-text text-transparent bg-[size:200%] bg-gradient-to-r from-white via-cyan-300 to-pink-300">
            STUDENT ACTIVITY CENTER
          </span>
        </motion.h1>

        {/* Dynamic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <p className="text-lg md:text-2xl text-gray-300 font-inter leading-relaxed font-light">
            Ignite <span className="text-pink-400 font-bold">Passion</span>. Unleash <span className="text-cyan-400 font-bold">Creativity</span>. <br className="hidden md:block" />
            The heartbeat of campus innovation.
          </p>
        </motion.div>

        {/* Action Buttons - Clean & Modern */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center"
        >


          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="group px-8 py-4 bg-transparent border border-white/20 text-white font-space-grotesk font-medium rounded-full hover:bg-white/10 hover:border-white/40 transition-all"
          >
            LEARN MORE
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator - Minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-gray-500 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-cyan-500/80">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0" />
      </motion.div>

    </section>
  );
}
