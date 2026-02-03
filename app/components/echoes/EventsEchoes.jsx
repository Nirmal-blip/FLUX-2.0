"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  MusicalNoteIcon,
  PaintBrushIcon,
  FilmIcon,
  SparklesIcon,
  UserGroupIcon,
  ClockIcon,
  CalendarDaysIcon
} from "@heroicons/react/24/outline";

export default function FestivalEvents() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const events = [
    {
      name: "Vibrant Dance Fest",
      description:
        "A colorful celebration of dance with global performers showcasing diverse styles.",
      src: "/images/echoesImages/art.jpg",
    },
    {
      name: "Musical Extravaganza",
      description:
        "An electrifying concert featuring top bands and solo artists under the stars.",
      src: "/images/echoesImages/music.jpg",
    },
    {
      name: "Theatre Spotlight",
      description:
        "Captivating theatrical performances that bring stories to life on stage.",
      src: "/images/echoesImages/art.jpg",
    },
    {
      name: "Theatre Spotlight",
      description:
        "Captivating theatrical performances that bring stories to life on stage.",
      src: "/images/echoesImages/theatre.jpg",
    },
    {
      name: "Food Fiesta",
      description:
        "A delightful festival of global cuisines, with live cooking demos and tastings.",
      src: "/images/echoesImages/food.jpg",
    },
    {
      name: "Food Fiesta",
      description:
        "A delightful festival of global cuisines, with live cooking demos and tastings.",
      src: "/images/echoesImages/food.jpg",
    },
  ];

  // Animations
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut", staggerChildren: 0.1 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      boxShadow:
        "0 0 20px rgba(255, 78, 205, 0.8), 0 0 40px rgba(147, 51, 234, 0.6)",
    },
  };

  const titleText = "Upcoming Events".split("");

  return (
    <section
      ref={ref}
      className="relative p-8 md:p-12 w-full mx-auto overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/stardust.png')",
        backgroundColor: "#0f031a",
      }}
    >
      {/* Enhanced Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 rounded-full border border-pink-400/30 mb-6"
        >
          <span className="text-sm font-bold text-pink-400 font-space-grotesk tracking-widest uppercase flex items-center gap-2">
            <FilmIcon className="w-4 h-4" />
            CULTURAL SHOWCASE
            <PaintBrushIcon className="w-4 h-4" />
          </span>
        </motion.div>
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-5xl md:text-7xl font-bold text-center mb-4 text-transparent bg-clip-text font-space-grotesk tracking-tight"
          style={{
            backgroundImage: "linear-gradient(90deg, #ff007a, #9333ea, #f72585)",
          }}
        >
          {titleText.map((letter, i) => (
            <motion.span key={i} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins font-light italic"
        >
          Experience the <span className="text-pink-400 font-semibold">ARTISTIC SYMPHONY</span> with 
          <span className="text-purple-400 font-semibold"> CREATIVE MASTERPIECES</span> across diverse cultural forms
        </motion.p>
      </motion.div>

      {/* Event Grid */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {events.map((item, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{
              scale: 1.07,
              border: "4px solid #ff007a",
              transition: { duration: 0.3 },
            }}
            className="relative rounded-2xl  border-lg border-amber-50 overflow-hidden shadow-xl group"
          >
            {/* Background Image */}
            <div
              className="w-full h-80 bg-center bg-cover"
              style={{
                backgroundImage: `url(${item.src})`,
              }}
            ></div>

            {/* Enhanced Overlay */}
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex flex-col justify-end p-6"
            >
              {/* Cultural Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-500/80 to-purple-500/80 rounded-full border border-pink-400/50"
              >
                <span className="text-xs font-bold text-white font-space-grotesk tracking-wider uppercase">
                  LIVE ART
                </span>
              </motion.div>

              <h3 className="text-white text-xl md:text-2xl font-bold font-space-grotesk tracking-wide mb-2">
                {item.name}
              </h3>
              <p className="text-gray-200 text-sm font-poppins font-light leading-relaxed mb-4 italic">
                {item.description}
              </p>
              
              {/* Enhanced Cultural Stats */}
              <div className="flex flex-wrap gap-2 mb-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-pink-900/30 rounded-lg px-3 py-1 border border-pink-400/30"
                >
                  <span className="text-xs text-pink-400 font-space-grotesk font-bold">100+ ARTISTS</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-purple-900/30 rounded-lg px-3 py-1 border border-purple-400/30"
                >
                  <span className="text-xs text-purple-400 font-space-grotesk font-bold">LIVE NOW</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="bg-rose-900/30 rounded-lg px-3 py-1 border border-rose-400/30"
                >
                  <span className="text-xs text-rose-400 font-space-grotesk font-bold">ALL AGES</span>
                </motion.div>
              </div>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#ff007a] to-[#9333ea] text-white font-bold text-sm font-space-grotesk tracking-wide uppercase border-2 border-pink-400/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FilmIcon className="w-4 h-4" />
                JOIN CULTURAL FEST
                <PaintBrushIcon className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
