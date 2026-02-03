"use client";

import React from "react";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(#00E5FF 1px, transparent 1px), linear-gradient(90deg, #00E5FF 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            />

            {/* Arc Reactor Spinner */}
            <div className="relative w-32 h-32 mb-8">
                <div className="absolute inset-0 border-4 border-cyan-500/30 rounded-full animate-[spin_3s_linear_infinite]" />
                <div className="absolute inset-2 border-4 border-cyan-500/60 rounded-full border-t-transparent animate-[spin_2s_linear_infinite_reverse]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_20px_#00E5FF]" />
                </div>
            </div>

            {/* Text */}
            <div className="text-center font-rajdhani">
                <h2 className="text-2xl font-bold text-white tracking-[0.2em] mb-2 animate-pulse">
                    INITIALIZING PROTOCOL...
                </h2>
                <div className="text-cyan-500 font-mono text-sm tracking-widest">
                    ESTABLISHING SECURE CONNECTION
                </div>

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-gray-800 mt-6 overflow-hidden relative">
                    <div className="absolute inset-0 bg-cyan-500 animate-[translateX_1.5s_ease-in-out_infinite]" />
                </div>
            </div>

            {/* Footer ID */}
            <div className="absolute bottom-8 text-gray-600 font-mono text-xs">
                SYS.ID: 8080-FLUX
            </div>
        </div>
    );
}
