"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUp, Zap, Radio, Globe, ChevronRight } from "lucide-react";
import { FaFacebook, FaYoutube, FaDiscord, FaInstagram, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { useInView } from 'react-intersection-observer';
import theme from "./theme";

/**
 * FooterFlux - COMMAND CENTER
 * Integrated Google Maps Target Lock on IITRAM.
 */
export default function FooterFlux() {
  const currentYear = new Date().getFullYear();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const quickLinks = [
    { label: "Home", href: "/Flux#home" },
    { label: "Events", href: "/Flux#events" },
    { label: "Gallery", href: "/Flux#gallery" },
    { label: "Team", href: "/Flux#team" },
  ];

  const events = [
    { label: "AI Innovation Summit", href: "/flux-registration" },
    { label: "Web Hackathon", href: "/flux-registration" },
    { label: "Cloud Workshop", href: "/flux-registration" },
    { label: "Cybersecurity CTF", href: "/flux-registration" },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: "https://www.facebook.com/share/1BnddyXUoX/", label: "Facebook", color: "#1877F2" },
    { icon: FaInstagram, href: "https://www.instagram.com/saciitram?igsh=MW1sdGwxMms0M28xaw==", label: "Instagram", color: "#E4405F" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/student-activity-center-iitram-2b80a331a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn", color: "#0A66C2" },
    { icon: FaYoutube, href: "https://youtube.com/@saciitram?si=dIP3z6Q6kusU4rhp", label: "YouTube", color: "#FF0000" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative pt-24 pb-8 px-6 overflow-hidden bg-black">
      {/* Decorative Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(${theme.colors.stark.reactorBlue} 1px, transparent 1px), linear-gradient(90deg, ${theme.colors.stark.reactorBlue} 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">

          {/* LEFT COLUMN: BRAND & CONTACT */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="mb-8">
              <h3 className="text-6xl font-black mb-2 tracking-tighter text-white" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                FLUX
              </h3>
              <div className="flex items-center gap-2 text-cyan-500 font-mono text-sm tracking-widest">
                <Zap className="w-4 h-4" />
                <span>SYSTEM ONLINE // 2026</span>
              </div>
            </div>

            <p className="mb-8 text-gray-400 leading-relaxed font-mono text-sm">
              Initiating India's premier technology protocol. Bringing together intelligence, innovation, and execution.
            </p>

            <div className="space-y-4">
              <ContactItem icon={Mail} text="president.ssenate@iitram.ac.in" />
              <ContactItem icon={Phone} text="+91 70911 82409" />
              <ContactItem icon={MapPin} text="IITRAM, Maninagar, Ahmedabad" />
            </div>
          </div>

          {/* CENTER COLUMNS: LINKS */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest" style={{ fontFamily: 'var(--font-rajdhani)' }}>
                QUICK ACCESS
              </h4>
              <ul className="space-y-4 font-mono text-sm">
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-3 group">
                      <ChevronRight className="w-3 h-3 text-gray-600 group-hover:text-cyan-400 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: SATELLITE MAP */}
          <div className="lg:col-span-5">
            <div className="h-full min-h-[300px] border border-cyan-500/30 rounded-xl overflow-hidden relative bg-black/50 p-1 group">
              {/* HUD Overlay */}
              <div className="absolute top-4 left-4 z-10 bg-black/80 backdrop-blur border border-cyan-500/50 px-3 py-1 flex items-center gap-2">
                <Radio className="w-3 h-3 text-red-500 animate-pulse" />
                <span className="text-[10px] font-mono text-cyan-400 tracking-widest">TARGET: IITRAM</span>
              </div>

              <div className="absolute bottom-4 right-4 z-10">
                <div className="text-[10px] font-mono text-cyan-500 text-right bg-black/80 px-2 py-1 border border-cyan-900/50">
                  22.9975° N <br /> 72.6186° E
                </div>
              </div>

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

              {/* Scanline Overlay */}
              <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-10 pointer-events-none" />
              <div className="absolute inset-0 border-2 border-cyan-500/10 rounded-xl pointer-events-none" />
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4">
            {socialLinks.map((social, i) => (
              <a key={i} href={social.href} className="p-2 bg-white/5 rounded-full hover:bg-cyan-500 hover:text-black text-gray-400 transition-all">
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <p className="text-xs font-mono text-gray-600">
            © {currentYear} FLUX TECH FEST. AUTHORIZED PERSONNEL ONLY.
          </p>
        </div>

      </div>

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

function ContactItem({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-400 group cursor-pointer hover:text-white transition-colors">
      <div className="p-2 bg-white/5 rounded group-hover:bg-cyan-500 group-hover:text-black transition-colors">
        <Icon className="w-4 h-4" />
      </div>
      <span className="font-mono">{text}</span>
    </div>
  )
}
