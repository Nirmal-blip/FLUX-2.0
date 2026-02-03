"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";

// Dynamically import 3D component
const LoaderCore = dynamic(() => import("../Flux/3D/LoaderCore"), {
  ssr: false,
  loading: () => null,
});

// Static data outside component
const TECH_PARTICLES = 30; // Reduced from 40
const SEATING_ROWS = 12;

// Pre-calculated arrays for memoization
const particlesArray = Array.from({ length: TECH_PARTICLES }, (_, i) => i);
const seatingRowsArray = Array.from({ length: SEATING_ROWS }, (_, i) => i);

const LoadingScreen = ({ isLoading, pageName }) => {
  const [lightsStage, setLightsStage] = useState(0);
  const [showText, setShowText] = useState(false);

  // Single optimized timeout handler
  useEffect(() => {
    if (!isLoading) {
      setLightsStage(0);
      setShowText(false);
      return;
    }

    const timeouts = [];

    if (pageName === "pratyancha") {
      // Batch light stage updates
      const updateLights = (stage, delay) => {
        timeouts.push(setTimeout(() => setLightsStage(stage), delay));
      };

      updateLights(1, 800);
      updateLights(2, 1600);
      updateLights(3, 2400);
      updateLights(4, 3200);
    }

    if (pageName === "flux") {
      timeouts.push(setTimeout(() => setShowText(true), 800));
    }

    return () => timeouts.forEach(clearTimeout);
  }, [isLoading, pageName]);

  const pageConfigs = useMemo(
    () => ({
      pratyancha: { title: "PRATYANCHA", subtitle: "SPORTS FESTIVAL 2026" },
      echoes: { title: "ECHOES", subtitle: "Cultural Festival" },
      flux: { title: "FLUX", subtitle: "Tech Festival" },
      clubs: { title: "CLUBS", subtitle: "Student Organizations" },
    }),
    []
  );

  const config = pageConfigs[pageName] || pageConfigs.pratyancha;

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pageName}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 z-[9999] overflow-hidden bg-black pointer-events-none"
      >
        {pageName === "pratyancha" ? (
          <PratyanchaScene lightsStage={lightsStage} config={config} />
        ) : pageName === "flux" ? (
          <FluxScene showText={showText} config={config} />
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
};

// Optimized sub-components
const PratyanchaScene = React.memo(({ lightsStage, config }) => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />

      <div className="absolute inset-0">
        {/* Stadium Structure - Simplified */}
        <StadiumStructure lightsStage={lightsStage} />

        {/* Football Pitch - Optimized */}
        <FootballPitch lightsStage={lightsStage} />

        {/* Floodlights - Optimized */}
        <Floodlights lightsStage={lightsStage} />
      </div>

      {/* Title Reveal - Only render when needed */}
      {lightsStage >= 4 && <TitleReveal config={config} />}
    </>
  );
});

const StadiumStructure = React.memo(({ lightsStage }) => {
  const leftStandOpacity = lightsStage >= 1 ? 0.6 : 0.3;
  const rightStandOpacity = lightsStage >= 3 ? 0.6 : 0.3;
  const backStandOpacity = lightsStage >= 2 ? 0.5 : 0.2;

  return (
    <div className="absolute inset-0 flex items-end justify-center">
      {/* Left Stand - Single div with gradient */}
      <div
        className="absolute left-0 bottom-0 w-1/3 h-2/3 transition-opacity duration-1000"
        style={{
          background:
            "linear-gradient(135deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
          clipPath: "polygon(0% 100%, 0% 30%, 100% 50%, 100% 100%)",
          transform: "perspective(1000px) rotateY(5deg)",
          opacity: leftStandOpacity,
        }}
      />

      {/* Right Stand */}
      <div
        className="absolute right-0 bottom-0 w-1/3 h-2/3 transition-opacity duration-1000"
        style={{
          background:
            "linear-gradient(225deg, rgba(30, 41, 59, 0.9) 0%, rgba(15, 23, 42, 0.95) 100%)",
          clipPath: "polygon(0% 50%, 0% 100%, 100% 100%, 100% 30%)",
          transform: "perspective(1000px) rotateY(-5deg)",
          opacity: rightStandOpacity,
        }}
      />

      {/* Back Stand */}
      <div
        className="absolute top-[20%] left-[20%] right-[20%] h-[30%] transition-opacity duration-1000"
        style={{
          background:
            "linear-gradient(180deg, rgba(30, 41, 59, 0.7) 0%, rgba(15, 23, 42, 0.9) 100%)",
          clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)",
          opacity: backStandOpacity,
        }}
      />
    </div>
  );
});

