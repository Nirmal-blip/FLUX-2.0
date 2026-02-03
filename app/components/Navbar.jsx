"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon,
  SparklesIcon,
  BuildingLibraryIcon
} from "@heroicons/react/24/outline";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => {
      sections.forEach((s) => observer.unobserve(s));
    };
  }, []);

  // Scroll handler
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
      setActiveSection(id);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/80 backdrop-blur-xl py-3 border-b border-transparent"
          : "bg-transparent py-5"
      )}
      style={{
        borderBottomImage: scrolled ? "linear-gradient(to right, #ec4899, #8b5cf6, #06b6d4) 1" : "none"
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* Logo Area */}
          <div
            onClick={() => handleScrollTo("home")}
            className="group cursor-pointer flex items-center gap-3"
          >
            <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-gradient-to-br from-pink-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]">
              <img
                src="../logo/2logo.png"
                alt="SAC Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="font-space-grotesk font-bold text-lg tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400 hidden sm:block group-hover:text-pink-400 transition-colors">
              SAC <span className="text-white/40 font-normal">IITRAM</span>
            </span>
          </div>

          {/* Desktop Menu - Clean & Pill Styled */}
          <div className="hidden md:flex items-center gap-1 bg-white/5 backdrop-blur-md rounded-full px-2 py-1.5 border border-white/5 shadow-lg shadow-purple-500/10">
            <NavItem
              text="Home"
              active={activeSection === "home"}
              onClick={() => handleScrollTo("home")}
              color="from-pink-500 to-rose-500"
            />
            <NavItem
              text="About"
              active={activeSection === "about"}
              onClick={() => handleScrollTo("about")}
              color="from-purple-500 to-indigo-500"
            />
            <NavItem
              text="Activities"
              active={activeSection === "activities"}
              onClick={() => handleScrollTo("activities")}
              color="from-cyan-500 to-blue-500"
            />

            <NavItem
              text="Contact"
              active={activeSection === "contact"}
              onClick={() => handleScrollTo("contact")}
              color="from-orange-500 to-red-500"
            />
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-pink-400 transition-colors"
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden"
            >
              <div className="p-4 space-y-2">
                <MobileNavItem
                  text="Home"
                  icon={HomeIcon}
                  onClick={() => handleScrollTo("home")}
                  color="text-pink-400"
                />
                <MobileNavItem
                  text="About"
                  icon={InformationCircleIcon}
                  onClick={() => handleScrollTo("about")}
                  color="text-purple-400"
                />
                <MobileNavItem
                  text="Activities"
                  icon={SparklesIcon}
                  onClick={() => handleScrollTo("activities")}
                  color="text-cyan-400"
                />

                <MobileNavItem
                  text="Contact"
                  icon={EnvelopeIcon}
                  onClick={() => handleScrollTo("contact")}
                  color="text-orange-400"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Simplified Clean Nav Item with Gradient bg
const NavItem = ({ text, active, onClick, isExternal = false, color }) => (
  <button
    onClick={onClick}
    className={cn(
      "relative px-5 py-2 rounded-full text-sm font-medium font-space-grotesk transition-all duration-300 overflow-hidden",
      active
        ? "text-white shadow-lg scale-105"
        : "text-gray-400 hover:text-white"
    )}
  >
    {active && (
      <motion.div
        layoutId="activeTab"
        className={`absolute inset-0 bg-gradient-to-r ${color} opacity-100 -z-10`}
        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
      />
    )}
    <span className="relative z-10">{text}</span>
    {isExternal && <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-400 rounded-full" />}
  </button>
);

const MobileNavItem = ({ text, icon: Icon, onClick, color }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-3 w-full p-3 rounded-xl text-gray-300 hover:bg-white/5 transition-all font-space-grotesk hover:${color}`}
  >
    <Icon className={`w-5 h-5 ${color}`} />
    <span className="font-medium">{text}</span>
  </button>
);

export default Navbar;
