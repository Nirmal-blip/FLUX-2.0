"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BoltIcon,
  TrophyIcon,
  ArrowRightIcon,
  CalendarDaysIcon,
} from "@heroicons/react/24/outline";
import SportsBackground from "../ui/SportsBackground";

export default function HeroPratyancha() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  if (!mounted) {
    return (
      <section
        aria-hidden
        className="min-h-screen text-white py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden font-athletic"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center font-athletic">
          <div className="flex flex-col items-center justify-center min-h-screen pt-16">
            <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-2xl mb-6 p-4" />
            <div className="h-8 sm:h-12 w-64 sm:w-72 mx-auto mb-6 rounded bg-gray-800" />
            <div className="h-4 sm:h-6 w-40 sm:w-48 mx-auto mb-2 rounded bg-gray-800" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="min-h-screen text-white py-12 sm:py-20 px-4 sm:px-6 relative overflow-hidden font-athletic"
      style={{ backgroundColor: "#0A0A0A" }}
      suppressHydrationWarning={true}
    >
      <SportsBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center font-athletic">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col items-center justify-center min-h-screen pt-12 sm:pt-16">
            {/* Logo */}
            <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto rounded-2xl backdrop-blur-xl border flex items-center justify-center mb-4 sm:mb-6 shadow-2xl p-3 sm:p-4"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(249, 115, 22, 0.3) 100%)",
                  borderColor: "rgba(255, 255, 255, 0.4)",
                  boxShadow:
                    "0 20px 60px rgba(59, 130, 246, 0.4), 0 0 80px rgba(249, 115, 22, 0.2)",
                }}
              >
                <img
                  src="/logo/pratyancha_logo.png"
                  alt="Pratyancha Logo"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-athletic athletic-heading mb-4 sm:mb-8 tracking-wider px-4"
              style={{
                background:
                  "linear-gradient(135deg, #FFFFFF 0%, #3B82F6 50%, #F97316 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 80px rgba(59, 130, 246, 0.5)",
              }}
            >
              PRATYANCHA
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-2xl md:text-3xl font-athletic sporty-text mb-4 sm:mb-6 tracking-wide px-4"
              style={{
                color: "#E5E7EB",
                textShadow: "0 2px 20px rgba(59, 130, 246, 0.3)",
              }}
            >
              Annual Sports Festival
            </motion.p>

            {/* Date Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-8 py-2 sm:py-3 rounded-xl sm:rounded-2xl border mb-6 sm:mb-12 backdrop-blur-xl shadow-xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(249, 115, 22, 0.3) 100%)",
                borderColor: "rgba(59, 130, 246, 0.5)",
                boxShadow:
                  "0 8px 32px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              <CalendarDaysIcon
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: "#E5E7EB" }}
              />
              <span
                className="text-sm sm:text-base font-athletic team-name"
                style={{ color: "#E5E7EB" }}
              >
                February 6-8, 2026
              </span>
              <span className="font-athletic" style={{ color: "#F97316" }}>
                •
              </span>
            </motion.div>

            {/* Prize Pool */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8 px-4">
              <div
                className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border backdrop-blur-xl shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 140, 0, 0.3) 100%)",
                  borderColor: "rgba(255, 215, 0, 0.5)",
                  boxShadow:
                    "0 8px 40px rgba(255, 215, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
                }}
              >
                <TrophyIcon
                  className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-300 font-athletic"
                  aria-hidden
                />
                <div className="text-center font-athletic">
                  <div className="text-base sm:text-xl md:text-2xl font-athletic athletic-title text-yellow-300">
                    Total Prize Pool
                  </div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-athletic athletic-heading text-white">
                    ₹30,000
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-300 mt-1 font-athletic">
                    * Terms and Conditions Applied
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center mb-12 sm:mb-16 w-full px-4"
            >
              <Link href="#events" legacyBehavior>
                <motion.a
                  aria-label="View Events"
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-athletic athletic-button text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 tracking-wide border-2 backdrop-blur-xl"
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "#FFFFFF",
                    borderColor: "rgba(255, 255, 255, 0.4)",
                    textDecoration: "none",
                    boxShadow: "0 4px 24px rgba(0, 0, 0, 0.3)",
                  }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "#3B82F6",
                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                    y: -4,
                    boxShadow: "0 12px 40px rgba(59, 130, 246, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <CalendarDaysIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-athletic">View Events</span>
                  <ArrowRightIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </motion.a>
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-xs sm:text-sm font-athletic team-name"
              style={{
                color: "#E5E7EB",
                textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
              }}
            >
              Scroll to explore
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
