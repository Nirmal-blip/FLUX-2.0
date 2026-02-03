"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  SparklesIcon,
  FilmIcon,
  PaintBrushIcon,
  UserIcon,
  TagIcon,
  MapPinIcon,
  DocumentTextIcon,
  BuildingStorefrontIcon
} from "@heroicons/react/24/outline";

export default function StallForm() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [stall, setStall] = useState({
    name: "",
    owner: "",
    category: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setStall({ ...stall, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("✅ Stall Submitted:", stall);
    alert(`Stall Added: ${stall.name}`);
    setStall({
      name: "",
      owner: "",
      category: "",
      location: "",
      description: "",
    });
  };

  // ✅ Kept other variants, removed blackout waveVariants
  const formVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 60 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut", type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut", type: "spring", stiffness: 120, damping: 10 },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.7 },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 30px rgba(255, 78, 205, 1), 0 0 40px rgba(59, 130, 246, 0.9)",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const lightVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      scale: [1, 1.6, 1],
      opacity: [0.5, 0.9, 0.5],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
    },
  };

  const splashVariants = {
    hidden: { opacity: 0, scale: 0, rotate: 0 },
    visible: {
      opacity: [0.4, 0.7, 0.4],
      scale: [1, 1.2, 1],
      rotate: [0, 10, 0],
      transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-gradient-to-br from-[#000000] via-[#1a0b2e] to-[#000000]"
    >
      {/* Only bokeh & splashes remain */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          variants={lightVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="absolute w-6 h-6 bg-gradient-to-r from-[#ff007a]/60 to-[#3b82f6]/60 rounded-full blur-lg"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`splash-${i}`}
          variants={splashVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="absolute w-12 h-12 bg-gradient-to-b from-[#ff007a]/40 to-[#3b82f6]/40 rounded-full"
          style={{
            top: `${Math.random() * 50}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Enhanced Form Card */}
      <motion.div
        variants={formVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative w-full max-w-4xl bg-gradient-to-br from-pink-900/10 via-purple-900/10 to-blue-900/10 backdrop-blur-2xl p-10 rounded-3xl border border-pink-400/20 shadow-[0_0_40px_rgba(255,78,205,0.2)]"
      >
        {/* Decorative Corner Elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-pink-400/30 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-purple-400/30 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-purple-400/30 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-400/30 rounded-br-lg"></div>
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full border border-pink-400/30 mb-6"
          >
            <span className="text-sm font-bold text-pink-400 font-space-grotesk tracking-widest uppercase flex items-center gap-2">
              <BuildingStorefrontIcon className="w-4 h-4" />
              CULTURAL STALL REGISTRATION
              <PaintBrushIcon className="w-4 h-4" />
            </span>
          </motion.div>
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-5xl md:text-6xl font-bold text-center bg-clip-text text-transparent font-space-grotesk tracking-tight"
            style={{
              backgroundImage: "linear-gradient(90deg, #ff007a, #9333ea, #3b82f6)",
            }}
          >
            Add Cultural Stall
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-300 font-poppins font-light italic max-w-2xl mx-auto mt-4"
          >
            Register your <span className="text-pink-400 font-semibold">creative stall</span> and become part of our 
            <span className="text-purple-400 font-semibold"> cultural marketplace</span>
          </motion.p>
        </motion.div>

        {/* Enhanced Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={inputVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-pink-400 font-space-grotesk tracking-wide uppercase flex items-center gap-2">
                <FilmIcon className="w-4 h-4" />
                Stall Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your creative stall name"
                value={stall.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-pink-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300 font-poppins"
              />
            </motion.div>

            <motion.div
              variants={inputVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-purple-400 font-space-grotesk tracking-wide uppercase flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                Owner / Artist
              </label>
              <input
                type="text"
                name="owner"
                placeholder="Name of the stall owner"
                value={stall.owner}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-purple-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 font-poppins"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              variants={inputVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-blue-400 font-space-grotesk tracking-wide uppercase flex items-center gap-2">
                <TagIcon className="w-4 h-4" />
                Category
              </label>
              <select
                name="category"
                value={stall.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-blue-400/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300 font-poppins"
              >
                <option value="">-- Select Art Category --</option>
                <option value="Food">Culinary Arts</option>
                <option value="Crafts">Handmade Crafts</option>
                <option value="Merchandise">Cultural Merchandise</option>
                <option value="Workshops">Art Workshops</option>
                <option value="Performance">Performance Art</option>
                <option value="Other">Other Creative Arts</option>
              </select>
            </motion.div>

            <motion.div
              variants={inputVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-2"
            >
              <label className="text-sm font-semibold text-rose-400 font-space-grotesk tracking-wide uppercase flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" />
                Location
              </label>
              <input
                type="text"
                name="location"
                placeholder="Preferred stall location"
                value={stall.location}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-black/30 border border-rose-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition-all duration-300 font-poppins"
              />
            </motion.div>
          </div>

          <motion.div
            variants={inputVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-2"
          >
            <label className="text-sm font-semibold text-pink-400 font-space-grotesk tracking-wide uppercase flex items-center gap-2">
              <DocumentTextIcon className="w-4 h-4" />
              Creative Description
            </label>
            <textarea
              name="description"
              placeholder="Describe your artistic vision and what makes your stall unique..."
              rows="4"
              value={stall.description}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-black/30 border border-pink-400/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition-all duration-300 resize-none font-poppins"
            />
          </motion.div>

          <motion.button
            type="submit"
            variants={buttonVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 rounded-xl font-bold text-lg text-white bg-gradient-to-r from-[#ff007a] via-[#9333ea] to-[#3b82f6] border-2 border-pink-400/30 font-space-grotesk tracking-wide uppercase transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <BuildingStorefrontIcon className="w-5 h-5" />
              REGISTER CULTURAL STALL
              <PaintBrushIcon className="w-5 h-5" />
            </span>
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
