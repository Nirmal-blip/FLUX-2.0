// Marvel-Inspired Theme Configuration
// Dark, cinematic, high-impact design

export const marvelTheme = {
    // Core Colors - Marvel / Stark Tech Inspired
    colors: {
        // Primary Palette
        stark: {
            red: '#E10600',
            redGlow: 'rgba(225, 6, 0, 0.4)',
            reactorBlue: '#00E5FF',
            blueGlow: 'rgba(0, 229, 255, 0.4)',
            gold: '#FFB800',
            silver: '#C0C0C0',
        },

        // Background Layers
        background: {
            primary: '#000000',
            secondary: '#0A0A0A',
            elevated: '#141414',
            glass: 'rgba(20, 20, 20, 0.8)',
        },

        // Text Colors
        text: {
            primary: '#FFFFFF',
            secondary: '#A0A0A0',
            tertiary: '#606060',
            accent: '#00E5FF',
        },

        // Status Colors
        status: {
            success: '#10B981',
            warning: '#FFB800',
            error: '#E10600',
            info: '#00E5FF',
        },

        // Accent Colors
        accents: {
            purple: '#A855F7',
            cyan: '#00E5FF',
            red: '#E10600',
            green: '#10B981',
        }
    },

    // Typography
    typography: {
        fontFamily: {
            primary: 'var(--font-inter), sans-serif',
            heading: 'var(--font-rajdhani), sans-serif',
            mono: 'var(--font-jetbrains-mono), monospace',
        },
        fontSize: {
            xs: '0.75rem',    // 12px
            sm: '0.875rem',   // 14px
            base: '1rem',     // 16px
            lg: '1.125rem',   // 18px
            xl: '1.25rem',    // 20px
            '2xl': '1.5rem',  // 24px
            '3xl': '1.875rem',// 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem',    // 48px
            '6xl': '3.75rem', // 60px
            '7xl': '4.5rem',  // 72px
        },
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
            black: 900,
        }
    },

    // Spacing Scale
    spacing: {
        0: '0',
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
    },

    // Border Radius
    radius: {
        none: '0',
        sm: '0.25rem',
        base: '0.5rem',
        md: '0.75rem',
        lg: '1rem',
        xl: '1.5rem',
        full: '9999px',
    },

    // Shadows - Cinematic Depth
    shadows: {
        none: 'none',
        sm: '0 2px 8px rgba(0, 0, 0, 0.4)',
        base: '0 4px 16px rgba(0, 0, 0, 0.5)',
        md: '0 8px 24px rgba(0, 0, 0, 0.6)',
        lg: '0 16px 48px rgba(0, 0, 0, 0.7)',
        xl: '0 24px 64px rgba(0, 0, 0, 0.8)',

        // Glow Effects
        glowRed: '0 0 20px rgba(225, 6, 0, 0.5), 0 0 40px rgba(225, 6, 0, 0.3)',
        glowBlue: '0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.3)',
        glowPurple: '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
        glowGreen: '0 0 20px rgba(16, 185, 129, 0.5), 0 0 40px rgba(16, 185, 129, 0.3)',
    },

    // Z-Index Layers
    zIndex: {
        base: 0,
        dropdown: 1000,
        sticky: 1100,
        fixed: 1200,
        modal: 1300,
        popover: 1400,
        tooltip: 1500,
    },

    // Transitions
    transitions: {
        fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
        base: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
        slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },

    // Glassmorphism Presets
    glass: {
        light: {
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        medium: {
            background: 'rgba(255, 255, 255, 0.08)',
            backdropFilter: 'blur(16px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
        },
        heavy: {
            background: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(24px) saturate(180%)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
        },
    },

    // Gradients - Marvel Inspired
    gradients: {
        reactor: 'radial-gradient(circle, rgba(0, 229, 255, 0.6) 0%, rgba(0, 229, 255, 0.2) 50%, transparent 100%)',
        starkRed: 'linear-gradient(135deg, #E10600 0%, #FF4500 100%)',
        iron: 'linear-gradient(135deg, #FFB800 0%, #FF6B00 100%)',
        infinity: 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #F59E0B 100%)',
        dark: 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
        glassRed: 'linear-gradient(135deg, rgba(225, 6, 0, 0.15) 0%, rgba(0, 0, 0, 0.8) 100%)',
        glassBlue: 'linear-gradient(135deg, rgba(0, 229, 255, 0.15) 0%, rgba(0, 0, 0, 0.8) 100%)',
    },
};

// Animation Variants for Framer Motion
export const motionVariants = {
    // Container animations
    container: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            }
        }
    },

    // Item animations
    item: {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    },

    // Fade animations
    fadeIn: {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } }
    },

    // Scale animations
    scaleIn: {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3 }
        }
    },

    // Slide animations
    slideUp: {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    },

    slideDown: {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    },

    slideLeft: {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    },

    slideRight: {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
    },
};

export default marvelTheme;
