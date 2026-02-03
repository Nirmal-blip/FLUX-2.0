"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import Tilt from "react-parallax-tilt";

const SnapImage = ({
  src,
  alt,
  className = "",
  snapThreshold = 0.3,
  enableSnap = true,
  enableZoom = true,
  enableTilt = true,
  enableGestures = true,
  overlay,
  onSnap,
  onZoom,
  ...props
}) => {
  const [isSnapped, setIsSnapped] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  // Motion values for smooth interactions
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(1);
  const rotate = useMotionValue(0);

  // Transform values
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  // Spring animations
  const [springs, api] = useSpring(() => ({
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0,
    brightness: 1,
    contrast: 1,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  // Gesture handling
  const bind = useGesture({
    onDrag: ({ offset: [ox, oy], velocity: [vx, vy], direction: [dx, dy], cancel }) => {
      if (!enableGestures) return;

      // Snap detection
      if (enableSnap && Math.abs(vx) > snapThreshold) {
        const snapDirection = dx > 0 ? 1 : -1;
        setIsSnapped(true);
        
        api.start({
          x: snapDirection * 300,
          rotate: snapDirection * 15,
          scale: 0.8,
          onRest: () => {
            onSnap?.(snapDirection);
            // Reset after snap
            setTimeout(() => {
              api.start({ x: 0, rotate: 0, scale: 1 });
              setIsSnapped(false);
            }, 500);
          }
        });
        
        cancel();
        return;
      }

      api.start({ x: ox, y: oy });
    },
    onDragEnd: () => {
      if (!isSnapped) {
        api.start({ x: 0, y: 0, rotate: 0 });
      }
    },
    onPinch: ({ offset: [scale], origin: [ox, oy] }) => {
      if (!enableZoom) return;
      
      const newScale = Math.max(0.5, Math.min(3, scale));
      api.start({ scale: newScale });
      setIsZoomed(newScale > 1.1);
      onZoom?.(newScale);
    },
    onWheel: ({ delta: [, dy] }) => {
      if (!enableZoom) return;
      
      const newScale = Math.max(0.5, Math.min(3, springs.scale.get() - dy * 0.001));
      api.start({ scale: newScale });
      setIsZoomed(newScale > 1.1);
    },
    onHover: ({ hovering }) => {
      if (!hovering && !isZoomed) {
        api.start({ scale: 1, brightness: 1, contrast: 1 });
      } else if (hovering) {
        api.start({ 
          scale: isZoomed ? springs.scale.get() : 1.05,
          brightness: 1.1,
          contrast: 1.1
        });
      }
    }
  });

  // Double tap to zoom
  const handleDoubleClick = () => {
    if (!enableZoom) return;
    
    const newScale = isZoomed ? 1 : 2;
    api.start({ scale: newScale });
    setIsZoomed(newScale > 1.1);
    onZoom?.(newScale);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (!containerRef.current?.contains(document.activeElement)) return;

      switch (event.key) {
        case "ArrowLeft":
          api.start({ x: springs.x.get() - 50 });
          break;
        case "ArrowRight":
          api.start({ x: springs.x.get() + 50 });
          break;
        case "ArrowUp":
          api.start({ y: springs.y.get() - 50 });
          break;
        case "ArrowDown":
          api.start({ y: springs.y.get() + 50 });
          break;
        case "r":
          api.start({ rotate: springs.rotate.get() + 90 });
          break;
        case "Escape":
          api.start({ x: 0, y: 0, scale: 1, rotate: 0 });
          setIsZoomed(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [api, springs]);

  const ImageComponent = enableTilt ? (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      perspective={1000}
      scale={1.02}
      transitionSpeed={1000}
      gyroscope={true}
    >
      <ImageContent />
    </Tilt>
  ) : (
    <ImageContent />
  );

  function ImageContent() {
    return (
      <animated.div
        ref={containerRef}
        {...bind()}
        style={{
          ...springs,
          filter: springs.brightness.to(b => `brightness(${b}) contrast(${springs.contrast.get()})`),
          touchAction: "none"
        }}
        className={`relative cursor-grab active:cursor-grabbing select-none ${className}`}
        onDoubleClick={handleDoubleClick}
        tabIndex={0}
        {...props}
      >
        {/* Loading skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 animate-pulse rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          </div>
        )}

        {/* Main image */}
        <motion.img
          ref={imageRef}
          src={src}
          alt={alt}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          draggable={false}
        />

        {/* Overlay content */}
        {overlay && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {overlay}
          </motion.div>
        )}

        {/* Snap indicators */}
        <AnimatePresence>
          {enableSnap && (
            <>
              <motion.div
                className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent rounded-full"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 0.6, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-transparent via-blue-400 to-transparent rounded-full"
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 0.6, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0 }}
                transition={{ duration: 0.3 }}
              />
            </>
          )}
        </AnimatePresence>

        {/* Zoom indicator */}
        <AnimatePresence>
          {isZoomed && (
            <motion.div
              className="absolute top-4 right-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full border border-white/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <span className="text-xs text-white font-medium">
                {Math.round(springs.scale.get() * 100)}%
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Controls hint */}
        <motion.div
          className="absolute bottom-4 left-4 right-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs text-white/70">
            {enableGestures && <span>Drag</span>}
            {enableZoom && <span>• Zoom</span>}
            {enableSnap && <span>• Swipe to snap</span>}
          </div>
        </motion.div>

        {/* Interactive border */}
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none"
          animate={{
            borderColor: isSnapped 
              ? ["transparent", "#00d4ff", "transparent"] 
              : isZoomed 
                ? "#00d4ff" 
                : "transparent"
          }}
          transition={{ duration: 0.5 }}
        />
      </animated.div>
    );
  }

  return ImageComponent;
};

export default SnapImage;
