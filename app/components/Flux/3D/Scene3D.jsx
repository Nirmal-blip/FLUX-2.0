"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Scene3D from "./Scene3D"; 

export default function CinematicLoading() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 800); 
          return 100;
        }
        return prev + 2; // Speed adjust kar sakta hai yahan se
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#050505]">
      {/* Tera Main Content Jo Piche Reveal Hoga */}
      <div className="absolute inset-0 z-0">
        <Scene3D showCore={true} />
      </div>

      <AnimatePresence>
        {loading && (
          <div className="fixed inset-0 z-[100] flex overflow-hidden">
            
            {/* LEFT PANEL */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ 
                x: "-100%", 
                transition: { duration: 1, ease: [0.9, 0, 0.1, 1] } 
              }}
              className="relative w-1/2 h-full overflow-hidden border-r border-white/10"
            >
              <img 
                src="/images/fluxImages/loadingbg.jpeg" 
                className="absolute inset-0 h-full w-[200%] max-w-none object-cover"
                alt="left-side"
              />
              <div className="absolute inset-0 bg-red-600/10" />
            </motion.div>

            {/* RIGHT PANEL */}
            <motion.div
              initial={{ x: 0 }}
              exit={{ 
                x: "100%", 
                transition: { duration: 1, ease: [0.9, 0, 0.1, 1] } 
              }}
              className="relative w-1/2 h-full overflow-hidden"
            >
              <img 
                src="/loading-background.jpeg" 
                className="absolute inset-0 h-full w-[200%] max-w-none object-cover -left-full"
                alt="right-side"
              />
              <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* THE LOADING BAR (CENTERED) */}
            <motion.div 
              exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              className="absolute inset-0 flex flex-col items-center justify-center z-[110] px-10"
            >
              <div className="relative w-full max-w-md">
                {/* Percentage Text */}
                <div className="flex justify-between mb-2 px-1">
                  <span className="text-white/40 font-mono text-xs tracking-tighter uppercase">System Boot</span>
                  <span className="text-white font-mono text-sm">{progress}%</span>
                </div>

                {/* Bar Container */}
                <div className="h-[2px] w-full bg-white/10 overflow-hidden relative">
                  {/* Glowing Progress */}
                  <motion.div 
                    className="h-full bg-white shadow-[0_0_15px_#fff]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
                
                {/* Subtext */}
                <p className="mt-4 text-[10px] text-white/30 text-center tracking-[0.3em] uppercase">
                  Breaking through the reality...
                </p>
              </div>
            </motion.div>

            {/* VERTICAL TEAR LINE */}
            <motion.div 
              exit={{ opacity: 0, height: 0 }}
              className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/50 to-transparent z-[105]"
            />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}