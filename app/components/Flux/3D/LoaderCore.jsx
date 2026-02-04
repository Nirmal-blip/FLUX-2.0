"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Ring, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function LoaderCore() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const pulseRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. STUTTER ROTATION (Spider-Verse style stepped motion)
    const stutterTime = Math.floor(time * 12) / 12; // 12 FPS vibe

    if (coreRef.current) {
      coreRef.current.rotation.y = stutterTime * 2;
      coreRef.current.rotation.x = Math.sin(stutterTime) * 0.5;
    }

    // 2. AGGRESSIVE RING MOTION
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 4;
      ring1Ref.current.scale.setScalar(1 + Math.sin(time * 10) * 0.05); // Vibration
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 3.5;
      ring2Ref.current.rotation.x = Math.PI / 2 + Math.cos(time * 2) * 0.2;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 2;
    }

    // 3. GLITCH PULSE
    if (pulseRef.current) {
      // Random glitch spikes
      const glitch = Math.random() > 0.9 ? 1.8 : 1.4;
      pulseRef.current.scale.setScalar(glitch + Math.sin(time * 5) * 0.2);
    }
  });

  return (
    <group>
      {/* Outer Glitch Aura - Cyan/Blue */}
      <Sphere ref={pulseRef} args={[1.6, 32, 32]}>
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </Sphere>

      {/* Main Core - With Distort (Spider-Sense vibe) */}
      <Sphere ref={coreRef} args={[0.5, 64, 64]}>
        <MeshDistortMaterial
          color="#E10600" // Spiderman Red
          speed={5} 
          distort={0.4} 
          emissive="#E10600"
          emissiveIntensity={2}
          roughness={0}
        />
      </Sphere>

      {/* Inner White Core - High Intensity */}
      <Sphere args={[0.15, 16, 16]}>
        <meshBasicMaterial color="#FFFFFF" />
      </Sphere>

      {/* RINGS - The Red & Blue Contrast */}
      
      {/* Cyan Inner Ring */}
      <Ring
        ref={ring1Ref}
        args={[0.8, 0.85, 4]} // Hexagonal/Angular look (Spider-tech)
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* Red Middle Ring */}
      <Ring
        ref={ring2Ref}
        args={[1.1, 1.15, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#E10600"
          transparent
          opacity={0.7}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* Blue Outer Ring */}
      <Ring
        ref={ring3Ref}
        args={[1.4, 1.42, 3]} // Triangle/Angular
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#0038FF"
          transparent
          opacity={0.5}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* Cinematic Lighting */}
      <pointLight position={[2, 2, 2]} intensity={5} color="#E10600" />
      <pointLight position={[-2, -2, 2]} intensity={5} color="#00E5FF" />
    </group>
  );
}