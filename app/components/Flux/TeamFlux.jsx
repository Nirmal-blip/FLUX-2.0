"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const TeamFlux = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const presidents = [
        { name: "SATYAM KUMAR", role: "PRESIDENT", image: "/images/Senate/Satyam.jpg", power: "STRATEGY" },
        { name: "SHREY CHAUDHARY", role: "VICE PRESIDENT", image: "/images/Senate/Shrey.png", power: "EXECUTION" },
        { name: "SAKSHI SUREKA", role: "VICE PRESIDENT", image: "/images/Senate/Sakshi.jpg", power: "CREATIVITY" }
    ];

    const secretaries = [
        { name: "MANISH", role: "GEN. SEC", image: "/images/GS_technical/Manish.png" },
        { name: "NIRMAL", role: "GEN. SEC", image: "/images/GS_technical/Nirmal.png" },
        { name: "RIYA", role: "GEN. SEC", image: "/images/GS_technical/Riya.png" },
        { name: "SHIVESH", role: "GEN. SEC", image: "/images/GS_technical/Shivesh.png" }
    ];

    return (
        <section ref={ref} className="relative py-24 px-6 bg-white text-black overflow-hidden min-h-screen border-t-[12px] border-black selection:bg-yellow-400">
            {/* --- COMIC HALFTONE PATTERN --- */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:12px_12px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                
                {/* --- HEADER: ACTION TITLE --- */}
                <div className="mb-24 relative">
                    <motion.div 
                        initial={{ scale: 0.8, rotate: -5, opacity: 0 }}
                        animate={inView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
                        className="inline-block bg-red-600 text-white px-10 py-6 border-[8px] border-black shadow-[12px_12px_0px_#000] skew-x-[-10deg]"
                    >
                        <h1 className="text-6xl md:text-9xl font-[1000] italic uppercase tracking-tighter drop-shadow-[4px_4px_0px_#fbbf24]">
                            THE ASSEMBLE
                        </h1>
                    </motion.div>
                    <p className="mt-8 font-black text-2xl uppercase italic tracking-widest border-l-8 border-black pl-6">
                        // ELITE PERSONNEL IDENTIFIED //
                    </p>
                </div>

                {/* --- 1. PRESIDENTS (THE BIG PANELS) --- */}
                <div className="space-y-12 mb-32">
                    <h2 className="text-4xl font-[1000] uppercase italic bg-yellow-400 inline-block px-4 py-1 border-4 border-black shadow-[6px_6px_0px_#000]">
                        The Commanders
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {presidents.map((member, i) => (
                            <ComicCard key={i} member={member} index={i} isBig />
                        ))}
                    </div>
                </div>

                {/* --- 2. SECRETARIES (THE CORE TEAM) --- */}
                <div className="space-y-12">
                    <h2 className="text-4xl font-[1000] uppercase italic bg-black text-white inline-block px-4 py-1 border-4 border-black shadow-[6px_6px_0px_#ef4444]">
                        Core Squad
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {secretaries.map((member, i) => (
                            <ComicCard key={i} member={member} index={i} />
                        ))}
                    </div>
                </div>
            </div>

            {/* --- FLOATING COMIC BUBBLE --- */}
            <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="hidden lg:block absolute bottom-20 right-10 bg-white text-black font-[1000] text-5xl px-8 py-4 border-[6px] border-black shadow-[8px_8px_0px_#ef4444] rotate-12"
            >
                HEROES!
            </motion.div>
        </section>
    );
};

const ComicCard = ({ member, index, isBig }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative"
        >
            {/* BLACK PANEL BORDER */}
            <div className={`relative overflow-hidden border-[8px] border-black bg-white transition-all duration-300 group-hover:-translate-y-4 group-hover:translate-x-4 shadow-[12px_12px_0px_#000] group-hover:shadow-[0px_0px_0px_#000] ${isBig ? 'aspect-[3/4]' : 'aspect-square'}`}>
                
                {/* IMAGE: NO GRAYSCALE */}
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* OVERLAY PANEL TEXT */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent pt-20">
                    <div className="bg-yellow-400 border-4 border-black px-3 py-1 inline-block -rotate-3 mb-2 group-hover:rotate-0 transition-transform">
                        <span className="font-black text-xs uppercase tracking-tighter">{member.role}</span>
                    </div>
                    <h3 className="text-3xl font-[1000] italic uppercase text-white leading-none tracking-tighter drop-shadow-[3px_3px_0px_#ef4444]">
                        {member.name}
                    </h3>
                </div>
            </div>

            {/* ACTION "POW" TAG (PRESIDENTS ONLY) */}
            {isBig && (
                <div className="absolute -top-4 -left-4 z-20 bg-red-600 text-white px-3 py-1 font-black italic border-4 border-black rotate-[-15deg] group-hover:scale-125 transition-transform">
                    {member.power}!
                </div>
            )}

            {/* OFFSET DECORATION BACKGROUND */}
            <div className="absolute inset-0 border-[8px] border-red-600 -z-10 translate-y-4 -translate-x-4" />
        </motion.div>
    );
};

export default TeamFlux;