"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading({ size = "md", text = "Loading..." }) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10", 
    lg: "w-16 h-16"
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <motion.div
          className={`${sizeClasses[size]} border-4 border-gray-700 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={`absolute inset-0 ${sizeClasses[size]} border-4 border-transparent border-t-cyan-400 rounded-full`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className={`absolute inset-1 ${sizeClasses[size]} border-2 border-transparent border-t-purple-400 rounded-full`}
          animate={{ rotate: -360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {text && (
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-400 font-poppins text-sm"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
}
