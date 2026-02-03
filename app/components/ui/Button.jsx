"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

const buttonVariants = {
  default: "bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 text-white hover:from-pink-700 hover:via-purple-700 hover:to-blue-700",
  primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600",
  secondary: "bg-gradient-to-r from-gray-700 to-gray-800 text-white hover:from-gray-800 hover:to-gray-900",
  outline: "border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-black",
  ghost: "text-teal-400 hover:bg-teal-400/10",
  neon: "bg-black border-2 border-teal-400 text-teal-400 hover:shadow-[0_0_20px_#00ffcc] hover:bg-teal-400/5"
};

const sizeVariants = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl"
};

export default function Button({ 
  children, 
  variant = "default", 
  size = "md", 
  className, 
  disabled = false,
  onClick,
  ...props 
}) {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "relative font-medium rounded-lg transition-all duration-300 transform",
        "focus:outline-none focus:ring-2 focus:ring-cyan-400/50",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        buttonVariants[variant],
        sizeVariants[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === "neon" && (
        <motion.div
          className="absolute inset-0 bg-teal-400/20 rounded-lg blur-sm"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );
}
