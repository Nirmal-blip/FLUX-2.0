"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FilmIcon,
  PaintBrushIcon,
  SparklesIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function EchoesContactFooter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Title animation with theatrical pulse effect
  const titleVariants = {
    hidden: { opacity: 0, scaleX: 0, transformOrigin: "center" },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1.2, ease: "easeOut", staggerChildren: 0.1, type: "spring", bounce: 0.3 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", type: "spring", stiffness: 110 },
    },
    highlighted: {
      textShadow: [
        "0 0 12px #ff4ecd",
        "2px 2px 15px #f72585, -2px -2px 18px #ff007a",
        "0 0 12px #ff4ecd",
      ],
      scale: [1, 1.08, 1],
      transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Section header animation
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  // Social icon animation with glowing spin
  const socialVariants = {
    initial: { scale: 0.7, opacity: 0, rotate: -15 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut", type: "spring", stiffness: 140 },
    }),
    hover: {
      scale: 1.3,
      rotate: 8,
      boxShadow: "0 0 20px rgba(255, 78, 205, 0.7)",
      transition: { duration: 0.3, type: "spring", stiffness: 180 },
    },
  };

  // Form input animation with glowing focus
  const inputVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: 0.4 },
    },
    focus: {
      borderColor: "#ff4ecd",
      boxShadow: "0 0 12px rgba(255, 78, 205, 0.8)",
      transition: { duration: 0.3 },
    },
  };

  // Button animation with neon pulse
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.6 },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 0 25px rgba(255, 78, 205, 0.8), 0 0 35px rgba(247, 37, 133, 0.6)",
      backgroundImage: [
        "linear-gradient(90deg, #ff007a, #ff4ecd, #f72585)",
        "linear-gradient(90deg, #ff4ecd, #f72585, #ff007a)",
        "linear-gradient(90deg, #f72585, #ff007a, #ff4ecd)",
      ],
      transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
    },
  };

  // Particle animation for background with cultural sparkle
  const particleVariants = {
    animate: {
      y: [0, -15, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [0.6, 1.2, 0.6],
      rotate: [0, 180, 360],
      transition: { repeat: Infinity, duration: 3, ease: "easeInOut", delay: Math.random() * 1.2 },
    },
  };

  // Stage light animation
  const stageLightVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    animate: {
      opacity: [0.2, 0.6, 0.2],
      scale: [0.5, 1, 0.5],
      transition: { duration: 4, ease: "easeInOut", repeat: Infinity, delay: Math.random() * 1 },
    },
  };

  // Scan line animation
  const scanLineVariants = {
    animate: {
      y: ["-100%", "100%"],
      transition: { duration: 5, repeat: Infinity, ease: "linear" },
    },
  };

  const titleText = "Get in Touch".split("");

  return (
    <footer
      ref={ref}
      className="relative bg-[#0a0a0c] text-gray-300 py-16 px-8 overflow-hidden"
      style={{
        backgroundImage: "url('https://www.transparenttextures.com/patterns/stage-lighting.png')",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Stage Lights */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          variants={stageLightVariants}
          initial="hidden"
          animate="animate"
          className="absolute w-[300px] h-[300px] bg-gradient-to-r from-[#ff4ecd]/20 to-[#f72585]/20 rounded-full blur-2xl"
          style={{
            top: i % 2 === 0 ? "-10%" : "90%",
            left: i < 2 ? "-10%" : "90%",
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Scan Lines */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#ff4ecd]/15 to-transparent opacity-50 pointer-events-none"
        variants={scanLineVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-[#f72585]/15 to-transparent opacity-50 pointer-events-none"
        variants={scanLineVariants}
        animate="animate"
        transition={{ duration: 5.5, delay: 1.2 }}
      />

      {/* Dynamic Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          variants={particleVariants}
          animate="animate"
          className="absolute w-3 h-3 bg-gradient-to-r from-[#ff4ecd]/60 to-[#f72585]/60 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `translate(-50%, -50%)`,
            boxShadow: "0 0 15px rgba(255, 78, 205, 0.6)",
          }}
        />
      ))}

      <div className="container mx-auto text-center relative z-10">
        {/* Enhanced Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 rounded-full border border-pink-400/30 mb-6"
          >
            <span className="text-sm font-bold text-pink-400 font-space-grotesk tracking-widest uppercase flex items-center gap-2">
              <FilmIcon className="w-4 h-4" />
              CONNECT WITH ARTISTS
              <PaintBrushIcon className="w-4 h-4" />
            </span>
          </motion.div>
          <motion.h2
            variants={titleVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text font-space-grotesk tracking-tight"
            style={{
              backgroundImage: "linear-gradient(90deg, #ff007a, #ff4ecd, #f72585)",
            }}
          >
            {titleText.map((letter, i) => (
              <motion.span key={i} variants={letterVariants} animate="highlighted">
                {letter}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-xl mb-8 text-gray-300 leading-relaxed max-w-4xl mx-auto font-poppins font-light italic"
          >
            Connect with <span className="text-pink-400 font-semibold">ECHOES CULTURAL FESTIVAL</span> for
            <span className="text-purple-400 font-semibold"> ARTISTIC COLLABORATIONS</span>, inquiries, or creative feedback!
          </motion.p>
        </motion.div>

        {/* Grid Sections */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.h3
              variants={sectionVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl font-bold text-transparent bg-clip-text font-space-grotesk tracking-wide mb-6"
              style={{
                backgroundImage: "linear-gradient(90deg, #ff007a, #ff4ecd)",
              }}
            >
              <span className="flex items-center gap-2">
                <FilmIcon className="w-5 h-5" />
                CULTURAL HQ
                <PaintBrushIcon className="w-5 h-5" />
              </span>
            </motion.h3>
            <ul className="space-y-4 text-gray-300 text-lg">
              {[
                { icon: "fas fa-envelope", href: "mailto:SAC@iitram.ac.in", text: "SAC@iitram.ac.in" },
                { icon: "fas fa-phone-alt", href: "tel:+917091182409", text: "+91 70911 82409" },
                { icon: "fas fa-map-marker-alt", href: "https://maps.app.goo.gl/Qg1grxfmpQDvfEmi8?g_st=aw", text: "IITRAM, Ahmedabad" },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={sectionVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  whileHover={{ x: 8, color: "#ff4ecd", transition: { duration: 0.3 } }}
                  className="flex items-center justify-center gap-4"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  <i className={`${item.icon} text-[#ff4ecd] text-xl`} />
                  {item.href ? (
                    <a 
                      href={item.href} 
                      target={item.href.startsWith('http') ? "_blank" : undefined}
                      rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="hover:text-[#ff4ecd] transition-colors underline decoration-[#ff4ecd]/50 hover:decoration-[#ff4ecd] underline-offset-2"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <motion.h3
              variants={sectionVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl font-bold text-transparent bg-clip-text font-space-grotesk tracking-wide mb-6"
              style={{
                backgroundImage: "linear-gradient(90deg, #ff007a, #ff4ecd)",
              }}
            >
              <span className="flex items-center gap-2">
                <SparklesIcon className="w-5 h-5" />
                FOLLOW THE ART
                <SparklesIcon className="w-5 h-5" />
              </span>
            </motion.h3>
            <div className="flex justify-center gap-8 mt-4">
              {[
                { platform: "facebook", color: "hover:text-[#ff4ecd]" },
                { platform: "instagram", color: "hover:text-[#f72585]" },
                { platform: "linkedin", color: "hover:text-[#ff007a]" },
              ].map((social, index) => (
                <motion.a
                  key={social.platform}
                  href={`https://${social.platform}.com/echoes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={socialVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className={`text-3xl relative group ${social.color} transition-colors duration-300`}
                >
                  <motion.div
                    className="absolute -inset-3 bg-gradient-to-r from-[#ff4ecd]/30 to-[#f72585]/30 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <i className={`fab fa-${social.platform} relative`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact Form (UI Only) */}
          <div className="space-y-6">
            <motion.h3
              variants={sectionVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-2xl font-bold text-transparent bg-clip-text font-space-grotesk tracking-wide mb-6"
              style={{
                backgroundImage: "linear-gradient(90deg, #ff007a, #ff4ecd)",
              }}
            >
              <span className="flex items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" />
                ARTIST'S MESSAGE
                <SparklesIcon className="w-5 h-5" />
              </span>
            </motion.h3>
            <form className="space-y-4">
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                variants={inputVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileFocus="focus"
                className="w-full px-6 py-3 rounded-lg bg-[#0a0a0c]/70 border border-[#ff4ecd]/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd] transition-all duration-300"
                style={{ fontFamily: "Montserrat, sans-serif", boxShadow: "0 0 8px rgba(255, 78, 205, 0.4)" }}
              />
              <motion.textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                variants={inputVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileFocus="focus"
                className="w-full px-6 py-3 rounded-lg bg-[#0a0a0c]/70 border border-[#ff4ecd]/50 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff4ecd] transition-all duration-300"
                style={{ fontFamily: "Montserrat, sans-serif", boxShadow: "0 0 8px rgba(255, 78, 205, 0.4)" }}
              />
              <motion.button
                type="button"
                variants={buttonVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
                className="w-full relative bg-gradient-to-r from-[#ff007a] to-[#f72585] text-white py-4 px-6 rounded-xl font-bold font-space-grotesk tracking-wide uppercase border-2 border-pink-400/30"
              >
                <span className="flex items-center gap-2">
                  <PaperAirplaneIcon className="w-5 h-5" />
                  SEND ARTISTIC MESSAGE
                  <PaintBrushIcon className="w-5 h-5" />
                </span>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <motion.div
            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff4ecd]/60 to-transparent"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <p
            className="text-gray-400 text-sm pt-8"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            © {new Date().getFullYear()} Echoes Cultural Fest. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
