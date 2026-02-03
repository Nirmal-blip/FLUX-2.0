"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FloatingParticles({ count = 80 }) {
  const meshRef = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      temp.push({ x, y, z });
    }
    return temp;
  }, [count]);

  const particlePositions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    particles.forEach((particle, i) => {
      positions[i * 3] = particle.x;
      positions[i * 3 + 1] = particle.y;
      positions[i * 3 + 2] = particle.z;
    });
    return positions;
  }, [particles, count]);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.y = time * 0.02;
      
      // Subtle vertical drift
      const positions = meshRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(time + i) * 0.001;
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particlePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00E5FF"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
