"use client";

import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "framer-motion";

export default function ScrollParallax({ children }) {
  const groupRef = useRef();
  const { scrollY } = useScroll();
  const { viewport } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      // Very subtle parallax based on scroll
      const scrollValue = scrollY.get();
      const parallaxY = (scrollValue / 1000) * 0.5; // Very slow movement
      const parallaxX = Math.sin(scrollValue / 2000) * 0.2;
      
      groupRef.current.position.y = parallaxY;
      groupRef.current.position.x = parallaxX;
    }
  });

  return <group ref={groupRef}>{children}</group>;
}
