"use client";
import Link from "next/link";
import React, { useRef, Suspense, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import { ArrowLeft, Zap, Shield, Target } from "lucide-react";
import { useRouter } from "next/navigation";

/* ================= 3D MODEL (STAYS FOR DEPTH) ================= */
function CivilWarModel({ scrollYProgress }) {
  const meshRef = useRef();
  const { scene } = useGLTF("/models/civilwar.glb");

  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.material.envMapIntensity = 2.5;
          child.material.needsUpdate = true;
        }
      });
    }
  }, [scene]);

  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 2.2, 1.5]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = rotationY.get();
      meshRef.current.scale.setScalar(scale.get());
    }
  });

  return (
    <group ref={meshRef} position={[0, -40.5, -203]}>
      <primitive object={scene} />
      <pointLight position={[0, 20, -60]} intensity={30} color="#ffffff" />
    </group>
  );
}

/* ================= PAGE ================= */
export default function FluxAbout() {
  const router = useRouter();
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const sectionVariants = {
    hidden: { opacity: 0, x: -50, rotate: -2 },
    visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-transparent text-black min-h-[500vh] font-sans overflow-hidden selection:bg-yellow-400 selection:text-black"
    >
      {/* --- COMIC HALFTONE OVERLAY --- */}
      <div className="fixed inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:10px_10px] z-[1]" />

      {/* ================= 3D BACKGROUND ================= */}
      <div className="fixed inset-0 z-0 h-screen w-full bg-transparent">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <spotLight position={[20, 20, 20]} intensity={2.5} />
          <Suspense fallback={null}>
            <CivilWarModel scrollYProgress={smoothProgress} />
            <Environment preset="studio" />
          </Suspense>
        </Canvas>
        {/* Dark overlay to make 3D model look "inked" */}
        <div className="absolute inset-0 bg-transparent mix-blend-multiply pointer-events-none" />
      </div>

      {/* ================= BACK BUTTON (COMIC TAG STYLE) ================= */}
      <motion.button
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
        onClick={() => router.back()}
        className="fixed top-8 left-8 z-[100] flex items-center gap-3 px-6 py-3 bg-yellow-400 border-[4px] border-black shadow-[6px_6px_0px_#000] group transition-all"
      >
        <ArrowLeft className="w-6 h-6 stroke-[3px]" />
        <span className="text-sm font-[1000] uppercase italic tracking-tighter">
          EXIT MISSION
        </span>
      </motion.button>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10">

        {/* HERO SECTION */}
        <section className="h-screen flex flex-col items-center justify-center text-center px-6">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0, rotate: 10 }}
            whileInView={{ scale: 1, opacity: 1, rotate: -2 }}
            className="bg-transparent  p-8  skew-x-[-5deg]"
          >
            <h2 className="mb-4 text-xs md:text-sm font-black uppercase tracking-[0.4em] text-yellow-300">
              IITRAM AHMEDABAD PRESENTS
            </h2>
            <h1 className="text-8xl md:text-[14rem] font-[1000] italic leading-none text-white drop-shadow-[8px_8px_0px_#000]">
             FLUX
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="mt-12 bg-white border-[6px] border-black px-10 py-5 text-lg md:text-2xl font-black uppercase italic shadow-[10px_10px_0px_#fbbf24] -rotate-1"
          >
            The Ultimate Technical Showdown
          </motion.p>
        </section>

        {/* BATTLEFIELD - PANEL STYLE */}
        <section className="h-screen flex items-center px-10 md:px-32">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            className="max-w-3xl bg-white border-[8px] border-black p-12 shadow-[20px_20px_0px_#ef4444] relative"
          >
            <div className="absolute -top-10 -left-6 bg-yellow-400 border-4 border-black px-6 py-2 font-[1000] text-3xl italic rotate-[-5deg] shadow-[5px_5px_0px_#000]">
              POW!
            </div>
            <h2 className="text-6xl md:text-8xl font-[1000] italic uppercase leading-none mb-10 tracking-tighter">
              THE <span className="text-red-600">ARENA</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["ROBO SOCCER", "BRIDGE BUILDING", "MEGA HACKATHONS", "DSA BATTLES"].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  className="flex items-center gap-3 bg-black text-white p-4 border-4 border-black hover:bg-yellow-400 hover:text-black transition-colors cursor-pointer"
                >
                  <Zap className="fill-current" />
                  <span className="font-black italic uppercase tracking-tighter text-xl">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* EXCELLENCE - INVERTED PANEL */}
        <section className="h-screen flex flex-col justify-center items-end px-10 md:px-32 text-right">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            className="max-w-2xl bg-red-600 border-[8px] border-black p-12 shadow-[-20px_20px_0px_#000] relative"
          >
            <div className="absolute -top-8 -right-4 bg-white border-4 border-black px-6 py-2 font-[1000] text-2xl italic rotate-[5deg] text-black">
              ORIGIN STORY
            </div>
            <h2 className="text-5xl md:text-7xl font-[1000] italic text-white uppercase leading-tight tracking-tighter">
              BUILT ON <br/> <span className="text-yellow-400">EXCELLENCE</span>
            </h2>
            <p className="mt-6 text-white text-xl md:text-3xl font-bold leading-tight uppercase italic">
              Innovation meets research excellence in Ahmedabad&apos;s most 
              intense technical arena.
            </p>
          </motion.div>
        </section>


        {/* EXCELLENCE - INVERTED PANEL */}
        <section className="h-screen flex flex-col justify-center items-start px-10 md:px-32 text-left">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={sectionVariants}
            className="max-w-2xl bg-white border-[8px] border-black p-12 shadow-[-20px_20px_0px_#000] relative"
          >
            <div className="absolute -top-8 -left-4 bg-red-600 border-4 border-black px-6 py-2 font-[1000] text-2xl italic rotate-[5deg] text-white">
             Exciting Prizes
            </div>
            <h2 className="text-5xl md:text-7xl font-[1000] italic text-black uppercase leading-tight tracking-tighter">
               Participate to <br/> <span className="text-red-600">WIN!!</span>
            </h2>
            <p className="mt-6 text-black text-xl md:text-3xl font-bold leading-tight uppercase italic">
              Participate in Events to do something new and innovative!!
            </p>
          </motion.div>
        </section>

        {/* CTA - THE FINAL CLIMAX */}
        <section className="h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="text-center relative"
          >
             <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -top-24 -right-24 hidden lg:block bg-yellow-400 border-[6px] border-black p-6 font-[1000] text-5xl italic rotate-12 shadow-[8px_8px_0px_#000]"
            >
              BOOM!
            </motion.div>

            <h2 className="text-6xl md:text-9xl font-[1000] italic uppercase mb-12 tracking-tighter drop-shadow-[6px_6px_0px_#ef4444] text-white">
              READY TO <span className="text-yellow-400">ASSEMBLE?</span>
            </h2>

            <Link href="/Flux">
              <motion.button 
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.9 }}
                className="px-20 py-10 bg-red-600 text-white font-[1000] text-4xl md:text-6xl uppercase italic border-[10px] border-black shadow-[15px_15px_0px_#000] hover:bg-yellow-400 hover:text-black transition-all"
              >
                ENTER THE WAR!
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </div>

      {/* ================= VFX ================= */}
      {/* Heavy vignette for that noir comic look */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[radial-gradient(circle,transparent_40%,black_100%)] opacity-60" />
    </div>
  );
}