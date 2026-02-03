"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  UsersIcon,
  CalendarDaysIcon,
  BuildingLibraryIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { cn } from '../../lib/utils';

const SACStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    {
      title: 'Active Members',
      value: '2,000+',
      description: 'Engaged Students',
      icon: UsersIcon,
      color: 'text-pink-500',
      bg: 'bg-pink-500/10'
    },
    {
      title: 'Yearly Events',
      value: '50+',
      description: 'Programs & Activities',
      icon: CalendarDaysIcon,
      color: 'text-purple-500',
      bg: 'bg-purple-500/10'
    },
    {
      title: 'Student Clubs',
      value: '10',
      description: 'Vibrant Communities',
      icon: BuildingLibraryIcon,
      color: 'text-cyan-500',
      bg: 'bg-cyan-500/10'
    },
    {
      title: 'Years Active',
      value: '10+',
      description: 'Of Excellence',
      icon: ClockIcon,
      color: 'text-green-500',
      bg: 'bg-green-500/10'
    },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-24 bg-black text-white overflow-hidden"
    >
      {/* Subtle Background Pattern with Color */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Text Side */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-cyan-500" />
              <h2 className="text-sm font-bold tracking-[0.2em] text-cyan-500 uppercase font-mono">
                OUR MISSION
              </h2>
            </div>

            <h1 className="text-4xl md:text-5xl font-black mb-6 font-space-grotesk leading-tight">
              Empowering students to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">create, lead, and innovate.</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed font-inter border-l-2 border-white/10 pl-6">
              We provide the platform, resources, and community for every student to discover their potential outside the classroom. From technical workshops to cultural festivals, SAC is the heartbeat of campus innovation.
            </p>
          </motion.div>

          {/* Stats Grid Side */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/20 hover:bg-zinc-900/80 transition-all duration-300 relative overflow-hidden"
              >
                {/* Hover Gradient */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-white to-transparent`} />

                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="w-6 h-6" />
                </div>

                <div className={`text-3xl font-bold font-space-grotesk mb-1 ${stat.color} brightness-125`}>{stat.value}</div>
                <div className="text-sm text-gray-400 font-inter font-medium">{stat.title}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SACStats;