const FootballPitch = React.memo(({ lightsStage }) => {
  return (
    <div
      className="absolute bottom-0 left-[15%] right-[15%] h-[45%] transition-opacity duration-1000"
      style={{
        background:
          "linear-gradient(180deg, rgba(22, 101, 52, 0.3) 0%, rgba(20, 83, 45, 0.5) 100%)",
        transform: "perspective(800px) rotateX(60deg)",
        transformOrigin: "bottom center",
        opacity: lightsStage >= 2 ? 0.7 : 0.2,
      }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20" />
        <div className="absolute top-1/2 left-1/2 w-[15%] h-[30%] border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
});

const Floodlights = React.memo(({ lightsStage }) => {
  const renderTower = useCallback(
    (side, top, position, rows, cols, delayStart, isSmall = false) => (
      <div
        className={`absolute ${position} ${
          isSmall ? "w-2 h-[20%]" : "w-3 h-[35%]"
        } transition-opacity duration-1000`}
        style={{
          background:
            "linear-gradient(180deg, rgba(71, 85, 105, 0.8) 0%, rgba(51, 65, 85, 0.6) 100%)",
          opacity:
            lightsStage >= (side === "left" ? 1 : side === "right" ? 3 : 2)
              ? 1
              : 0.3,
        }}
      >
        <div
          className={`absolute ${
            isSmall ? "w-10 h-6 -top-4" : "w-16 h-10 -top-6"
          } left-1/2 -translate-x-1/2 bg-slate-700/80 rounded-sm`}
        >
          <div
            className="absolute inset-0 grid gap-0.5 p-0.5"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: rows * cols }).map((_, i) => (
              <div
                key={i}
                className="relative overflow-hidden bg-slate-600 rounded-sm"
              >
                <div
                  className="absolute inset-0 bg-[#FFF8DC] transition-all duration-1000"
                  style={{
                    opacity:
                      lightsStage >=
                      (side === "left" ? 1 : side === "right" ? 3 : 2)
                        ? 1
                        : 0,
                    boxShadow:
                      lightsStage >=
                      (side === "left" ? 1 : side === "right" ? 3 : 2)
                        ? "0 0 10px rgba(255, 248, 220, 0.8)"
                        : "none",
                    transitionDelay: `${delayStart + i * 0.1}s`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    [lightsStage]
  );

  return (
    <>
      {renderTower("left", true, "top-[15%] left-[8%]", 3, 2, 0)}
      {renderTower("left", false, "bottom-[20%] left-[8%]", 3, 2, 0.3)}
      {renderTower("right", true, "top-[15%] right-[8%]", 3, 2, 0)}
      {renderTower("right", false, "bottom-[20%] right-[8%]", 3, 2, 0.3)}
      {renderTower("back", false, "top-[18%] left-[30%]", 2, 2, 0.2, true)}
      {renderTower("back", false, "top-[18%] right-[30%]", 2, 2, 0.2, true)}
    </>
  );
});

const TitleReveal = React.memo(({ config }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-wider text-white mb-4 break-words leading-tigh "
        style={{
          fontFamily: "var(--font-oswald)",
          textShadow: "0 4px 20px rgba(0, 0, 0, 0.8)",
        }}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {config.title}
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-gray-300 tracking-[0.3em] uppercase"
        style={{ fontFamily: "var(--font-rajdhani)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        {config.subtitle}
      </motion.p>
    </div>
  );
});

const FluxScene = React.memo(({ showText, config }) => {
  const [particles] = useState(() =>
    particlesArray.map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: ["#00E5FF", "#E10600", "#FFFFFF"][Math.floor(Math.random() * 3)],
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 2,
    }))
  );

  return (
    <>
      {/* Static background */}
      <div className="absolute inset-0 bg-[#020408] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* 3D Core */}
      <div className="absolute inset-0">
        {typeof window !== "undefined" && (
          <div className="w-full h-full">
            <CanvasWrapper />
          </div>
        )}
      </div>

      {/* Optimized Particles - Single animation group */}
      <div className="absolute inset-0">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              background: particle.color,
              boxShadow: `0 0 3px ${particle.color}`,
              animation: `particleFloat ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Text Content - Only render when needed */}
      {showText && <FluxTextContent config={config} />}

      <style jsx>{`
        @keyframes particleFloat {
          0%,
          100% {
            opacity: 0;
            transform: translateY(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-100px);
          }
        }
      `}</style>
    </>
  );
});

// Canvas wrapper with dynamic import
const CanvasWrapper = React.memo(() => {
  const [Canvas, setCanvas] = useState(null);

  useEffect(() => {
    import("@react-three/fiber").then((module) => {
      setCanvas(() => module.Canvas);
    });
  }, []);

  if (!Canvas) return null;

  return (
    <Canvas
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
      }}
      dpr={[1, 1]}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00E5FF" />
      <LoaderCore />
    </Canvas>
  );
});

const FluxTextContent = React.memo(({ config }) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
      {/* Main Title */}
      <div className="relative">
        <h1
          className="text-7xl md:text-9xl font-bold tracking-[0.15em] mb-6 text-white animate-pulse"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          {config.title}
        </h1>
        {/* Glitch effect with CSS animation */}
        <div
          className="absolute inset-0 text-7xl md:text-9xl font-bold tracking-[0.15em] text-cyan-500/30 opacity-0 animate-glitch"
          style={{ fontFamily: "var(--font-rajdhani)" }}
        >
          {config.title}
        </div>
      </div>

      <div
        className="flex items-center gap-3 mb-32 animate-fadeIn opacity-0"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="text-cyan-400 text-xl">[</span>
        <p className="text-lg md:text-xl tracking-[0.3em] uppercase text-gray-400 font-rajdhani">
          Tech Fest
        </p>
        <span className="text-cyan-400 text-xl">]</span>
      </div>

      {/* Loading Bar */}
      <div className="absolute bottom-32 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-cyan-500 rounded-full animate-loadingBar" />
      </div>

      <p className="absolute bottom-20 text-sm tracking-[0.3em] uppercase font-mono text-cyan-400/80 animate-pulse">
        Initializing...
      </p>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes glitch {
          0% {
            opacity: 0;
            transform: translateX(0);
          }
          2% {
            opacity: 0.5;
            transform: translateX(2px);
          }
          4% {
            opacity: 0;
            transform: translateX(-2px);
          }
          6% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes loadingBar {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s forwards;
        }

        .animate-glitch {
          animation: glitch 0.2s infinite;
        }

        .animate-loadingBar {
          animation: loadingBar 1.5s linear infinite;
        }
      `}</style>
    </div>
  );
});

// Display names for debugging
PratyanchaScene.displayName = "PratyanchaScene";
StadiumStructure.displayName = "StadiumStructure";
FootballPitch.displayName = "FootballPitch";
Floodlights.displayName = "Floodlights";
TitleReveal.displayName = "TitleReveal";
FluxScene.displayName = "FluxScene";
CanvasWrapper.displayName = "CanvasWrapper";
FluxTextContent.displayName = "FluxTextContent";

export default React.memo(LoadingScreen);
