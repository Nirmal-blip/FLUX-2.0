# FLUX 3D Components - Marvel Cinematic Tech Theme

## Overview
This directory contains cinematic 3D components inspired by Avengers/Marvel technology aesthetics (Iron Man labs, holograms, energy cores). All components are designed to be subtle, performant, and production-ready.

## Components

### 1. **LoaderCore.jsx**
**Purpose:** 3D energy core for the loading screen
**Features:**
- Rotating central sphere with energy rings
- Pulsing glow effect
- Multiple rotating rings at different speeds
- Soft blue (#00E5FF) and red (#E10600) accent lighting

**Usage:**
```jsx
import LoaderCore from './3D/LoaderCore';
// Used in LoadingScreen.jsx for FLUX page loader
```

### 2. **EnergyCore.jsx**
**Purpose:** Main 3D energy core for hero section
**Features:**
- Distorted sphere with slow rotation
- Multiple orbital rings
- Subtle pulsing animation
- Arc reactor-inspired design
- Low-poly optimized geometry

**Performance:**
- 64 segments for smooth appearance
- Distortion: 0.2 (subtle)
- Rotation speed: 0.15 rad/s (very slow)

### 3. **FloatingParticles.jsx**
**Purpose:** Atmospheric background particles
**Features:**
- 80 floating particles (configurable)
- Subtle vertical drift
- Additive blending for glow effect
- Very slow rotation (0.02 rad/s)

**Performance:**
- Uses BufferGeometry for efficiency
- Minimal CPU usage
- Optimized for mobile

### 4. **Scene3D.jsx**
**Purpose:** Main 3D scene container
**Features:**
- Canvas setup with optimized settings
- Lighting configuration (blue/red accents)
- Scroll-based parallax
- Lazy loading support

**Settings:**
- DPR: [1, 1.5] (adaptive quality)
- Power preference: high-performance
- Alpha: true (transparent background)

### 5. **ScrollParallax.jsx**
**Purpose:** Subtle scroll-based 3D movement
**Features:**
- Very slow parallax effect
- Smooth easing
- Minimal performance impact

**Movement:**
- Y-axis: 0.5px per 1000px scroll
- X-axis: Sine wave (0.2 amplitude)

## Design Philosophy

### Cinematic Approach
- **Slow, confident motion** - No fast spinning or bouncing
- **Subtle presence** - 3D enhances, doesn't distract
- **Premium feel** - Heavy, powerful, controlled
- **Marvel-inspired** - Abstract tech, not characters

### Performance Rules
✅ **DO:**
- Use low-poly geometries
- Limit particle count (80 max)
- Lazy load 3D components
- Use BufferGeometry
- Optimize for mobile

❌ **DON'T:**
- Add 3D characters
- Use high-poly models
- Create fast animations
- Overload with particles
- Use rainbow lighting

## Integration

### Hero Section
```jsx
import Scene3D from './3D/Scene3D';

<Scene3D showCore={true} interactive={false} />
```

### Loading Screen
```jsx
import LoaderCore from './3D/LoaderCore';

<Canvas>
  <LoaderCore />
</Canvas>
```

## Color Palette
- **Primary Blue:** #00E5FF (Electric blue)
- **Secondary Red:** #E10600 (Marvel red)
- **Background:** #0A0F1C (Dark tech)
- **Glow:** Soft, low opacity (0.05-0.1)

## Animation Timing
- **Core rotation:** 0.15 rad/s
- **Ring rotation:** 0.1-0.2 rad/s
- **Pulse duration:** 2-3 seconds
- **Easing:** Smooth, no bounce

## Browser Support
- Modern browsers with WebGL support
- Graceful fallback (no 3D on unsupported devices)
- Mobile optimized (reduced quality on low-end devices)

## Dependencies
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers
- `three` - 3D library
- `framer-motion` - Scroll integration

## Future Enhancements
- [ ] Add holographic grid effect
- [ ] Portal/wormhole transition
- [ ] Energy beam effects
- [ ] Particle trails
- [ ] Advanced lighting scenarios

## Notes
- All 3D components are client-side only (`"use client"`)
- Dynamic imports prevent SSR issues
- Suspense boundaries for loading states
- Performance monitoring recommended in production
