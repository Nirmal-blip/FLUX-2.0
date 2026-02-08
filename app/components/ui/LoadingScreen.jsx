"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";


const TECH_PARTICLES = 30;
const particlesArray = Array.from({ length: TECH_PARTICLES }, (_, i) => i);

const LoadingScreen = ({ isLoading, pageName }) => {
  const [lightsStage, setLightsStage] = useState(0);
  const [showText, setShowText] = useState(false);

  // Logic to handle both Flux and Pratyancha timelines
  useEffect(() => {
    if (!isLoading) {
      setLightsStage(0);
      setShowText(false);
      return;
    }

    const timeouts = [];
    if (pageName === "pratyancha") {
      const updateLights = (stage, delay) => {
        timeouts.push(setTimeout(() => setLightsStage(stage), delay));
      };
      updateLights(1, 800);
      updateLights(2, 1600);
      updateLights(3, 2400);
      updateLights(4, 3200);
    }

    if (pageName === "flux") {
      // Show text slightly after core starts rotating
      timeouts.push(setTimeout(() => setShowText(true), 800));
    }

    return () => timeouts.forEach(clearTimeout);
  }, [isLoading, pageName]);

  const config = useMemo(() => ({
    pratyancha: { title: "PRATYANCHA", subtitle: "SPORTS FESTIVAL 2026" },
    flux: { title: "FLUX", subtitle: "Tech Festival" },
  }), []);

  const activeConfig = config[pageName] || config.pratyancha;

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="master-loader-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }} // Panels handle the exit for Flux
          className="fixed inset-0 z-[9999] overflow-hidden bg-transparent pointer-events-none"
        >
          {/* 1. PRATYANCHA SCENE LOGIC */}
          {pageName === "pratyancha" && (
            <motion.div 
              exit={{ opacity: 0, transition: { duration: 0.8 } }}
              className="relative w-full h-full"
            >
              <PratyanchaScene lightsStage={lightsStage} config={activeConfig} />
            </motion.div>
          )}

          {/* 2. FLUX SCENE WITH SPIDERMAN SPLIT LOGIC */}
          {pageName === "flux" && (
            <div className="relative w-full h-full flex overflow-hidden">
              
              {/* LEFT SPLIT PANEL */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
                className="relative w-1/2 h-full z-10 overflow-hidden"
              >
  <img
  src="/images/fluxImages/loadingbg1.png"
  className="hidden md:block w-full h-full object-cover"
/>

<img
  src="/images/fluxImages/mobilebg1.png"
  className="block md:hidden w-full h-full object-contain"
/>
                <div className="absolute inset-0 bg-red-950/20" />
              </motion.div>

              {/* RIGHT SPLIT PANEL */}
              <motion.div
                initial={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 1.2, ease: [0.87, 0, 0.13, 1] }}
                className="relative w-1/2 h-full z-10 overflow-hidden border-l border-white/5"
              >
                <img 
                  src="/images/fluxImages/loadingbg2.png" 
                  className="absolute h-full md:block hidden w-[100%] max-w-none object-cover bg-black  grayscale-[20%]" 
                  alt="bg-right" 
                />
                <img 
                  src="/images/fluxImages/mobilebg2.png" 
                  className="absolute h-full md:hidden block w-[100%] max-w-none object-cover bg-black  grayscale-[20%]" 
                  alt="bg-right" 
                />
                <div className="absolute inset-0 bg-black/50" />
              </motion.div>

              {/* CENTER CORE & UI */}
              <motion.div 
                exit={{ opacity: 0, scale: 1.3, filter: "blur(20px)" }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0 z-20 flex items-center justify-center"
              >
                <FluxScene showText={showText} config={activeConfig} />
              </motion.div>

              {/* GLOWING TEAR LINE */}
              <motion.div 
                exit={{ opacity: 0 }}
                className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/40 z-15 shadow-[0_0_20px_white]" 
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/* ------------------ FLUX COMPONENTS ------------------ */

const FluxScene = React.memo(({ showText, config }) => {


  return (
    <div className="relative w-full h-full">
      {/* 3D Core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <CanvasWrapper />
      </div>

      {showText && <FluxTextContent config={config} />}
      <style jsx>{`
        @keyframes particleFloat {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 0.8; transform: translateY(-100px); }
        }
      `}</style>
    </div>
  );
});

const CanvasWrapper = React.memo(() => {
  const [Canvas, setCanvas] = useState(null);
  useEffect(() => { import("@react-three/fiber").then((mod) => setCanvas(() => mod.Canvas)); }, []);
  if (!Canvas) return null;
});

const FluxTextContent = React.memo(({ config }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
    <motion.h1 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }}
      className="text-7xl md:text-9xl font-bold tracking-[0.2em] text-white font-rajdhani uppercase drop-shadow-[0_0_25px_#00E5FF]"
    >
      {config.title}
    </motion.h1>
    <p className="mt-4 text-[#ffff] tracking-[0.5em] uppercase text-md font-mono opacity-80">{config.subtitle}</p>
    
    {/* Minimal Loading Bar */}
    <div className="mt-12 w-56 h-[6px] bg-[#ffff] relative overflow-hidden">
      <div className="absolute inset-0 bg-[#b80000] border-white border-lg rounded-lg w-full animate-loadingBar" />
    </div>
    
    <style jsx>{`
      @keyframes loadingBar {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
      .animate-loadingBar { animation: loadingBar 2s infinite linear; }
    `}</style>
  </div>
));

/* ------------------ PRATYANCHA COMPONENTS ------------------ */

const PratyanchaScene = React.memo(({ lightsStage, config }) => (
  <>
    <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-black" />
    <StadiumStructure lightsStage={lightsStage} />
    <FootballPitch lightsStage={lightsStage} />
    <Floodlights lightsStage={lightsStage} />
    {lightsStage >= 4 && <TitleReveal config={config} />}
  </>
));

const StadiumStructure = React.memo(({ lightsStage }) => (
  <div className="absolute inset-0 flex items-end justify-center">
    {/* Left Stand */}
    <div className="absolute left-0 bottom-0 w-1/3 h-2/3 transition-opacity duration-1000" 
      style={{ 
        background: "linear-gradient(135deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95))", 
        clipPath: "polygon(0% 100%, 0% 30%, 100% 50%, 100% 100%)", 
        opacity: lightsStage >= 1 ? 0.7 : 0.2 
      }} 
    />
    {/* Right Stand */}
    <div className="absolute right-0 bottom-0 w-1/3 h-2/3 transition-opacity duration-1000" 
      style={{ 
        background: "linear-gradient(225deg, rgba(30,41,59,0.9), rgba(15,23,42,0.95))", 
        clipPath: "polygon(0% 50%, 0% 100%, 100% 100%, 100% 30%)", 
        opacity: lightsStage >= 3 ? 0.7 : 0.2 
      }} 
    />
    {/* Back Stand */}
    <div className="absolute top-[20%] left-[20%] right-[20%] h-[30%] transition-opacity duration-1000" 
      style={{ 
        background: "linear-gradient(180deg, rgba(30,41,59,0.7), rgba(15,23,42,0.9))", 
        clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)", 
        opacity: lightsStage >= 2 ? 0.6 : 0.2 
      }} 
    />
  </div>
));

const FootballPitch = React.memo(({ lightsStage }) => (
  <div className="absolute bottom-0 left-[15%] right-[15%] h-[45%] transition-opacity duration-1000" 
    style={{ 
      background: "linear-gradient(180deg, rgba(22,101,52,0.3), rgba(20,83,45,0.5))", 
      transform: "perspective(800px) rotateX(60deg)", 
      transformOrigin: "bottom center", 
      opacity: lightsStage >= 2 ? 0.8 : 0.2 
    }} 
  />
));

const Floodlights = React.memo(({ lightsStage }) => {
  const renderTower = (pos, stage) => (
    <div className={`absolute ${pos} w-3 h-[35%] transition-opacity duration-1000 bg-slate-700/50`} style={{ opacity: lightsStage >= stage ? 1 : 0.3 }}>
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-10 bg-slate-800 grid grid-cols-2 p-1 gap-1">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="bg-[#FFF8DC] transition-all duration-500" 
            style={{ 
              opacity: lightsStage >= stage ? 1 : 0, 
              boxShadow: lightsStage >= stage ? "0 0 15px #FFF8DC" : "none" 
            }} 
          />
        ))}
      </div>
    </div>
  );
  return (
    <>
      {renderTower("top-[15%] left-[8%]", 1)}
      {renderTower("top-[15%] right-[8%]", 3)}
      {renderTower("top-[18%] left-[48%]", 2)}
    </>
  );
});

const TitleReveal = React.memo(({ config }) => (
  <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
    <motion.h1 
      initial={{ y: 50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.8 }}
      className="text-7xl md:text-9xl font-black text-white tracking-tighter italic drop-shadow-2xl"
    >
      {config.title}
    </motion.h1>
    <motion.p 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ delay: 0.4 }}
      className="text-xl text-yellow-500 tracking-[0.5em] font-bold uppercase"
    >
      {config.subtitle}
    </motion.p>
  </div>
));

export default React.memo(LoadingScreen);