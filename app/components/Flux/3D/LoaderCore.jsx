"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Ring } from "@react-three/drei";
import * as THREE from "three";

export default function LoaderCore() {
  const coreRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const pulseRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Core rotation
    if (coreRef.current) {
      coreRef.current.rotation.y = time * 0.3;
      coreRef.current.rotation.x = time * 0.2;
    }

    // Ring rotations
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = time * 0.5;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.4;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.3;
    }

    // Pulsing effect
    if (pulseRef.current) {
      const pulse = Math.sin(time * 2) * 0.3 + 1;
      pulseRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group>
      {/* Outer pulse glow */}
      <Sphere ref={pulseRef} args={[1.5, 32, 32]}>
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Core */}
      <Sphere ref={coreRef} args={[0.5, 32, 32]}>
        <meshStandardMaterial
          color="#00E5FF"
          emissive="#00E5FF"
          emissiveIntensity={1}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>

      {/* Inner bright spot */}
      <Sphere args={[0.2, 16, 16]}>
        <meshBasicMaterial color="#FFFFFF" />
      </Sphere>

      {/* Rotating rings */}
      <Ring
        ref={ring1Ref}
        args={[0.8, 0.82, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </Ring>

      <Ring
        ref={ring2Ref}
        args={[1.0, 1.02, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#E10600"
          transparent
          opacity={0.6}
          side={THREE.DoubleSide}
        />
      </Ring>

      <Ring
        ref={ring3Ref}
        args={[1.2, 1.22, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#00E5FF"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </Ring>

      {/* Lights */}
      <pointLight position={[0, 0, 0]} intensity={2} color="#00E5FF" distance={3} />
    </group>
  );
}
