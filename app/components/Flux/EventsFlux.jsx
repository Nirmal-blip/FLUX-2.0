"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Tilt from 'react-parallax-tilt';
import {
  Terminal, Code2, Cpu, Globe, Rocket, Shield, Users,
  Gamepad2, Camera, Music, Mic2, Zap, ArrowRight,
  Clock, MapPin, ChevronRight, Activity, FileText, Wifi,
  Trophy, Banknote, Calendar
} from "lucide-react";
import { useInView } from 'react-intersection-observer';
import Link from "next/link";
import theme from "./theme";

/**
 * EventsFlux - MISSION PROTOCOLS
 * Displays the event schedule with a high-tech, dense "Mission Board" aesthetic.
 * Now includes Time, specific 1st/2nd/3rd Prizes, and Registration Fees.
 */
export default function EventsFlux() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const events = [
    // Day 1
    { 
      id: 1, day: 1, title: "DSA Competition", category: "Coding", icon: Code2, 
      color: theme.colors.stark.reactorBlue, description: "Algorithmic optimization.", 
      time: "04:00 PM - 07:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +", 
      registrationFee: "₹100/User" 
    },
    { 
      id: 2, day: 1, title: "Hackathon", category: "Coding", icon: Terminal, 
      color: theme.colors.stark.reactorBlue, description: "24-hour development sprint.", 
      time: "06:00 PM - 06:00 PM",
      prize1: "₹5,000 +", prize2: "₹3,000 + ", prize3: "₹2,000 +", 
      registrationFee: "₹400/Team" 
    },
    { 
      id: 3, day: 1, title: "Meme Competition", category: "Creative", icon: Zap, 
      color: theme.colors.stark.gold, description: "Digital humor synthesis.", 
      time: "0&:00 PM - 08:00 PM",
      prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0", 
      registrationFee: "Free" 
    },
    { 
      id: 4, day: 1, title: "E-sports Free Fire", category: "Gaming", icon: Gamepad2, 
      color: theme.colors.stark.red, description: "Competitive tactical gaming.", 
      time: "09:00 PM Onwards",
      prize1: "₹2,000 +", prize2: "₹0", prize3: "₹0", 
      registrationFee: "₹300/Squad" 
    },
    { 
      id: 5, day: 1, title: "E-sports BGMI", category: "Gaming", icon: Gamepad2, 
      color: theme.colors.stark.red, description: "Competitive tactical gaming.", 
      time: "09:00 PM Onwards",
      prize1: "₹2,000 +", prize2: "₹0", prize3: "₹0", 
      registrationFee: "₹300/Squad" 
    },

    // Day 2
    { 
      id: 6, day: 2, title: "Debugging", category: "Coding", icon: Terminal, 
      color: theme.colors.stark.reactorBlue, description: "Code error elimination.", 
      time: "09:00 AM - 12:00 PM",
      prize1: "₹1,500 +", prize2: "₹1,000 +", prize3: "₹500 +", 
      registrationFee: "₹200/User" 
    },
    { 
      id: 7, day: 2, title: "Virtual Stock Market", category: "Finance", icon: Activity, 
      color: theme.colors.stark.gold, description: "Market simulation exercise.", 
      time: "9:00 AM - 10:00 AM",
      prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0", 
      registrationFee: "₹100/User" 
    },
    { 
      id: 8, day: 2, title: "Tech Scavenger Hunt", category: "Adventure", icon: MapPin, 
      color: theme.colors.stark.gold, description: "Geo-location puzzle sequence.", 
      time: "10:00 AM - 03:00 PM",
      prize1: "₹1,500 +", prize2: "₹1,000 +", prize3: "₹0", 
      registrationFee: "₹100/Team" 
    },
    { 
      id: 9, day: 2, title: "Robo Soccer", category: "Robotics", icon: Cpu, 
      color: theme.colors.stark.red, description: "Autonomous drone sport.", 
      time: "03:00 PM - 06:00 PM",
      prize1: "₹8,000 +", prize2: "₹4,000 +", prize3: "₹2,000 +", 
      registrationFee: "₹300/Team" 
    },
    { 
      id: 10, day: 2, title: "Bridge Building", category: "Engineering", icon: Rocket, 
      color: theme.colors.stark.reactorBlue, description: "Structural integrity test.", 
      time: "07:00 PM - 10:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +", 
      registrationFee: "₹200/Team" 
    },
    { 
      id: 11, day: 2, title: "Youth Parliament", category: "Debate", icon: Users, 
      color: theme.colors.stark.reactorBlue, description: "Legislative simulation.", 
      time: "10:00 PM Onwards",
      prize1: "₹0", prize2: "₹0", prize3: "₹0", 
      registrationFee: "Free" 
    },
    { 
      id: 12, day: 2, title: "Photography", category: "Creative", icon: Camera, 
      color: theme.colors.stark.gold, description: "Visual perspective capture.", 
      time: "All Day",
      prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0", 
      registrationFee: "₹100/User" 
    },

    // Day 3
    { 
      id: 13, day: 3, title: "Startup Idea Pitch", category: "Innovation", icon: Rocket, 
      color: theme.colors.stark.gold, description: "Venture proposal defense (SSIP).", 
      time: "09:00 AM Onwards",
      prize1: "₹50,000 +", prize2: "₹30,000 +", prize3: "₹20,000 +", 
      registrationFee: "Free" 
    },
    { 
      id: 14, day: 3, title: "CAD Challenge", category: "Design", icon: Globe, 
      color: theme.colors.stark.reactorBlue, description: "Interface Design Logic", 
      time: "09:00 AM - 12:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +", 
      registrationFee: "₹100/User" 
    },
    { 
      id: 15, day: 3, title: "UI/UX Challenge", category: "Design", icon: Globe, 
      color: theme.colors.stark.reactorBlue, description: "Interface aesthetics logic.", 
      time: "01:00 PM - 03:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹0", 
      registrationFee: "₹100/User" 
    },
    { 
      id: 16, day: 3, title: "Circuit Debugging", category: "Engineering", icon: Cpu, 
      color: theme.colors.stark.reactorBlue, description: "Hardware diagnostics.", 
      time: "02:00 PM - 04:00 PM",
      prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹0", 
      registrationFee: "₹200/Team" 
    },
    { 
      id: 17, day: 3, title: "IoT Challenge", category: "Engineering", icon: Wifi, 
      color: theme.colors.stark.reactorBlue, description: "Connected systems protocol.", 
      time: "04:00 PM - 07:00 PM",
      prize1: "₹8,000 +", prize2: "₹4,000 +", prize3: "₹2,000 +", 
      registrationFee: "₹300/Team" 
    },
    // { 
    //   id: 17, day: 3, title: "Artist Performance", category: "Entertainment", icon: Mic2, 
    //   color: theme.colors.stark.red, description: "Live auditory showcase.", 
    //   time: "06:00 PM Onwards",
    //   prize1: "N/A", prize2: "N/A", prize3: "N/A", 
    //   registrationFee: "Pass Req." 
    // },
    { 
      id: 17, day: 3, title: "DJ Night", category: "Entertainment", icon: Music, 
      color: theme.colors.stark.gold, description: "Sonic frequency celebration.", 
      time: "08:00 PM Onwards",
      prize1: "N/A", prize2: "N/A", prize3: "N/A", 
      registrationFee: "Free", noRegistration: true 
    },
  ];

  // Group events
  const day1Events = events.filter(e => e.day === 1);
  const day2Events = events.filter(e => e.day === 2);
  const day3Events = events.filter(e => e.day === 3);

  return (
    <div ref={ref} className="relative py-24 px-6 overflow-hidden min-h-screen">

      {/* Cinematic Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Holographic Background Grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${theme.colors.stark.reactorBlue} 1px, transparent 1px), linear-gradient(90deg, ${theme.colors.stark.reactorBlue} 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}
      />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-20 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 border-b border-white/20 pb-8">
          <div>
            <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-widest mb-2">
              <Activity className="w-4 h-4 animate-pulse" />
              <span>SYSTEM MONITORING</span>
            </div>
            <h2
              className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-white"
              style={{
                fontFamily: 'var(--font-rajdhani)',
                textShadow: `0 0 40px ${theme.colors.stark.reactorBlue}40`
              }}
            >
              MISSION<br />PROTOCOLS
            </h2>
          </div>

          {/* Tech Decoration */}
          <div className="hidden md:flex gap-1">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-1 h-8 bg-cyan-500/20" style={{ opacity: Math.random() }} />
            ))}
          </div>
        </div>
      </div>

      {/* Days Grid - Redesigned as Cinematic Mission Boards */}
      <div className="max-w-7xl mx-auto space-y-20">
        <EventDaySection day={1} title="PHASE 01 // INITIATION" events={day1Events} inView={inView} />
        <EventDaySection day={2} title="PHASE 02 // EXECUTION" events={day2Events} inView={inView} delay={0.2} />
        <EventDaySection day={3} title="PHASE 03 // CONCLUSION" events={day3Events} inView={inView} delay={0.4} />
      </div>
    </div>
  );
}

