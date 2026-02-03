"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  PhotoIcon,
  CalendarDaysIcon,
  UserGroupIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

const SmoothScrollNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: "home", icon: HomeIcon, label: "Home" },
    { id: "gallery", icon: PhotoIcon, label: "Gallery" },
    { id: "events", icon: CalendarDaysIcon, label: "Events" },
    { id: "secretaries", icon: UserGroupIcon, label: "Team" },
    { id: "contact", icon: PhoneIcon, label: "Contact" }
  ];

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 80;
          setIsVisible(window.scrollY > 200); // Show earlier for better UX

          // Find active section with optimized calculation
          const sections = navItems.map(item => ({
            id: item.id,
            element: document.getElementById(item.id)
          })).filter(section => section.element);

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.element.offsetTop <= scrollPosition) {
              setActiveSection(section.id);
              break;
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 60; // Reduced offset for smaller navbar
      
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40"
        >
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-2 shadow-2xl">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 mb-1 last:mb-0 group ${
                    isActive ? 'bg-blue-500/30' : 'hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon 
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'
                    }`} 
                  />
                  
                  {/* Tooltip */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                    className="absolute right-full mr-3 px-3 py-1 bg-black/80 backdrop-blur-sm rounded-lg text-xs text-white font-jersey whitespace-nowrap pointer-events-none"
                  >
                    {item.label}
                  </motion.div>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-blue-500/20 rounded-xl border border-blue-400/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SmoothScrollNav;