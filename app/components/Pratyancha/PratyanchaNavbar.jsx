"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import {
    HomeIcon,
    ArrowLeftIcon,
    TrophyIcon,
    CalendarDaysIcon,
    UserGroupIcon
} from "@heroicons/react/24/outline";
import MotionSensor from "../ui/MotionSensor";

const PratyanchaNavbar = ({ showBackButton = false }) => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const navOpacity = useTransform(scrollY, [0, 100], [0.9, 1]);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ opacity: navOpacity }}
            className={`fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 py-2 sm:py-3 transition-all duration-500 ${scrolled ? 'bg-[#111111]/90 backdrop-blur-3xl border-b border-white/20' : 'bg-[#111111]/60 backdrop-blur-xl'
                }`}
        >
            <div className="flex items-center justify-between max-w-7xl mx-auto gap-2">
                {/* Left Navigation */}
                <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 backdrop-blur-2xl rounded-lg sm:rounded-xl border transition-all duration-300 text-xs sm:text-sm font-athletic font-bold cursor-pointer"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            borderColor: 'rgba(255, 255, 255, 0.3)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(59, 130, 246, 0.2)';
                            e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        }}
                    >
                        <HomeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#F97316' }} />
                        <span className="hidden sm:inline" style={{ color: '#FFFFFF' }}>Home</span>
                    </Link>
                </motion.div>

                {/* Center Navigation - Logo/Brand */}
                <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-1.5 sm:py-2 backdrop-blur-2xl rounded-lg sm:rounded-xl border"
                    style={{
                        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(249, 115, 22, 0.3) 100%)',
                        borderColor: 'rgba(255, 255, 255, 0.4)'
                    }}
                >
                    <TrophyIcon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#F97316' }} />
                    <span className="text-sm sm:text-lg font-athletic font-black tracking-wider" style={{ color: '#FFFFFF' }}>
                        PRATYANCHA
                    </span>
                </motion.div>

                {/* Right Navigation - Events Button */}
                <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Link
                        href="#events"
                        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 backdrop-blur-2xl rounded-lg sm:rounded-xl border transition-all duration-300 text-xs sm:text-sm font-athletic font-bold cursor-pointer"
                        style={{
                            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.25) 0%, rgba(249, 115, 22, 0.25) 100%)',
                            borderColor: 'rgba(255, 255, 255, 0.3)'
                        }}
                    >
                        <CalendarDaysIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: '#F97316' }} />
                        <span className="hidden sm:inline" style={{ color: '#FFFFFF' }}>Events</span>
                    </Link>
                </motion.div>
            </div>
        </motion.nav>
    );
};

export default PratyanchaNavbar;


