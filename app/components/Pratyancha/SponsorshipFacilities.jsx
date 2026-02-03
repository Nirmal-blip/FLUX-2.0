"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BuildingOfficeIcon,
  HomeIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CakeIcon,
  BedIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import MotionSensor from "../ui/MotionSensor";
import LazySection from "../ui/LazySection";
import SportsBackground from "../ui/SportsBackground";

export default function SponsorshipFacilities() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const facilities = [
    {
      icon: HomeIcon,
      title: "Changing Room Facility",
      description: "Modern changing rooms with secure lockers, shower facilities, and premium amenities for all participants",
      color: "text-blue-400",
      bgColor: "from-blue-500/15 to-blue-600/15",
      hoverColor: "hover:from-blue-500/25 hover:to-blue-600/25",
      category: "Infrastructure"
    },
    {
      icon: CakeIcon,
      title: "Stalls for Refreshments",
      description: "Multiple food courts, beverage stalls, and refreshment zones strategically located throughout the campus",
      color: "text-green-400",
      bgColor: "from-green-500/15 to-green-600/15",
      hoverColor: "hover:from-green-500/25 hover:to-green-600/25",
      category: "Dining"
    },
    {
      icon: ShieldCheckIcon,
      title: "Professional Referees",
      description: "Certified and experienced referees, umpires, and sports officials for fair and professional gameplay",
      color: "text-yellow-400",
      bgColor: "from-yellow-500/15 to-yellow-600/15",
      hoverColor: "hover:from-yellow-500/25 hover:to-yellow-600/25",
      category: "Sports"
    },
    {
      icon: BedIcon,
      title: "Night Stay Available",
      description: "Comfortable overnight accommodation facilities specifically arranged for visiting teams and players",
      color: "text-purple-400",
      bgColor: "from-purple-500/15 to-purple-600/15",
      hoverColor: "hover:from-purple-500/25 hover:to-purple-600/25",
      category: "Accommodation"
    },
    {
      icon: BuildingOfficeIcon,
      title: "Comfortable Hostel Facilities",
      description: "Premium hostel rooms equipped with modern amenities, WiFi, and 24/7 security for visiting participants",
      color: "text-cyan-400",
      bgColor: "from-cyan-500/15 to-cyan-600/15",
      hoverColor: "hover:from-cyan-500/25 hover:to-cyan-600/25",
      category: "Accommodation"
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 relative overflow-hidden font-athletic"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Sports Arena Background */}
      <SportsBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Sponsorship Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20 font-athletic"
        >
          {/* Sponsorship Header */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border mb-8 backdrop-blur-sm shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
              borderColor: 'rgba(249, 115, 22, 0.25)',
              boxShadow: '0 8px 32px rgba(249, 115, 22, 0.1)'
            }}
          >
            <StarIcon className="w-5 h-5" style={{ color: '#F97316' }} />
            <span className="text-base font-medium font-athletic tracking-wider" style={{ color: '#F97316' }}>SPONSORSHIP</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-athletic athletic-heading mb-8 tracking-wide"
            style={{
              background: 'linear-gradient(45deg, #F97316 0%, #3B82F6 50%, #F97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: "drop-shadow(0 0 20px rgba(249, 115, 22, 0.3))"
            }}
          >
            Official Sponsor
          </motion.h2>

          {/* Red Bull Sponsor Card */}
          <MotionSensor
            sensitivity={0.4}
            maxTilt={8}
            enableGyroscope={true}
            enableMouse={true}
          >
            <motion.div
              variants={itemVariants}
              className="max-w-2xl mx-auto mb-16"
            >
              <motion.div
                className="relative bg-gradient-to-br from-red-600/25 via-red-500/20 to-blue-600/25 backdrop-blur-md rounded-3xl p-10 border-2 border-red-400/40 shadow-2xl shadow-red-500/30 overflow-hidden"
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 30px 60px rgba(239, 68, 68, 0.4)",
                  y: -8,
                  rotateY: 5
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <motion.div
                    animate={{
                      backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="w-full h-full bg-gradient-to-br from-red-400 via-transparent to-blue-400"
                    style={{
                      backgroundSize: "400% 400%"
                    }}
                  />
                </div>

                {/* Red Bull Logo Container */}
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      filter: "brightness(1.2)"
                    }}
                    transition={{ duration: 0.6 }}
                    className="w-40 h-40 mx-auto rounded-3xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border-2 border-red-300/40 flex items-center justify-center overflow-hidden shadow-xl"
                  >
                    <img
                      src="/images/pratyanchaImages/redbull.png"
                      alt="Red Bull"
                      className="w-32 h-32 object-contain filter drop-shadow-lg"
                    />
                  </motion.div>

                  <div className="text-center md:text-left flex-1 font-athletic">
                    <motion.h3
                      whileHover={{ scale: 1.05 }}
                      className="text-4xl md:text-5xl font-bold text-white mb-4 font-athletic tracking-wider"
                      style={{
                        textShadow: "0 0 20px rgba(239, 68, 68, 0.5)"
                      }}
                    >
                      RED BULL
                    </motion.h3>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="h-1 bg-gradient-to-r from-red-400 to-blue-400 rounded-full mb-4"
                    />
                    <p className="text-lg text-gray-200 font-athletic leading-relaxed mb-4">
                      <span className="text-red-300 font-athletic team-name">Official Energy Partner</span> powering athletes with wings to achieve greatness in every competition
                    </p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-red-300 font-athletic">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-red-400 border-t-transparent rounded-full"
                      />
                      <span className="font-athletic tracking-wide">GIVES YOU WINGS</span>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}

              </motion.div>
            </motion.div>
          </MotionSensor>
        </motion.div>

        {/* Facilities Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16 font-athletic"
        >
          {/* Facilities Header */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border mb-8 backdrop-blur-sm shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(126, 126, 126, 0.15) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.25)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)'
            }}
          >
            <BuildingOfficeIcon className="w-5 h-5" style={{ color: '#3B82F6' }} />
            <span className="text-base font-medium font-athletic tracking-wider" style={{ color: '#3B82F6' }}>FACILITIES</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 font-athletic tracking-wide"
            style={{
              background: 'linear-gradient(45deg, #3B82F6 0%, #7E7E7E 50%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.3))"
            }}
          >
            World-Class Facilities
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light font-athletic mb-12"
          >
            Experience <span className="font-athletic athletic-title" style={{ color: '#F97316' }}>premium facilities</span> and
            <span className="font-athletic athletic-title" style={{ color: '#3B82F6' }}> professional amenities</span> designed for champions
          </motion.p>
        </motion.div>

        {/* Facilities Grid */}
        <MotionSensor
          sensitivity={0.3}
          maxTilt={4}
          enableGyroscope={true}
          enableMouse={true}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {facilities.map((facility, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br ${facility.bgColor} ${facility.hoverColor} backdrop-blur-md rounded-3xl p-8 border-2 border-white/10 hover:border-white/25 transition-all duration-500 h-full overflow-hidden shadow-lg hover:shadow-2xl`}>
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-medium ${facility.color} bg-white/10 rounded-full backdrop-blur-sm border border-white/20 font-athletic tracking-wider`}>
                      {facility.category}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, 0],
                        filter: "brightness(1.2)"
                      }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center group-hover:shadow-lg transition-all duration-300 border border-white/20`}
                    >
                      <facility.icon className={`w-8 h-8 ${facility.color} filter drop-shadow-sm`} />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className={`text-xl font-bold text-white mb-4 font-athletic tracking-wide group-hover:${facility.color} transition-colors duration-300`}>
                    {facility.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-athletic group-hover:text-gray-200 transition-colors duration-300">
                    {facility.description}
                  </p>

                  {/* Animated Border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${facility.color.replace('text-', 'from-')} to-transparent rounded-full`}
                    style={{ transformOrigin: "left" }}
                  />



                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${facility.bgColor} opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-3xl pointer-events-none`} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MotionSensor>

        {/* Accommodation Highlight */}
        <LazySection className="mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(147, 51, 234, 0.2)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-purple-600/20 via-indigo-500/15 to-purple-500/20 rounded-3xl p-10 border-2 border-purple-400/30 backdrop-blur-md shadow-2xl shadow-purple-500/15 relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <motion.div
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-full h-full bg-gradient-to-br from-purple-400 via-transparent to-indigo-400"
                  style={{
                    backgroundSize: "400% 400%"
                  }}
                />
              </div>

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10 font-athletic">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center gap-4 mb-6"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <BedIcon className="w-10 h-10 text-purple-400 font-athletic" />
                    </motion.div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-athletic tracking-wider">
                      ACCOMMODATION SERVICES
                    </h3>
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                      <BedIcon className="w-10 h-10 text-indigo-400 font-athletic" />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-1 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mx-auto mb-6"
                  />

                  <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed font-athletic">
                    We provide <span className="text-purple-300 font-semibold bg-purple-500/20 px-2 py-1 rounded-lg font-athletic">premium accommodation services</span> for
                    visiting teams and participants from other colleges with world-class facilities
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(147, 51, 234, 0.3)"
                    }}
                    className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-2xl border border-purple-400/30 backdrop-blur-sm hover:border-purple-300/50 transition-all duration-300 font-athletic"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-3xl font-bold text-purple-300 mb-2 font-athletic"
                    >
                      24/7
                    </motion.div>
                    <div className="text-sm text-gray-300 font-athletic athletic-title">Security & Support</div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(99, 102, 241, 0.3)"
                    }}
                    className="text-center p-6 bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 rounded-2xl border border-indigo-400/30 backdrop-blur-sm hover:border-indigo-300/50 transition-all duration-300 font-athletic"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="text-3xl font-bold text-indigo-300 mb-2 font-athletic"
                    >
                      200+
                    </motion.div>
                    <div className="text-sm text-gray-300 font-athletic athletic-title">Beds Available</div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(6, 182, 212, 0.3)"
                    }}
                    className="text-center p-6 bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl border border-cyan-400/30 backdrop-blur-sm hover:border-cyan-300/50 transition-all duration-300 font-athletic"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      className="text-3xl font-bold text-cyan-300 mb-2 font-athletic"
                    >
                      FREE
                    </motion.div>
                    <div className="text-sm text-gray-300 font-athletic athletic-title">WiFi & Meals</div>
                  </motion.div>

                  <motion.div
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                      boxShadow: "0 15px 30px rgba(34, 197, 94, 0.3)"
                    }}
                    className="text-center p-6 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-2xl border border-green-400/30 backdrop-blur-sm hover:border-green-300/50 transition-all duration-300 font-athletic"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                      className="text-3xl font-bold text-green-300 mb-2 font-athletic"
                    >
                      AC
                    </motion.div>
                    <div className="text-sm text-gray-300 font-athletic athletic-title">Climate Control</div>
                  </motion.div>
                </div>

                {/* Additional Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <span className="text-purple-400 font-athletic athletic-heading">•</span>
                    <span className="text-gray-300 font-athletic">Clean bedding and towels provided</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <span className="text-indigo-400 font-athletic athletic-heading">•</span>
                    <span className="text-gray-300 font-athletic">Separate facilities for male & female participants</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <span className="text-cyan-400 font-athletic athletic-heading">•</span>
                    <span className="text-gray-300 font-athletic">Common areas for team meetings</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <span className="text-green-400 font-athletic athletic-heading">•</span>
                    <span className="text-gray-300 font-athletic">Laundry and housekeeping services</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </LazySection>

        {/* Partners Showcase */}
        <LazySection className="mt-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-center font-athletic"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-2xl border border-orange-400/25 mb-8 backdrop-blur-sm shadow-lg shadow-orange-500/10"
            >
              <StarIcon className="w-5 h-5 text-orange-400 font-athletic" />
              <span className="text-base font-medium text-orange-400 font-athletic tracking-wider">TRUSTED PARTNERS</span>
            </motion.div>

            <motion.h3
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-white mb-4 font-athletic tracking-wide"
            >
              Powering Excellence Together
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 mb-12 max-w-2xl mx-auto font-athletic leading-relaxed"
            >
              Partnering with industry leaders to deliver an unforgettable sporting experience
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-8"
            >
              {/* Red Bull - Main Partner */}
              <motion.div
                whileHover={{
                  scale: 1.15,
                  y: -8,
                  rotateY: 10,
                  boxShadow: "0 20px 40px rgba(239, 68, 68, 0.3)"
                }}
                transition={{ duration: 0.4 }}
                className="relative group"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl flex items-center justify-center backdrop-blur-md border-2 border-red-400/30 hover:border-red-300/50 transition-all duration-300 shadow-xl">
                  <img
                    src="/images/pratyanchaImages/redbull.png"
                    alt="Red Bull - Official Energy Partner"
                    className="w-24 h-24 object-contain filter drop-shadow-lg group-hover:brightness-110 transition-all duration-300"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-red-500/90 text-white text-xs px-3 py-1 rounded-full font-athletic tracking-wide whitespace-nowrap"
                >
                  ENERGY PARTNER
                </motion.div>
              </motion.div>

              {/* Future Partners Slots */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  borderColor: "rgba(59, 130, 246, 0.5)"
                }}
                transition={{ duration: 0.3 }}
                className="w-28 h-28 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-dashed border-blue-400/30 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="text-center font-athletic">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-blue-400/50 border-t-blue-400 rounded-full mx-auto mb-2"
                  />
                  <span className="text-xs text-blue-400 font-athletic tracking-wide group-hover:text-blue-300">
                    COMING<br />SOON
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  borderColor: "rgba(34, 197, 94, 0.5)"
                }}
                transition={{ duration: 0.3 }}
                className="w-28 h-28 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-dashed border-green-400/30 hover:border-green-400/50 transition-all duration-300 group"
              >
                <div className="text-center font-athletic">
                  <div className="text-green-400 text-2xl mb-2 font-athletic">+</div>
                  <span className="text-xs text-green-400 font-athletic tracking-wide group-hover:text-green-300">
                    JOIN<br />US
                  </span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  borderColor: "rgba(147, 51, 234, 0.5)"
                }}
                transition={{ duration: 0.3 }}
                className="w-28 h-28 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border-2 border-dashed border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="text-center font-athletic">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-purple-400 mb-2 font-athletic"
                  >
                    <StarIcon className="w-8 h-8 mx-auto" />
                  </motion.div>
                  <span className="text-xs text-purple-400 font-athletic tracking-wide group-hover:text-purple-300">
                    BE A<br />PARTNER
                  </span>
                </div>
              </motion.div>
            </motion.div>

            {/* Partnership CTA */}
            <motion.div
              variants={itemVariants}
              className="mt-12 p-6 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-600/30 backdrop-blur-sm max-w-2xl mx-auto"
            >
              <p className="text-gray-300 font-athletic mb-4">
                Interested in partnering with Pratyancha?
                <span className="text-orange-400 font-athletic athletic-title"> Join us in creating an extraordinary sporting experience!</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-athletic font-medium tracking-wide rounded-xl hover:from-orange-400 hover:to-red-400 transition-all duration-300"
              >
                BECOME A PARTNER
              </motion.button>
            </motion.div>
          </motion.div>
        </LazySection>
      </div>
    </section>
  );
}


