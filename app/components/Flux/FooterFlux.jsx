"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, Send, Zap } from "lucide-react";
import { FaFacebook, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";

/**
 * FooterFlux - COMIC EDITION
 * High Contrast, Bold Outlines, Halftone Patterns.
 */
export default function FooterFlux() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white text-black font-sans border-t-[10px] border-black overflow-hidden selection:bg-yellow-400">
      
      {/* --- RETRO HALFTONE DOTS BACKGROUND --- */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:8px_8px]" />

      <div className="relative z-10">
        
        {/* --- TOP ACTION PANEL (SKEWED) --- */}
        <div className="bg-yellow-400 border-b-[8px] border-black py-8 -skew-y-2 origin-left scale-105 shadow-[0_10px_0px_#000]">
          <div className="skew-y-2 flex flex-col md:flex-row items-center justify-between px-10 gap-8">
            <h2 className="text-5xl md:text-7xl font-[1000] italic uppercase tracking-tighter text-black drop-shadow-[4px_4px_0px_#fff] stroke-black">
              JOIN THE SQUAD!
            </h2>
            <div className="flex bg-black p-1.5 border-[6px] border-black shadow-[10px_10px_0px_#fff]">
              <input 
                type="email" 
                placeholder="HERO@IITRAM.AC.IN" 
                className="bg-white px-4 py-3 font-black uppercase outline-none w-56 md:w-80 text-lg placeholder:text-gray-400"
              />
              <button className="bg-red-600 text-white px-8 py-3 font-[1000] text-xl hover:bg-yellow-400 hover:text-black transition-all border-l-[6px] border-black">
                GO!
              </button>
            </div>
          </div>
        </div>

        {/* --- MAIN CONTENT PANELS (GRID STYLE) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b-[8px] border-black">
          
          {/* Panel 1: Brand & Intel */}
          <div className="p-12 border-b-[8px] md:border-b-0 md:border-r-[8px] border-black bg-white hover:bg-red-50 transition-colors relative group">
            <div className="absolute top-4 right-4 text-red-600 opacity-20 group-hover:opacity-100 transition-opacity">
                <Zap size={40} fill="currentColor" />
            </div>
            <h3 className="text-6xl font-[1000] italic uppercase mb-6 drop-shadow-[5px_5px_0px_#facc15] tracking-tighter">
              FLUX <span className="text-red-600">2026</span>
            </h3>
            <div className="space-y-4 font-bold text-xl uppercase leading-none">
              <div className="flex items-center gap-3"><Mail className="stroke-[4px]" /> president.ssenate@iitram.ac.in</div>
              <div className="flex items-center gap-3"><Phone className="stroke-[4px]" /> +91 70911 82409</div>
              <div className="flex items-center gap-3"><MapPin className="stroke-[4px]" /> IITRAM, Ahmedabad</div>
            </div>
          </div>

          {/* Panel 2: Navigation (Speech Bubble Vibe) --- */}
          <div className="p-12 border-b-[8px] md:border-b-0 md:border-r-[8px] border-black bg-white relative">
             <div className="absolute -top-6 left-10 bg-black text-white px-6 py-2 font-[1000] italic uppercase rotate-[-3deg] text-xl shadow-[5px_5px_0px_#ef4444]">
               Quick Access
             </div>
             <ul className="space-y-4 font-[1000] text-3xl uppercase italic tracking-tighter pt-4">
                {['Home', 'Events', 'Gallery', 'Team'].map((item) => (
                  <li key={item} className="group flex items-center gap-4 cursor-pointer">
                    <span className="text-red-600 group-hover:translate-x-2 transition-transform">►</span>
                    <Link href={`/Flux#${item.toLowerCase()}`} className="hover:text-red-600 transition-colors">
                        {item}
                    </Link>
                  </li>
                ))}
             </ul>
          </div>

         {/* Panel 3: Satellite Feed (Map Panel) --- */}
{/* Panel 3: Satellite Feed (Map Panel) --- */}
{/* Panel 3: Satellite Feed (Map Panel) --- */}
<div className="p-0 bg-black overflow-hidden relative min-h-[350px] md:min-h-full border-t-8 md:border-t-0 border-black group">
  
  {/* COMIC HUD LABEL */}
  <div className="absolute top-6 left-6 z-20 bg-yellow-400 text-black px-4 py-2 font-[1000] uppercase text-sm border-[4px] border-black shadow-[6px_6px_0px_#ef4444] -rotate-2">
    SATELLITE FEED: IITRAM
  </div>

  {/* TARGET COORDINATES */}
  <div className="absolute bottom-6 left-6 z-20 bg-black/80 text-white px-3 py-1 font-mono text-[10px] border border-red-600">
    LAT: 22.9975 | LONG: 72.6186
  </div>

  {/* RELIABLE GOOGLE MAP EMBED */}
{/* Google Map Embed */}

<iframe

width="100%"

height="100%"

style={{ border: 0, filter: 'grayscale(100%) invert(92%) hue-rotate(180deg) contrast(0.85)' }}

loading="lazy"

allowFullScreen

referrerPolicy="no-referrer-when-downgrade"

src="https://maps.google.com/maps?q=Institute+of+Infrastructure+Technology+Research+and+Management+Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed"

className="w-full h-full rounded-lg opacity-60 group-hover:opacity-100 group-hover:filter-none transition-all duration-700"

></iframe>
  {/* SCANLINE VFX */}
  <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-30" />
</div>
</div>

        {/* --- SOCIALS & FOOTNOTE --- */}
        <div className="bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-8 border-b-[8px] border-black">
           <div className="flex gap-6">
              {[
                { icon: FaFacebook, color: 'bg-blue-600', href: "https://www.facebook.com/share/1BnddyXUoX/" },
                { icon: FaInstagram, color: 'bg-pink-500', href: "https://www.instagram.com/saciitram?igsh=MW1sdGwxMms0M28xaw==" },
                { icon: FaLinkedin, color: 'bg-blue-800', href: "https://www.linkedin.com/in/student-activity-center-iitram" },
                { icon: FaYoutube, color: 'bg-red-600', href: "https://youtube.com/@saciitram" }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: -10 }}
                  className={`${social.color} p-4 border-[4px] border-black shadow-[5px_5px_0px_#000] text-white`}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
           </div>
           
           <div className="text-right">
              <p className="font-[1000] text-xl italic uppercase tracking-tighter">
                AUTHORIZED PERSONNEL ONLY
              </p>
              <p className="font-bold text-gray-500 uppercase text-xs tracking-widest">
                © {currentYear} IITRAM FLUX - FORGED IN THE MULTIVERSE
              </p>
           </div>
        </div>
      </div>

    
      {/* --- SCROLL TOP BUTTON --- */}
     
      {/* Scroll Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-red-600 rounded-sm hover:bg-red-500 transition-colors z-50 shadow-[0_0_20px_rgba(220,38,38,0.5)]"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>
    </footer>
  );
}