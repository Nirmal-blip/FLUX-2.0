"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import EnergyCore from "./EnergyCore";
import FloatingParticles from "./FloatingParticles";
import ScrollParallax from "./ScrollParallax";

export default function Scene3D({ showCore = false, interactive = false }) {
  return (
    <Canvas
      className="absolute inset-0 z-0"
      gl={{ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      }}
      dpr={[1, 1.5]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} color="#00E5FF" />
      <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#E10600" />

      <Suspense fallback={null}>
        <ScrollParallax>
          {/* Background particles */}
          <FloatingParticles count={80} />

          {/* Main energy core */}
          {showCore && <EnergyCore />}
        </ScrollParallax>
      </Suspense>
    </Canvas>
  );
}
