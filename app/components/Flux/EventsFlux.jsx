"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Terminal, Code2, Cpu, Globe, Rocket, Users,
  Gamepad2, Camera, Music, Zap, ArrowRight,
  Clock, MapPin, Activity, Wifi,
  Trophy, Banknote
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

/**
 * EventsFlux - MISSION PROTOCOLS
 * UI enhanced with comic-style hero visuals
 * ⚠️ LOGIC UNCHANGED
 */
export default function EventsFlux() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  /* ===================== EVENTS DATA (UNCHANGED) ===================== */
  const events = [
    // Day 1
    { 
      id: 1, day: 1, title: "DSA Competition", category: "Coding", icon: Code2, 
      color: "#E10600", description: "Algorithmic optimization.", 
      time: "04:00 PM - 07:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +", 
      registrationFee: "₹100/User" 
    },
    { 
      id: 2, day: 1, title: "Hackathon", category: "Coding", icon: Terminal, 
      color: "#E10600", description: "24-hour development sprint.", 
      time: "06:00 PM - 06:00 PM",
      prize1: "₹5,000 +", prize2: "₹3,000 + ", prize3: "₹2,000 +", 
      registrationFee: "₹400/Team" 
    },
    { 
      id: 3, day: 1, title: "Meme Competition", category: "Creative", icon: Zap, 
      color: "#E10600", description: "Digital humor synthesis.", 
      time: "0&:00 PM - 08:00 PM",
      prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0", 
      registrationFee: "Free" 
    },
    { 
      id: 4, day: 1, title: "E-sports Free Fire", category: "Gaming", icon: Gamepad2, 
      color: "#E10600", description: "Competitive tactical gaming.", 
      time: "09:00 PM Onwards",
      prize1: "₹2,000 +", prize2: "₹0", prize3: "₹0", 
      registrationFee: "₹300/Squad" 
    },
    { 
      id: 5, day: 1, title: "E-sports BGMI", category: "Gaming", icon: Gamepad2, 
      color: "#E10600", description: "Competitive tactical gaming.", 
      time: "09:00 PM Onwards",
      prize1: "₹2,000 +", prize2: "₹0", prize3: "₹0", 
      registrationFee: "₹300/Squad" 
    },

    // Day 2
    { 
      id: 6, day: 2, title: "Debugging", category: "Coding", icon: Terminal, 
      color: "#E10600", description: "Code error elimination.", 
      time: "09:00 AM - 12:00 PM",
      prize1: "₹1,500 +", prize2: "₹1,000 +", prize3: "₹500 +", 
      registrationFee: "₹200/User" 
    },
    { 
      id: 7, day: 2, title: "Virtual Stock Market", category: "Finance", icon: Activity, 
      color: "#E10600", description: "Market simulation exercise.", 
      time: "9:00 AM - 10:00 AM",
      prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0", 
      registrationFee: "₹100/User" 
    },
    { 
      id: 8, day: 2, title: "Tech Scavenger Hunt", category: "Adventure", icon: MapPin, 
      color: "#E10600", description: "Geo-location puzzle sequence.", 
      time: "10:00 AM - 03:00 PM",
      prize1: "₹1,500 +", prize2: "₹1,000 +", prize3: "₹0", 
      registrationFee: "₹100/Team" 
    },
    { 
      id: 9, day: 2, title: "Robo Soccer", category: "Robotics", icon: Cpu, 
      color: "#E10600", description: "Autonomous drone sport.", 
      time: "03:00 PM - 06:00 PM",
      prize1: "₹8,000 +", prize2: "₹4,000 +", prize3: "₹2,000 +", 
      registrationFee: "₹300/Team" 
    },
    { 
      id: 10, day: 2, title: "Bridge Building", category: "Engineering", icon: Rocket, 
      color: "#E10600", description: "Structural integrity test.", 
      time: "07:00 PM - 10:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +", 
      registrationFee: "₹200/Team" 
    },
    { 
      id: 11, day: 2, title: "Youth Parliament", category: "Debate", icon: Users, 
      color: "#E10600", description: "Legislative simulation.", 
      time: "10:00 PM Onwards",
      prize1: "₹0", prize2: "₹0", prize3: "₹0", 
      registrationFee: "Free" 
    },
    { 
      id: 12, day: 2, title: "Photography", category: "Creative", icon: Camera, 
      color: "#E10600", description: "Visual perspective capture.", 
      time: "All Day",
      prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0", 
      registrationFee: "₹100/User" 
    },

    // Day 3
    { 
      id: 13, day: 3, title: "Startup Idea Pitch", category: "Innovation", icon: Rocket, 
      color: "#E10600", description: "Venture proposal defense (SSIP).", 
      time: "09:00 AM Onwards",
      prize1: "₹50,000 +", prize2: "₹30,000 +", prize3: "₹20,000 +", 
      registrationFee: "Free" 
    },
    { 
      id: 14, day: 3, title: "CAD Challenge", category: "Design", icon: Globe, 
      color: "#E10600", description: "Interface Design Logic", 
      time: "09:00 AM - 12:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +", 
      registrationFee: "₹100/User" 
    },
    { 
      id: 15, day: 3, title: "UI/UX Challenge", category: "Design", icon: Globe, 
      color: "#E10600", description: "Interface aesthetics logic.", 
      time: "01:00 PM - 03:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹0", 
      registrationFee: "₹100/User" 
    },
    { 
      id: 16, day: 3, title: "Circuit Debugging", category: "Engineering", icon: Cpu, 
      color: "#E10600", description: "Hardware diagnostics.", 
      time: "02:00 PM - 04:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹0", 
      registrationFee: "₹200/Team" 
    },
    { 
      id: 17, day: 3, title: "IoT Challenge", category: "Engineering", icon: Wifi, 
      color: "#E10600", description: "Connected systems protocol.", 
      time: "04:00 PM - 07:00 PM",
      prize1: "₹8,000 +", prize2: "₹4,000 +", prize3: "₹2,000 +", 
      registrationFee: "₹300/Team" 
    },
    // { 
    //   id: 17, day: 3, title: "Artist Performance", category: "Entertainment", icon: Mic2, 
    //   color: "#E10600", description: "Live auditory showcase.", 
    //   time: "06:00 PM Onwards",
    //   prize1: "N/A", prize2: "N/A", prize3: "N/A", 
    //   registrationFee: "Pass Req." 
    // },
    { 
      id: 17, day: 3, title: "DJ Night", category: "Entertainment", icon: Music, 
      color: "#E10600", description: "Sonic frequency celebration.", 
      time: "08:00 PM Onwards",
      prize1: "N/A", prize2: "N/A", prize3: "N/A", 
      registrationFee: "Free", noRegistration: true 
    },
  ];


  const day1Events = events.filter(e => e.day === 1);
  const day2Events = events.filter(e => e.day === 2);
  const day3Events = events.filter(e => e.day === 3);

  return (
    <div
      ref={ref}
      className="relative py-24 px-6 min-h-screen overflow-hidden text-white"
    >
      {/* ================= COMIC HERO DECORATION ================= */}
{/* ================= TRON HEADER PANEL ================= */}
<div className="relative z-10 max-w-7xl mx-auto mb-24">

  <div
    className="
      relative
      overflow-hidden
      rounded-2xl
      border border-cyan-400/40
      bg-gradient-to-r from-[#03151a] via-[#020c10] to-[#03151a]
      shadow-[0_0_80px_rgba(0,229,255,0.25)]
    "
  >
    {/* 🔹 CYAN GRID OVERLAY */}
    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage: `
          linear-gradient(#00E5FF 1px, transparent 1px),
          linear-gradient(90deg, #00E5FF 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}
    />

    {/* 🔹 LEFT TRON HERO */}
    <img
      src="/images/fluxImages/tronboy.png"
      alt="Tron Hero Left"
      className="
        hidden md:block
        absolute left-[0px] bottom-[-40px]
        w-[320px]
        opacity-90
        drop-shadow-[0_0_80px_rgba(0,229,255,0.6)]
        pointer-events-none
      "
    />

    {/* 🔹 RIGHT TRON HERO */}
    <img
      src="/images/fluxImages/trongirl.png"
      alt="Tron Hero Right"
      className="
        hidden md:block
        absolute right-[0px] bottom-[-50px]
        w-[320px]
        opacity-90
        drop-shadow-[0_0_80px_rgba(0,229,255,0.6)]
        pointer-events-none
      "
    />

    {/* 🔹 CENTER CONTENT */}
    <div className="relative z-10 px-10 py-20 text-center">

      {/* Subtitle */}
      <div className="flex justify-center items-center gap-2 text-cyan-400 font-mono text-sm tracking-widest mb-4">
        <Activity className="w-4 h-4 animate-pulse" />
        <span>SYSTEM INITIALIZED</span>
      </div>

      {/* TITLE */}
      <h2
        className="
          text-5xl md:text-7xl lg:text-8xl
          font-black
          uppercase
          tracking-tight
          text-white
        "
        style={{
          fontFamily: "var(--font-rajdhani)",
          textShadow: `
            0 0 10px rgba(0,229,255,0.9),
            0 0 30px rgba(0,229,255,0.6),
            0 0 80px rgba(0,229,255,0.4)
          `,
        }}
      >
        MISSION <br /> PROTOCOLS
      </h2>

      {/* Divider */}
      <div className="mt-6 flex justify-center">
        <div className="h-[2px] w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
      </div>

      {/* Tag */}
      <div className="mt-6 text-[11px] font-mono text-cyan-300 tracking-widest">
        TRON GRID • FLUX 2025
      </div>
    </div>
  </div>
</div>


      {/* ================= BACKGROUND GRID ================= */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#E10600 1px, transparent 1px),
            linear-gradient(90deg, #E10600 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

  
      {/* ================= DAYS ================= */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-20">
        <EventDaySection day={1} title="PHASE 01 // INITIATION" events={day1Events} inView={inView} />
        <EventDaySection day={2} title="PHASE 02 // EXECUTION" events={day2Events} inView={inView} delay={0.2} />
        <EventDaySection day={3} title="PHASE 03 // CONCLUSION" events={day3Events} inView={inView} delay={0.4} />
      </div>
    </div>
  );
}

/* ================= DAY SECTION (UNCHANGED LOGIC) ================= */

function EventDaySection({ day, title, events, inView, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      <div className="flex items-center gap-4 mb-8 border-l-4 border-[#E10600] bg-black/40 p-4">
        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-widest">
          {title}
        </h3>
        <div className="ml-auto text-[10px] font-mono text-[#E10600] border border-[#E10600]/30 px-2 py-1">
          SECTOR {day}-A
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {events.map((event, i) => (
          <MissionPanel key={event.id} event={event} />
        ))}
      </div>
    </motion.div>
  );
}

/* ================= PANEL (UNCHANGED LOGIC) ================= */

function MissionPanel({ event }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = event.icon;
  const hasPrizes = event.prize1 !== "N/A";

  return (
    <Tilt tiltMaxAngleX={2} tiltMaxAngleY={2} scale={1.02}>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-black/80"
      >
        <div
          className="absolute left-0 top-0 h-full transition-all"
          style={{
            width: isHovered ? "8px" : "4px",
            background: event.color,
          }}
        />

        <div className="relative z-10 p-8 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h3
              className="text-4xl md:text-5xl font-black uppercase"
              style={{ color: isHovered ? event.color : "white" }}
            >
              {event.title}
            </h3>

            <p className="mt-4 text-gray-400">{event.description}</p>

            <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {event.time}
              </span>
              <span className="flex items-center gap-2">
                <Banknote className="w-4 h-4" /> {event.registrationFee}
              </span>
            </div>

            {hasPrizes && (
              <div className="mt-6 flex gap-6 text-sm font-mono">
                <span className="flex items-center gap-2 text-yellow-400">
                  <Trophy className="w-4 h-4" /> 1st: {event.prize1}
                </span>
                <span className="flex items-center gap-2 text-gray-300">
                  <Trophy className="w-4 h-4" /> 2nd: {event.prize2}
                </span>
                <span className="flex items-center gap-2 text-amber-700">
                  <Trophy className="w-4 h-4" /> 3rd: {event.prize3}
                </span>
              </div>
            )}
          </div>

          <div className="flex justify-end">
            {!event.noRegistration ? (
              <Link href={`/flux-registration/${event.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <button className="bg-[#E10600] px-8 py-3 font-black uppercase">
                  Register
                </button>
              </Link>
            ) : (
              <span className="uppercase tracking-widest text-gray-500">Free Entry</span>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
