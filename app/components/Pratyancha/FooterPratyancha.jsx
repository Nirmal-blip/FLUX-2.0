"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon
} from "@heroicons/react/24/outline";
import SportsBackground from "../ui/SportsBackground";

export default function PratyanchaContactFooter() {
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

  return (
    <footer
      ref={ref}
      className="py-12 px-6 border-t font-athletic relative overflow-hidden"
      style={{ backgroundColor: '#0A0A0A', borderColor: 'rgba(208, 208, 208, 0.2)' }}
    >
      {/* Sports Arena Background */}
      <SportsBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-8 font-athletic"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold mb-2 font-athletic"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #3B82F6 50%, #60A5FA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-sm max-w-xl mx-auto font-athletic"
            style={{ color: '#FFFFFF' }}
          >
            Have questions about Pratyancha? We'd love to hear from you.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold mb-4 font-athletic" style={{ color: '#F4F4F4' }}>Venue Location</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-300 font-athletic">
                <MapPinIcon className="w-4 h-4" style={{ color: '#3B82F6' }} />
                <a 
                  href="https://maps.app.goo.gl/Qg1grxfmpQDvfEmi8?g_st=aw" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-athletic hover:text-blue-400 transition-colors underline decoration-blue-400/50 hover:decoration-blue-400 underline-offset-2" 
                  style={{ color: '#FFFFFF' }}
                >
                  IITRAM, Ahmedabad
                </a>
              </div>
             
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold mb-4 font-athletic" style={{ color: '#F4F4F4' }}>Follow Us</h3>
            <div className="flex gap-3">
              {[
                { 
                  name: "Facebook", 
                  href: "https://www.facebook.com/share/1BnddyXUoX/",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  ),
                  color: "hover:text-[#3B82F6] hover:bg-[#3B82F6]/10"
                },
                { 
                  name: "Instagram", 
                  href: "https://www.instagram.com/saciitram?igsh=MW1sdGwxMms0M28xaw==",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.315 0-.595-.122-.807-.315-.21-.21-.315-.49-.315-.807 0-.315.105-.595.315-.807.21-.21.49-.315.807-.315.315 0 .595.105.807.315.21.21.315.49.315.807 0 .315-.105.595-.315.807-.21.193-.49.315-.807.315zm-3.832 1.634c1.575 0 2.851 1.276 2.851 2.851s-1.276 2.851-2.851 2.851-2.851-1.276-2.851-2.851 1.276-2.851 2.851-2.851z"/>
                    </svg>
                  ),
                  color: "hover:text-[#F97316] hover:bg-[#F97316]/10"
                },
                { 
                  name: "LinkedIn", 
                  href: "https://www.linkedin.com/in/student-activity-center-iitram-2b80a331a",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                  color: "hover:text-[#0A66C2] hover:bg-[#0A66C2]/10"
                },
                { 
                  name: "YouTube", 
                  href: "https://youtube.com/@saciitram?si=dIP3z6Q6kusU4rhp",
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  ),
                  color: "hover:text-[#FF0000] hover:bg-[#FF0000]/10"
                }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Contact Form */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold mb-4 font-athletic" style={{ color: '#F4F4F4' }}>Quick Message</h3>
            <form className="space-y-3">
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: '#FFFFFF' }} />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full pl-10 pr-3 py-2 bg-white/5 border rounded-lg placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-all duration-300 backdrop-blur-sm text-sm font-athletic"
                  style={{ 
                    color: '#FFFFFF', 
                    borderColor: 'rgba(208, 208, 208, 0.3)',
                    '--tw-ring-color': '#3B82F6'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows="2"
                  className="w-full px-3 py-2 bg-white/5 border rounded-lg placeholder-gray-400 focus:outline-none focus:bg-white/10 transition-all duration-300 resize-none backdrop-blur-sm text-sm font-athletic"
                  style={{ 
                    color: '#FFFFFF', 
                    borderColor: 'rgba(208, 208, 208, 0.3)'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#3B82F6'}
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm border font-athletic text-sm"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #F97316 100%)',
                  color: 'white',
                  borderColor: 'rgba(59, 130, 246, 0.2)',
                  boxShadow: '0 8px 32px rgba(59, 130, 246, 0.25)'
                }}
                onMouseEnter={(e) => e.target.style.boxShadow = '0 12px 40px rgba(59, 130, 246, 0.4)'}
                onMouseLeave={(e) => e.target.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.25)'}
              >
                <PaperAirplaneIcon className="w-3 h-3" />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="pt-4 border-t border-gray-800 text-center font-athletic"
        >
          <p className="text-xs font-athletic" style={{ color: '#FFFFFF' }}>
            2026 Pratyancha Sports Festival. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}


