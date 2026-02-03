"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  StarIcon, 
  MusicalNoteIcon,
  SparklesIcon,
  PaintBrushIcon
} from "@heroicons/react/24/outline";

// Cultural secretaries data
const generalSecretaries = [
  { 
    id: 1, 
    name: "Parth Goswami", 
    image: "/images/GS_cultural/Parth.png",
    position: "Cultural Lead",
    department: "Arts",
    color: "#ff4ecd"
  },
  { 
    id: 2, 
    name: "Nuzhat Hussain", 
    image: "/images/GS_cultural/Nuzhat.png",
    position: "Events Manager",
    department: "Music",
    color: "#c084fc"
  },
  { 
    id: 3, 
    name: "Parth Vyas", 
    image: "/images/GS_cultural/ParthVyas.png",
    position: "Creative Director",
    department: "Dance",
    color: "#f472b6"
  },
  { 
    id: 4, 
    name: "Mandar Dudhale", 
    image: "/images/GS_cultural/Mandar.png",
    position: "Program Coordinator",
    department: "Theatre",
    color: "#a855f7"
  },
];

const GeneralSecretaries = () => {
  // Clean animation variants

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Clean 2D Background */}
      <div className="absolute inset-0">
        {/* Simple gradient background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-pink-900/10 via-black to-purple-900/10"
          animate={{
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Subtle floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${25 + (i % 2) * 50}%`,
              backgroundColor: generalSecretaries[i % generalSecretaries.length].color,
              opacity: 0.3
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      {/* Artistic Header with Cultural Theme */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-6">
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <MusicalNoteIcon className="w-12 h-12 text-pink-400" />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-400 to-rose-400 font-space-grotesk tracking-tight">
            ECHOES COLLECTIVE
          </h2>
          <motion.div
            animate={{ 
              rotate: [0, -15, 15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <SparklesIcon className="w-12 h-12 text-purple-400" />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block px-8 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 rounded-full border border-pink-400/30 mb-6"
        >
          <span className="text-sm font-bold text-pink-400 font-space-grotesk tracking-widest uppercase flex items-center gap-2">
            <SparklesIcon className="w-4 h-4" />
            Cultural Arts Division
            <SparklesIcon className="w-4 h-4" />
          </span>
        </motion.div>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto font-poppins font-light leading-relaxed">
          Meet the <span className="text-pink-400 font-semibold italic">creative visionaries</span> and 
          <span className="text-purple-400 font-semibold italic"> artistic maestros</span> who paint our campus with culture and creativity
        </p>
      </motion.div>

      {/* Clean Team Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto relative z-10"
      >
        {generalSecretaries.map((member) => (
          <motion.div
            key={member.id}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative"
          >
            {/* Professional Card */}
            <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/20 hover:border-gray-600/40 transition-all duration-300">
              {/* Subtle background gradient */}
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{ 
                  background: `linear-gradient(135deg, ${member.color}20, ${member.color}05)` 
                }}
              />
              
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Department badge */}
                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold font-orbitron"
                  style={{ 
                    backgroundColor: `${member.color}20`,
                    border: `1px solid ${member.color}40`,
                    color: member.color
                  }}
                >
                  {member.department}
                </div>
              </div>

              {/* Artistic Content */}
              <div className="p-6 text-center relative z-10">
                <h3 className="text-xl font-bold text-white mb-1 font-space-grotesk tracking-wide">
                  {member.name}
                </h3>
                <p 
                  className="text-sm font-semibold mb-4 font-poppins italic tracking-wide"
                  style={{ color: member.color }}
                >
                  {member.position}
                </p>
                
                {/* Artistic Skills/Achievements */}
                <div className="flex justify-center gap-2 mb-4">
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full border"
                    style={{ 
                      backgroundColor: `${member.color}15`,
                      borderColor: `${member.color}40`
                    }}
                  >
                    <StarIcon className="w-3 h-3" style={{ color: member.color }} />
                    <span className="text-xs font-bold font-space-grotesk" style={{ color: member.color }}>
                      CREATIVE
                    </span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full border"
                    style={{ 
                      backgroundColor: `${member.color}15`,
                      borderColor: `${member.color}40`
                    }}
                  >
                    <MusicalNoteIcon className="w-3 h-3" style={{ color: member.color }} />
                    <span className="text-xs font-bold font-space-grotesk" style={{ color: member.color }}>
                      ARTIST
                    </span>
                  </motion.div>
                </div>

                {/* Cultural Stats */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="bg-gray-800/20 rounded-lg p-2 border border-pink-500/20">
                    <div className="text-pink-400 font-bold font-space-grotesk">15+</div>
                    <div className="text-gray-400 font-poppins">Events</div>
                  </div>
                  <div className="bg-gray-800/20 rounded-lg p-2 border border-purple-500/20">
                    <div className="text-purple-400 font-bold font-space-grotesk">100+</div>
                    <div className="text-gray-400 font-poppins">Performances</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-16 text-center relative z-10"
      >
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-pink-900/20 via-purple-900/20 to-rose-900/20 rounded-3xl p-8 border border-pink-400/20 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 mb-6 font-space-grotesk text-center tracking-wide flex items-center justify-center gap-3">
              <MusicalNoteIcon className="w-8 h-8 text-pink-400" />
              CULTURAL SYMPHONY
              <PaintBrushIcon className="w-8 h-8 text-purple-400" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center mb-6">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-pink-400 font-space-grotesk">50+</div>
                <div className="text-sm text-gray-300 font-poppins">Cultural Events</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-400 font-space-grotesk">1000+</div>
                <div className="text-sm text-gray-300 font-poppins">Artists Showcased</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-rose-400 font-space-grotesk">25+</div>
                <div className="text-sm text-gray-300 font-poppins">Art Forms</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-fuchsia-400 font-space-grotesk">365</div>
                <div className="text-sm text-gray-300 font-poppins">Days of Culture</div>
              </div>
            </div>
            <p className="text-gray-300 font-poppins font-light leading-relaxed text-center italic">
              "Where <span className="text-pink-400 font-semibold">creativity meets passion</span> and 
              <span className="text-purple-400 font-semibold"> art becomes life</span> - our cultural collective 
              transforms dreams into spectacular reality."
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default GeneralSecretaries;
