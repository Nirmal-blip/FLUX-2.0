"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeftIcon, HomeIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Tickets from "../components/echoes/FestTickets";
import ScrollToTop from "../components/ui/ScrollToTop";

export default function FestTickets() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-purple-950/30" />
        
        {/* Artistic Background Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-pink-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="relative z-20 p-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link
            href="/echoes"
            className="flex items-center gap-2 px-4 py-2 bg-pink-900/50 backdrop-blur-sm rounded-full border border-pink-400/30 hover:bg-pink-800/50 transition-all duration-300 font-poppins"
          >
            <ArrowLeftIcon className="w-5 h-5" />
            <span>Back to ECHOES</span>
          </Link>
          
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 font-poppins"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </div>
      </div>

      {/* Page Header */}
      <motion.div
        className="relative z-10 text-center py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <SparklesIcon className="w-10 h-10 text-pink-400" />
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 font-poppins">
            ECHOES TICKETS
          </h1>
          <SparklesIcon className="w-10 h-10 text-purple-400" />
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
          Secure your spot at the most spectacular cultural festival of the year
        </p>
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Tickets />
        </motion.div>
      </div>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
