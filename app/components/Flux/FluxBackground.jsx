"use client";
import React, { useEffect, useRef } from "react";

/**
 * FluxBackground - STARK SCANNER EDITION
 * Implements a 'True Torch' effect: The background is dimmed, and the cursor
 * acts as a scanner/flashlight revealing the Arc Reactor details underneath.
 * Includes a rotating HUD ring following the cursor.
 */
export default function FluxBackground() {
    const torchLayerRef = useRef(null);
    const hudRingRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = e.clientX;
            const y = e.clientY;

            // 1. Update the 'Darkness' layer creates a transparent hole at cursor
            if (torchLayerRef.current) {
                // Radial gradient: Transparent at center -> Black at edges
                torchLayerRef.current.style.background = `
                    radial-gradient(
                        circle at ${x}px ${y}px, 
                        rgba(0,0,0,0) 0px, 
                        rgba(0,0,0,0.3) 150px, 
                        rgba(0,0,0,0.95) 400px
                    )
                `;
            }

            // 2. Move the HUD Ring
            if (hudRingRef.current) {
                // Simple lag-free follow
                hudRingRef.current.style.transform = `translate(${x - 32}px, ${y - 32}px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-50 bg-black overflow-hidden pointer-events-none">

            {/* --- LAYER 1: THE BRIGHT CONTENT (Hidden by default) --- */}

            {/* Deep Base */}
            <div className="absolute inset-0 bg-slate-900" />

            {/* Central Arc Reactor - Bright & Active */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-[80px] animate-pulse" />

            {/* Crisp Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vmin] h-[100vmin] opacity-60">
                <div className="absolute inset-0 border border-[#c84f4f] rounded-full animate-[spin_60s_linear_infinite]"
                    style={{ borderStyle: 'dashed', borderWidth: '1px' }} />

                <div className="absolute inset-[10%] border border-[#c84f4f] rounded-full animate-[spin_40s_linear_infinite_reverse]"
                    style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }} />

                <div className="absolute inset-[30%] border-2 border-[#c84f4f] rounded-full animate-[spin_20s_linear_infinite]" />

                {/* Tech Grid Pattern appearing in background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
            </div>

            <Particles />


            {/* --- LAYER 2: THE DARKNESS (Torch) --- */}
            {/* This layer covers the content with black, except where the mouse is */}
            <div
                ref={torchLayerRef}
                className="absolute inset-0 z-10"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 400px)' // Initial state
                }}
            />


            {/* --- LAYER 3: HUD SCANNER RING (Follows Cursor) --- */}
            <div
                ref={hudRingRef}
                className="absolute top-0 left-0 w-16 h-16 z-20 pointer-events-none"
                style={{ transform: 'translate(-100px, -100px)' }} // Initial off-screen
            >
                {/* Spinning Ring */}
                <div className="absolute inset-0 border border-[#e95555] rounded-full opacity-60 animate-[spin_2s_linear_infinite] border-t-transparent border-l-transparent" />
                {/* Inner Dot */}
                <div className="absolute inset-0 m-auto w-1 h-1 border-[#e95555]  rounded-full shadow-[0_0_10px_cyan]" />
                {/* Crosshair Lines */}
                <div className="absolute top-1/2 left-[-10px] w-[calc(100%+20px)] h-px bg-[#561919]" />
                <div className="absolute left-1/2 top-[-10px] h-[calc(100%+20px)] w-px bg-[#561919]" />
            </div>

        </div>
    );
}

const Particles = () => {
    const particles = Array.from({ length: 30 });
    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map((_, i) => (
                <div
                    key={i}
                    className="absolute rounded-full bg-cyan-300"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        width: `${Math.random() * 2 + 1}px`,
                        height: `${Math.random() * 2 + 1}px`,
                        opacity: Math.random() * 0.6 + 0.2,
                        boxShadow: '0 0 5px cyan',
                        animation: `float ${Math.random() * 10 + 15}s linear infinite`,
                        animationDelay: `-${Math.random() * 10}s`
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes float {
                    0% { transform: translateY(0) translateX(0); opacity: 0; }
                    50% { opacity: 0.8; }
                    100% { transform: translateY(-100px) translateX(20px); opacity: 0; }
                }
            `}</style>
        </div>
    );
};
