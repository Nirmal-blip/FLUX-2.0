# FLUX Tech Fest - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### 1. Run the Project
```bash
npm install
npm run dev
```
Open [http://localhost:3000/Flux](http://localhost:3000/Flux)

---

## 📦 What's Included

### ✨ Design System
- **Theme:** Marvel-inspired cinematic tech
- **Colors:** Dark (#0A0F1C) + Blue (#00E5FF) + Red (#E10600)
- **Typography:** Rajdhani font family
- **Animations:** Slow, confident, 600ms duration

### 🎬 3D Features
- **Loading Screen:** 3D energy core with rotating rings
- **Hero Section:** Floating 3D background with particles
- **Scroll Parallax:** Subtle camera movement on scroll

### 📁 Components
```
app/components/Flux/
├── 3D/                    # All 3D components
├── HeroFlux.jsx           # Hero with 3D background
├── EventsFlux.jsx         # Events grid
├── TeamFlux.jsx           # Team cards
├── GalleryFlux.jsx        # Image gallery
├── FooterFlux.jsx         # Footer
└── FluxBackground.jsx     # Global background
```

---

## 🎨 Using the Design System

### Card Component
```jsx
<div className="bg-black/30 backdrop-blur-md border border-white/5 rounded-lg p-6">
  <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-rajdhani)' }}>
    Title
  </h3>
  <p className="text-sm text-gray-500" style={{ fontFamily: 'var(--font-rajdhani)', fontWeight: 400 }}>
    Description
  </p>
</div>
```

### Button Component
```jsx
<button
  className="px-10 py-4 bg-black/40 backdrop-blur-md border rounded-lg"
  style={{
    borderColor: 'rgba(0, 229, 255, 0.3)',
    boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)',
    fontFamily: 'var(--font-rajdhani)',
    letterSpacing: '0.1em'
  }}
>
  Button Text
</button>
```

### Hover Animation
```jsx
<motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
>
  Content
</motion.div>
```

---

## 🎬 Adding 3D to Your Component

### Step 1: Import
```jsx
import { Suspense } from "react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./3D/Scene3D"), {
  ssr: false,
});
```

### Step 2: Add to JSX
```jsx
<div className="absolute inset-0 z-0 opacity-60">
  <Suspense fallback={null}>
    <Scene3D showCore={true} interactive={false} />
  </Suspense>
</div>
```

### Step 3: Done! 🎉

---

## 🎨 Color Reference

```css
/* Primary Colors */
--background: #0A0F1C
--card-bg: rgba(20, 27, 45, 0.6)
--primary-blue: #00E5FF
--secondary-red: #E10600

/* Text Colors */
--text-white: #FFFFFF
--text-gray: #6B7280

/* Borders */
--border-subtle: rgba(255, 255, 255, 0.05)
--border-hover: rgba(255, 255, 255, 0.15)
```

---

## ⚡ Performance Tips

### DO ✅
```jsx
// Dynamic import
const Scene3D = dynamic(() => import("./3D/Scene3D"), { ssr: false });

// Suspense boundary
<Suspense fallback={null}>
  <Scene3D />
</Suspense>

// Limit particles
<FloatingParticles count={80} />
```

### DON'T ❌
```jsx
// No direct import
import Scene3D from "./3D/Scene3D"; // ❌

// No SSR
// Will cause hydration errors

// Too many particles
<FloatingParticles count={1000} /> // ❌
```

---

## 🐛 Common Issues

### Issue: 3D not showing
**Fix:** Check if component is wrapped in Suspense and dynamically imported

### Issue: Slow performance
**Fix:** Reduce particle count or disable 3D on mobile

### Issue: SSR errors
**Fix:** Use `dynamic(() => import(...), { ssr: false })`

---

## 📚 Key Files

| File | Purpose |
|------|---------|
| `HeroFlux.jsx` | Hero section with 3D |
| `LoaderCore.jsx` | 3D loading animation |
| `EnergyCore.jsx` | Main 3D energy core |
| `Scene3D.jsx` | 3D scene container |
| `FluxBackground.jsx` | Global background |

---

## 🎯 Next Steps

1. ✅ Run `npm run dev`
2. ✅ Visit `/Flux` page
3. ✅ See 3D loading screen
4. ✅ Explore hero section with 3D background
5. ✅ Scroll to see parallax effect

---

## 📖 Full Documentation

- **Complete Guide:** `FLUX_IMPLEMENTATION_GUIDE.md`
- **3D Details:** `app/components/Flux/3D/README.md`
- **Enhancements:** `FLUX_3D_ENHANCEMENTS.md`

---

## 🎉 You're Ready!

The FLUX Tech Fest website is now a **premium Marvel-inspired cinematic tech interface** with:
- ✅ Consistent design system
- ✅ Cinematic 3D animations
- ✅ Professional quality
- ✅ Production-ready performance

**Enjoy building! 🚀**
