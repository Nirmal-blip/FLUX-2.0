"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  TrophyIcon,
  BookOpenIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';
import { cn } from '../../lib/utils';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clubs = [
    {
      title: 'Sports & Games',
      description: 'Promoting physical well-being and teamwork through various athletic activities.',
      icon: TrophyIcon,
      features: ['Cricket', 'Football', 'Basketball'],
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-cyan-400',
      borderColor: 'group-hover:border-cyan-500/50'
    },
    {
      title: 'Literary & Cultural',
      description: 'Nurturing creativity, expression, and cultural exchange through arts.',
      icon: BookOpenIcon,
      features: ['Drama', 'Music', 'Dance'],
      color: 'from-purple-500 to-pink-500',
      iconColor: 'text-pink-400',
      borderColor: 'group-hover:border-pink-500/50'
    },
    {
      title: 'Science & Technology',
      description: 'Encouraging innovation, research, and technical exploration.',
      icon: BeakerIcon,
      features: ['Robotics', 'AI/ML', 'Web Dev'],
      color: 'from-emerald-500 to-green-500',
      iconColor: 'text-emerald-400',
      borderColor: 'group-hover:border-emerald-500/50'
    },
  ];

  const stats = [
    { value: '500+', label: 'Active Members', color: 'text-pink-400' },
    { value: '50+', label: 'Annual Events', color: 'text-purple-400' },
    { value: '25+', label: 'Student Clubs', color: 'text-cyan-400' },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-black py-24 px-6 overflow-hidden"
    >
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-3 py-1 mb-4 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-mono font-bold tracking-widest uppercase">
            WHO WE ARE
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 font-space-grotesk">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">SAC</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed font-inter">
            SAC empowers students to explore and grow their interests by joining a wide variety of clubs and groups.
            Our vibrant club culture is a hallmark of IITRAM.
          </p>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-y border-white/10 py-10 mb-20 bg-white/5 rounded-2xl backdrop-blur-sm"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center py-4 md:py-0 group">
              <div className={`text-4xl font-bold font-space-grotesk mb-1 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest font-mono">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Club Domains Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {clubs.map((club, index) => (
            <div
              key={index}
              className={`group p-8 bg-zinc-900/50 border border-white/10 ${club.borderColor} rounded-3xl transition-all duration-300 hover:bg-zinc-900 hover:shadow-2xl hover:shadow-${club.color.split('-')[1]}-500/10 relative overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${club.color} opacity-10 blur-2xl rounded-bl-full group-hover:opacity-20 transition-opacity`} />

              <div className={`mb-6 p-4 rounded-2xl bg-white/5 w-fit border border-white/5 ${club.iconColor} group-hover:bg-white/10 transition-colors`}>
                <club.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 font-space-grotesk group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                {club.title}
              </h3>

              <p className="text-gray-400 mb-6 font-inter leading-relaxed text-sm h-16">
                {club.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {club.features.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-bold text-gray-300 bg-black/40 rounded-full border border-white/10 group-hover:border-white/20">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
