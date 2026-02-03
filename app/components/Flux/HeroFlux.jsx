"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import FluxCursor from "./FluxCursor";
/**
 * HeroFlux — INSOMNIAC EDITION
 * Same logic, same structure
 * ONLY theme + layout changed to match Insomniac Games style
 */
export default function HeroFlux() {
  const containerRef = useRef(null);
  // Countdown State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
 
  useEffect(() => {
    gsap.to(".spidey-img", {
      y: -10,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);
 
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
 
    const handleMove = (e) => {
      const { innerWidth, innerHeight } = window;
 
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
 
      const rotateY = x * 8; // left-right tilt
      const rotateX = -y * 8; // up-down tilt
 
      el.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;
    };
 
    const reset = () => {
      el.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
      `;
    };
 
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", reset);
 
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);
 
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    if (!dot || !ring) return;
 
    const move = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
 
      ring.animate(
        {
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        },
        { duration: 120, fill: "forwards" }
      );
    };
 
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
 
  useEffect(() => {
    const el = spideyRef.current;
    if (!el) return;
 
    const img = el.querySelector(".spidey-img");
 
    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
 
      const rotateY = ((x / rect.width) - 0.5) * 16; // left-right
      const rotateX = -((y / rect.height) - 0.5) * 16; // up-down
 
      img.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(30px)
      `;
    };
 
    const reset = () => {
      img.style.transform = `
        rotateX(0deg)
        rotateY(0deg)
        translateZ(0px)
      `;
    };
 
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
 
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);
 
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1.2,
        ease: "power4.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
  const spideyRef = useRef(null);
 
  return (
    <section
  ref={containerRef}
  className="relative h-screen w-full bg-black overflow-hidden text-white [perspective:1200px]"
>
      {/* ================= NAVBAR ================= */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-10 py-4 md:py-6">
        <div className="text-lg font-black tracking-widest">FLUX</div>

        <button
  className="
    group relative
    md:px-8 md:py-3
    px-4 py-2
    uppercase
    tracking-[0.3em]
    text-xs
    font-black
    text-white
    bg-[#E10600]
    rounded-sm
    transition-all
    duration-300
    ease-out
    [transform-style:preserve-3d]
    hover:-translate-y-1
    hover:shadow-[0_25px_70px_rgba(225,6,0,0.55)]
    active:translate-y-1
  "
>
  {/* depth layers */}
  <span className="absolute inset-0 bg-[#b30000] translate-y-1 -z-10 opacity-90" />
  <span className="absolute inset-0 bg-[#7a0000] translate-y-2 -z-20 opacity-70" />
  {/* content */}
  <span className="relative z-10 flex items-center gap-2">
    CONTACT US
  </span>
</button>
      </nav>
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#120000]" />
{/* ================= COUNTDOWN TOP CENTER ================= */}
<div
  className="absolute md:left-1/2 -translate-x-1/2 z-30 md:top-6  top-26 left-3/5 hero-animate"
>
  <div className="flex gap-2 md:gap-4 font-mono text-[#E10600]">
    {Object.entries(timeLeft).map(([unit, value]) => (
      <div key={unit} className="text-center">
        <div className="text-xl md:text-2xl lg:text-3xl font-black">
          {value.toString().padStart(2, "0")}
        </div>
        <div className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-400">
          {unit}
        </div>
      </div>
    ))}
  </div>
</div>
      {/* ================= HUGE TEXT ================= */}
  {/* HUGE BACKGROUND FLUX */}
<div className="absolute md:top-0  md:mt-0 mt-36 left-1/2 -translate-x-1/2 select-none z-0 pointer-events-none">
  <h1
    className="
    text-[46vw] md:text-[26vw] 
    font-black tracking-tight
    text-[#d5c4c4]
    opacity-90
  "
  style={{
    textShadow: `
      0 0 10px rgba(255,42,42,0.9),
      0 0 30px rgba(255,42,42,0.7),
      0 0 60px rgba(255,42,42,0.5),
      0 0 120px rgba(255,42,42,0.35)
    `}}
  >
    FLUX
  </h1>
</div>
<p className="
  absolute left-0 md:left-0 md:block hidden
  bottom-10 md:bottom-12
  max-w-[40vw] md:max-w-sm
  text-gray-300
  text-xs sm:text-sm
  leading-relaxed
  hero-animate
  z-10
  pl-2 md:pl-6
  border-l border-[#E10600]/40
">
  <span className="block uppercase tracking-[0.25em] text-[10px] text-[#E10600] mb-3">
    About Flux
  </span>
  A next-generation tech fest where creativity, innovation,
  and engineering collide.
</p>
      {/* ================= CHARACTER PLACEHOLDER ================= */}
     {/* ================= CHARACTER ================= */}
     <div
  ref={spideyRef}
  className="
    absolute bottom-0 left-1/2
    -translate-x-[45%] md:-translate-x-[40%] lg:-translate-x-[35%]
    z-20 hero-animate
    [perspective:1200px]
  "
>
<img
  src="/images/fluxImages/spiderman.png"
  alt="Spider-Man"
  className="
    spidey-img
    w-[100vw]          /* 👈 MAIN CONTROL */
    sm:w-[50vw]
    md:w-[50vw]
    lg:w-[50vw]
    xl:w-[50vw]
    max-w-[520px]     /* desktop cap */
    h-auto
    object-contain
    relative
    will-change-transform
    drop-shadow-[0_-40px_80px_rgba(225,6,0,0.6)]
  "
/>




</div>

      
{/* ================= WHY THIS FEST ================= */}
<p
  className="
    absolute hidden md:block right-0 md:right-0
    bottom-10 md:bottom-12
    max-w-[40vw] md:max-w-sm
    text-gray-300
    text-xs sm:text-sm
    leading-relaxed
    hero-animate
    z-10
    pr-2 md:pr-6
    border-r border-[#E10600]/40
    text-right
  "
>
  <span className="block uppercase tracking-[0.25em] text-[10px] text-[#E10600] mb-3">
    Why This Fest
  </span>
  Flux isn’t just an event — it’s a convergence of creators, coders,
  designers, and innovators building the future together.
</p>
      {/* ================= CTA BUTTON ================= */}
     {/* ================= IMPROVED 3D CTA BUTTON ================= */}
<div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-[60] hero-animate">
  <Link href="#events">
    <button
      className="
        group relative
        md:px-14 md:py-5
        px-8 py-2
        uppercase
        tracking-[0.35em]
        text-sm
        font-black
        text-white
        bg-[#E10600]
        rounded-sm
        transition-all
        duration-300
        ease-out
        [transform-style:preserve-3d]
        hover:-translate-y-1
        hover:shadow-[0_30px_80px_rgba(225,6,0,0.6)]
        active:translate-y-1
        focus:outline-none
        focus:ring-2
        focus:ring-[#E10600]
        focus:ring-offset-2
        focus:ring-offset-transparent
      "
      aria-label="Join the heroes and navigate to events section"
    >
      {/* Enhanced fake depth layers for better 3D effect */}
      <span
        className="
          absolute inset-0
          bg-[#b30000]
          translate-y-1
          -z-10
          rounded-sm
          opacity-80
        "
      />
      <span
        className="
          absolute inset-0
          bg-[#8b0000]
          translate-y-2
          -z-20
          rounded-sm
          opacity-60
        "
      />
      <span
        className="
          absolute inset-0
          bg-[#5c0000]
          translate-y-3
          -z-30
          rounded-sm
          opacity-40
        "
      />
      {/* Content with improved arrow animation and subtle glow */}
      <span className="relative z-10 flex items-center gap-4">
        JOIN THE HEROES
        <ArrowRight className="transition-transform duration-300 ease-out group-hover:translate-x-2 group-hover:scale-110" />
      </span>
      {/* Optional ripple effect on click (using pseudo-element) */}
      <span
        className="
          absolute inset-0
          pointer-events-none
          overflow-hidden
          rounded-sm
          before:absolute
          before:inset-0
          before:bg-white
          before:opacity-0
          before:transition-opacity
          before:duration-300
          before:ease-out
          group-active:before:opacity-20
          group-active:before:animate-ripple
        "
      />
    </button>
  </Link>
</div>
      {/* ================= FOOTER TAGLINE ================= */}
      <div className="absolute bottom-10 w-full text-center z-20 ">
        <p className="text-[#f7f4f4] font-bold tracking-widest text-xs sm:text-sm">
          CREATE EXPERIENCES THAT INSPIRE PEOPLE
        </p>
      </div>
  
    </section>
   
  );
}