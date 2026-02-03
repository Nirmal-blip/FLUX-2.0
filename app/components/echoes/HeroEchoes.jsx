"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  SparklesIcon,
  MusicalNoteIcon,
  PaintBrushIcon,
  MicrophoneIcon,
  FilmIcon,
  TicketIcon,
  ArrowRightIcon,
  HomeIcon
} from "@heroicons/react/24/outline";

export default function HeroEchoes() {
  // Professional Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-950 via-purple-950 to-black text-white overflow-hidden flex items-center justify-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/30 via-purple-900/20 to-black" />
        
        {/* Artistic Background Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-2xl" />
        
        {/* Floating Musical Notes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-1/4 left-1/4 text-pink-400/30"
        >
          <MusicalNoteIcon className="w-16 h-16" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute top-1/3 right-1/3 text-purple-400/30"
        >
          <PaintBrushIcon className="w-12 h-12" />
        </motion.div>
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute bottom-1/3 left-1/5 text-pink-300/30"
        >
          <MicrophoneIcon className="w-14 h-14" />
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
      >
        {/* Navigation */}
        <motion.div
          variants={itemVariants}
          className="absolute top-8 left-8"
        >
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 font-poppins"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </motion.div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Logo/Icon */}
          <motion.div
            variants={titleVariants}
            className="mb-8"
          >
            <div className="relative">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-sm border border-pink-400/30 flex items-center justify-center mb-6">
                <MusicalNoteIcon className="w-16 h-16 text-pink-400" />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-xl" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={titleVariants}
            className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 font-poppins tracking-wide"
            style={{
              textShadow: "0 0 40px rgba(255, 78, 205, 0.3)"
            }}
          >
            ECHOES
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-light text-pink-200 mb-4 font-poppins"
          >
            Cultural Festival
          </motion.p>

          {/* Date */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-400/30 mb-8"
          >
            <SparklesIcon className="w-5 h-5 text-pink-400" />
            <span className="text-lg font-medium text-pink-200 font-poppins">October 15-17, 2024</span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-poppins"
          >
            A spectacular celebration of creativity, artistry, and cultural diversity. 
            Join us for three days of mesmerizing performances, artistic exhibitions, 
            and cultural exchange that will echo in your memories forever.
          </motion.p>

          {/* Feature Icons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            {[
              { icon: MusicalNoteIcon, label: "Music" },
              { icon: PaintBrushIcon, label: "Arts" },
              { icon: MicrophoneIcon, label: "Performance" },
              { icon: FilmIcon, label: "Cinema" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div className="p-4 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/30 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-pink-400" />
                </div>
                <span className="text-sm text-gray-400 font-poppins">{item.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-white hover:scale-105 transition-all duration-300 flex items-center gap-2 font-poppins text-lg">
              <TicketIcon className="w-5 h-5" />
              Get Tickets
              <ArrowRightIcon className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-pink-400/50 rounded-full font-semibold text-pink-200 hover:bg-pink-500/10 transition-all duration-300 font-poppins text-lg">
              View Events
            </button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-pink-400/60 font-poppins text-sm"
          >
            Scroll to explore
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
