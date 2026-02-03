"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Ring, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

export default function EnergyCore() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const glowRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Slow core rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.15;
      coreRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }

    // Ring rotations at different speeds
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.15;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.1;
    }

    // Subtle pulsing glow
    if (glowRef.current) {
      const pulse = Math.sin(time * 0.8) * 0.2 + 0.8;
      glowRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Outer glow */}
      <Sphere ref={glowRef} args={[2.5, 32, 32]}>
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Core sphere */}
      <Sphere ref={coreRef} args={[0.8, 64, 64]}>
        <MeshDistortMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={0.5}
          distort={0.2}
          speed={1}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Inner bright core */}
      <Sphere args={[0.4, 32, 32]}>
        <meshBasicMaterial color="#FFFFFF" />
      </Sphere>

      {/* Rotating rings */}
      <Ring
        ref={ring1Ref}
        args={[1.5, 1.55, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </Ring>

      <Ring
        ref={ring2Ref}
        args={[1.8, 1.83, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#E10600"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </Ring>

      <Ring
        ref={ring3Ref}
        args={[2.1, 2.12, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* Accent lights */}
      <pointLight position={[0, 0, 0]} intensity={1} color="#00E5FF" distance={5} />
      <pointLight position={[2, 2, 2]} intensity={0.5} color="#E10600" distance={4} />
    </group>
  );
}
