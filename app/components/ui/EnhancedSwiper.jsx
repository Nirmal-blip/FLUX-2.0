"use client";

import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow, Parallax, Mousewheel } from "swiper/modules";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { useGesture } from "@use-gesture/react";
import Tilt from "react-parallax-tilt";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/parallax";

const EnhancedSwiper = ({ 
  images, 
  effect = "coverflow", 
  autoplay = true,
  navigation = true,
  pagination = true,
  className = "",
  slideClassName = "",
  onSlideChange,
  ...props 
}) => {
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  
  // Motion values for gesture interactions
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  // Spring animation for smooth interactions
  const [springs, api] = useSpring(() => ({
    scale: 1,
    rotateX: 0,
    rotateY: 0,
    config: { mass: 1, tension: 170, friction: 26 }
  }));

  // Gesture handling for motion sensor-like interactions
  const bind = useGesture({
    onMove: ({ xy: [px, py], dragging }) => {
      if (!dragging && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = (px - rect.left - rect.width / 2) / 20;
        const y = (py - rect.top - rect.height / 2) / 20;
        
        api.start({
          rotateX: -y,
          rotateY: x,
          scale: 1.02
        });
      }
    },
    onHover: ({ hovering }) => {
      api.start({
        scale: hovering ? 1.05 : 1,
        rotateX: hovering ? 0 : 0,
        rotateY: hovering ? 0 : 0
      });
    }
  });

  // Device motion sensor (if available)
  useEffect(() => {
    const handleDeviceMotion = (event) => {
      if (event.accelerationIncludingGravity) {
        const { x, y, z } = event.accelerationIncludingGravity;
        
        // Subtle tilt based on device orientation
        api.start({
          rotateX: Math.max(-15, Math.min(15, y * 2)),
          rotateY: Math.max(-15, Math.min(15, x * 2))
        });
      }
    };

    // Request permission for iOS devices
    if (typeof DeviceMotionEvent !== 'undefined' && typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission().then(response => {
        if (response === 'granted') {
          window.addEventListener('devicemotion', handleDeviceMotion);
        }
      });
    } else {
      window.addEventListener('devicemotion', handleDeviceMotion);
    }

    return () => {
      window.removeEventListener('devicemotion', handleDeviceMotion);
    };
  }, [api]);

  const swiperConfig = {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow, Parallax, Mousewheel],
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: autoplay ? {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    } : false,
    navigation: navigation,
    pagination: pagination ? {
      clickable: true,
      dynamicBullets: true
    } : false,
    mousewheel: {
      thresholdDelta: 50,
      sensitivity: 1
    },
    parallax: true,
    speed: 800,
    effect: effect,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    },
    onSlideChange: onSlideChange,
    ...props
  };

  return (
    <animated.div
      ref={containerRef}
      {...bind()}
      style={springs}
      className={`relative ${className}`}
    >
      <Swiper
        ref={swiperRef}
        {...swiperConfig}
        className="enhanced-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={slideClassName}>
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.02}
              transitionSpeed={1000}
              gyroscope={true}
            >
              <motion.div
                className="relative overflow-hidden rounded-2xl group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Image with parallax effect */}
                <div 
                  className="relative h-64 md:h-80 overflow-hidden"
                  data-swiper-parallax="-100"
                >
                  <motion.img
                    src={image.src}
                    alt={image.caption || `Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl"
                    whileHover={{
                      borderColor: ["transparent", "#00d4ff", "#0288d1", "#00d4ff", "transparent"],
                      transition: { duration: 2, repeat: Infinity }
                    }}
                  />
                </div>

                {/* Content overlay */}
                {(image.caption || image.title) && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    data-swiper-parallax="-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {image.title && (
                      <h3 className="text-xl font-bold text-white mb-2">
                        {image.title}
                      </h3>
                    )}
                    {image.caption && (
                      <p className="text-gray-300 text-sm">
                        {image.caption}
                      </p>
                    )}
                    
                    {/* Interactive elements */}
                    <div className="flex items-center gap-2 mt-3">
                      {image.tags?.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-2 py-1 bg-blue-500/20 rounded-full text-xs text-blue-400 border border-blue-400/30"
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* Hover effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                />
              </motion.div>
            </Tilt>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation buttons */}
      <motion.button
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => swiperRef.current?.swiper.slidePrev()}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>

      <motion.button
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => swiperRef.current?.swiper.slideNext()}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      <style jsx global>{`
        .enhanced-swiper {
          padding: 20px 0 50px 0;
        }
        
        .enhanced-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .enhanced-swiper .swiper-pagination-bullet-active {
          background: #00d4ff;
          transform: scale(1.2);
        }
        
        .enhanced-swiper .swiper-slide {
          transition: all 0.3s ease;
        }
        
        .enhanced-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
      `}</style>
    </animated.div>
  );
};

export default EnhancedSwiper;
