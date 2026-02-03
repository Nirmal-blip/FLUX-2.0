"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroEchoes from "../components/echoes/HeroEchoes";
import FooterEchoes from "../components/echoes/FooterEchoes";
import StallEchoes from "../components/echoes/Stall";
import GalleryEchoes from "../components/echoes/GalleryEchoes";
import Events from "../components/echoes/EventsEchoes";
import GeneralSecretary from "../components/echoes/GeneralSecretaries";

import ScrollToTop from "../components/ui/ScrollToTop";

export default function EchoesFest() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-950/30 via-black to-purple-950/30" />
        
        {/* Artistic Background Elements */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl" />
        
        {/* Floating Musical Notes */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
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

      {/* Content */}
      <div className="relative z-10">
        <HeroEchoes />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GalleryEchoes />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Events />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <GeneralSecretary />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <StallEchoes />
        </motion.div>
        
        <FooterEchoes />
      </div>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}
