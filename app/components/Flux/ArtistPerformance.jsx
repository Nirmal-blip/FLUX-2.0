"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Tilt from "react-parallax-tilt";
import {
  Mic2, Music, Zap, Calendar, Clock, MapPin, 
  Ticket, ArrowRight, Star, Disc
} from "lucide-react";
import Link from "next/link";
import theme from "./theme"; // Ensure you have your theme file linked

const artists = [
  {
    id: 1,
    name: "CYBER SONIC",
    role: "HEADLINER // DJ",
    image: "https://images.unsplash.com/photo-1571266028243-3716f02d2d2e?q=80&w=1000&auto=format&fit=crop", // Replace with real image
    genre: "Synthwave / Techno",
    time: "08:00 PM",
    description: "Architect of the digital soundscape. Prepare for high-fidelity bass resonance."
  },
  {
    id: 2,
    name: "NEON VOICES",
    role: "LIVE BAND",
    image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=1000&auto=format&fit=crop", // Replace with real image
    genre: "Alt-Rock / Fusion",
    time: "06:30 PM",
    description: "A harmonic convergence of analog instruments and electronic distortion."
  },
  {
    id: 3,
    name: "ECHO PROTOCOL",
    role: "RAPPER / LYRICIST",
    image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1000&auto=format&fit=crop", // Replace with real image
    genre: "Cyber Rap",
    time: "07:15 PM",
    description: "Rapid-fire lyrical data transmission. Decoding reality one verse at a time."
  }
];

export default function ArtistPerformance() {
  const [activeArtist, setActiveArtist] = useState(artists[0]);

  return (
    <div className="relative py-24 px-6 overflow-hidden min-h-screen bg-black text-white font-rajdhani">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(${theme.colors.stark.reactorBlue} 1px, transparent 1px), linear-gradient(90deg, ${theme.colors.stark.reactorBlue} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-purple-500/50 rounded-full bg-purple-900/10 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-xs font-mono text-purple-300 tracking-widest uppercase">Live Transmission</span>
          </div>
          
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 mb-4">
            Sonic<br />Celebration
          </h2>
          <p className="text-gray-400 font-mono text-sm max-w-xl mx-auto">
            INITIATE AUDITORY SEQUENCE. EXPERIENCE THE PEAK OF MUSICAL PERFORMANCE AT THE FLUX MAINSTAGE.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Artist Selector List */}
          <div className="lg:col-span-4 space-y-4">
            {artists.map((artist) => (
              <div 
                key={artist.id}
                onClick={() => setActiveArtist(artist)}
                className={`group cursor-pointer border-l-2 p-4 transition-all duration-300 ${
                  activeArtist.id === artist.id 
                    ? 'border-purple-500 bg-purple-500/10' 
                    : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-bold text-xl uppercase tracking-wider ${
                    activeArtist.id === artist.id ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                  }`}>
                    {artist.name}
                  </span>
                  {activeArtist.id === artist.id && <Zap className="w-4 h-4 text-purple-500 animate-pulse" />}
                </div>
                <div className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2">
                  <span className="text-purple-400">{artist.time}</span> // {artist.genre}
                </div>
              </div>
            ))}
          </div>

          {/* MIDDLE: Main Artist Card (3D Tilt) */}
          <div className="lg:col-span-5 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArtist.id}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <Tilt
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  perspective={1000}
                  glareEnable={true}
                  glareMaxOpacity={0.4}
                  glareColor="#a855f7" // Purple glare
                  className="w-full"
                >
                  <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-none border border-white/20 bg-gray-900 overflow-hidden group shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)]">
                    
                    {/* Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${activeArtist.image})` }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="inline-block px-2 py-1 bg-purple-600 text-white text-[10px] font-bold uppercase tracking-widest mb-3">
                        {activeArtist.role}
                      </div>
                      <h3 className="text-4xl font-black uppercase text-white mb-2 leading-none">
                        {activeArtist.name}
                      </h3>
                      <p className="text-gray-300 text-sm font-mono leading-relaxed opacity-90 border-l-2 border-purple-500 pl-3 mb-6">
                        {activeArtist.description}
                      </p>

                      <div className="grid grid-cols-2 gap-4 text-xs font-mono text-gray-400">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-500" />
                          <span>{activeArtist.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Disc className="w-4 h-4 text-purple-500" />
                          <span>{activeArtist.genre}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Corners */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500/50" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500/50" />
                  </div>
                </Tilt>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Ticket / Action Panel */}
          <div className="lg:col-span-3 flex flex-col gap-6 bg-white/5 p-6 border border-white/10 backdrop-blur-md h-fit">
            <div className="border-b border-white/10 pb-4">
              <h4 className="text-lg font-bold text-white mb-1">EVENT ACCESS</h4>
              <p className="text-xs text-gray-500 font-mono">SECURE YOUR AUDITORY LINK</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><MapPin className="w-4 h-4" /> VENUE</span>
                <span className="font-bold text-white">MAIN AUDITORIUM</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><Calendar className="w-4 h-4" /> DATE</span>
                <span className="font-bold text-white">DAY 03 // NIGHT</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400 flex items-center gap-2"><Ticket className="w-4 h-4" /> PASS TYPE</span>
                <span className="font-bold text-yellow-400">GOLD / STANDARD</span>
              </div>
            </div>

            <div className="py-4 border-t border-b border-white/10 border-dashed my-2">
              <div className="flex justify-between items-end">
                <span className="text-xs text-purple-400 font-mono">ENTRY FEE</span>
                <div className="text-right">
                  <span className="block text-2xl font-bold text-white">₹ 499</span>
                  <span className="text-[10px] text-gray-500 uppercase">Per Unit</span>
                </div>
              </div>
            </div>

            <Link href="/flux-registration/artist-performance">
              <button className="group relative w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-4 uppercase tracking-widest overflow-hidden transition-all">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book Ticket <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                {/* Button Glitch Effect */}
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
            
            <p className="text-[10px] text-center text-gray-600 font-mono">
              *LIMITED CAPACITY. ID CARD MANDATORY.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}