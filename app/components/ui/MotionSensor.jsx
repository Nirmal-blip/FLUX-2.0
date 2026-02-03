"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useSpring as useReactSpring, animated } from "@react-spring/web";

const MotionSensor = ({ 
  children, 
  sensitivity = 1, 
  maxTilt = 15, 
  enableGyroscope = true,
  enableMouse = true,
  className = "",
  style = {},
  ...props 
}) => {
  const [isSupported, setIsSupported] = useState(false);
  const [permission, setPermission] = useState("unknown");
  const containerRef = useRef(null);

  // Motion values for smooth animations
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseX, [-300, 300], [-maxTilt, maxTilt]);

  // Spring animations for device motion
  const [springs, api] = useReactSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  // Check device motion support
  useEffect(() => {
    const checkSupport = () => {
      if (typeof window !== "undefined") {
        const hasDeviceMotion = "DeviceMotionEvent" in window;
        const hasDeviceOrientation = "DeviceOrientationEvent" in window;
        setIsSupported(hasDeviceMotion || hasDeviceOrientation);
      }
    };

    checkSupport();
  }, []);

  // Request permission for iOS devices
  useEffect(() => {
    const requestPermission = async () => {
      if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
        try {
          const response = await DeviceMotionEvent.requestPermission();
          setPermission(response);
        } catch (error) {
          console.log("Permission request failed:", error);
          setPermission("denied");
        }
      } else {
        setPermission("granted");
      }
    };

    if (isSupported && enableGyroscope) {
      requestPermission();
    }
  }, [isSupported, enableGyroscope]);

  // Device motion handler
  useEffect(() => {
    if (!enableGyroscope || permission !== "granted") return;

    const handleDeviceMotion = (event) => {
      if (event.accelerationIncludingGravity) {
        const { x, y, z } = event.accelerationIncludingGravity;
        
        // Apply sensitivity and constraints
        const tiltX = Math.max(-maxTilt, Math.min(maxTilt, y * sensitivity * 2));
        const tiltY = Math.max(-maxTilt, Math.min(maxTilt, x * sensitivity * 2));
        
        api.start({
          rotateX: tiltX,
          rotateY: tiltY
        });
      }
    };

    const handleDeviceOrientation = (event) => {
      if (event.beta !== null && event.gamma !== null) {
        const tiltX = Math.max(-maxTilt, Math.min(maxTilt, event.beta * sensitivity * 0.3));
        const tiltY = Math.max(-maxTilt, Math.min(maxTilt, event.gamma * sensitivity * 0.3));
        
        api.start({
          rotateX: tiltX,
          rotateY: tiltY
        });
      }
    };

    window.addEventListener("devicemotion", handleDeviceMotion);
    window.addEventListener("deviceorientation", handleDeviceOrientation);

    return () => {
      window.removeEventListener("devicemotion", handleDeviceMotion);
      window.removeEventListener("deviceorientation", handleDeviceOrientation);
    };
  }, [permission, enableGyroscope, sensitivity, maxTilt, api]);

  // Mouse movement handler
  const handleMouseMove = (event) => {
    if (!enableMouse || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    mouseX.set((event.clientX - centerX) * sensitivity);
    mouseY.set((event.clientY - centerY) * sensitivity);
  };

  const handleMouseLeave = () => {
    if (!enableMouse) return;
    
    mouseX.set(0);
    mouseY.set(0);
    api.start({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  const handleMouseEnter = () => {
    if (!enableMouse) return;
    
    api.start({ scale: 1.02 });
  };

  // Permission request button for iOS
  const requestPermissionButton = () => (
    <motion.button
      onClick={async () => {
        if (typeof DeviceMotionEvent !== "undefined" && typeof DeviceMotionEvent.requestPermission === "function") {
          const response = await DeviceMotionEvent.requestPermission();
          setPermission(response);
        }
      }}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Enable Motion Sensor
    </motion.button>
  );

  return (
    <div className="relative">
      {/* Permission request for iOS */}
      {isSupported && permission === "unknown" && enableGyroscope && (
        <div className="absolute top-4 right-4 z-50">
          {requestPermissionButton()}
        </div>
      )}

      {/* Subtle motion indicator - just a small dot */}
      {isSupported && permission === "granted" && enableGyroscope && (
        <motion.div
          className="absolute top-4 left-4 z-50 w-2 h-2 bg-green-400/60 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="w-full h-full bg-green-400 rounded-full"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      )}

      {/* Main container with motion effects */}
      <animated.div
        ref={containerRef}
        style={{
          ...springs,
          transformStyle: "preserve-3d",
          ...style
        }}
        className={`motion-sensor-container ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        <motion.div
          style={{
            rotateX: enableMouse ? rotateX : 0,
            rotateY: enableMouse ? rotateY : 0,
            transformStyle: "preserve-3d"
          }}
        >
          {children}
        </motion.div>
      </animated.div>

      <style jsx>{`
        .motion-sensor-container {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
};

export default MotionSensor;
