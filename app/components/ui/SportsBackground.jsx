"use client";

import React from "react";

export default function SportsBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(135deg, #0a0e1a 0%, #1a0f2e 25%, #0d1b2a 50%, #1e0a1a 75%, #0a1628 100%)',
                }}
            />

            <div
                className="absolute inset-0 opacity-[0.08]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%),
                        radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)
                    `,
                }}
            />

            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `radial-gradient(circle, rgba(255, 255, 255, 0.5) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px',
                }}
            />

            <div className="absolute top-[8%] left-[6%] w-[140px] h-[140px] opacity-20 animate-float" style={{ animationDuration: '12s' }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 20 L30 35 Q30 45 40 45 L40 60 L35 60 L35 70 L65 70 L65 60 L60 60 L60 45 Q70 45 70 35 L70 20 L30 20 Z M25 20 L25 30 Q25 35 30 35 M75 20 L75 30 Q75 35 70 35" 
                          stroke="rgba(249, 115, 22, 0.8)" strokeWidth="3" fill="rgba(249, 115, 22, 0.3)"/>
                    <circle cx="50" cy="30" r="3" fill="rgba(249, 115, 22, 1)"/>
                </svg>
            </div>

            <div className="absolute top-[55%] right-[7%] w-[130px] h-[130px] opacity-20 animate-float" style={{ animationDuration: '15s', animationDelay: '2s' }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 20 L30 35 Q30 45 40 45 L40 60 L35 60 L35 70 L65 70 L65 60 L60 60 L60 45 Q70 45 70 35 L70 20 L30 20 Z M25 20 L25 30 Q25 35 30 35 M75 20 L75 30 Q75 35 70 35" 
                          stroke="rgba(59, 130, 246, 0.8)" strokeWidth="3" fill="rgba(59, 130, 246, 0.3)"/>
                    <circle cx="50" cy="30" r="3" fill="rgba(59, 130, 246, 1)"/>
                </svg>
            </div>

            <div className="absolute bottom-[12%] left-[12%] w-[120px] h-[120px] opacity-20 animate-float" style={{ animationDuration: '18s', animationDelay: '4s' }}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 20 L30 35 Q30 45 40 45 L40 60 L35 60 L35 70 L65 70 L65 60 L60 60 L60 45 Q70 45 70 35 L70 20 L30 20 Z M25 20 L25 30 Q25 35 30 35 M75 20 L75 30 Q75 35 70 35" 
                          stroke="rgba(234, 179, 8, 0.8)" strokeWidth="3" fill="rgba(234, 179, 8, 0.3)"/>
                    <circle cx="50" cy="30" r="3" fill="rgba(234, 179, 8, 1)"/>
                </svg>
            </div>

            <div className="absolute top-[25%] right-[18%] w-[100px] h-[100px] opacity-25 animate-spin-slow" style={{ animationDuration: '25s' }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2"/>
                    <path d="M50 5 L55 30 L80 30 L60 45 L70 70 L50 55 L30 70 L40 45 L20 30 L45 30 Z" 
                          fill="rgba(59, 130, 246, 0.4)" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="12" fill="rgba(59, 130, 246, 0.6)"/>
                </svg>
            </div>

            <div className="absolute bottom-[30%] left-[22%] w-[90px] h-[90px] opacity-25 animate-spin-slow" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2"/>
                    <path d="M50 5 L55 30 L80 30 L60 45 L70 70 L50 55 L30 70 L40 45 L20 30 L45 30 Z" 
                          fill="rgba(249, 115, 22, 0.4)" stroke="rgba(249, 115, 22, 0.7)" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="12" fill="rgba(249, 115, 22, 0.6)"/>
                </svg>
            </div>

            <div className="absolute top-[40%] left-[8%] w-[80px] h-[100px] opacity-20 animate-float" style={{ animationDuration: '14s' }}>
                <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0 L20 25 L30 20 L40 25 L45 0 Z" fill="rgba(234, 179, 8, 0.5)" stroke="rgba(234, 179, 8, 0.8)" strokeWidth="1"/>
                    <circle cx="30" cy="50" r="27" fill="rgba(234, 179, 8, 0.4)" stroke="rgba(234, 179, 8, 0.8)" strokeWidth="3"/>
                    <text x="30" y="58" fontSize="24" fill="rgba(234, 179, 8, 1)" textAnchor="middle" fontWeight="bold">1</text>
                </svg>
            </div>

            <div className="absolute top-[18%] right-[12%] w-[75px] h-[95px] opacity-20 animate-float" style={{ animationDuration: '16s', animationDelay: '2s' }}>
                <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0 L20 25 L30 20 L40 25 L45 0 Z" fill="rgba(192, 192, 192, 0.5)" stroke="rgba(192, 192, 192, 0.8)" strokeWidth="1"/>
                    <circle cx="30" cy="50" r="27" fill="rgba(192, 192, 192, 0.4)" stroke="rgba(192, 192, 192, 0.8)" strokeWidth="3"/>
                    <text x="30" y="58" fontSize="24" fill="rgba(192, 192, 192, 1)" textAnchor="middle" fontWeight="bold">2</text>
                </svg>
            </div>

            <div className="absolute bottom-[20%] right-[10%] w-[75px] h-[95px] opacity-20 animate-float" style={{ animationDuration: '17s', animationDelay: '3s' }}>
                <svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 0 L20 25 L30 20 L40 25 L45 0 Z" fill="rgba(205, 127, 50, 0.5)" stroke="rgba(205, 127, 50, 0.8)" strokeWidth="1"/>
                    <circle cx="30" cy="50" r="27" fill="rgba(205, 127, 50, 0.4)" stroke="rgba(205, 127, 50, 0.8)" strokeWidth="3"/>
                    <text x="30" y="58" fontSize="24" fill="rgba(205, 127, 50, 1)" textAnchor="middle" fontWeight="bold">3</text>
                </svg>
            </div>

            <div className="absolute top-[70%] left-[30%] w-[85px] h-[50px] opacity-18 animate-float" style={{ animationDuration: '13s', animationDelay: '1s' }}>
                <svg viewBox="0 0 85 50" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="42.5" cy="25" rx="38" ry="20" fill="rgba(59, 130, 246, 0.4)" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="3"/>
                    <circle cx="42.5" cy="25" r="10" fill="rgba(59, 130, 246, 0.6)"/>
                    <line x1="8" y1="25" x2="0" y2="18" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="3"/>
                </svg>
            </div>

            <div className="absolute top-[35%] right-[25%] w-[95px] h-[95px] opacity-18 animate-float" style={{ animationDuration: '16s', animationDelay: '2s' }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="rgba(249, 115, 22, 0.3)" stroke="rgba(249, 115, 22, 0.7)" strokeWidth="3"/>
                    <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="2"/>
                    <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="15" fill="none" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="2"/>
                </svg>
            </div>

            <div className="absolute bottom-[40%] right-[8%] w-[100px] h-[70px] opacity-16 animate-float" style={{ animationDuration: '15s', animationDelay: '3s' }}>
                <svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
                    <ellipse cx="30" cy="50" rx="25" ry="18" fill="none" stroke="rgba(168, 85, 247, 0.7)" strokeWidth="3"/>
                    <line x1="30" y1="32" x2="30" y2="10" stroke="rgba(168, 85, 247, 0.7)" strokeWidth="3"/>
                    <line x1="20" y1="10" x2="40" y2="10" stroke="rgba(168, 85, 247, 0.7)" strokeWidth="3"/>
                    <line x1="15" y1="20" x2="45" y2="60" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2"/>
                    <line x1="45" y1="20" x2="15" y2="60" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2"/>
                </svg>
            </div>

            <div className="absolute top-[50%] left-[18%] w-[90px] h-[60px] opacity-17 animate-float" style={{ animationDuration: '14s', animationDelay: '1.5s' }}>
                <svg viewBox="0 0 90 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 40 Q10 20 30 15 L60 15 L70 25 L70 45 L60 55 L30 55 Q10 50 10 40 Z" 
                          fill="rgba(234, 179, 8, 0.3)" stroke="rgba(234, 179, 8, 0.7)" strokeWidth="2"/>
                    <circle cx="25" cy="35" r="8" fill="rgba(234, 179, 8, 0.4)"/>
                    <line x1="33" y1="35" x2="50" y2="35" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="3"/>
                    <line x1="50" y1="30" x2="50" y2="40" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="3"/>
                </svg>
            </div>

            <div className="absolute bottom-[50%] left-[35%] w-[80px] h-[80px] opacity-15 animate-float" style={{ animationDuration: '17s', animationDelay: '4s' }}>
                <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(59, 130, 246, 0.6)" strokeWidth="3"/>
                    <circle cx="40" cy="40" r="30" fill="rgba(59, 130, 246, 0.2)"/>
                    <line x1="40" y1="10" x2="40" y2="25" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="3"/>
                    <line x1="40" y1="40" x2="55" y2="30" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="3"/>
                    <circle cx="40" cy="40" r="4" fill="rgba(59, 130, 246, 0.9)"/>
                </svg>
            </div>

            <div className="absolute top-[15%] right-[30%] w-[70px] h-[90px] opacity-16 animate-float" style={{ animationDuration: '15s', animationDelay: '2.5s' }}>
                <svg viewBox="0 0 70 90" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 70 Q15 60 20 55 L25 50 Q30 45 30 35 L30 20 Q30 10 40 10 Q50 10 50 20 L50 35 Q50 45 55 50 L60 55 Q65 60 65 70 L65 80 L15 80 Z" 
                          fill="rgba(249, 115, 22, 0.3)" stroke="rgba(249, 115, 22, 0.7)" strokeWidth="2"/>
                    <circle cx="25" cy="75" r="3" fill="rgba(249, 115, 22, 0.8)"/>
                    <circle cx="55" cy="75" r="3" fill="rgba(249, 115, 22, 0.8)"/>
                </svg>
            </div>

            <div className="absolute top-[60%] right-[35%] w-[100px] h-[60px] opacity-14 animate-float" style={{ animationDuration: '18s', animationDelay: '5s' }}>
                <svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 30 Q10 15 25 10 Q40 5 50 10 Q60 5 75 10 Q90 15 90 30 Q90 45 75 50 Q60 55 50 50 Q40 55 25 50 Q10 45 10 30 Z" 
                          fill="none" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
                    <path d="M30 30 Q40 25 50 30 Q60 25 70 30" fill="none" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
                    <path d="M30 35 Q40 40 50 35 Q60 40 70 35" fill="none" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="2"/>
                </svg>
            </div>

            <div className="absolute bottom-[35%] left-[8%] w-[85px] h-[85px] opacity-16 animate-spin-slow" style={{ animationDuration: '30s' }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="2"/>
                    <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" 
                          fill="rgba(234, 179, 8, 0.3)" stroke="rgba(234, 179, 8, 0.6)" strokeWidth="2"/>
                </svg>
            </div>

            <div className="absolute top-[45%] right-[15%] w-[85px] h-[85px] opacity-17 animate-float" style={{ animationDuration: '14s', animationDelay: '2s' }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2"/>
                    <path d="M30 30 L70 30 L70 70 L30 70 Z" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2"/>
                    <line x1="35" y1="35" x2="65" y2="65" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2"/>
                    <line x1="65" y1="35" x2="35" y2="65" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2"/>
                </svg>
            </div>

            <div className="absolute bottom-[45%] right-[28%] w-[75px] h-[90px] opacity-16 animate-float" style={{ animationDuration: '16s', animationDelay: '3.5s' }}>
                <svg viewBox="0 0 75 90" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="10" width="55" height="15" rx="7" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2"/>
                    <line x1="37.5" y1="25" x2="37.5" y2="60" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="3"/>
                    <circle cx="37.5" cy="70" r="15" fill="rgba(59, 130, 246, 0.3)" stroke="rgba(59, 130, 246, 0.7)" strokeWidth="2"/>
                </svg>
            </div>

            <div className="absolute top-[28%] left-[28%] w-[70px] h-[100px] opacity-15 animate-float" style={{ animationDuration: '15s', animationDelay: '4s' }}>
                <svg viewBox="0 0 70 100" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="60" height="80" fill="none" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="3"/>
                    <rect x="15" y="15" width="40" height="20" fill="rgba(249, 115, 22, 0.3)"/>
                    <rect x="15" y="40" width="40" height="20" fill="rgba(249, 115, 22, 0.3)"/>
                    <rect x="15" y="65" width="40" height="10" fill="rgba(249, 115, 22, 0.3)"/>
                    <line x1="35" y1="85" x2="35" y2="95" stroke="rgba(249, 115, 22, 0.6)" strokeWidth="3"/>
                </svg>
            </div>

            <div className="absolute bottom-[25%] left-[40%] w-[80px] h-[80px] opacity-16 animate-spin-slow" style={{ animationDuration: '28s', animationDirection: 'reverse' }}>
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(168, 85, 247, 0.6)" strokeWidth="3"/>
                    <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(168, 85, 247, 0.5)" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="20" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="5" fill="rgba(168, 85, 247, 0.8)"/>
                </svg>
            </div>

            <div className="absolute top-[65%] right-[20%] w-[95px] h-[65px] opacity-17 animate-float" style={{ animationDuration: '13s', animationDelay: '2.5s' }}>
                <svg viewBox="0 0 95 65" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5" y="5" width="25" height="55" rx="12" fill="rgba(234, 179, 8, 0.3)" stroke="rgba(234, 179, 8, 0.7)" strokeWidth="2"/>
                    <rect x="35" y="5" width="25" height="55" rx="12" fill="rgba(234, 179, 8, 0.3)" stroke="rgba(234, 179, 8, 0.7)" strokeWidth="2"/>
                    <line x1="17.5" y1="5" x2="17.5" y2="0" stroke="rgba(234, 179, 8, 0.7)" strokeWidth="3"/>
                    <line x1="47.5" y1="5" x2="47.5" y2="0" stroke="rgba(234, 179, 8, 0.7)" strokeWidth="3"/>
                </svg>
            </div>

            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[3px] opacity-20 animate-pulse-slow" style={{ animationDuration: '6s' }}>
                <div style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(249, 115, 22, 0.8) 50%, transparent 100%)',
                    filter: 'blur(2px)',
                    height: '100%',
                }} />
            </div>

            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 w-[900px] h-[3px] opacity-20 animate-pulse-slow" style={{ animationDuration: '8s', animationDelay: '2s' }}>
                <div style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.8) 50%, transparent 100%)',
                    filter: 'blur(2px)',
                    height: '100%',
                }} />
            </div>

            <div className="absolute top-[75%] left-[50%] -translate-x-1/2 w-[700px] h-[3px] opacity-20 animate-pulse-slow" style={{ animationDuration: '7s', animationDelay: '4s' }}>
                <div style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(234, 179, 8, 0.8) 50%, transparent 100%)',
                    filter: 'blur(2px)',
                    height: '100%',
                }} />
            </div>

            <div className="absolute top-[15%] left-[15%] w-[300px] h-[300px] opacity-30 animate-spin-slow" style={{ animationDuration: '40s' }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(249, 115, 22, 0.3)',
                    borderRadius: '50%',
                    borderTopColor: 'rgba(249, 115, 22, 0.6)',
                    borderRightColor: 'transparent',
                }} />
            </div>

            <div className="absolute bottom-[20%] right-[15%] w-[350px] h-[350px] opacity-30 animate-spin-slow" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(59, 130, 246, 0.3)',
                    borderRadius: '50%',
                    borderBottomColor: 'rgba(59, 130, 246, 0.6)',
                    borderLeftColor: 'transparent',
                }} />
            </div>

            <div className="absolute top-[40%] right-[20%] w-[280px] h-[280px] opacity-25 animate-spin-slow" style={{ animationDuration: '45s' }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    border: '2px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '50%',
                    borderTopColor: 'rgba(168, 85, 247, 0.6)',
                    borderBottomColor: 'transparent',
                }} />
            </div>

            <div
                className="absolute top-[12%] left-[5%] w-[550px] h-[550px] animate-pulse-slow"
                style={{
                    background: 'radial-gradient(circle, rgba(249, 115, 22, 0.45) 0%, rgba(249, 115, 22, 0.2) 35%, transparent 65%)',
                    filter: 'blur(90px)',
                    animationDuration: '7s',
                }}
            />

            <div
                className="absolute top-[35%] right-[8%] w-[600px] h-[600px] animate-pulse-slow"
                style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(59, 130, 246, 0.2) 35%, transparent 65%)',
                    filter: 'blur(90px)',
                    animationDuration: '9s',
                    animationDelay: '1.5s',
                }}
            />

            <div
                className="absolute bottom-[15%] left-[18%] w-[500px] h-[500px] animate-pulse-slow"
                style={{
                    background: 'radial-gradient(circle, rgba(234, 179, 8, 0.4) 0%, rgba(234, 179, 8, 0.18) 35%, transparent 65%)',
                    filter: 'blur(90px)',
                    animationDuration: '11s',
                    animationDelay: '3s',
                }}
            />

            {[...Array(65)].map((_, i) => (
                <div
                    key={`particle-${i}`}
                    className="absolute animate-particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: `${3 + Math.random() * 6}px`,
                        height: `${3 + Math.random() * 6}px`,
                        background: i % 5 === 0 ? '#F97316' : 
                                   i % 5 === 1 ? '#3B82F6' : 
                                   i % 5 === 2 ? '#EAB308' : 
                                   i % 5 === 3 ? '#A855F7' : '#FFFFFF',
                        borderRadius: '50%',
                        boxShadow: `0 0 ${20 + Math.random() * 35}px currentColor`,
                        animationDelay: `${Math.random() * 8}s`,
                        animationDuration: `${10 + Math.random() * 10}s`,
                        opacity: 0.75,
                    }}
                />
            ))}

            {[...Array(8)].map((_, i) => (
                <div
                    key={`streak-${i}`}
                    className="absolute opacity-10"
                    style={{
                        left: `${10 + i * 12}%`,
                        top: `${-10}%`,
                        width: '2px',
                        height: `${100 + Math.random() * 100}px`,
                        background: `linear-gradient(180deg, transparent 0%, ${i % 3 === 0 ? 'rgba(249, 115, 22, 0.6)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(234, 179, 8, 0.6)'} 50%, transparent 100%)`,
                        transform: `rotate(${-15 + Math.random() * 30}deg)`,
                        animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`,
                    }}
                />
            ))}

            <div
                className="absolute top-0 left-0 w-[500px] h-[500px]"
                style={{
                    background: 'radial-gradient(circle at top left, rgba(249, 115, 22, 0.5) 0%, rgba(249, 115, 22, 0.2) 45%, transparent 75%)',
                    filter: 'blur(80px)',
                }}
            />

            <div
                className="absolute top-0 right-0 w-[500px] h-[500px]"
                style={{
                    background: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.2) 45%, transparent 75%)',
                    filter: 'blur(80px)',
                }}
            />

            <div
                className="absolute bottom-0 left-0 w-[500px] h-[500px]"
                style={{
                    background: 'radial-gradient(circle at bottom left, rgba(168, 85, 247, 0.45) 0%, rgba(168, 85, 247, 0.18) 45%, transparent 75%)',
                    filter: 'blur(80px)',
                }}
            />

            <div
                className="absolute bottom-0 right-0 w-[500px] h-[500px]"
                style={{
                    background: 'radial-gradient(circle at bottom right, rgba(234, 179, 8, 0.45) 0%, rgba(234, 179, 8, 0.18) 45%, transparent 75%)',
                    filter: 'blur(80px)',
                }}
            />

            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'repeat',
                    mixBlendMode: 'overlay',
                }}
            />

            <div
                className="absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, transparent 15%, rgba(0, 0, 0, 0.4) 65%, rgba(0, 0, 0, 0.85) 100%)',
                }}
            />

            <div
                className="absolute bottom-0 left-0 right-0 h-[45%]"
                style={{
                    background: 'linear-gradient(to top, rgba(0, 0, 0, 0.92) 0%, rgba(0, 0, 0, 0.5) 30%, transparent 100%)',
                }}
            />
        </div>
    );
}
