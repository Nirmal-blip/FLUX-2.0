"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";

export default function HeroFlux() {
  const containerRef = useRef(null);
  const spideyRef = useRef(null);
  const fluxTextRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  
  // 1. Countdown Logic (Original)
  useEffect(() => {
    const deadline = new Date("2026-03-27T00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const t = deadline - now;
      if (t > 0) {
        setTimeLeft({
          days: Math.floor(t / (1000 * 60 * 60 * 24)),
          hours: Math.floor((t / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((t / (1000 * 60)) % 60),
          seconds: Math.floor((t / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // 2. High-End Animations (GSAP)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entry Reveal - Best ease for gaming feel
      gsap.from(".hero-animate", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 1.2,
        ease: "power4.out",
      });

      // Spider-Man Floating
      gsap.to(".spidey-img", {
        y: -18,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // 3. Pro Parallax (Stabilized Center)
  useEffect(() => {
    if (isMobile) return; // ✅ MOBILE = NO PARALLAX
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5);
      const yPercent = (e.clientY / innerHeight - 0.5);

      // Spidey 3D Tilt & Movement (Keeps center position)
      gsap.to(spideyRef.current, {
        x: xPercent * 40,
        y: yPercent * 20,
        rotateY: xPercent * 12,
        rotateX: -yPercent * 10,
        duration: 0.8,
        ease: "power2.out",
      });

      // Background Text moves slower for depth
      gsap.to(fluxTextRef.current, {
        x: xPercent * 25,
        y: yPercent * 10,
        duration: 1.5,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-transparent overflow-hidden text-white [perspective:1200px]"
    >
      {/* ================= NAVBAR (Original UI) ================= */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-10 py-4 md:py-6 hero-animate">
        <div className="text-lg font-black tracking-widest italic">FLUX<span className="text-[#E10600]">2026</span></div>

        <button className="group relative md:px-8 md:py-3 px-4 py-2 uppercase tracking-[0.3em] text-xs font-black text-white bg-[#E10600] rounded-sm transition-all duration-300 ease-out [transform-style:preserve-3d] hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(225,6,0,0.55)] active:translate-y-1">
          <span className="absolute inset-0 bg-[#b30000] translate-y-1 -z-10 opacity-90" />
          <span className="absolute inset-0 bg-[#7a0000] translate-y-2 -z-20 opacity-70" />
          <span className="relative z-10 flex items-center gap-2">CONTACT US</span>
        </button>
      </nav>

      {/* ================= COUNTDOWN (Original Position) ================= */}
      <div className="absolute md:left-1/2 -translate-x-1/2 z-30 md:top-6 top-26 left-3/5 hero-animate">
        <div className="flex gap-2 md:gap-4 font-mono text-[#E10600]">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-black drop-shadow-[0_0_10px_rgba(225,6,0,0.4)]">
                {value.toString().padStart(2, "0")}
              </div>
              <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400">{unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= HUGE TEXT (Original Styling) ================= */}
      <div ref={fluxTextRef} className="absolute md:top-0 md:mt-0 mt-36 left-1/2 -translate-x-1/2 select-none z-0 pointer-events-none">
        <h1
          className="text-[46vw] md:text-[32vw] font-black tracking-tight text-[#d5c4c4] opacity-90"
          style={{
            textShadow: `0 0 10px rgba(255,42,42,0.9), 0 0 30px rgba(255,42,42,0.7), 0 0 60px rgba(255,42,42,0.5), 0 0 120px rgba(255,42,42,0.35)`
          }}
        >
          FLUX
        </h1>
      </div>

      {/* ================= SIDE TEXT LEFT (Original) ================= */}
      <p className="absolute left-0 md:left-0 md:block hidden bottom-10 md:bottom-12 max-w-[40vw] md:max-w-sm text-gray-300 text-xs sm:text-sm leading-relaxed hero-animate z-10 pl-2 md:pl-6 border-l border-[#E10600]/40">
        <span className="block uppercase tracking-[0.25em] text-[10px] text-[#E10600] mb-3">About Flux</span>
        A next-generation tech fest where creativity, innovation, and engineering collide.
      </p>

      {/* ================= CHARACTER (Fixed Alignment) ================= */}
      <div
  ref={spideyRef}
  className={`bottom-0 left-1/2 -translate-x-1/2 z-20 hero-animate
    ${isMobile ? "fixed" : "absolute"}
  `}
>
        <img
          src="/images/fluxImages/spiderman.png"
          alt="Spider-Man"
          className="spidey-img w-[100vw] sm:w-[50vw] md:w-[50vw] lg:w-[40vw] max-w-[520px] lg:max-w-[480px]  h-auto object-contain will-change-transform drop-shadow-[0_-40px_80px_rgba(225,6,0,0.6)]"
        />
      </div>

      {/* ================= SIDE TEXT RIGHT (Original) ================= */}
      <p className="absolute hidden md:block right-0 md:right-0 bottom-10 md:bottom-12 max-w-[40vw] md:max-w-sm text-gray-300 text-xs sm:text-sm leading-relaxed hero-animate z-10 pr-2 md:pr-6 border-r border-[#E10600]/40 text-right">
        <span className="block uppercase tracking-[0.25em] text-[10px] text-[#E10600] mb-3">Why This Fest</span>
        Flux isn’t just an event — it’s a convergence of creators, coders, designers, and innovators.
      </p>

      {/* ================= CTA BUTTON (Original 3D UI) ================= */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-[60] hero-animate">
        <Link href="/FluxEvents">
          <button className="group relative md:px-14 md:py-5 px-8 py-2 uppercase tracking-[0.35em] text-sm font-black text-white bg-[#E10600] rounded-sm transition-all duration-300 ease-out [transform-style:preserve-3d] hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(225,6,0,0.6)] active:translate-y-1">
            <span className="absolute inset-0 bg-[#b30000] translate-y-1 -z-10 rounded-sm opacity-80" />
            <span className="absolute inset-0 bg-[#8b0000] translate-y-2 -z-20 rounded-sm opacity-60" />
            <span className="absolute inset-0 bg-[#5c0000] translate-y-3 -z-30 rounded-sm opacity-40" />
            <span className="relative z-10 flex items-center gap-4">
              JOIN THE HEROES
              <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110" />
            </span>
          </button>
        </Link>
      </div>

      {/* ================= FOOTER TAGLINE (Original) ================= */}
      <div className="absolute bottom-10 w-full text-center z-20 hero-animate">
        <p className="text-[#f7f4f4] font-bold tracking-widest text-xs sm:text-sm">CREATE EXPERIENCES THAT INSPIRE PEOPLE</p>
      </div>
         
      {/* ================= BOTTOM BORDER (Original) ================= */}
      <div className="absolute bottom-0 left-0 w-full z-[80] pointer-events-none">
        <div className="h-[12px] w-full bg-white rounded-b-[48px] shadow-[0_-12px_45px_rgba(255,255,255,0.45)]" />
      </div>
    </section>
  );
}