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
        <div className="min-h-screen text-white font-rajdhani relative bg-[#02060a] overflow-hidden">
            <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
                <FluxBackground />
            </div>

            {/* --- LEFT SIDE HERO (Hidden on mobile) --- */}
            <motion.div 
                key={`${heroes.left.img}-left`}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 0.8, x: 0, y: [0, 15, 0] }}
                transition={{ x: { duration: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                className="fixed bottom-0 left-[1%] z-10 pointer-events-none hidden xl:block"
            >
                <img 
                    src={heroes.left.img} 
                    alt={heroes.left.name} 
                    className="h-[80vh] w-auto object-contain brightness-90 contrast-110"
                    style={{ filter: `drop-shadow(0 0 25px ${heroes.left.glow})` }}
                />
            </motion.div>

            {/* --- RIGHT SIDE HERO (Visible on mobile as faded backdrop) --- */}
            <motion.div 
                key={`${heroes.right.img}-right`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 0.6, x: 0, y: [0, -15, 0] }}
                transition={{ x: { duration: 0.8 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
                className="fixed bottom-[-5%] right-[-10%] md:bottom-0 md:right-[1%] z-10 pointer-events-none block"
            >
                <img 
                    src={heroes.right.img} 
                    alt={heroes.right.name} 
                    className="h-[50vh] md:h-[80vh] w-auto object-contain brightness-75 contrast-110 opacity-30 md:opacity-100"
                    style={{ filter: `drop-shadow(0 0 25px ${heroes.right.glow})` }}
                />
            </motion.div>

            <div className="max-w-4xl mx-auto pt-16 pb-12 px-6 relative z-30">
                <button onClick={() => router.push('/Flux')} className="flex items-center gap-2 text-cyan-500 hover:text-white transition-colors mb-6 font-mono text-xs group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> ABORT SEQUENCE
                </button>

                <div className="mb-8 border-b border-white/10 pb-6 text-center lg:text-left">
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-4xl md:text-8xl font-black uppercase tracking-tighter italic bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600 leading-tight"
                    >
                        {eventSlug}
                    </motion.h1>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-black/80 md:bg-black/70 backdrop-blur-3xl border border-cyan-500/30 p-6 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)] relative rounded-sm"
                >
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50" />

                    <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
                        <div className="space-y-6">
                            <SectionLabel title="STEP 01 // OPERATIVE IDENTITY" />
                            {!isSolo && (
                                <InputGroup label="SQUAD DESIGNATION" name="teamName" value={formData.teamName} onChange={handleInputChange} placeholder="TEAM NAME" icon={Shield} />
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputGroup label="LEADER NAME" name="leaderName" value={formData.leaderName} onChange={handleInputChange} placeholder="AGENT NAME" icon={User} />
                                <InputGroup label="SECURE EMAIL" name="leaderEmail" value={formData.leaderEmail} onChange={handleInputChange} placeholder="AGENT@STARK.COM" icon={Mail} />
                            </div>
                        </div>
                        
                        <button type="submit" className="w-full md:w-auto bg-cyan-600 hover:bg-cyan-500 text-black font-black py-4 px-16 tracking-widest uppercase transition-all flex items-center justify-center gap-3">
                            {isSubmitting ? 'UPLOADING...' : 'INITIATE REGISTRATION'}
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </div>

            <AnimatePresence>
                {isSubmitting && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center">
                        <Crosshair className="w-16 h-16 text-red-500 animate-pulse mb-4" />
                        <h2 className="text-xl font-black text-white tracking-[0.5em] uppercase italic text-center px-4">Syncing with Stark Mainframe...</h2>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// ... SectionLabel, InputGroup, SuccessScreen stay the same ...
function SectionLabel({ title }) { 
    return (
        <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-red-600 rotate-45" />
            <h3 className="text-sm md:text-lg font-bold text-white tracking-widest uppercase">{title}</h3>
            <div className="h-[1px] bg-white/10 flex-1" />
        </div>
    ); 
}

function InputGroup({ label, name, value, onChange, placeholder, icon: Icon }) { 
    return (
        <div className="relative z-50 flex-1">
            <label className="block text-[10px] font-mono text-cyan-500/70 mb-2 uppercase tracking-widest">{label}</label>
            <div className="flex items-center border-b border-white/20 focus-within:border-cyan-500 transition-colors text-lg">
                <Icon className="w-4 h-4 mr-3 text-gray-600" />
                <input 
                    name={name} value={value} onChange={onChange} placeholder={placeholder} 
                    className="w-full bg-transparent py-4 text-white caret-cyan-500 focus:outline-none uppercase font-bold" 
                />
            </div>
        </div>
    ); 
}

function SuccessScreen() { 
    return (
        <div className="min-h-screen bg-[#02060a] flex items-center justify-center text-center p-6">
            <div className="max-w-md w-full border border-cyan-500/30 p-12 bg-black/70 backdrop-blur-3xl">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8 animate-bounce" />
                <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter">Mission Logged</h2>
                <button onClick={() => window.location.href = '/Flux'} className="mt-10 w-full bg-white text-black font-black py-4 uppercase tracking-widest hover:bg-cyan-500 transition-colors">Return to Base</button>
            </div>
        </div>
    ); 
}