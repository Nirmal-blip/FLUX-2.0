"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  StarIcon,
  TrophyIcon,
  BoltIcon
} from "@heroicons/react/24/outline";
import LazyImage from "../ui/LazyImage";
import LazySection from "../ui/LazySection";
import MotionSensor from "../ui/MotionSensor";
import SportsBackground from "../ui/SportsBackground";

const leadershipTeam = [
  {
    id: 1,
    name: "Satyam Kumar",
    role: "President",
    img: "/images/Senate/Satyam.jpg",
    color: "#3B82F6"
  },
  {
    id: 2,
    name: "Shrey Chaudhary",
    role: "Vice President",
    img: "/images/Senate/Shrey.png",
    color: "#F97316"
  },
  {
    id: 3,
    name: "Sakshi Sureka",
    role: "Vice President",
    img: "/images/Senate/Sakshi.jpg",
    color: "#7E7E7E"
  },
];

const generalSecretaries = [
  {
    id: 1,
    name: "Shivam Dahiya",
    image: "/images/GS_sports/Shivam.png",
    position: "General Secretary",
    color: "#3B82F6"
  },
  {
    id: 2,
    name: "Yaman Patidar",
    image: "/images/GS_sports/Yaman.png",
    position: "General Secretary",
    color: "#F97316"
  },
  {
    id: 3,
    name: "Khushi Maheta",
    image: "/images/GS_sports/Khushi.png",
    position: "General Secretary",
    color: "#7E7E7E"
  },
  {
    id: 4,
    name: "Bhupendra Shankhala",
    image: "/images/GS_sports/Bhupendra.png",
    position: "General Secretary",
    color: "#D0D0D0"
  },
];

const PratyanchaSecretaries = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
        {/* Leadership Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20 font-athletic"
        >
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
            <span className="text-base font-medium font-athletic tracking-wider" style={{ color: '#3B82F6' }}>EXECUTIVE LEADERSHIP</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-athletic athletic-heading mb-8 tracking-wider  font-athletic"
          >
            Student Leadership
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light font-athletic mb-16"
            style={{ color: '#D0D0D0' }}
          >
            Meet our <span style={{ color: '#F97316' }} className="font-athletic athletic-title">visionary leaders</span> who guide and inspire our
            <span style={{ color: '#3B82F6' }} className="font-athletic athletic-title"> sports community</span>
          </motion.p>

          {/* Leadership Team Grid */}
          <MotionSensor
            sensitivity={0.4}
            maxTilt={4}
            enableGyroscope={true}
            enableMouse={true}
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            >
              {leadershipTeam.map((leader) => (
                <motion.div
                  key={leader.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    rotateY: 5,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="group relative"
                >
                  <div className="relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-gray-700/30 hover:border-blue-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                    {/* Image Container */}
                    <div className="relative w-full h-80 overflow-hidden">
                      <LazyImage
                        src={leader.img}
                        alt={leader.name}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Leadership Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="absolute bottom-4 left-4 right-4"
                      >
                        <div className="bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/20">
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors font-athletic tracking-wide">
                                {leader.name}
                              </h3>
                              <p className="text-xs font-medium font-athletic tracking-wider uppercase"
                                style={{ color: leader.color }}>
                                {leader.role}
                              </p>
                            </div>
                            <div className="w-3 h-3 rounded-full animate-pulse ml-3"
                              style={{ backgroundColor: leader.color }} />
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </MotionSensor>
        </motion.div>

        {/* General Secretaries Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20 font-athletic"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border mb-8 backdrop-blur-sm shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(249, 115, 22, 0.15) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
            }}
          >
            <StarIcon className="w-5 h-5" style={{ color: '#3B82F6' }} />
            <span className="text-base font-medium font-athletic tracking-wider" style={{ color: '#3B82F6' }}>SPORTS COMMITTEE</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-athletic athletic-heading mb-8 tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F97316 50%, #3B82F6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            General Secretaries
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light font-athletic"
            style={{ color: '#D0D0D0' }}
          >
            Meet the <span style={{ color: '#F97316' }} className="font-athletic athletic-title">dedicated coordinators</span> who organize and manage our
            <span style={{ color: '#3B82F6' }} className="font-athletic athletic-title"> annual sports festival</span>
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <MotionSensor
          sensitivity={0.4}
          maxTilt={4}
          enableGyroscope={true}
          enableMouse={true}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {generalSecretaries.map((member) => (
              <motion.div
                key={member.id}
                variants={cardVariants}
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateY: 5,
                  transition: { duration: 0.4, ease: "easeOut" }
                }}
                className="group relative"
              >
                <div className="relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-md rounded-3xl overflow-hidden border-2 border-gray-700/30 hover:border-blue-400/50 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />

                  {/* Image Container */}
                  <div className="relative w-full h-72 overflow-hidden">
                    <LazyImage
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Floating Name Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <div className="bg-black/60 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors font-athletic tracking-wide">
                          {member.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium font-athletic tracking-wider uppercase"
                            style={{ color: member.color }}>
                            {member.position}
                          </p>
                          <div className="w-3 h-3 rounded-full animate-pulse"
                            style={{ backgroundColor: member.color }} />
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-500/0 to-cyan-500/0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                  {/* Animated Border Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl border-2 border-transparent"
                    animate={{
                      borderColor: ["rgba(59, 130, 246, 0)", "rgba(6, 182, 212, 0.3)", "rgba(59, 130, 246, 0)"]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </MotionSensor>

        {/* Stats Section */}
        <LazySection className="mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-center mb-8 text-white font-athletic">
                Our Achievements
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center font-athletic">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400 font-athletic">50+</div>
                  <div className="text-sm text-gray-400 font-athletic">Events Organized</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-cyan-400 font-athletic">500+</div>
                  <div className="text-sm text-gray-400 font-athletic">Participants</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-green-400 font-athletic">15</div>
                  <div className="text-sm text-gray-400 font-athletic">Sports Categories</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-yellow-400 font-athletic">100+</div>
                  <div className="text-sm text-gray-400 font-athletic">Medals Awarded</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </LazySection>
      </div>
    </section>
  );
};

export default PratyanchaSecretaries;


