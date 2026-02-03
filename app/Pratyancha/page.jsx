"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import AOS from "aos";
import "aos/dist/aos.css";
import HeroPratyancha from "../components/Pratyancha/HeroPratyancha";
import FooterPratyancha from "../components/Pratyancha/FooterPratyancha";
import GalleryPratyancha from "../components/Pratyancha/GalleryPratyancha";
import Events from "../components/Pratyancha/EventsPratyancha";
import GeneralSecretary from "../components/Pratyancha/GeneralSecretaries";
import PratyanchaNavbar from "../components/Pratyancha/PratyanchaNavbar";
import PageTransition from "../components/ui/PageTransition";
import SmoothScrollNav from "../components/ui/SmoothScrollNav";

import ScrollToTop from "../components/ui/ScrollToTop";
// Loading is handled by LoadingProvider in layout

export default function PratyanchaFest() {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  const [isPageReady, setIsPageReady] = useState(false);
  const [init, setInit] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize particles
  useEffect(() => {
    setMounted(true);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Optimized smooth scrolling functionality
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 60; // Account for reduced navbar height

          // Use requestAnimationFrame for smoother performance
          requestAnimationFrame(() => {
            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });
          });
        }
      }
    };

    // Add event listeners to all anchor links with passive option for better performance
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll, { passive: false });
    });

    // Cleanup
    return () => {
      anchorLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, [isPageReady]);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    // Small delay to ensure smooth transition from loading screen
    const timer = setTimeout(() => {
      setIsPageReady(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Pratyancha particles loaded:", container);
  }, []);

  // Particles configuration
  const particlesConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#3b82f6", "#06b6d4", "#0ea5e9"],
      },
      links: {
        color: "#06b6d4",
        distance: 150,
        enable: true,
        opacity: 0.1,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 50,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  return (
    <>
      {!showContent ? null : (
        <PageTransition pageName="pratyancha">
          <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white font-athletic"
            suppressHydrationWarning={true}
          >
            {/* Navigation */}
            <PratyanchaNavbar />

            {/* Particles Background */}
            {mounted && init && (
              <Particles
                id="pratyancha-particles"
                particlesLoaded={particlesLoaded}
                options={particlesConfig}
                className="fixed inset-0 z-0"
              />
            )}

            {/* Enhanced Background with better animations */}
            <div className="fixed inset-0 z-0 overflow-hidden">
              {/* Primary gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-950/25 via-slate-900 to-cyan-950/25" />

              {/* Animated gradient orbs with better movement */}
              <motion.div
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/8 to-cyan-500/8 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  x: [0, 30, 0],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/8 to-blue-500/8 rounded-full blur-2xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  x: [0, -30, 0],
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Additional subtle orb */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-blue-400/5 to-cyan-400/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.4, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Enhanced animated particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1.5 h-1.5 bg-cyan-400/25 rounded-full"
                    style={{
                      left: `${15 + i * 12}%`,
                      top: `${25 + i * 8}%`,
                    }}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, Math.sin(i) * 15, 0],
                      opacity: [0.2, 0.6, 0.2],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 5 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Subtle grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
                  backgroundSize: "80px 80px",
                }}
              />
            </div>

            {/* Content with enhanced animations */}
            <AnimatePresence mode="wait">
              {isPageReady && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative z-10 pt-16"
                >
                  <motion.div
                    id="home"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <HeroPratyancha />
                  </motion.div>

                  <motion.div
                    id="gallery"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <GalleryPratyancha />
                  </motion.div>

                  <motion.div
                    id="events"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <Events />
                  </motion.div>

                  <motion.div
                    id="secretaries"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                  >
                    <GeneralSecretary />
                  </motion.div>

                  <motion.div
                    id="contact"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <FooterPratyancha />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Smooth Scroll Navigation */}
            <SmoothScrollNav />

            {/* Scroll to Top */}
            <ScrollToTop />
          </div>
        </PageTransition>
      )}
    </>
  );
}
