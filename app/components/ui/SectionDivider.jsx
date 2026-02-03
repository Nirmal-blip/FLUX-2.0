"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider({ className = "" }) {
  return (
    <div className={`relative py-16 ${className}`}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-700/30" />
      </div>
      <div className="relative flex justify-center">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="bg-black px-4"
        >
          <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
            <motion.div
              className="w-6 h-6 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
