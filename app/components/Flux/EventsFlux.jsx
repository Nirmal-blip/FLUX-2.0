"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Terminal, Code2, Cpu, Globe, Rocket, Users,
  Gamepad2, Camera, Music, Zap,
  Clock, Banknote, ExternalLink
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

export default function EventsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = {
    Coding: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800",
    Creative: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800",
    Gaming: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800",
    Finance: "https://images.unsplash.com/photo-1611974714014-4986a23247f7?q=80&w=800",
    Adventure: "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=800",
    Robotics: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800",
    Engineering: "https://images.unsplash.com/photo-1581092335397-9583ee92d03b?q=80&w=800",
    Debate: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800",
    Innovation: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
    Design: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=800",
    Entertainment: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
  };

  // Border colors matching the image exactly
  const borderColors = ["#E11281", "#1D75D6", "#32A852", "#32A852", "#4256DB", "#A7D21F"];

  const events = [
    { id: 1, day: 1, title: "DSA Competition", category: "Coding", icon: Code2, description: "Algorithmic optimization.", time: "04:00 PM - 07:00 PM", prize1: "₹2,000", prize2: "₹1,000", prize3: "₹500", registrationFee: "₹100/User" },
    { id: 2, day: 1, title: "Hackathon", category: "Coding", icon: Terminal, description: "24-hour development sprint.", time: "06:00 PM - 06:00 PM", prize1: "₹5,000", prize2: "₹3,000", prize3: "₹2,000", registrationFee: "₹400/Team" },
    { id: 3, day: 1, title: "Meme Competition", category: "Creative", icon: Zap, description: "Digital humor synthesis.", time: "07:00 PM - 08:00 PM", prize1: "₹1,000", prize2: "₹500", prize3: "₹0", registrationFee: "Free" },
    { id: 4, day: 1, title: "E-sports Free Fire", category: "Gaming", icon: Gamepad2, description: "Competitive tactical gaming.", time: "09:00 PM Onwards", prize1: "₹2,000", prize2: "₹0", prize3: "₹0", registrationFee: "₹300/Squad" },
    { id: 5, day: 1, title: "E-sports BGMI", category: "Gaming", icon: Gamepad2, description: "Competitive tactical gaming.", time: "09:00 PM Onwards", prize1: "₹2,000", prize2: "₹0", prize3: "₹0", registrationFee: "₹300/Squad" },
    { id: 6, day: 2, title: "Debugging", category: "Coding", icon: Terminal, description: "Code error elimination.", time: "09:00 AM - 12:00 PM", prize1: "₹1,500", prize2: "₹1,000", prize3: "₹500", registrationFee: "₹200/User" },
    { id: 7, day: 2, title: "Virtual Stock Market", category: "Finance", icon: Rocket, description: "Market simulation exercise.", time: "9:00 AM - 10:00 AM", prize1: "₹1,000", prize2: "₹500", prize3: "₹0", registrationFee: "₹100/User" },
    { id: 8, day: 2, title: "Tech Scavenger Hunt", category: "Adventure", icon: Globe, description: "Geo-location puzzle sequence.", time: "10:00 AM - 03:00 PM", prize1: "₹1,500", prize2: "₹1,000", prize3: "₹0", registrationFee: "₹100/Team" },
    { id: 9, day: 2, title: "Robo Soccer", category: "Robotics", icon: Cpu, description: "Autonomous drone sport.", time: "03:00 PM - 06:00 PM", prize1: "₹8,000", prize2: "₹4,000", prize3: "₹2,000", registrationFee: "₹300/Team" },
    { id: 10, day: 2, title: "Bridge Building", category: "Engineering", icon: Rocket, description: "Structural integrity test.", time: "07:00 PM - 10:00 PM", prize1: "₹2,000", prize2: "₹1,000", prize3: "₹500", registrationFee: "₹200/Team" },
    { id: 11, day: 2, title: "Youth Parliament", category: "Debate", icon: Users, description: "Legislative simulation.", time: "10:00 PM Onwards", prize1: "₹0", prize2: "₹0", prize3: "₹0", registrationFee: "Free" },
    { id: 12, day: 2, title: "Photography", category: "Creative", icon: Camera, description: "Visual perspective capture.", time: "All Day", prize1: "₹1,000", prize2: "₹500", prize3: "₹0", registrationFee: "₹100/User" },
    { id: 13, day: 3, title: "Startup Idea Pitch", category: "Innovation", icon: Rocket, description: "Venture proposal defense (SSIP).", time: "09:00 AM Onwards", prize1: "₹50k", prize2: "₹30k", prize3: "₹20k", registrationFee: "Free" },
    { id: 14, day: 3, title: "CAD Challenge", category: "Design", icon: Globe, description: "Interface Design Logic", time: "09:00 AM - 12:00 PM", prize1: "₹2,000", prize2: "₹1,000", prize3: "₹500", registrationFee: "₹100/User" },
    { id: 15, day: 3, title: "UI/UX Challenge", category: "Design", icon: Globe, description: "Interface aesthetics logic.", time: "01:00 PM - 03:00 PM", prize1: "₹2,000", prize2: "₹1,000", prize3: "₹0", registrationFee: "₹100/User" },
    { id: 16, day: 3, title: "Circuit Debugging", category: "Engineering", icon: Cpu, description: "Hardware diagnostics.", time: "02:00 PM - 04:00 PM", prize1: "₹2,000", prize2: "₹1,000", prize3: "₹0", registrationFee: "₹200/Team" },
    { id: 17, day: 3, title: "IoT Challenge", category: "Engineering", icon: Globe, description: "Connected systems protocol.", time: "04:00 PM - 07:00 PM", prize1: "₹8,000", prize2: "₹4,000", prize3: "₹2,000", registrationFee: "₹300/Team" },
    { id: 18, day: 3, title: "DJ Night", category: "Entertainment", icon: Music, description: "Sonic frequency celebration.", time: "08:00 PM Onwards", prize1: "N/A", prize2: "N/A", prize3: "N/A", registrationFee: "Free", noRegistration: true },
  ];

  return (
    <main className="min-h-screen bg-transparent text-white relative font-sans overflow-x-hidden">
      
      {/* 🔹 IMAGE STYLE HEXAGON GRID */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-20" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='70' viewBox='0 0 40 70'%3E%3Cpath d='M20 0L40 11.5v23L20 46L0 34.5v-23L20 0z' fill='none' stroke='%231FD28B' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '80px',
          maskImage: 'radial-gradient(ellipse at bottom, black, transparent 70%)'
        }}>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16"> 
        
      

        {/* 🔹 PHASE WRAPPER (Exact Rectangular Phase Bar) */}
        {[1, 2, 3].map((dayNum) => (
          <div key={dayNum} className="mb-24">
            <div className="mb-12 border border-white/20 bg-black/60 p-6 flex flex-col justify-center" ref={ref}>
               <h2 className="text-4xl font-black tracking-tighter italic uppercase leading-none">PHASE 0{dayNum}</h2>
               <p className="text-sm font-mono opacity-50 tracking-[0.2em] mt-1 italic uppercase">(MISSION_INITIALIZED_0{dayNum})</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {events
                .filter((e) => e.day === dayNum)
                .map((event, idx) => (
                  <CyberCard 
                    key={event.id} 
                    event={event} 
                    bgImg={categories[event.category]} 
                    accentColor={borderColors[idx % borderColors.length]} 
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

function CyberCard({ event, bgImg, accentColor }) {
  const [hovered, setHovered] = useState(false);
  const Icon = event.icon;

  return (
    <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02} transitionSpeed={1500}>
      <motion.div 
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative aspect-[3/4.2] w-full group overflow-hidden border-2 bg-black flex flex-col p-4 shadow-2xl transition-all duration-300"
        style={{ borderColor: hovered ? accentColor : `${accentColor}88` }}
      >
        {/* Top Metadata Bar (Ditto Image) */}
        <div className="flex justify-between items-center mb-3">
            <div className="bg-[#D02020] px-2 py-0.5 text-[8px] font-black italic shadow-lg text-white">CONFG</div>
            <span className="text-[10px] font-bold tracking-widest opacity-60 italic uppercase text-white">{event.category}</span>
            <div className="flex gap-1">
                <div className="w-1.5 h-1.5 border border-white/40"></div>
                <div className="w-4 h-4" style={{ backgroundColor: `${accentColor}44`, border: `1px solid ${accentColor}` }}></div>
            </div>
        </div>

        {/* Main Image Viewport with Frame Glow (Ditto Image) */}
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 group-hover:border-white/30 transition-all">
            <img 
                src={bgImg} 
                alt={event.title}
                className={`h-full w-full object-cover transition-all duration-700 ${hovered ? 'scale-110 brightness-[0.8]' : 'brightness-[0.5]'}`}
            />
            
            {/* Inner Frame Glow Lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 z-20" style={{ borderColor: accentColor }}></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 z-20" style={{ borderColor: accentColor }}></div>
            
            {/* Bottom Fade Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            
            {/* Icon Floating Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-20 group-hover:opacity-100 transition-opacity">
                <Icon size={40} className="text-white" />
            </div>
        </div>

        {/* Content Area (Title & Info) */}
        <div className="mt-8 flex flex-col justify-end flex-grow">
            <h3 className="text-3xl font-black tracking-tighter uppercase leading-[0.9] italic mb-6">
                {event.title}
            </h3>

            {/* Hover Reveal Description */}
            <AnimatePresence>
                {hovered && (
                    <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[10px] text-gray-400 uppercase font-mono mb-4 line-clamp-2"
                    >
                        {event.description}
                    </motion.p>
                )}
            </AnimatePresence>

            <div className="space-y-2 mb-4">
                <div className="flex items-center gap-3 text-[10px] font-mono font-bold text-gray-300">
                    <Clock size={12} style={{ color: accentColor }} /> {event.time}
                </div>
                <div className="flex items-center gap-3 text-[10px] font-black tracking-widest uppercase italic" style={{ color: accentColor }}>
                    <Banknote size={12} className="text-white" /> {event.registrationFee}
                </div>
            </div>

            {/* Deployment Button */}
            {!event.noRegistration ? (
                <Link href={`/flux-registration/${event.title.toLowerCase().replace(/ /g, "-")}`} className="z-30 relative">
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2 bg-white text-black font-black text-[10px] tracking-[0.3em] uppercase transition-all flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white"
                    >
                        INITIATE ENTRY <ExternalLink size={12} />
                    </motion.button>
                </Link>
            ) : (
                <div className="w-full py-2 border border-white/20 text-white/30 text-center text-[10px] font-mono tracking-widest uppercase">
                    OPEN_ACCESS
                </div>
            )}

            {/* Bottom Right Signal Bars (Ditto Image) */}
            <div className="absolute bottom-4 right-4 flex items-end gap-1 opacity-60">
                <div className="w-1.5 h-1.5 bg-white opacity-20"></div>
                <div className="w-1.5 h-3 bg-white opacity-40"></div>
                <div className="w-1.5 h-5" style={{ backgroundColor: accentColor }}></div>
            </div>
        </div>

        {/* Hover Background Flare */}
        <div className="absolute -bottom-24 -left-24 w-48 h-48 blur-[100px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" style={{ backgroundColor: accentColor }}></div>
      </motion.div>
    </Tilt>
  );
}