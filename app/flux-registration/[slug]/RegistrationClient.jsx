"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { 
  ArrowLeft, ArrowRight, User, Users, Mail, Phone, Zap, 
  Shield, CheckCircle, AlertTriangle, Plus, Trash2,
  Trophy, Banknote, Info, Home
} from "lucide-react";
import FluxBackground from "../../components/Flux/FluxBackground";
import { EVENT_PROTOCOLS, DEFAULT_PROTOCOL } from "../protocols";

/**
 * RegistrationClient - Client Side Logic
 * Enhanced with Free Event Logic (No Payment Redirect).
 */
export default function RegistrationClient() {
    const params = useParams();
    const router = useRouter();
    const rawSlug = params.slug?.toString();
    const eventSlug = rawSlug?.replace(/-/g, ' ').toUpperCase() || "EVENT";

    // Get Configuration
    const protocol = EVENT_PROTOCOLS[rawSlug] || DEFAULT_PROTOCOL;
    const isSolo = protocol.type === "SOLO";

    // --- EVENT DATA (Prices, Fees, Notes) ---
    const getEventStats = (slug) => {
        const stats = {
            // Day 1
            "dsa-competition": { 
                prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +",  
                fee: "₹100/User", 
                note: "Laptop is mandatory. Pre-installed compiler environment required." 
            },
            "hackathon": { 
                prize1: "₹5,000 +", prize2: "₹3,000 + ", prize3: "₹2,000 +", 
                fee: "₹400/Team", 
                note: "This is a 24-hour overnight event. Sleeping bags recommended." 
            },
            "meme-competition": { 
                prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0", 
                fee: "Free", 
                note: null 
            },
            "e-sports-free-fire": { 
                prize1: "₹2,000 +", prize2: "₹0", prize3: "₹0",
                fee: "₹300/Squad", 
                note: "Bring your own peripherals (Mouse/Keyboard/Headphones)." 
            },
            "e-sports-bgmi": { 
                prize1: "₹2,000 +", prize2: "₹0", prize3: "₹0",
                fee: "₹300/Squad", 
                note: "Bring your own peripherals (Mouse/Keyboard/Headphones)." 
            },

            // Day 2
            "debugging": { 
                prize1: "₹1,500 +", prize2: "₹1,000 +", prize3: "₹500 +",  
                fee: "₹200/User", 
                note: null 
            },
            "virtual-stock-market": { 
                prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0",
                fee: "₹100/User", 
                note: null 
            },
            "tech-scavenger-hunt": { 
                prize1: "₹1,500 +", prize2: "₹1,000 +", prize3: "₹0", 
                fee: "₹100/Team", 
                note: "Smartphone with active data connection required." 
            },
            "robo-soccer": { 
                prize1: "₹8,000 +", prize2: "₹4,000 +", prize3: "₹2,000 +", 
                fee: "₹300/Team", 
                note: "Max weight: 5kg. Wireless control mandatory." 
            },
            "bridge-building": { 
                prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +",  
                fee: "₹200/Team", 
                note: "Popsicle sticks will be provided on-site." 
            },
            "youth-parliament": { 
                prize1: "₹0", prize2: "₹0", prize3: "₹0",  
                fee: "Free", 
                note: "Formal attire is strictly required." 
            },
            "photography": { 
                prize1: "₹1,000 +", prize2: "₹500 +", prize3: "₹0",
                fee: "₹100/User", 
                note: "DSLR/Mirrorless only. Mobile photography not allowed." 
            },

            // Day 3
            "startup-idea-pitch": { 
                prize1: "₹50,000 +", prize2: "₹30,000 +", prize3: "₹20,000 +", 
                fee: "Free", 
                note: "Bring 3 printed copies of your pitch deck." 
            },
            "cad-challenge": { 
                prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹500 +", 
                fee: "100/user", 
                note: "Bring 3 printed copies of your pitch deck." 
            },
            "ui-ux-challenge": { 
                prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹0", 
                fee: "₹100/User", 
                note: "Figma/Adobe XD allowed." 
            },
            "circuit-debugging": { 
                prize1: "₹2,000 +", prize2: "₹1,000 +", prize3: "₹0", 
                fee: "₹200/Team", 
                note: null 
            },
            "iot-challenge": { 
                prize1: "₹8,000 +", prize2: "₹4,000 +", prize3: "₹2,000 +",  
                fee: "300/Team", 
                note: "Bring your own microcontrollers (Arduino/ESP)." 
            },
            "artist-performance": { 
                prize1: "N/A", prize2: "N/A", prize3: "N/A", 
                fee: "Pass Req.", 
                note: "Entry restricted after 7:00 PM." 
            },
            "dj-night": { 
                prize1: "N/A", prize2: "N/A", prize3: "N/A", 
                fee: "Free", 
                note: "College ID card mandatory for entry." 
            },

            // Default fallback
            "default": { prize1: "TBD", prize2: "TBD", prize3: "TBD", fee: "FREE", note: null }
        };
        
        const normalizedSlug = slug?.toLowerCase().replace(/ /g, '-') || "default";
        return stats[normalizedSlug] || stats["default"];
    };

    const eventStats = getEventStats(rawSlug);
    const hasPrizes = eventStats.prize1 !== "N/A";

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    // Form State
    const [formData, setFormData] = useState({
        teamName: "",
        leaderName: "",
        leaderEmail: "",
        leaderPhone: "",
        members: [],
    });

    const totalMembers = 1 + formData.members.length;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: null }));
        }
    };

    const handleMemberChange = (index, value) => {
        const newMembers = [...formData.members];
        newMembers[index] = value;
        setFormData(prev => ({ ...prev, members: newMembers }));
    };

    const addMember = () => {
        if (totalMembers < protocol.max) {
            setFormData(prev => ({ ...prev, members: [...prev.members, ""] }));
        }
    };

    const removeMember = (index) => {
        const newMembers = formData.members.filter((_, i) => i !== index);
        setFormData(prev => ({ ...prev, members: newMembers }));
    };

    const validateForm = () => {
        let newErrors = {};
        let isValid = true;

        if (!isSolo && !formData.teamName.trim()) {
            newErrors.teamName = "SQUAD DESIGNATION REQUIRED";
            isValid = false;
        }

        if (!formData.leaderName.trim()) {
            newErrors.leaderName = "IDENTITY REQUIRED";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.leaderEmail)) {
            newErrors.leaderEmail = "INVALID COMM FREQUENCY (EMAIL)";
            isValid = false;
        }

        const cleanPhone = formData.leaderPhone.replace(/\D/g, '');
        if (cleanPhone.length !== 10) {
            newErrors.leaderPhone = "INVALID LINK ID (10 DIGITS)";
            isValid = false;
        }

        if (!isSolo && totalMembers < protocol.min) {
            alert(`PROTOCOL REJECTION: MINIMUM ${protocol.min} OPERATIVES REQUIRED.`);
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            const payload = {
                slug: rawSlug,
                teamName: formData.teamName,
                leaderName: formData.leaderName,
                leaderEmail: formData.leaderEmail,
                leaderPhone: formData.leaderPhone,
                members: formData.members
            };

            const response = await fetch('https://sac.iitram.in/api-flux/register.php', { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.message || "Registration failed");
            }

            setIsSuccess(true);
            
        } catch (error) {
            console.error("Submission Error:", error);
            alert("TRANSMISSION ERROR: " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        // Pass the fee status to SuccessScreen
        return <SuccessScreen feeStatus={eventStats.fee} />;
    }

    return (
        <div className="min-h-screen text-white font-rajdhani relative overflow-x-hidden">
            <FluxBackground />

            {/* Submitting Overlay */}
            <AnimatePresence>
                {isSubmitting && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <div className="relative w-32 h-32 mb-8">
                            <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-[spin_3s_linear_infinite]" />
                            <div className="absolute inset-2 border-4 border-cyan-500/60 rounded-full border-t-transparent animate-[spin_1.5s_linear_infinite_reverse]" />
                            <Zap className="absolute inset-0 m-auto w-10 h-10 text-cyan-400 animate-pulse" />
                        </div>
                        <h2 className="text-2xl font-black tracking-widest text-white animate-pulse">ENCRYPTING & UPLOADING</h2>
                        <div className="text-cyan-500 font-mono text-sm mt-2">ESTABLISHING SECURE CONNECTION...</div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-4xl mx-auto pt-24 pb-12 px-6 relative z-10">

                {/* Back Button */}
                <button
                    onClick={() => router.push('/Flux')}
                    className="flex items-center gap-2 text-cyan-500 hover:text-white transition-colors mb-8 group font-mono text-sm"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ABORT SEQUENCE / RETURN
                </button>

                {/* Header Block */}
                <div className="mb-12 border-b border-white/10 pb-8 relative">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <div className="px-2 py-0.5 bg-red-600 text-white text-[10px] font-mono font-bold tracking-widest uppercase">
                                RESTRICTED ACCESS
                            </div>
                            <div className="text-cyan-500 font-mono text-xs tracking-widest">
                                PROTOCOL: {protocol.type} CLASS
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
                            {eventSlug}
                        </h1>

                        {/* --- NOTE SECTION (Conditionally Rendered) --- */}
                        {eventStats.note && (
                            <div className="mt-6 p-4 bg-yellow-900/10 border-l-4 border-yellow-500 backdrop-blur-sm">
                                <div className="flex items-start gap-3">
                                    <Info className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                                    <div>
                                        <div className="text-[10px] font-bold text-yellow-500 tracking-widest uppercase mb-1">
                                            MISSION INTEL
                                        </div>
                                        <p className="text-sm text-yellow-100/80 font-mono leading-relaxed">
                                            {eventStats.note}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* --- STATS BAR (PRIZES & FEE) --- */}
                        <div className="flex flex-wrap gap-4 mt-6">
                            
                            {/* Access Fee */}
                            <div className="flex items-center gap-3 px-4 py-2 bg-cyan-900/20 border border-cyan-500/30 rounded backdrop-blur-sm">
                                <div className="p-1.5 bg-cyan-500/10 rounded">
                                    <Banknote className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="flex flex-col leading-none">
                                    <span className="text-[10px] text-cyan-500/70 tracking-widest uppercase mb-0.5 font-mono">ACCESS FEE</span>
                                    <span className="text-lg font-bold text-white font-rajdhani">{eventStats.fee}</span>
                                </div>
                            </div>

                            {/* Prize Pool (Tiered) */}
                            {hasPrizes && (
                                <div className="flex items-center gap-4 px-4 py-2 bg-yellow-900/10 border border-yellow-500/20 rounded backdrop-blur-sm">
                                    <div className="p-1.5 bg-yellow-500/10 rounded self-center">
                                        <Trophy className="w-5 h-5 text-yellow-400" />
                                    </div>
                                    <div className="flex gap-6">
                                        <div className="flex flex-col leading-none">
                                            <span className="text-[10px] text-yellow-500/70 tracking-widest uppercase mb-0.5 font-mono">1ST PRIZE</span>
                                            <span className="text-lg font-bold text-yellow-400 font-rajdhani">{eventStats.prize1}</span>
                                        </div>
                                        <div className="flex flex-col leading-none">
                                            <span className="text-[10px] text-gray-400 tracking-widest uppercase mb-0.5 font-mono">2ND</span>
                                            <span className="text-base font-bold text-gray-300 font-rajdhani">{eventStats.prize2}</span>
                                        </div>
                                        <div className="flex flex-col leading-none">
                                            <span className="text-[10px] text-amber-700 tracking-widest uppercase mb-0.5 font-mono">3RD</span>
                                            <span className="text-base font-bold text-amber-600 font-rajdhani">{eventStats.prize3}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Requirements Line */}
                        <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-white/5 font-mono text-xs text-white/50">
                            <div className="flex items-center gap-2">
                                <Shield className="w-3 h-3 text-cyan-500" />
                                <span>REQ: {isSolo ? "SINGLE UNIT" : `${protocol.min} - ${protocol.max} OPERATIVES`}</span>
                            </div>
                            {!isSolo && (
                                <div className="flex items-center gap-2">
                                    <Users className="w-3 h-3 text-cyan-500" />
                                    <span>CURRENT SQUAD: {totalMembers}</span>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* The Form Terminal */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-12 relative overflow-hidden"
                >
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[url('/scanline.png')]" />
                    <div className="absolute top-0 right-0 p-4 opacity-50">
                        <Zap className="w-24 h-24 text-cyan-500 stroke-[0.5]" />
                    </div>

                    <form onSubmit={handleSubmit} className="relative z-10 space-y-12">

                        {/* SECTION 1: CORE DATA */}
                        <div className="space-y-6">
                            <SectionLabel title={`STEP 01 // ${isSolo ? "OPERATIVE DATA" : "LEADER IDENTIFICATION"}`} />

                            {!isSolo && (
                                <div className="grid grid-cols-1 gap-8 mb-8">
                                    <InputGroup
                                        label={`${protocol.label} DESIGNATION`}
                                        name="teamName"
                                        value={formData.teamName}
                                        onChange={handleInputChange}
                                        placeholder="ENTER SQUAD NAME"
                                        icon={Shield}
                                        error={errors.teamName}
                                    />
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputGroup
                                    label={isSolo ? "FULL NAME" : "LEADER NAME"}
                                    name="leaderName"
                                    value={formData.leaderName}
                                    onChange={handleInputChange}
                                    placeholder="OPERATIVE NAME"
                                    icon={User}
                                    error={errors.leaderName}
                                />
                                <div className="hidden md:block" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputGroup
                                    label="CONTACT EMAIL"
                                    name="leaderEmail"
                                    type="email"
                                    value={formData.leaderEmail}
                                    onChange={handleInputChange}
                                    placeholder="PRIORITY@MAIL.COM"
                                    icon={Mail}
                                    error={errors.leaderEmail}
                                />
                                <InputGroup
                                    label="COMM LINK (PHONE)"
                                    name="leaderPhone"
                                    type="tel"
                                    value={formData.leaderPhone}
                                    onChange={handleInputChange}
                                    placeholder="10 DIGIT NUMBER"
                                    icon={Phone}
                                    error={errors.leaderPhone}
                                />
                            </div>
                        </div>

                        {/* SECTION 2: ADDITIONAL OPERATIVES */}
                        {!isSolo && (
                            <div className="space-y-6">
                                <SectionLabel title="STEP 02 // SQUAD COMPOSITION" />

                                <div className="bg-white/5 p-4 rounded border border-white/10 flex items-center justify-between mb-6">
                                    <div className="text-xs font-mono text-gray-400">
                                        UNITS ASSIGNED: <span className="text-white font-bold">{totalMembers} / {protocol.max}</span>
                                    </div>
                                    {totalMembers < protocol.min ? (
                                        <div className="text-xs font-mono text-red-500 animate-pulse flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            STRENGTH: LOW (MIN {protocol.min})
                                        </div>
                                    ) : (
                                        <div className="text-xs font-mono text-green-500 flex items-center gap-1">
                                            <CheckCircle className="w-3 h-3" />
                                            STRENGTH: OPTIMAL
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-4 opacity-50 pointer-events-none">
                                        <div className="font-mono text-xs text-cyan-500 w-8">01</div>
                                        <div className="flex-1 p-3 border-b border-white/10 text-white font-rajdhani uppercase">
                                            {formData.leaderName || "LEADER (YOU)"}
                                        </div>
                                        <div className="p-2 w-8" />
                                    </div>

                                    <AnimatePresence>
                                        {formData.members.map((member, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 20 }}
                                                className="flex items-center gap-4"
                                            >
                                                <div className="font-mono text-xs text-cyan-500 w-8">0{index + 2}</div>
                                                <div className="flex-1">
                                                    <InputGroup
                                                        name={`member-${index}`}
                                                        value={member}
                                                        onChange={(e) => handleMemberChange(index, e.target.value)}
                                                        placeholder={`OPERATIVE 0${index + 2} NAME`}
                                                        simple
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => removeMember(index)}
                                                    className="text-red-500 hover:bg-white/5 p-2 rounded transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {totalMembers < protocol.max ? (
                                    <button
                                        type="button"
                                        onClick={addMember}
                                        className="text-xs font-mono text-cyan-500 hover:text-white transition-colors flex items-center gap-2 mt-4 px-4 py-3 border border-dashed border-cyan-500/30 hover:border-cyan-500 rounded w-full justify-center hover:bg-cyan-500/10"
                                    >
                                        <Plus className="w-4 h-4" />
                                        REINFORCE SQUAD (+ ADD SLOT)
                                    </button>
                                ) : (
                                    <div className="text-xs font-mono text-yellow-500 mt-4 text-center border border-yellow-500/30 p-2 rounded bg-yellow-500/5">
                                        MAX CAPACITY REACHED ({protocol.max} UNITS)
                                    </div>
                                )}
                            </div>
                        )}

                        {/* SUBMIT BUTTON */}
                        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
                             {/* Price Summary */}
                            <div className="text-left hidden md:block">
                                <div className="text-xs text-gray-500 font-mono mb-1">TOTAL ACCESS COST</div>
                                <div className="text-xl text-white font-bold tracking-wider">{eventStats.fee}</div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="relative group bg-cyan-600/20 hover:bg-cyan-600/40 border border-cyan-500 text-cyan-400 hover:text-white px-12 py-4 text-lg font-black tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden w-full md:w-auto"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSubmitting ? 'INITIALIZING...' : 'INITIATE REGISTRATION'}
                                    {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                </span>
                                <div className="absolute inset-0 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 opacity-20" />
                            </button>
                        </div>

                    </form>
                </motion.div>

            </div>
        </div>
    );
}

// Reusable Components

function SuccessScreen({ feeStatus }) {
    const isFree = feeStatus.toLowerCase().includes("free");
    const [timeLeft, setTimeLeft] = useState(3);

    useEffect(() => {
        // Only run timer/redirect if NOT free
        if (!isFree) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            const redirect = setTimeout(() => {
                window.location.href = 'https://hr.iitram.ac.in/onlinepayment/create';
            }, 3000);

            return () => {
                clearInterval(timer);
                clearTimeout(redirect);
            };
        }
    }, [isFree]);

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center font-rajdhani relative overflow-hidden">
            <FluxBackground />
            <div className="max-w-md w-full p-8 text-center relative z-10 border border-green-500/30 bg-black/80 backdrop-blur-xl">
                <div className="absolute inset-0 bg-green-500/5 animate-pulse" />
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_#22c55e]">
                    <CheckCircle className="w-10 h-10 text-black" />
                </div>
                <h2 className="text-4xl font-black text-white mb-2 tracking-tighter">SUCCESS</h2>
                <p className="text-green-400 font-mono tracking-widest text-sm mb-4">DATA PACKET RECEIVED</p>
                
                {!isFree ? (
                    <div className="mb-6 p-4 bg-green-900/20 border border-green-500/30 rounded">
                        <p className="text-white text-xs font-mono mb-2">REDIRECTING TO PAYMENT GATEWAY IN</p>
                        <div className="text-3xl font-bold text-green-400">{timeLeft}</div>
                    </div>
                ) : (
                    <div className="mb-6">
                        <div className="p-4 bg-green-900/20 border border-green-500/30 rounded mb-4">
                            <p className="text-green-400 font-bold tracking-widest uppercase">REGISTRATION CONFIRMED</p>
                            <p className="text-xs text-gray-400 mt-1">No payment required for this event.</p>
                        </div>
                        <button
                            onClick={() => window.location.href = '/Flux'}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-green-400 transition-colors w-full"
                        >
                            <Home className="w-4 h-4" /> RETURN TO BASE
                        </button>
                    </div>
                )}

                {!isFree && (
                    <div className="text-xs text-gray-500 font-mono">
                        DO NOT CLOSE THIS WINDOW
                    </div>
                )}
            </div>
        </div>
    )
}

function SectionLabel({ title }) {
    return (
        <div className="flex items-center gap-4">
            <div className="w-2 h-2 bg-cyan-500 rotate-45" />
            <h3 className="text-xl font-bold text-white tracking-widest">{title}</h3>
            <div className="h-px bg-white/10 flex-1" />
        </div>
    )
}

function InputGroup({ label, name, value, onChange, placeholder, type = "text", icon: Icon, simple = false, error }) {
    const [focused, setFocused] = useState(false);
    return (
        <div className="relative group">
            {!simple && <label className="block text-xs font-mono text-cyan-500 mb-2 tracking-widest">{label}</label>}
            <div className={`relative flex items-center border-b transition-all duration-300 ${error ? 'border-red-500' : (focused ? 'border-cyan-500' : 'border-white/20')}`}>
                {Icon && (<div className={`mr-3 ${error ? 'text-red-500' : (focused ? 'text-cyan-500' : 'text-gray-500')} transition-colors`}> <Icon className="w-5 h-5" /> </div>)}
                <input type={type} name={name} value={value} onChange={onChange} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} placeholder={placeholder} className="w-full bg-transparent py-3 text-white placeholder-gray-600 focus:outline-none font-rajdhani text-lg uppercase tracking-wide" />
            </div>
            {error && <div className="text-red-500 text-[10px] font-mono mt-1 absolute -bottom-5 left-0">{error}</div>}
            <div className={`absolute bottom-0 left-0 h-[1px] bg-cyan-400 shadow-[0_0_10px_#22d3ee] transition-all duration-500 ${focused && !error ? 'w-full opacity-100' : 'w-0 opacity-0'}`} />
        </div>
    )
}