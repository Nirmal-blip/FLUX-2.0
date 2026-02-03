"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

export default function Card({ 
  children, 
  className, 
  hover = true, 
  glow = false,
  ...props 
}) {
  return (
    <motion.div
      whileHover={hover ? { 
        y: -8, 
        scale: 1.02,
        boxShadow: glow ? "0 20px 40px rgba(0, 255, 204, 0.2)" : "0 20px 40px rgba(0, 0, 0, 0.2)"
      } : {}}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "bg-gray-900/40 backdrop-blur-sm border border-gray-700/30 rounded-xl p-6",
        "transition-all duration-300",
        glow && "border-teal-400/20",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className, ...props }) {
  return (
    <div className={cn("mb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }) {
  return (
    <h3 className={cn("text-xl font-semibold text-white font-orbitron", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardContent({ children, className, ...props }) {
  return (
    <div className={cn("text-gray-300", className)} {...props}>
      {children}
    </div>
  );
}
