"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../../lib/utils";

const badgeVariants = {
  default: "bg-gray-700 text-gray-200",
  primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
  secondary: "bg-gradient-to-r from-pink-600 to-purple-600 text-white",
  success: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  warning: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white",
  danger: "bg-gradient-to-r from-red-500 to-pink-500 text-white",
  neon: "bg-gray-900/50 border border-teal-400 text-teal-400"
};

export default function Badge({ 
  children, 
  variant = "default", 
  className,
  animate = true,
  ...props 
}) {
  const Component = animate ? motion.span : "span";
  
  return (
    <Component
      {...(animate && {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      })}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium",
        "transition-all duration-200",
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
