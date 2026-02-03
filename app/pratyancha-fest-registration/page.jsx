"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  TrophyIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  ArrowRightIcon,
  StarIcon,
  BoltIcon
} from "@heroicons/react/24/outline";

const registrationEvents = [
  {
    id: 1,
    name: "Futsal",
    description: "Fast-paced indoor football action with 5-a-side teams",
    image: "/images/pratyanchaImages/football.jpg",
    teamSize: "11 Players",
    registrationFee: "₹3,000",
    prizeMoney: "₹5,000 + Trophy",
    deadline: "February 5, 2026",
    route: "/pratyancha-fest-registration/futsal",
    color: "#3B82F6",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    name: "Volleyball Boy's",
    description: "Dynamic spikes and blocks in this team volleyball competition",
    image: "/images/pratyanchaImages/volleyball.jpg",
    teamSize: "6 Players",
    registrationFee: "₹3,000",
    prizeMoney: "₹4,000 + Trophy",
    deadline: "February 5, 2026",
    route: "/pratyancha-fest-registration/volleyball",
    color: "#F97316",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    id: 2,
    name: "Volleyball Girl's",
    description: "Dynamic spikes and blocks in this team volleyball competition",
    image: "/images/pratyanchaImages/Volleyballgirls.jpg",
    teamSize: "6 Players",
    registrationFee: "₹3,000",
    prizeMoney: "₹4,000 + Trophy",
    deadline: "February 5, 2026",
    route: "/pratyancha-fest-registration/volleyball-girls",
    color: "#F97316",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    id: 3,
    name: "Kabaddi",
    description: "Traditional Indian sport showcasing strength and strategy",
    image: "/images/pratyanchaImages/kabadi.jpg",
    teamSize: "11 Players",
    registrationFee: "₹3,000",
    prizeMoney: "₹5,000 + Trophy",
    deadline: "February 5, 2026",
    route: "/pratyancha-fest-registration/kabaddi",
    color: "#7E7E7E",
    gradient: "from-gray-500 to-gray-600"
  },
  {
    id: 4,
    name: "Table Tennis",
    description: "Fast-paced rallies and precision shots in indoor competition",
    image: "/images/pratyanchaImages/tt.jpeg",
    teamSize: "2 Players",
    registrationFee: "₹3,000",
    prizeMoney: "₹3,000 + Trophy",
    deadline: "February 5, 2026",
    route: "/pratyancha-fest-registration/table-tennis",
    color: "#3B82F6",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 5,
    name: "E-Sports",
    description: "Competitive gaming with top players in digital arenas",
    image: "/images/pratyanchaImages/esports.jpg",
    teamSize: "5 Players",
    registrationFee: "₹3,000",
    prizeMoney: "₹1,000 + Trophy",
    deadline: "February 5, 2026",
    route: "/pratyancha-fest-registration/esports",
    color: "#F97316",
    gradient: "from-purple-500 to-pink-500"
  }
];

export default function RegistrationHub() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="min-h-screen py-20 px-6 relative overflow-hidden font-athletic" style={{ backgroundColor: '#111111' }}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20"
             style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full blur-2xl opacity-25"
             style={{ background: 'radial-gradient(circle, rgba(249, 115, 22, 0.1) 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16 font-athletic"
        >
          <Link href="/Pratyancha" className="inline-flex items-center gap-2 mb-8 text-blue-400 hover:text-blue-300 transition-colors font-athletic">
            <ArrowRightIcon className="w-5 h-5 rotate-180" />
            Back to Pratyancha
          </Link>

          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border mb-8 backdrop-blur-sm shadow-lg"
            style={{ 
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
            }}
          >
            <TrophyIcon className="w-5 h-5" style={{ color: '#3B82F6' }} />
            <span className="font-athletic text-base font-medium tracking-wider" style={{ color: '#3B82F6' }}>
              REGISTRATION HUB
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 font-athletic tracking-wide"
            style={{
              background: 'linear-gradient(120deg, #3B82F6, #F97316, #FFFFFF, #F97316, #3B82F6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: "drop-shadow(0 0 40px rgba(59, 130, 246, 0.5))"
            }}
          >
            Register Your Team
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl max-w-3xl mx-auto leading-relaxed font-light font-athletic"
            style={{ color: '#FFFFFF' }}
          >
            Choose your sport and register your team for <span style={{ color: '#F97316' }} className="font-athletic athletic-title">Pratyancha 2026</span>.
            Secure your spot in the most exciting sports festival of the year!
          </motion.p>
        </motion.div>

        {/* Registration Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {registrationEvents.map((event, index) => (
            <motion.div
              key={event.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-gray-700/30 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl">
                
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Event Badge */}
                  <div className="absolute top-4 right-4">
                    <div className={`px-3 py-1 bg-gradient-to-r ${event.gradient} rounded-full text-white text-xs font-athletic athletic-heading`}>
                      {event.teamSize}
                    </div>
                  </div>

                  {/* Event Name */}
                  <div className="absolute bottom-4 left-4">
                    <h3 className="font-athletic text-2xl font-bold text-white tracking-wide">
                      {event.name}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="font-athletic text-gray-300 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="font-athletic text-gray-400 text-sm">Registration Fee</span>
                      <span className="font-athletic text-white font-bold">{event.registrationFee}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-athletic text-gray-400 text-sm">Prize Money</span>
                      <span className="font-athletic font-bold" style={{ color: event.color }}>{event.prizeMoney}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-athletic text-gray-400 text-sm">Deadline</span>
                      <span className="font-athletic text-red-400 font-bold text-sm">{event.deadline}</span>
                    </div>
                  </div>

                  {/* Register Button */}
                  <Link href={event.route}>
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 bg-gradient-to-r ${event.gradient} rounded-xl text-white font-bold font-athletic tracking-wide hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <UserGroupIcon className="w-5 h-5" />
                      Register Team
                      <ArrowRightIcon className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{ boxShadow: `0 0 30px ${event.color}40` }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Important Information */}
        <motion.div
          variants={itemVariants}
          className="mt-16 p-8 rounded-3xl border backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%)',
            borderColor: 'rgba(255, 255, 255, 0.2)'
          }}
        >
          <div className="flex items-start gap-4">
            <BoltIcon className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1 font-athletic" />
            <div>
              <h3 className="font-athletic text-xl font-bold text-white mb-2">Important Information</h3>
              <ul className="text-gray-300 space-y-2 font-athletic">
                <li>• Registration deadline: <span className="font-athletic text-red-400 font-athletic athletic-heading font-athletic" font-athletic>February 5, 2026</span></li>
                <li>• Payment screenshot is mandatory for registration confirmation</li>
                <li>• Team rosters cannot be changed after registration</li>
                <li>• All players must have valid enrollment numbers</li>
                <li>• Contact sports committee for any queries</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}






