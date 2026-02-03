"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  FilmIcon,
  CalendarDaysIcon,
  MapPinIcon,
  TicketIcon,
  PaintBrushIcon,
  SparklesIcon
} from "@heroicons/react/24/outline";

// Enhanced Ticket Component
function FestivalTicket({ ticket, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 5, 
        z: 50,
        transition: { duration: 0.3 }
      }}
      className="relative w-[380px] bg-gradient-to-br from-pink-900/20 via-purple-900/20 to-rose-900/20 backdrop-blur-xl border border-pink-400/30 rounded-3xl overflow-hidden group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Artistic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 w-20 h-20 border-2 border-pink-400/30 rounded-full"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-purple-400/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-rose-400/20 rounded-full"></div>
      </div>

      {/* Premium Badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
        className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-pink-500/80 to-purple-500/80 rounded-full border border-pink-400/50 z-10"
      >
        <span className="text-xs font-bold text-white font-space-grotesk tracking-wider uppercase flex items-center gap-1">
          <FilmIcon className="w-3 h-3" />
          {ticket.type}
        </span>
      </motion.div>

      {/* Top Section - Event Details */}
      <div className="p-8 border-b border-dashed border-pink-400/30 relative z-10">
        <motion.h2 
          className="text-2xl font-bold text-white mb-2 font-space-grotesk tracking-wide"
          whileHover={{ scale: 1.02 }}
        >
          {ticket.eventName}
        </motion.h2>
        <div className="flex items-center gap-4 text-sm text-gray-300 font-poppins">
          <span className="flex items-center gap-1">
            <CalendarDaysIcon className="w-4 h-4" />
            {ticket.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPinIcon className="w-4 h-4" />
            {ticket.location}
          </span>
        </div>
      </div>

      {/* Middle Section - Ticket Details */}
      <div className="p-8 flex justify-between items-center relative z-10">
        <div className="text-center">
          <p className="text-gray-400 text-sm font-poppins mb-1">Ticket ID</p>
          <p className="text-white font-mono text-lg font-bold tracking-wider bg-gray-800/30 px-3 py-1 rounded-lg border border-gray-600/30">
            {ticket.id}
          </p>
        </div>
        <div className="text-center">
          <p className="text-gray-400 text-sm font-poppins mb-1">Seat</p>
          <p className="text-pink-400 font-bold text-xl font-space-grotesk bg-pink-900/20 px-4 py-2 rounded-lg border border-pink-400/30">
            {ticket.seat}
          </p>
        </div>
      </div>

      {/* Price Section */}
      <div className="bg-gradient-to-r from-pink-600/80 via-purple-600/80 to-rose-600/80 p-6 flex justify-between items-center relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-white font-bold font-space-grotesk tracking-wide uppercase">
            Cultural Pass
          </span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white font-poppins">
            All Access
          </span>
        </div>
        <span className="text-white font-black text-2xl font-space-grotesk">
          ₹{ticket.price.toLocaleString()}
        </span>
      </div>

      {/* Enhanced Buy Button */}
      <div className="p-6 flex justify-center bg-black/20 relative z-10">
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="group relative px-8 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold font-space-grotesk tracking-wide uppercase border-2 border-pink-400/30 transition-all duration-300"
          onClick={() => alert(`Buying ticket: ${ticket.eventName}`)}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
          />
          <span className="relative flex items-center gap-2">
            <TicketIcon className="w-5 h-5" />
            BUY TICKET
            <FilmIcon className="w-5 h-5" />
          </span>
        </motion.button>
      </div>

      {/* Artistic Notches */}
      <div className="absolute top-1/2 -left-4 w-8 h-8 bg-black rounded-full border-2 border-pink-400/30 transform -translate-y-1/2"></div>
      <div className="absolute top-1/2 -right-4 w-8 h-8 bg-black rounded-full border-2 border-pink-400/30 transform -translate-y-1/2"></div>
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-pink-400/30"></div>
      <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-purple-400/30"></div>
      <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-purple-400/30"></div>
      <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-pink-400/30"></div>
    </motion.div>
  );
}

// Enhanced Main Page
export default function BookingsPage() {
  const tickets = [
    {
      id: "ECH001",
      eventName: "Echoes Cultural Symphony",
      type: "VIP",
      date: "25th Dec 2024",
      location: "Cultural Arena, Bengaluru",
      seat: "A12",
      price: 4999,
    },
    {
      id: "ECH002", 
      eventName: "Artistic Masterpiece Gala",
      type: "Premium",
      date: "15th Jan 2025",
      location: "Arts Center, Mumbai",
      seat: "B34",
      price: 3499,
    },
    {
      id: "ECH003",
      eventName: "Creative Arts Festival",
      type: "Regular",
      date: "10th Mar 2025",
      location: "Cultural Hub, Delhi",
      seat: "C21",
      price: 2499,
    },
    {
      id: "ECH004",
      eventName: "Cultural Heritage Celebration",
      type: "Student",
      date: "5th Apr 2025",
      location: "Heritage Center, Kolkata",
      seat: "D18",
      price: 1499,
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-[#0a0a0c] via-pink-900/20 to-black relative overflow-hidden"
    >
      {/* Artistic Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${25 + (i % 2) * 50}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8 flex flex-col items-center">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 rounded-full border border-pink-400/30 mb-6"
          >
            <span className="text-sm font-bold text-pink-400 font-space-grotesk tracking-widest uppercase flex items-center gap-2">
              <FilmIcon className="w-4 h-4" />
              CULTURAL TICKETS
              <PaintBrushIcon className="w-4 h-4" />
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 font-space-grotesk tracking-tight mb-4">
            My Festival Passes
          </h1>
          <p className="text-xl text-gray-300 font-poppins font-light italic max-w-2xl mx-auto">
            Your gateway to <span className="text-pink-400 font-semibold">artistic excellence</span> and 
            <span className="text-purple-400 font-semibold"> cultural celebrations</span>
          </p>
        </motion.div>

        {/* Enhanced Tickets Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {tickets.map((ticket, index) => (
            <FestivalTicket key={ticket.id} ticket={ticket} index={index} />
          ))}
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-pink-900/20 via-purple-900/20 to-rose-900/20 rounded-2xl p-8 border border-pink-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-4 font-space-grotesk flex items-center justify-center gap-2">
              <SparklesIcon className="w-6 h-6 text-pink-400" />
              CULTURAL EXPERIENCE AWAITS
            </h3>
            <p className="text-gray-300 font-poppins font-light leading-relaxed">
              Each ticket grants you access to a world of <span className="text-pink-400 font-semibold">artistic wonder</span>, 
              featuring live performances, interactive workshops, and cultural exhibitions that celebrate the 
              <span className="text-purple-400 font-semibold"> diversity of human creativity</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
