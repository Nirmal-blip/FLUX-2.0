"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useInView } from "react-intersection-observer";
import { useLoading } from "./providers/LoadingProvider";

import {
  MusicalNoteIcon,
  TrophyIcon,
  BeakerIcon,
  CalendarDaysIcon,
  StarIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";
import { FaUsers } from "react-icons/fa";

// ---------------------- MODERN COLORFUL FEST CARD ----------------------
const FestCard = ({ title, subtitle, date, description, highlights = [], color, btnText, logo, link, icon: Icon, stats, location, duration }) => {
  const router = useRouter();
  const { startLoading } = useLoading();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (link && !isClicked) {
      setIsClicked(true);
      startLoading(title.toLowerCase());
      setTimeout(() => {
        router.push(link);
      }, 100);
    }
  };

  return (
    <motion.div
      onClick={handleClick}
      className="group relative cursor-pointer h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`relative h-full flex flex-col bg-zinc-900/80 border border-white/10 hover:border-transparent rounded-2xl overflow-hidden transition-all duration-300 ${isClicked ? 'opacity-70 scale-95' : ''}`}
        style={{
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        }}
      >
        {/* Hover Glow Gradient Border */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${color}, transparent 60%)`,
            maskImage: "linear-gradient(#fff, #fff), linear-gradient(#fff, #fff)",
            maskClip: "content-box, border-box",
            padding: "2px"
          }}
        />

        {/* Background Glow Blob */}
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ backgroundColor: color }}
        />

        <div className="p-8 flex-1 flex flex-col relative z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div
              className="p-3 rounded-xl border transition-all duration-300"
              style={{
                color: color,
                borderColor: `${color}30`,
                backgroundColor: `${color}10`
              }}
            >
              <Icon className="w-6 h-6" />
            </div>
            <div className="px-3 py-1 rounded-full text-xs font-mono border border-white/10 text-gray-400 bg-black/40 backdrop-blur-sm">
              {date}
            </div>
          </div>

          {/* Title */}
          <div className="mb-4">
            <h3 className="text-3xl font-bold font-space-grotesk mb-1 transition-colors group-hover:text-white" style={{ color: "white" }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:from-white group-hover:to-white">
                {title}
              </span>
            </h3>
            <p className="text-sm font-bold tracking-wide uppercase" style={{ color: color }}>{subtitle}</p>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
            {description}
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-2 gap-4 mb-8 py-6 border-y border-white/5 bg-black/20 -mx-8 px-8">
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <MapPinIcon className="w-3 h-3" /> Location
              </div>
              <div className="text-sm text-gray-200 font-medium">{location}</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                <ClockIcon className="w-3 h-3" /> Duration
              </div>
              <div className="text-sm text-gray-200 font-medium">{duration}</div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-3 mb-8">
            {highlights.slice(0, 4).map((item, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                <span className="font-inter text-xs leading-relaxed group-hover:text-white transition-colors">{item}</span>
              </div>
            ))}
          </div>

          {/* Action */}
          <div className="mt-auto">
            <button
              className="w-full py-3 rounded-lg border text-white text-sm font-bold transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]"
              style={{
                borderColor: `${color}30`,
                backgroundColor: 'transparent'
              }}
            >
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                {btnText}
              </span>
              <ArrowRightIcon className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
            {/* Button Fill Animation */}
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity" style={{ from: color, to: color }} />
          </div>

        </div>
      </div>
    </motion.div>
  );
};

// ---------------------- FESTS GRID ----------------------
export default function Fests() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fests = [
    {
      title: "ECHOES",
      subtitle: "Cultural Festival",
      date: "October 15-17, 2024",
      description: "A spectacular celebration of creativity, artistry, and cultural diversity that brings together talents from across the nation.",
      highlights: [
        "International Music Concerts",
        "Professional Dance Battles",
        "Theatre & Drama Competitions",
        "Celebrity Guest Performances"
      ],
      color: "#ec4899", // Pink
      btnText: "Join the Celebration",
      icon: MusicalNoteIcon,
      link: "/echoes",
      location: "Main Auditorium",
      duration: "3 Days"
    },
    {
      title: "PRATYANCHA",
      subtitle: "Sports Festival",
      date: "February 6-8, 2026",
      description: "The ultimate sports championship where athletic excellence meets competitive spirit.",
      highlights: [
        "Futsal Championship",
        "Volleyball Tournament",
        "Table Tennis Competition",
        "Kabaddi Matches"
      ],
      color: "#3B82F6", // Blue
      btnText: "Register Now",
      icon: TrophyIcon,
      link: "/Pratyancha",
      location: "IITRAM Campus",
      duration: "3 Days"
    },
    {
      title: "FLUX",
      subtitle: "Marvel Tech Universe",
      date: "March 27-29, 2026",
      description: "Where heroes of technology unite! Experience the ultimate fusion of Marvel-style innovation and cutting-edge tech.",
      highlights: [
        "Superhero AI Hackathon",
        "Marvel-Style Robotics Arena",
        "Hero Tech Pitch Battle",
        "Avengers Code Challenge"
      ],
      color: "#ef4444", // Red
      btnText: "Join the Heroes",
      icon: BeakerIcon,
      link: "/Flux",
      location: "IITRAM Campus",
      duration: "3 Epic Days"
    },
  ];

  return (
    <section
      id="activities"
      ref={ref}
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 text-center md:text-left"
        >
          <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-pink-500" />
            <h2 className="text-sm font-bold tracking-[0.2em] text-pink-500 uppercase font-mono">
              EVENTS
            </h2>
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-space-grotesk text-white">
            Annual <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Festival Series</span>
          </h1>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fests.map((fest, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <FestCard {...fest} />
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
}