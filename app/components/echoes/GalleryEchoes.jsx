"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  PhotoIcon,
  PaintBrushIcon,
  FilmIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

export default function GalleryEchoes() {
  const images = [
    { src: "/images/echoesImages/art.jpg", caption: "Vibrant Dance Performance" },
    { src: "/images/echoesImages/art.jpg", caption: "Musical Concert Extravaganza" },
    { src: "/images/echoesImages/theatre.jpg", caption: "Theatre Show Spotlight" },
    { src: "/images/echoesImages/food.jpg", caption: "Food Festival Delights" },
    { src: "/images/echoesImages/theatre.jpg", caption: "Theatre Show Spotlight" },
    { src: "/images/echoesImages/food.jpg", caption: "Food Festival Delights" },
  ];

  // Title animation with brushstroke effect
  const titleVariants = {
    hidden: { opacity: 0, scaleX: 0, transformOrigin: "left" },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 1.8,
        ease: "easeOut",
        staggerChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20, rotate: -10 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Image animation with brushstroke reveal
  const imageVariants = {
    hidden: { opacity: 0, clipPath: "inset(100% 0 0 0)", scale: 0.9 },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0 0 0)",
      scale: 1,
      transition: {
        duration: 1.4,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  // Caption animation with handwritten effect
  const captionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
    },
  };

  // Paint drip animation for hover
  const dripVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "20%",
      opacity: 0.7,
      transition: { duration: 0.5, ease: "easeIn" },
    },
  };

  // Particle animation for background
  const particleVariants = {
    animate: {
      y: [0, -20, 0],
      opacity: [0.3, 0.6, 0.3],
      transition: {
        repeat: Infinity,
        duration: 4,
        ease: "easeInOut",
      },
    },
  };

  const titleText = "Echoes Gallery".split("");

  return (
    <section
      className="relative p-8 md:p-12 w-full mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/canvas.png')",
        backgroundColor: "#0f031a",
      }}
    >
      {/* Animated Paint Splatters */}
      {[...Array(5)].map((_, i) => {
        const positions = [
          { top: '10%', left: '20%' },
          { top: '30%', left: '80%' },
          { top: '60%', left: '15%' },
          { top: '80%', left: '70%' },
          { top: '40%', left: '50%' }
        ];
        return (
          <motion.div
            key={i}
            variants={particleVariants}
            animate="animate"
            className="absolute w-12 h-12 bg-gradient-to-r from-[#ff007a]/50 to-[#f72585]/50 rounded-full blur-md"
            style={{
              top: positions[i].top,
              left: positions[i].left,
              transform: `translate(-50%, -50%)`,
            }}
          />
        );
      })}

      {/* Enhanced Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 rounded-full border border-pink-400/30 mb-6"
        >
          <span className="text-sm font-bold text-pink-400 font-space-grotesk tracking-widest uppercase flex items-center gap-2">
            <PhotoIcon className="w-4 h-4" />
            ARTISTIC MOMENTS
            <PaintBrushIcon className="w-4 h-4" />
          </span>
        </motion.div>
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl font-bold text-center mb-4 bg-clip-text text-transparent font-space-grotesk tracking-tight relative"
          style={{
            backgroundImage: "linear-gradient(90deg, #ff007a, #ff4ecd, #f72585)",
          }}
        >
          {titleText.map((letter, i) => (
            <motion.span key={i} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff007a] to-[#f72585] rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          />
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-xl text-gray-300 max-w-3xl mx-auto font-poppins font-light italic"
        >
          Capture the <span className="text-pink-400 font-semibold">CREATIVE MAGIC</span> and 
          <span className="text-purple-400 font-semibold"> ARTISTIC BRILLIANCE</span> from our cultural celebrations
        </motion.p>
      </motion.div>

      {/* Masonry Grid with Uniform Card Size */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.4 } } }}
        className="columns-2 md:columns-3 gap-6"
      >
        {images.map((item, i) => (
          <motion.div
            key={i}
            variants={imageVariants}
            whileHover={{
              rotate: i % 2 === 0 ? 2 : -2,
              y: -10,
              boxShadow: "0 15px 40px rgba(255, 78, 205, 0.6), 0 0 20px rgba(255, 78, 205, 0.3)",
              transition: { type: "spring", stiffness: 200, damping: 15 },
            }}
            className="relative w-full h-80 mb-6 rounded-lg overflow-hidden group break-inside-avoid"
            style={{
              backgroundImage: "url('https://www.transparenttextures.com/patterns/canvas.png')",
              backgroundColor: "#fff",
              padding: "12px",
              boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)",
              border: "2px solid #f5f5f5",
            }}
          >
            <motion.img
              src={item.src}
              alt={item.caption}
              className="w-full h-full object-cover rounded-md"
              variants={imageVariants}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            />
            {/* Paint Drip Effect on Hover */}
            <motion.div
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#ff007a]/70 to-[#f72585]/70"
              variants={dripVariants}
              initial="hidden"
              whileHover="visible"
            />
            {/* Enhanced Caption Overlay */}
            <motion.div
              variants={captionVariants}
              initial="hidden"
              animate="visible"
              className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6"
            >
              {/* Cultural Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-500/80 to-purple-500/80 rounded-full border border-pink-400/50"
              >
                <span className="text-xs font-bold text-white font-space-grotesk tracking-wider uppercase flex items-center gap-1">
                  <SparklesIcon className="w-3 h-3" />
                  MASTERPIECE
                </span>
              </motion.div>

              <motion.div
                className="text-center"
                animate={{ y: [0, -2, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <span className="text-white text-lg md:text-xl font-bold block font-space-grotesk tracking-wide mb-2">
                  {item.caption}
                </span>
                <div className="flex justify-center gap-2 mb-3">
                  <div className="bg-pink-900/50 rounded-lg px-2 py-1 border border-pink-400/30">
                    <span className="text-xs text-pink-400 font-space-grotesk font-bold">ARTISTIC</span>
                  </div>
                  <div className="bg-purple-900/50 rounded-lg px-2 py-1 border border-purple-400/30">
                    <span className="text-xs text-purple-400 font-space-grotesk font-bold">2024</span>
                  </div>
                </div>
                <motion.div
                  className="w-32 h-1 mx-auto bg-gradient-to-r from-[#ff007a] via-[#ff4ecd] to-[#f72585] rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