function EventDaySection({ day, title, events, inView, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="relative"
    >
      {/* Visual Header */}
      <div className="flex items-center gap-4 mb-8 bg-gradient-to-r from-cyan-900/20 to-transparent p-4 border-l-4 border-cyan-500 backdrop-blur-sm">
        <h3
          className="text-2xl md:text-3xl font-black uppercase text-white tracking-widest"
          style={{ fontFamily: 'var(--font-rajdhani)' }}
        >
          {title}
        </h3>
        <div className="flex-1" />
        <div className="text-[10px] font-mono text-cyan-500 border border-cyan-500/30 px-2 py-1 bg-black/50">
          SECTOR {day}-A
        </div>
      </div>

      {/* Grid - Mission Board Layout */}
      <div className="grid grid-cols-1 gap-4">
        {events.map((event, i) => (
          <MissionPanel key={event.id} event={event} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

function MissionPanel({ event }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = event.icon;
  const hasPrizes = event.prize1 !== "N/A";

  return (
    <Tilt
      tiltMaxAngleX={2}
      tiltMaxAngleY={2}
      scale={1.02}
      perspective={1200}
      transitionSpeed={600}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor={event.color}
    >
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden rounded-xl border border-white/10 bg-black/80 backdrop-blur-lg"
      >
        {/* Accent Bar */}
        <div
          className="absolute left-0 top-0 h-full transition-all duration-300"
          style={{
            width: isHovered ? "8px" : "4px",
            background: event.color,
            boxShadow: isHovered ? `0 0 25px ${event.color}` : "none",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

        {/* CONTENT */}
        <div className="relative z-10 p-8 grid md:grid-cols-3 gap-8 items-center">

          {/* LEFT */}
          <div className="md:col-span-2">
            <h3
              className="text-4xl md:text-5xl font-black uppercase tracking-tight"
              style={{
                fontFamily: "var(--font-rajdhani)",
                color: isHovered ? event.color : "white",
              }}
            >
              {event.title}
            </h3>

            <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
              {event.category}
            </p>

            <p className="mt-4 max-w-xl text-gray-400">
              {event.description}
            </p>

            {/* META */}
            <div className="flex flex-wrap gap-6 mt-6 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> {event.time}
              </span>
              <span className="flex items-center gap-2">
                <Banknote className="w-4 h-4" /> {event.registrationFee}
              </span>
            </div>

            {/* 🔥 PRIZE DISTRIBUTION (RESTORED) */}
            {hasPrizes && (
              <div className="mt-6 flex flex-wrap gap-6 text-sm font-mono">
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

          {/* RIGHT */}
          <div className="flex justify-end items-center">
            {!event.noRegistration ? (
              <Link
                href={`/flux-registration/${event.title
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
              >
                <button
                  className="px-8 py-4 uppercase font-bold tracking-widest border transition-all duration-300"
                  style={{
                    borderColor: event.color,
                    color: isHovered ? "black" : event.color,
                    background: isHovered ? event.color : "transparent",
                  }}
                >
                  Register
                </button>
              </Link>
            ) : (
              <span className="uppercase tracking-widest text-gray-500">
                Free Entry
              </span>
            )}
          </div>
        </div>
      </div>
    </Tilt>
  );
}
