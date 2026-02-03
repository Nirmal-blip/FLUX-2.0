"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const TeamFlux = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const presidents = [
        {
            name: "SATYAM KUMAR",
            role: "PRESIDENT",
            image: "/images/Senate/Satyam.jpg",
            tag: "COMMANDER"
        },
        {
            name: "SHREY CHAUDHARY",
            role: "VICE PRESIDENT",
            image: "/images/Senate/Shrey.png",
            tag: "COMMANDER"
        },
        {
            name: "SAKSHI SUREKA",
            role: "VICE PRESIDENT",
            image: "/images/Senate/Sakshi.jpg",
            tag: "COMMANDER"
        }
    ];

    const secretaries = [
        { name: "MANISH", role: "GEN. SECRETARY", image: "/images/GS_technical/Manish.png", tag: "OFFICER" },
        { name: "NIRMAL", role: "GEN. SECRETARY", image: "/images/GS_technical/Nirmal.png", tag: "OFFICER" },
        { name: "RIYA", role: "GEN. SECRETARY", image: "/images/GS_technical/Riya.png", tag: "OFFICER" },
        { name: "SHIVESH", role: "GEN. SECRETARY", image: "/images/GS_technical/Shivesh.png", tag: "OFFICER" }
    ];

    return (
        <section ref={ref} className="relative py-24 px-6 bg-black/10 overflow-hidden font-rajdhani min-h-screen">
            {/* Background Grid & Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/scanline.png')] opacity-10 pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-24">

                {/* Main Header - ANIMATED MAINFRAME PERSONNEL */}
                <div className="text-center mb-20 relative">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-block mb-2"
                    >
                        <div className="h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent w-full mb-4 opacity-50" />
                    </motion.div>

                    {/* Glitch Title */}
                    <GlitchTitle text="MAINFRAME PERSONNEL" trigger={inView} />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 1 }}
                        className="flex items-center justify-center gap-4 text-cyan-500 font-mono text-sm tracking-[0.5em] mt-4"
                    >
                        <span className="animate-pulse text-red-500">//</span>
                        <Typewriter text="ACCESS GRANTED" trigger={inView} delay={1000} />
                    </motion.div>
                </div>

                {/* 1. PRESIDENTS COUNCIL */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center gap-4 mb-12 border-l-4 border-yellow-500 pl-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-yellow-500 tracking-widest uppercase relative">
                            <span className="relative z-10">PRESIDENTS COUNCIL</span>
                            <span className="absolute top-0 left-0 text-yellow-500/20 blur-sm z-0">PRESIDENTS COUNCIL</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {presidents.map((member, i) => (
                            <TeamCard
                                key={i}
                                member={member}
                                color="text-yellow-500"
                                borderColor="border-yellow-500"
                                bgGlow="bg-yellow-500/10"
                                delay={0.4 + i * 0.15}
                            />
                        ))}
                    </div>
                </div>

                {/* 2. GENERAL SECRETARIES */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex items-center gap-4 mb-12 border-l-4 border-cyan-500 pl-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-black text-cyan-500 tracking-widest uppercase relative">
                            <span className="relative z-10">GENERAL SECRETARIES</span>
                            <span className="absolute top-0 left-0 text-cyan-500/20 blur-sm z-0">GENERAL SECRETARIES</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {secretaries.map((member, i) => (
                            <TeamCard
                                key={i}
                                member={member}
                                color="text-cyan-500"
                                borderColor="border-cyan-500"
                                bgGlow="bg-cyan-500/10"
                                delay={0.6 + i * 0.1}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

// --- Sub-Components for Animations ---

const GlitchTitle = ({ text, trigger }) => {
    return (
        <div className="relative inline-block">
            <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={trigger ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-gray-200 relative z-10"
                style={{ textShadow: "0 0 40px rgba(220, 38, 38, 0.5)" }}
            >
                {text}
            </motion.h1>
            {/* Glitch Layers */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={trigger ? { opacity: [0, 1, 0, 1, 0], x: [-5, 5, -2, 0] } : {}}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute top-0 left-0 w-full h-full text-red-500 opacity-50 mix-blend-screen z-0"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)", transform: "translate(-2px, -2px)" }}
            >
                {text}
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={trigger ? { opacity: [0, 1, 0, 1, 0], x: [5, -5, 2, 0] } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute top-0 left-0 w-full h-full text-cyan-500 opacity-50 mix-blend-screen z-0"
                style={{ clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)", transform: "translate(2px, 2px)" }}
            >
                {text}
            </motion.div>
        </div>
    );
};

const Typewriter = ({ text, trigger, delay }) => {
    const [display, setDisplay] = useState("");

    useEffect(() => {
        if (!trigger) return;
        let current = "";
        let i = 0;
        const startTimeout = setTimeout(() => {
            const interval = setInterval(() => {
                current += text[i];
                setDisplay(current);
                i++;
                if (i === text.length) clearInterval(interval);
            }, 50); // Speed
            return () => clearInterval(interval);
        }, delay || 0);
        return () => clearTimeout(startTimeout);
    }, [trigger, text, delay]);

    return <span>{display}</span>;
}


const TeamCard = ({ member, color, borderColor, bgGlow, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay, duration: 0.6, type: "spring", stiffness: 50 }}
        viewport={{ once: true }}
        className="group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all duration-300 overflow-hidden hover:z-10"
    >
        {/* Holographic Border Effect */}
        <div className={`absolute inset-0 border-2 ${borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30`}
            style={{ boxShadow: `0 0 20px ${color.includes('cyan') ? 'rgba(6,182,212,0.4)' : 'rgba(234,179,8,0.4)'}, inset 0 0 10px ${color.includes('cyan') ? 'rgba(6,182,212,0.2)' : 'rgba(234,179,8,0.2)'}` }}
        />

        {/* Top Tag */}
        <div className="absolute top-4 left-4 z-20 px-2 py-0.5 bg-black/80 backdrop-blur-sm border border-white/20 text-[10px] uppercase font-bold tracking-widest text-gray-300 group-hover:text-white group-hover:border-white/50 transition-colors">
            {member.tag}
        </div>

        {/* Image Area with Grayscale Effect */}
        <div className="relative aspect-square w-full overflow-hidden border-b border-white/5 mx-auto bg-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 opacity-40 group-hover:opacity-0 transition-opacity duration-500" />

            {/* Scanlines Overlay - Fades out on hover for clarity */}
            <div className="absolute inset-0 z-10 bg-[url('/scanline.png')] opacity-30 pointer-events-none group-hover:opacity-10 transition-opacity" />

            <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-110"
            />
        </div>

        {/* Content */}
        <div className="p-6 relative z-20 bg-zinc-900 group-hover:bg-zinc-800/50 transition-colors">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-1 font-space-grotesk">
                {member.name}
            </h3>
            <p className={`text-xs font-bold tracking-[0.2em] uppercase ${color} flex items-center gap-2`}>
                <span className={`w-2 h-2 rounded-sm ${color.replace('text', 'bg')}`} />
                {member.role}
            </p>

            {/* Tech Decoration */}
            <div className="absolute bottom-4 right-4 flex gap-1">
                <div className={`w-1 h-3 ${color.replace('text', 'bg')} opacity-20 group-hover:opacity-100 transition-opacity delay-75`} />
                <div className={`w-1 h-3 ${color.replace('text', 'bg')} opacity-20 group-hover:opacity-100 transition-opacity delay-100`} />
                <div className={`w-1 h-3 ${color.replace('text', 'bg')} opacity-20 group-hover:opacity-100 transition-opacity delay-150`} />
            </div>
        </div>

    </motion.div>
)

export default TeamFlux;
