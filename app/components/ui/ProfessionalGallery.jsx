"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from "@heroicons/react/24/outline";
import MotionSensor from "./MotionSensor";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const ProfessionalGallery = ({ images, className = "" }) => {
    const swiperRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);

    // Motion values for enhanced interactions
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [3, -3]);
    const rotateY = useTransform(x, [-100, 100], [-3, 3]);

    const toggleAutoplay = () => {
        if (swiperRef.current?.swiper) {
            if (isPlaying) {
                swiperRef.current.swiper.autoplay.stop();
            } else {
                swiperRef.current.swiper.autoplay.start();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const goToSlide = (index) => {
        if (swiperRef.current?.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    return (
        <MotionSensor
            className={`relative ${className}`}
            sensitivity={0.5}
            maxTilt={5}
            enableGyroscope={true}
            enableMouse={true}
        >
            {/* Main Slider */}
            <motion.div
                className="relative"
                style={{ rotateX, rotateY }}
            >
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    spaceBetween={30}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    coverflowEffect={{
                        rotate: 25,
                        stretch: 0,
                        depth: 150,
                        modifier: 1,
                        slideShadows: true
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="professional-gallery-swiper"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index} className="!w-80 md:!w-96">
                            <motion.div
                                className="relative group cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                            >
                                {/* Image Container */}
                                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl">
                                    <img
                                        src={image.src}
                                        alt={image.caption || `Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                        <h3 className="text-lg md:text-xl font-bold mb-2 font-jersey tracking-wide">
                                            {image.title || image.caption}
                                        </h3>
                                        <p className="text-sm text-gray-300 mb-3 font-inter">
                                            {image.caption}
                                        </p>

                                        {/* Tags */}
                                        {image.tags && (
                                            <div className="flex flex-wrap gap-2">
                                                {image.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-2 py-1 bg-blue-500/30 backdrop-blur-sm rounded-full text-xs border border-blue-400/30"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                    {/* Hover Border */}
                                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-colors duration-300" />
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <motion.button
                    className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronLeftIcon className="w-6 h-6" />
                </motion.button>

                <motion.button
                    className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ChevronRightIcon className="w-6 h-6" />
                </motion.button>
            </motion.div>

            {/* Gallery Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
                {/* Play/Pause Button */}
                <motion.button
                    onClick={toggleAutoplay}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {isPlaying ? (
                        <PauseIcon className="w-4 h-4" />
                    ) : (
                        <PlayIcon className="w-4 h-4" />
                    )}
                    <span className="text-sm font-medium">
                        {isPlaying ? 'Pause' : 'Play'}
                    </span>
                </motion.button>

                {/* Slide Counter */}
                <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <span className="text-sm font-medium">
                        {activeIndex + 1} / {images.length}
                    </span>
                </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-6 px-4">
                {images.slice(0, 6).map((image, index) => (
                    <motion.button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${activeIndex === index
                            ? 'border-blue-400 shadow-lg shadow-blue-400/25'
                            : 'border-white/20 hover:border-white/40'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                        {activeIndex === index && (
                            <div className="absolute inset-0 bg-blue-400/20" />
                        )}
                    </motion.button>
                ))}

                {images.length > 6 && (
                    <div className="flex items-center justify-center w-16 h-12 rounded-lg border-2 border-white/20 bg-white/5 text-xs font-medium">
                        +{images.length - 6}
                    </div>
                )}
            </div>

            <style jsx global>{`
        .professional-gallery-swiper {
          padding: 20px 0 60px 0;
        }
        
        .professional-gallery-swiper .swiper-pagination {
          bottom: 20px;
        }
        
        .professional-gallery-swiper .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 12px;
          height: 12px;
          transition: all 0.3s ease;
        }
        
        .professional-gallery-swiper .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.2);
        }
        
        .professional-gallery-swiper .swiper-slide {
          transition: all 0.3s ease;
        }
        
        .professional-gallery-swiper .swiper-slide-active {
          transform: scale(1.05);
        }
        
        .professional-gallery-swiper .swiper-slide-shadow-left,
        .professional-gallery-swiper .swiper-slide-shadow-right {
          background: linear-gradient(to right, rgba(0,0,0,0.3), transparent);
        }
      `}</style>
        </MotionSensor>
    );
};

export default ProfessionalGallery;
