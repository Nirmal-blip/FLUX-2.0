"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import useSound from "use-sound"; 
import { 
  ArrowLeft, ArrowRight, User, Users, Mail, Phone, Zap, 
  Shield, CheckCircle, Trash2, Trophy, Banknote, Target, Crosshair
} from "lucide-react";
import FluxBackground from "../../components/Flux/FluxBackground";
import { EVENT_PROTOCOLS, DEFAULT_PROTOCOL } from "../protocols";

export default function RegistrationClient() {
    const params = useParams();
    const router = useRouter();
    const rawSlug = params.slug?.toString();
    const eventSlug = rawSlug?.replace(/-/g, ' ').toUpperCase() || "EVENT";

    const [playAlert] = useSound('/sounds/repulsor-blast.mp3', { volume: 0.5 });

    const protocol = EVENT_PROTOCOLS[rawSlug] || DEFAULT_PROTOCOL;
    const isSolo = protocol.type === "SOLO";

    const getHeroConfig = (slug) => {
        const s = slug.toLowerCase();
        let config = {
            left: { img: "/heroes/4.png", name: "CAPTAIN AMERICA", glow: "rgba(59, 130, 246, 0.4)" },
            right: { img: "/heroes/1.png", name: "IRON MAN", glow: "rgba(239, 68, 68, 0.4)" }
        };

        if (s.includes("dsa") || s.includes("debugging") || s.includes("hackathon") || s.includes("free-fire") || s.includes("bgmi")) {
            config.right = { img: "/heroes/1.png", name: "IRON MAN", glow: "rgba(239, 68, 68, 0.5)" };
            config.left = { img: "/heroes/2.png", name: "BLACK PANTHER", glow: "rgba(168, 85, 247, 0.4)" };
        } 
        else if (s.includes("scavenger") || s.includes("bridge") || s.includes("robo") || s.includes("stock") || s.includes("photography")) {
            config.right = { img: "/heroes/3.png", name: "SPIDER-MAN", glow: "rgba(255, 50, 50, 0.5)" };
            config.left = { img: "/heroes/4.png", name: "CAPTAIN AMERICA", glow: "rgba(59, 130, 246, 0.4)" };
        }
        else if (s.includes("startup") || s.includes("pitch") || s.includes("cad") || s.includes("ui-ux") || s.includes("circuit") || s.includes("iot") || s.includes("artist") || s.includes("performance") || s.includes("dj-night")) {
            config.right = { img: "/heroes/5.png", name: "THOR", glow: "rgba(34, 211, 238, 0.5)" };
            config.left = { img: "/heroes/6.png", name: "DR STRANGE", glow: "rgba(245, 158, 11, 0.4)" };
        }
        return config;
    };

    const heroes = getHeroConfig(rawSlug || "");

    useEffect(() => {
        playAlert();
        const triggerOnInteraction = () => playAlert();
        window.addEventListener('click', triggerOnInteraction, { once: true });
        return () => window.removeEventListener('click', triggerOnInteraction);
    }, [playAlert]);

    const [formData, setFormData] = useState({ 
        teamName: "", leaderName: "", leaderEmail: "", leaderPhone: "", members: [] 
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => { setIsSuccess(true); setIsSubmitting(false); }, 2000); 
    };

    if (isSuccess) return <SuccessScreen />;

    return (
        <div className="min-h-screen text-white font-rajdhani relative bg-[#02060a] overflow-x-hidden selection:bg-cyan-500 selection:text-black">
            {/* Flux Background */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <FluxBackground />
            </div>

            {/* --- HEROES CONTAINER (RESPONSIVE) --- */}
            <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
                {/* LEFT HERO: Only on Desktop */}
                <motion.div 
                    key={`${heroes.left.img}-left`}
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 0.7, x: 0, y: [0, 15, 0] }}
                    transition={{ x: { duration: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute bottom-0 left-[-5%] hidden xl:block"
                >
                    <img 
                        src={heroes.left.img} 
                        alt={heroes.left.name} 
                        className="h-[80vh] w-auto object-contain brightness-75 contrast-125"
                        style={{ filter: `drop-shadow(0 0 20px ${heroes.left.glow})` }}
                    />
                </motion.div>

                {/* RIGHT HERO: Becomes background watermark on mobile, side-hero on desktop */}
                <motion.div 
                    key={`${heroes.right.img}-right`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ 
                        opacity: 0.7, 
                        x: 0, 
                        y: [0, -15, 0] 
                    }}
                    transition={{ x: { duration: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                    className="absolute bottom-[-5%] right-[-15%] md:right-[-5%] md:bottom-0"
                >
                    <img 
                        src={heroes.right.img} 
                        alt={heroes.right.name} 
                        className="h-[45vh] md:h-[80vh] w-auto object-contain brightness-50 md:brightness-90 opacity-30 md:opacity-100"
                        style={{ filter: `drop-shadow(0 0 25px ${heroes.right.glow})` }}
                    />
                </motion.div>
            </div>

            {/* --- MAIN INTERFACE --- */}
            <div className="relative z-30 flex flex-col items-center min-h-screen px-4 py-8 md:px-6 md:py-16">
                
                {/* Header Section */}
                <div className="w-full max-w-4xl flex flex-col gap-6 md:gap-8 mb-8">
                    <button 
                        onClick={() => router.push('/Flux')} 
                        className="w-fit flex items-center gap-2 text-cyan-500 hover:text-white transition-colors font-mono text-xs uppercase tracking-widest group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 
                        Abort sequence
                    </button>

                    <div className="border-b border-white/10 pb-6 text-center md:text-left">
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter italic bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-600 leading-tight"
                        >
                            {eventSlug}
                        </motion.h1>
                    </div>
                </div>

                {/* Registration Form Container */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-4xl bg-black/80 md:bg-black/70 backdrop-blur-2xl border border-cyan-500/20 p-5 sm:p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative rounded-lg"
                >
                    {/* Corner accents - hidden on smallest devices to save space */}
                    <div className="hidden sm:block absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/40" />
                    <div className="hidden sm:block absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/40" />

                    <form onSubmit={handleSubmit} className="relative z-10 space-y-8 md:space-y-12">
                        <div className="space-y-8">
                            <SectionLabel title="Step 01 // Biometric Identification" />
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                                {!isSolo && (
                                    <div className="md:col-span-2">
                                        <InputGroup label="SQUAD DESIGNATION" name="teamName" value={formData.teamName} onChange={handleInputChange} placeholder="TEAM NAME" icon={Shield} />
                                    </div>
                                )}
                                <InputGroup label="AGENT FULL NAME" name="leaderName" value={formData.leaderName} onChange={handleInputChange} placeholder="IDENTITY" icon={User} />
                                <InputGroup label="SECURE COMM FREQUENCY" name="leaderEmail" value={formData.leaderEmail} onChange={handleInputChange} placeholder="AGENT@STARK.COM" icon={Mail} />
                                <div className="md:col-span-2">
                                    <InputGroup label="COMM LINK (PHONE)" name="leaderPhone" value={formData.leaderPhone} onChange={handleInputChange} placeholder="10 DIGIT ACCESS CODE" icon={Phone} />
                                </div>
                            </div>
                        </div>
                        
                        <div className="pt-4 flex flex-col items-center md:items-start gap-4">
                            <button 
                                type="submit" 
                                className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-500 active:scale-95 text-black font-black py-4 px-10 md:px-16 tracking-widest uppercase transition-all flex items-center justify-center gap-3 text-sm md:text-base group"
                            >
                                {isSubmitting ? 'Transmitting...' : 'Initiate Registration'}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-[10px] md:text-xs font-mono text-gray-500 uppercase tracking-widest">
                                encrypted connection secure // stark industries v.26.0
                            </p>
                        </div>
                    </form>
                </motion.div>
            </div>

            {/* --- LOADING OVERLAY --- */}
            <AnimatePresence>
                {isSubmitting && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/95 flex flex-col items-center justify-center p-6 text-center">
                        <div className="relative mb-6">
                            <Crosshair className="w-16 h-16 text-red-500 animate-pulse" />
                            <div className="absolute inset-[-10px] border border-cyan-500/30 rounded-full animate-ping" />
                        </div>
                        <h2 className="text-xl md:text-2xl font-black text-white tracking-[0.4em] uppercase italic">
                            Uploading to Mainframe...
                        </h2>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Helper Components
function SectionLabel({ title }) { 
    return (
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-600 rotate-45 shrink-0" />
            <h3 className="text-xs sm:text-sm md:text-lg font-bold text-white tracking-[0.2em] uppercase">{title}</h3>
            <div className="h-[1px] bg-white/10 flex-1" />
        </div>
    ); 
}

function InputGroup({ label, name, value, onChange, placeholder, icon: Icon }) { 
    return (
        <div className="relative z-50 flex-1 w-full">
            <label className="block text-[9px] md:text-[10px] font-mono text-cyan-500/70 mb-2 uppercase tracking-widest">{label}</label>
            <div className="flex items-center border-b border-white/20 focus-within:border-cyan-500 transition-colors group">
                <Icon className="w-4 h-4 mr-3 text-gray-600 group-focus-within:text-cyan-500" />
                <input 
                    name={name} 
                    value={value} 
                    onChange={onChange} 
                    placeholder={placeholder} 
                    className="w-full bg-transparent py-3 md:py-4 text-white caret-cyan-500 focus:outline-none uppercase font-bold text-sm md:text-lg placeholder:text-gray-700" 
                />
            </div>
        </div>
    ); 
}

function SuccessScreen() { 
    return (
        <div className="min-h-screen bg-[#02060a] flex items-center justify-center text-center p-4 selection:bg-green-500 selection:text-black">
            <div className="max-w-md w-full border border-cyan-500/30 p-8 sm:p-12 bg-black/70 backdrop-blur-3xl rounded-lg">
                <CheckCircle className="w-16 h-16 md:w-20 md:h-20 text-green-500 mx-auto mb-6 md:mb-8 animate-bounce" />
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter mb-4">Mission Accomplished</h2>
                <p className="text-xs md:text-sm font-mono text-gray-400 uppercase tracking-widest mb-8">Data packet verified and logged in secure database.</p>
                <button 
                    onClick={() => window.location.href = '/Flux'} 
                    className="w-full bg-white hover:bg-cyan-500 text-black font-black py-4 uppercase tracking-widest transition-colors"
                >
                    Return to Base
                </button>
            </div>
        </div>
    ); 
}