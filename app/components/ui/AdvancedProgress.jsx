"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Progress from "@radix-ui/react-progress";

export default function AdvancedProgress({ 
  value, 
  max = 100, 
  label = "", 
  color = "#06b6d4",
  height = "h-3",
  showValue = true,
  animated = true,
  glowEffect = true,
  className = ""
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [progress, setProgress] = useState(0);
  const percentage = Math.round((value / max) * 100);

  useEffect(() => {
    if (inView && animated) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, 300);
      return () => clearTimeout(timer);
    } else if (!animated) {
      setProgress(value);
    }
  }, [inView, value, animated]);

  return (
    <motion.div
      ref={ref}
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {/* Label and Value */}
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-2">
          {label && (
            <span className="text-sm font-rajdhani font-medium text-gray-300">
              {label}
            </span>
          )}
          {showValue && (
            <motion.span 
              className="text-sm font-rajdhani font-bold"
              style={{ color }}
              animate={{ scale: inView ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              {percentage}%
            </motion.span>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <Progress.Root
        className={`
          relative overflow-hidden bg-black/50 rounded-full ${height}
          ${glowEffect ? 'shadow-lg' : ''}
        `}
        style={{
          boxShadow: glowEffect ? `0 0 20px ${color}20` : 'none'
        }}
        value={progress}
        max={max}
      >
        <Progress.Indicator
          className="h-full rounded-full transition-transform duration-1000 ease-out relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}CC, ${color})`,
            transform: `translateX(-${100 - (progress / max) * 100}%)`,
            boxShadow: glowEffect ? `0 0 15px ${color}60` : 'none'
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ["-100%", "100%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          />
        </Progress.Indicator>

        {/* Glow effect overlay */}
        {glowEffect && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}30, transparent)`,
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </Progress.Root>

      {/* Skill points or additional info */}
      <div className="flex justify-between mt-1 text-xs text-gray-500 font-rajdhani">
        <span>0</span>
        <span>{max}</span>
      </div>
    </motion.div>
  );
}