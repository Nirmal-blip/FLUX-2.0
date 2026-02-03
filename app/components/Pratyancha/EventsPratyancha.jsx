"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";

import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  TrophyIcon,
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  BuildingOfficeIcon,
  HomeIcon,
  CurrencyRupeeIcon,
  SparklesIcon,
  UserGroupIcon
} from "@heroicons/react/24/outline";
import LazyImage from "../ui/LazyImage";
import LazySection from "../ui/LazySection";
import { ClipLoader } from "react-spinners";
import SportsBackground from "../ui/SportsBackground";

export default function PratyanchaEvents() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [loadingStates, setLoadingStates] = useState({});
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const handleRegisterClick = (eventName) => {
    setLoadingStates(prev => ({ ...prev, [eventName]: true }));

    // Determine the route based on event name
    const getRoute = (name) => {
      switch (name) {
        case "Futsal": return "/pratyancha-fest-registration/futsal";
        case "Volleyball Boy's": return "/pratyancha-fest-registration/volleyball";
        case "Kabaddi": return "/pratyancha-fest-registration/kabaddi";
        case "Table Tennis": return "/pratyancha-fest-registration/table-tennis";
        case "E-Sports": return "/pratyancha-fest-registration/esports";
        case "Volleyball Girl's": return "/pratyancha-fest-registration/volleyball-girls";
        default: return "/pratyancha-fest-registration";
      }
    };

    // Navigate after a smooth delay
    setTimeout(() => {
      router.push(getRoute(eventName));
    }, 1000);
  };

  const events = [
    {
      name: "Volleyball Boy's",
      description: "Dynamic spikes and blocks in this fast-paced volleyball competition. Showcase your team's coordination and athleticism.",
      src: "/images/pratyanchaImages/volleyball.jpg",
      date: "Feb 6-8",
      venue: "Volleyball Court, IITRAM",
      registrationFee: "Rs. 2,500 / team",
      prizeMoney: "Rs. 4,000 + Trophy",
      timing: "4 PM Afterwards",
      teams: "Multiple Teams",
      duration: "3 Days",
      coordinator: "Yaman-8209775672",
      icon: TrophyIcon
    },
    {
      name: "Volleyball Girl's",
      description: "Dynamic spikes and blocks in this fast-paced volleyball competition. Showcase your team's coordination and athleticism.",
      src: "/images/pratyanchaImages/Volleyballgirls.jpg",
      date: "Feb 6-8",
      venue: "Volleyball Court, IITRAM",
      registrationFee: "Rs. 2,000 / team",
      prizeMoney: "Rs. 4,000 + Trophy",
      timing: "4 PM Afterwards",
      teams: "Multiple Teams",
      duration: "3 Days",
      coordinator: "Yaman-8209775672",
      icon: TrophyIcon
    },
    {
      name: "Futsal",
      description: "Fast-paced indoor football action. Experience the thrill of 6-a-side football with skill, speed, and strategy.",
      src: "/images/pratyanchaImages/football.jpg",
      date: "Feb 6-8",
      venue: "IITRAM Residential Hostel",
      registrationFee: "Rs. 3,000 / team",
      prizeMoney: "Rs. 5,000 + Trophy",
      timing: "6 PM Afterwards",
      teams: "Multiple Teams",
      duration: "3 Days",
      coordinator: "Shivam-7058038272",
      icon: TrophyIcon
    },
    {
      name: "Kabaddi",
      description: "Traditional Indian sport showcasing strength, strategy, and breath control. Experience the intensity of raiding and defending.",
      src: "/images/pratyanchaImages/kabadi.jpg",
      date: "Feb 6-8",
      venue: "Kabaddi Court, IITRAM",
      registrationFee: "Rs. 3,000 / team",
      prizeMoney: "Rs. 5,000 + Trophy",
      timing: "5 PM Afterwards",
      teams: "Multiple Teams",
      duration: "3 Days",
      coordinator: "Bhupendra-7073939553",
      icon: TrophyIcon
    },
    {
      name: "Table Tennis",
      description: "Fast-paced rallies and precision shots in this indoor racquet sport. Test your reflexes and technique.",
      src: "/images/pratyanchaImages/tt.jpeg",
      date: "Feb 6-8",
      venue: "L506",
      registrationFee: "Rs. 2,000 / team",
      prizeMoney: "Rs. 3,000 + Trophy",
      timing: "TBA",
      teams: "Multiple Teams",
      duration: "3 Days",
      coordinator: "Chinmay-9537113593",
      icon: TrophyIcon
    },
    {
      name: "E-Sports",
      description: "Competitive gaming at its finest with top players battling in digital arenas. Showcase your gaming skills and strategy.",
      src: "/images/pratyanchaImages/esports.jpg",
      date: "Feb 6-8",
      venue: "TBA",
      registrationFee: "Rs. 200 / team",
      prizeMoney: "Rs. 1,000 + Trophy",
      timing: "TBA",
      teams: "Multiple Teams",
      duration: "3 Days",
      coordinator: "Parth Raval-6352657224",
      icon: TrophyIcon
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -12,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 relative overflow-hidden font-athletic"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Sports Arena Background */}
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
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
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.15) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.4)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)'
            }}
          >
            <CalendarDaysIcon className="w-5 h-5" style={{ color: '#3B82F6' }} />
            <span className="text-base font-athletic team-name tracking-wider" style={{ color: '#3B82F6' }}>SPORTS EVENTS</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-athletic athletic-heading mb-8 tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #3B82F6 50%, #60A5FA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Sports Events
          </motion.h2>



          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light font-athletic"
          >
            Join us for <span className="font-athletic athletic-title" style={{ color: '#3B82F6' }}>three days</span> of intense competition across
            <span className="font-athletic athletic-title" style={{ color: '#60A5FA' }}> multiple sports disciplines</span>
          </motion.p>
        </motion.div>

        {/* Events Grid - Enhanced */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, i) => {
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="h-full"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/70 via-gray-800/50 to-gray-900/70 border border-gray-600/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-500/30">
                  {/* Enhanced Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/8 group-hover:to-cyan-500/6 transition-all duration-500" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent" />

                  {/* Image Section */}
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <LazyImage
                      src={event.src}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                    {/* Date Badge */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                      className="absolute top-2 sm:top-4 right-2 sm:right-4"
                    >
                      <div className="px-2 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-blue-500/95 to-cyan-500/95 backdrop-blur-md rounded-full shadow-lg border border-blue-400/40">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <CalendarDaysIcon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white font-athletic" />
                          <span className="text-[10px] sm:text-xs font-bold text-white font-athletic tracking-wide">{event.date}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Sport Name Badge */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4"
                    >
                      <div className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black/60 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/20">
                        <h3 className="text-base sm:text-lg font-bold text-white font-athletic tracking-wide">
                          {event.name}
                        </h3>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 flex flex-col p-6">
                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                      className="text-gray-300 text-sm mb-6 leading-relaxed font-athletic flex-1"
                    >
                      {event.description}
                    </motion.p>

                    {/* Event Details Grid */}
                    <div className="space-y-3 mb-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.4 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-400/30">
                          <MapPinIcon className="w-4 h-4 text-blue-400 font-athletic" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-400 font-semibold mb-1 font-athletic uppercase tracking-wider">Venue</div>
                          <div className="text-sm text-white font-medium font-athletic break-words">{event.venue}</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.5 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-cyan-500/20 border border-cyan-400/30">
                          <ClockIcon className="w-4 h-4 text-cyan-400 font-athletic" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-400 font-semibold mb-1 font-athletic uppercase tracking-wider">Timing</div>
                          <div className="text-sm text-white font-medium font-athletic">{event.timing}</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.6 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-yellow-500/20 border border-yellow-400/30">
                          <CurrencyRupeeIcon className="w-4 h-4 text-yellow-400 font-athletic" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-400 font-semibold mb-1 font-athletic uppercase tracking-wider">Registration Fee</div>
                          <div className="text-sm text-white font-medium font-athletic">{event.registrationFee}</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 + 0.7 }}
                        className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-400/30">
                          <UserGroupIcon className="w-4 h-4 text-purple-400 font-athletic" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-gray-400 font-semibold mb-1 font-athletic uppercase tracking-wider">Sport Coordinator</div>
                          <div className="text-sm text-white font-medium font-athletic break-words">{event.coordinator}</div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Register Button */}
                    <div className="relative z-10">
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.7 }}
                        whileHover={{
                          scale: loadingStates[event.name] ? 1 : 1.05,
                          boxShadow: loadingStates[event.name] ? "none" : "0 15px 35px rgba(59, 130, 246, 0.4)"
                        }}
                        whileTap={{ scale: loadingStates[event.name] ? 1 : 0.95 }}
                        onClick={() => handleRegisterClick(event.name)}
                        disabled={loadingStates[event.name]}
                        className={`w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-3 font-athletic tracking-wider uppercase shadow-xl border-2 ${loadingStates[event.name]
                          ? 'cursor-not-allowed opacity-60 bg-gray-600 border-gray-500 text-gray-300'
                          : 'cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 border-blue-400 text-white shadow-blue-500/25'
                          }`}
                        style={{
                          background: loadingStates[event.name]
                            ? 'linear-gradient(135deg, #6B7280 0%, #4B5563 100%)'
                            : 'linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)',
                          borderColor: loadingStates[event.name] ? '#6B7280' : '#60A5FA',
                          color: '#FFFFFF',
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                          pointerEvents: 'auto'
                        }}
                      >
                        {loadingStates[event.name] ? (
                          <>
                            <ClipLoader
                              color="#FFFFFF"
                              size={20}
                              speedMultiplier={1.2}
                            />
                            <span className="text-white font-athletic athletic-heading">Opening Registration...</span>
                          </>
                        ) : (
                          <>
                            <TrophyIcon className="w-5 h-5 text-white drop-shadow-sm font-athletic" />
                            <span className="text-white font-athletic athletic-heading">Register Now</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Information Section */}
        <LazySection className="mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Red Bull Sponsorship */}
            {/* <motion.div
              variants={itemVariants}
              className="p-8 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/15 border border-blue-400/40 backdrop-blur-sm shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-white font-athletic flex items-center justify-center gap-3">
                <TrophyIcon className="w-6 h-6 text-blue-400 font-athletic" />
                OFFICIAL ENERGY PARTNER
              </h3>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-white/10 flex items-center justify-center border border-blue-400/40 shadow-lg">
                  <img
                    src="/images/pratyanchaImages/redbull.png"
                    alt="Red Bull - Official Energy Partner"
                    className="w-16 h-16 object-contain"
                  />
                </div>

                <div className="text-center md:text-left font-athletic">
                  <h4 className="text-3xl font-bold text-white mb-2 font-athletic tracking-wide">
                    RED BULL
                  </h4>
                  <p className="text-gray-300 font-athletic leading-relaxed max-w-md">
                    <span className="text-blue-300 font-athletic athletic-title">Official Energy Partner</span> powering athletes throughout all sporting events at Pratyancha
                  </p>
                  <div className="mt-3 text-sm text-blue-300 font-athletic font-medium flex items-center justify-center md:justify-start gap-2">
                    <span font-athletic>GIVES YOU WINGS</span>
                  </div>
                </div>
              </div>
            </motion.div> */}

            {/* Facilities & Requirements */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Facilities */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xl font-bold text-blue-400 mb-4 font-athletic flex items-center gap-2">
                  <BuildingOfficeIcon className="w-5 h-5" />
                  Facilities Available
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300 text-sm font-athletic">
                    <span className="text-blue-400 font-athletic athletic-heading">•</span>
                    Changing room facility
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm font-athletic">
                    <span className="text-blue-400 font-athletic athletic-heading">•</span>
                    Stalls for refreshments
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm font-athletic">
                    <span className="text-blue-400 font-athletic athletic-heading">•</span>
                    Professional referees
                  </li>
                </ul>
              </div>

              {/* Requirements */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="text-xl font-bold text-cyan-400 mb-4 font-athletic flex items-center gap-2">
                  <HomeIcon className="w-5 h-5" />
                  Accommodation
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-300 text-sm font-athletic">
                    <span className="text-cyan-400 font-athletic athletic-heading">•</span>
                    Night stay available for players from other colleges
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm font-athletic">
                    <span className="text-cyan-400 font-athletic athletic-heading">•</span>
                    Comfortable hostel facilities
                  </li>
                  <li className="flex items-center gap-2 text-gray-300 text-sm font-athletic">
                    <span className="text-cyan-400 font-athletic athletic-heading">•</span>
                    Secure accommodation arrangements
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </LazySection>
      </div>
    </section>
  );
}


