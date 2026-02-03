"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  FaLaptopCode,
  FaPaintBrush,
  FaFutbol,
  FaBookOpen,
  FaMusic,
  FaMicrochip,
  FaRobot,
  FaTheaterMasks,
  FaCamera,
  FaUsers,
  FaArrowLeft,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaYoutube
} from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import {
  MagnifyingGlassIcon,
  UserGroupIcon,
  PencilIcon,
  SparklesIcon,
  HomeIcon,
  CalendarDaysIcon,
  TrophyIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/outline";

const Clubs = () => {
  const particlesRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const router = useRouter();

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [filterRef, filterInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [gridRef, gridInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [joinRef, joinInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [footerRef, footerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Enhanced particle system
  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 6 + 2;
      const startX = Math.random() * container.clientWidth;
      const startY = container.clientHeight + size;
      const colors = ['#ff4ecd', '#00d4ff', '#00ffcc', '#9333ea', '#f59e0b'];
      const color = colors[Math.floor(Math.random() * colors.length)];

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        top: ${startY}px;
        left: ${startX}px;
        opacity: ${Math.random() * 0.8 + 0.2};
        filter: blur(${Math.random() * 1 + 0.5}px);
        box-shadow: 0 0 ${size * 2}px ${color}80;
        pointer-events: none;
      `;

      container.appendChild(particle);

      const duration = Math.random() * 10 + 8;
      const drift = (Math.random() - 0.5) * 100;

      particle.animate([
        {
          transform: `translateY(0) translateX(0) scale(1)`,
          opacity: particle.style.opacity
        },
        {
          transform: `translateY(-${container.clientHeight + size * 2}px) translateX(${drift}px) scale(0.5)`,
          opacity: 0
        }
      ], {
        duration: duration * 1000,
        easing: 'ease-out',
        fill: 'forwards'
      }).onfinish = () => particle.remove();
    };

    const particleInterval = setInterval(createParticle, 200);
    return () => clearInterval(particleInterval);
  }, []);

  // Club categories with enhanced styling
  const categories = [
    {
      id: 'all',
      name: 'All Clubs',
      icon: <FaUsers className="w-5 h-5" />,
      color: 'from-purple-500 to-pink-500',
      description: 'Explore all student organizations'
    },
    {
      id: 'technical',
      name: 'Technical',
      icon: <FaLaptopCode className="w-5 h-5" />,
      color: 'from-blue-500 to-cyan-500',
      description: 'Coding, AI, Robotics & Tech Innovation'
    },
    {
      id: 'cultural',
      name: 'Cultural',
      icon: <FaPaintBrush className="w-5 h-5" />,
      color: 'from-pink-500 to-rose-500',
      description: 'Arts, Music, Drama & Creative Expression'
    },
    {
      id: 'sports',
      name: 'Sports',
      icon: <FaFutbol className="w-5 h-5" />,
      color: 'from-green-500 to-emerald-500',
      description: 'Athletics, Fitness & Team Sports'
    },
    {
      id: 'literary',
      name: 'Literary',
      icon: <FaBookOpen className="w-5 h-5" />,
      color: 'from-orange-500 to-yellow-500',
      description: 'Debate, Writing & Public Speaking'
    },
  ];

  // Enhanced clubs data
  const clubs = [
    {
      id: 1,
      name: 'CodeX',
      category: 'technical',
      description: 'The premier coding club for developers, hackers, and tech enthusiasts. We build innovative projects, compete in hackathons, and learn cutting-edge technologies together.',
      coordinator: {
        name: 'Aarav Sharma',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        role: 'Technical Lead',
        email: 'aarav@codex.club'
      },
      members: 85,
      events: 12,
      founded: '2019',
      icon: <FaLaptopCode className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      achievements: ['Winner - National Hackathon 2023', 'Best Technical Club Award'],
      upcomingEvents: ['Web Dev Workshop', 'AI/ML Bootcamp', 'Open Source Contribution Drive']
    },
    {
      id: 2,
      name: 'Robotics Club',
      category: 'technical',
      description: 'Design, build, and program robots for competitions and research projects. Learn about automation, AI, and mechanical engineering through hands-on experience.',
      coordinator: {
        name: 'Neha Patel',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80',
        role: 'Robotics Head',
        email: 'neha@robotics.club'
      },
      members: 45,
      events: 8,
      founded: '2020',
      icon: <FaRobot className="w-8 h-8" />,
      color: 'from-purple-500 to-blue-500',
      achievements: ['Robocon Finalist 2023', 'Innovation Award'],
      upcomingEvents: ['Robot Building Workshop', 'Arduino Basics', 'Competition Prep']
    },
    {
      id: 3,
      name: 'AI & ML Club',
      category: 'technical',
      description: 'Explore artificial intelligence and machine learning through workshops, research projects, and industry collaborations. Shape the future with AI.',
      coordinator: {
        name: 'Rohan Mehta',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        role: 'AI Researcher',
        email: 'rohan@aiml.club'
      },
      members: 60,
      events: 10,
      founded: '2021',
      icon: <FaMicrochip className="w-8 h-8" />,
      color: 'from-cyan-500 to-teal-500',
      achievements: ['Published 5 Research Papers', 'Industry Partnership Award'],
      upcomingEvents: ['Deep Learning Workshop', 'Computer Vision Project', 'Industry Talk Series']
    },
    {
      id: 4,
      name: 'Drama Club',
      category: 'cultural',
      description: 'Express yourself through theater, acting, and stage performance. Participate in college festivals, annual productions, and creative storytelling.',
      coordinator: {
        name: 'Priya Desai',
        image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80',
        role: 'Creative Director',
        email: 'priya@drama.club'
      },
      members: 35,
      events: 6,
      founded: '2018',
      icon: <FaTheaterMasks className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      achievements: ['Best Drama Performance 2023', 'Cultural Excellence Award'],
      upcomingEvents: ['Annual Play Auditions', 'Acting Workshop', 'Script Writing Session']
    },
    {
      id: 5,
      name: 'Music Club',
      category: 'cultural',
      description: 'For musicians, singers, and music lovers. Regular jam sessions, performances, workshops on various genres, and collaborative music creation.',
      coordinator: {
        name: 'Siddharth Kumar',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        role: 'Music Director',
        email: 'siddharth@music.club'
      },
      members: 50,
      events: 15,
      founded: '2017',
      icon: <FaMusic className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      achievements: ['Inter-College Music Fest Winner', 'Best Band Performance'],
      upcomingEvents: ['Open Mic Night', 'Music Production Workshop', 'Band Formation Meet']
    },
    {
      id: 6,
      name: 'Photography Club',
      category: 'cultural',
      description: 'Capture moments, learn advanced photography techniques, participate in photo walks, exhibitions, and visual storytelling projects.',
      coordinator: {
        name: 'Ananya Singh',
        image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
        role: 'Lead Photographer',
        email: 'ananya@photo.club'
      },
      members: 40,
      events: 9,
      founded: '2019',
      icon: <FaCamera className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      achievements: ['National Photography Contest Winner', 'Best Visual Documentation'],
      upcomingEvents: ['Nature Photography Walk', 'Portrait Workshop', 'Photo Exhibition']
    },
    {
      id: 7,
      name: 'Basketball Club',
      category: 'sports',
      description: 'For basketball enthusiasts of all skill levels. Regular practice sessions, inter-college tournaments, skill development, and team building.',
      coordinator: {
        name: 'Rajesh Kumar',
        image: 'https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80',
        role: 'Team Captain',
        email: 'rajesh@basketball.club'
      },
      members: 30,
      events: 18,
      founded: '2016',
      icon: <FaFutbol className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      achievements: ['Inter-College Champions 2023', 'Best Team Spirit Award'],
      upcomingEvents: ['Weekly Practice Sessions', 'Skills Training Camp', 'Tournament Prep']
    },
    {
      id: 8,
      name: 'Debating Society',
      category: 'literary',
      description: 'Hone your public speaking and argumentation skills. Participate in debates, elocution competitions, Model UN events, and intellectual discussions.',
      coordinator: {
        name: 'Divya Nair',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1361&q=80',
        role: 'Debate Secretary',
        email: 'divya@debate.club'
      },
      members: 55,
      events: 14,
      founded: '2015',
      icon: <FaBookOpen className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      achievements: ['National Debate Championship', 'Best Speaker Awards'],
      upcomingEvents: ['Weekly Debate Sessions', 'Public Speaking Workshop', 'Model UN Conference']
    },
  ];

  // Filter clubs based on active category
  const filteredClubs = activeCategory === 'all'
    ? clubs
    : clubs.filter(club => club.category === activeCategory);

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 0 30px rgba(255, 78, 205, 0.4)',
      transition: { duration: 0.3 }
    },
    tap: { scale: 0.95 }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative font-space-grotesk">
      {/* Enhanced Particle Background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none z-0" />

      {/* Enhanced Navigation */}
      <motion.div
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.button
          onClick={() => router.push('/')}
          className="flex items-center gap-3 px-6 py-3 bg-black/80 backdrop-blur-xl border border-white/20 text-white rounded-2xl hover:bg-white/10 transition-all duration-300 font-space-grotesk"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </motion.button>
      </motion.div>

      {/* Brand Label */}
      <motion.div
        className="fixed bottom-6 right-6 z-50 bg-black/80 backdrop-blur-xl border border-purple-500/30 px-6 py-3 text-sm font-medium text-purple-400 shadow-lg rounded-2xl font-space-grotesk"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="flex items-center gap-2">
          <SparklesIcon className="w-4 h-4" />
          Student Affairs IITRAM
        </div>
      </motion.div>

      {/* Enhanced Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative z-10 pt-32 pb-20 px-6 text-center"
        initial="hidden"
        animate={heroInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <motion.div
          className="max-w-6xl mx-auto"
          variants={childVariants}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 font-space-grotesk"
            style={{
              textShadow: '0 0 40px rgba(255, 78, 205, 0.3)'
            }}
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            DISCOVER CLUBS
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-inter"
            variants={childVariants}
          >
            Explore student-led communities at IITRAM. Find your passion, develop new skills,
            and connect with like-minded peers in our vibrant club ecosystem.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              { label: 'Active Clubs', value: '25+', icon: BuildingLibraryIcon },
              { label: 'Students', value: '500+', icon: UserGroupIcon },
              { label: 'Events/Year', value: '100+', icon: CalendarDaysIcon },
              { label: 'Awards Won', value: '50+', icon: TrophyIcon }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={childVariants}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2 font-space-grotesk">{stat.value}</div>
                <div className="text-gray-400 text-sm font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Enhanced Category Filter */}
      <motion.section
        ref={filterRef}
        className="relative z-10 py-8 px-6 bg-black/40 backdrop-blur-xl sticky top-0 border-y border-white/10"
        initial="hidden"
        animate={filterInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group px-6 py-4 rounded-2xl flex items-center gap-3 text-sm font-medium transition-all duration-300 relative overflow-hidden ${activeCategory === category.id
                    ? 'text-white shadow-2xl'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20'
                  }`}
                variants={childVariants}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Active background */}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex items-center gap-3">
                  {category.icon}
                  <div className="text-left">
                    <div className="font-semibold font-space-grotesk">{category.name}</div>
                    <div className="text-xs opacity-80 font-inter">{category.description}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Clubs Grid */}
      <motion.section
        ref={gridRef}
        className="relative z-10 py-20 px-6"
        initial="hidden"
        animate={gridInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={childVariants}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 font-space-grotesk">
              {activeCategory === 'all'
                ? 'All Student Clubs'
                : `${categories.find(c => c.id === activeCategory)?.name} Clubs`}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              {filteredClubs.length} club{filteredClubs.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {filteredClubs.map((club) => (
              <motion.div
                key={club.id}
                variants={childVariants}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-purple-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                {/* Club Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`p-4 rounded-2xl bg-gradient-to-r ${club.color} bg-opacity-20 shadow-lg`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {club.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 font-space-grotesk">{club.name}</h3>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-gray-300 text-sm capitalize border border-white/20 font-inter">
                          {club.category}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-400 font-inter">
                      <div>Est. {club.founded}</div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed font-inter">{club.description}</p>

                  {/* Club Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <UserGroupIcon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                      <div className="text-2xl font-bold text-white font-space-grotesk">{club.members}</div>
                      <div className="text-xs text-gray-400 font-inter">Members</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                      <CalendarDaysIcon className="w-5 h-5 mx-auto mb-2 text-cyan-400" />
                      <div className="text-2xl font-bold text-white font-space-grotesk">{club.events}</div>
                      <div className="text-xs text-gray-400 font-inter">Events</div>
                    </div>
                  </div>

                  {/* Coordinator */}
                  <div className="border-t border-white/10 pt-6 mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 font-space-grotesk">Club Coordinator</h4>
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-400/50"
                        whileHover={{ scale: 1.1 }}
                      >
                        <img
                          src={club.coordinator.image}
                          alt={club.coordinator.name}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div>
                        <p className="font-semibold text-white font-space-grotesk">{club.coordinator.name}</p>
                        <p className="text-sm text-gray-400 font-inter">{club.coordinator.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 font-space-grotesk">Recent Achievements</h4>
                    <div className="space-y-2">
                      {club.achievements.slice(0, 2).map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <TrophyIcon className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                          <span className="font-inter">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="px-8 pb-8">
                  <motion.button
                    className={`w-full py-4 rounded-2xl font-semibold text-white bg-gradient-to-r ${club.color} shadow-lg font-space-grotesk`}
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Join {club.name}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredClubs.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <MagnifyingGlassIcon className="w-20 h-20 text-purple-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-gray-300 mb-4 font-space-grotesk">No clubs found</h3>
              <p className="text-gray-500 font-inter">Try selecting a different category</p>
            </motion.div>
          )}
        </div>
      </motion.section>

      {/* How to Join Section */}
      <motion.section
        ref={joinRef}
        className="relative z-10 py-20 px-6 bg-gradient-to-b from-purple-900/10 to-transparent"
        initial="hidden"
        animate={joinInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={childVariants}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 font-space-grotesk">
              How to Join
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-6 rounded-full" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-inter">
              Follow these simple steps to become part of our vibrant club community
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
          >
            {[
              {
                step: '1',
                title: 'Explore & Discover',
                description: 'Browse through different clubs and find ones that match your interests and career goals.',
                icon: MagnifyingGlassIcon,
                color: 'from-pink-500 to-rose-500'
              },
              {
                step: '2',
                title: 'Attend Events',
                description: 'Visit club meetings, workshops, and events to experience the community and activities firsthand.',
                icon: UserGroupIcon,
                color: 'from-purple-500 to-violet-500'
              },
              {
                step: '3',
                title: 'Join & Contribute',
                description: 'Complete the registration process and start contributing to projects and club activities.',
                icon: PencilIcon,
                color: 'from-cyan-500 to-blue-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center hover:border-purple-400/30 transition-all duration-300"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.color} bg-opacity-20 flex items-center justify-center mx-auto mb-6`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </motion.div>

                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} text-white font-bold flex items-center justify-center mx-auto mb-6 text-xl font-space-grotesk`}>
                  {item.step}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white font-space-grotesk">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed font-inter">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Footer */}
      <motion.footer
        ref={footerRef}
        className="relative z-10 py-16 bg-black/80 backdrop-blur-xl border-t border-white/10"
        initial="hidden"
        animate={footerInView ? 'visible' : 'hidden'}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            variants={childVariants}
          >
            <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 font-space-grotesk">
              Student Clubs IITRAM
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto font-inter">
              Building communities, fostering innovation, and creating lifelong connections since 2015
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 mb-12"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
          >
            {[
              { icon: FaFacebook, color: 'hover:text-blue-500' },
              { icon: FaTwitter, color: 'hover:text-sky-400' },
              { icon: FaInstagram, color: 'hover:text-pink-500' },
              { icon: FaLinkedin, color: 'hover:text-blue-600' },
              { icon: FaYoutube, color: 'hover:text-red-500' }
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                className={`w-14 h-14 rounded-2xl bg-white/5 backdrop-blur-sm flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 border border-white/10 hover:border-white/30`}
                variants={childVariants}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="text-center text-gray-500 text-sm font-inter"
            variants={childVariants}
          >
            © {new Date().getFullYear()} Student Clubs, IITRAM. All rights reserved.
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Clubs;
