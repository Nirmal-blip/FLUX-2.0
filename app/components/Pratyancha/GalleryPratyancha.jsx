"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { PhotoIcon, TrophyIcon } from "@heroicons/react/24/outline";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import LazySection from "../ui/LazySection";
import ProfessionalGallery from "../ui/ProfessionalGallery";
import SportsBackground from "../ui/SportsBackground";

export default function GalleryPratyancha() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const images = [
    {
      src: "/images/pratyanchaImages/basketball.jpg",
      caption: "Basketball Tournament",
      sport: "Basketball",
      title: "Slam Dunk Championship",
      tags: ["Sports", "Basketball", "2024"]
    },
    {
      src: "/images/pratyanchaImages/football.jpg",
      caption: "Football Championship",
      sport: "Football",
      title: "Football Fever",
      tags: ["Sports", "Football", "Team"]
    },
    {
      src: "/images/pratyanchaImages/badminton.jpg",
      caption: "Badminton Finals",
      sport: "Badminton",
      title: "Shuttlecock Showdown",
      tags: ["Sports", "Badminton", "Finals"]
    },
    {
      src: "/images/pratyanchaImages/volleyball.jpg",
      caption: "Volleyball Showdown",
      sport: "Volleyball",
      title: "Spike Masters",
      tags: ["Sports", "Volleyball", "Championship"]
    },
    {
      src: "/images/pratyanchaImages/cricket.jpg",
      caption: "Cricket League",
      sport: "Cricket",
      title: "Cricket Carnival",
      tags: ["Sports", "Cricket", "League"]
    },

    {
      src: "/images/pratyanchaImages/esports.jpg",
      caption: "E-Sports Championship",
      sport: "E-Sports",
      title: "Digital Arena",
      tags: ["Sports", "E-Sports", "Gaming", "2024"]
    },
    {
      src: "/images/pratyanchaImages/kabadi.jpg",
      caption: "Kabaddi Tournament",
      sport: "Kabaddi",
      title: "Kabaddi Warriors",
      tags: ["Sports", "Kabaddi", "Traditional"]
    },
    {
      src: "/images/pratyanchaImages/tt.jpeg",
      caption: "Table Tennis Championship",
      sport: "Table Tennis",
      title: "Ping Pong Masters",
      tags: ["Sports", "Table Tennis", "Indoor"]
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={ref}
      className="py-20 px-6 relative overflow-hidden font-athletic"
      style={{ backgroundColor: '#0A0A0A' }}
    >
      {/* Sports Arena Background */}
      <SportsBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20 font-athletic"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl border mb-8 backdrop-blur-sm shadow-lg"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(126, 126, 126, 0.15) 100%)',
              borderColor: 'rgba(59, 130, 246, 0.3)',
              boxShadow: '0 8px 32px rgba(59, 130, 246, 0.15)'
            }}
          >
            <PhotoIcon className="w-5 h-5" style={{ color: '#3B82F6' }} />
            <span className="text-base font-medium font-athletic tracking-wider" style={{ color: '#3B82F6' }}>GALLERY</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-athletic athletic-heading mb-8 tracking-wider"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #3B82F6 50%, #60A5FA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Sports Gallery
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-light font-athletic"
            style={{ color: '#FFFFFF' }}
          >
            Explore the <span style={{ color: '#F97316' }} className="font-athletic athletic-title">athletic excellence</span> and
            <span style={{ color: '#3B82F6' }} className="font-athletic athletic-title"> memorable moments</span> from Pratyancha sports festival
          </motion.p>
        </motion.div>

        {/* Enhanced Gallery with Swiper */}
        <div className="mb-20" data-aos="fade-up">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            loop={true}
            className="mySwiper"
            style={{
              paddingBottom: "60px",
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} style={{ width: "300px" }}>
                <Tilt
                  tiltMaxAngleX={15}
                  tiltMaxAngleY={15}
                  perspective={1000}
                  transitionSpeed={1000}
                  scale={1.05}
                  className="h-full"
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {/* Always visible gradient overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                      {/* Always visible title at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                        <h3 className="text-lg font-bold text-white mb-1 font-athletic">{image.title}</h3>
                        <p className="text-sm font-athletic" style={{ color: '#F97316' }}>{image.sport}</p>
                      </div>

                      {/* Hover overlay with additional details */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center p-6 font-athletic">
                          <h3 className="text-xl font-bold text-white mb-2 font-athletic">{image.title}</h3>
                          <p className="text-sm mb-2 font-athletic" style={{ color: '#F97316' }}>{image.sport}</p>
                          <p className="text-sm font-athletic" style={{ color: '#FFFFFF' }}>{image.caption}</p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            {image.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-2 py-1 text-xs rounded-full border font-athletic"
                                style={{
                                  backgroundColor: 'rgba(59, 130, 246, 0.3)',
                                  color: '#FFFFFF',
                                  borderColor: 'rgba(59, 130, 246, 0.5)'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Tilt>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>



        {/* Stats Section */}
        <LazySection className="mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { number: "500+", label: "Participants" },
              { number: "18", label: "Sports" },
              { number: "50+", label: "Medals" },
              { number: "3", label: "Days" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="text-center p-6 rounded-xl bg-white/5 border border-white/10 font-athletic"
              >
                <div className="text-2xl md:text-3xl font-bold mb-2 font-athletic" style={{ color: '#3B82F6' }}>{stat.number}</div>
                <div className="text-sm font-athletic" style={{ color: '#FFFFFF' }}>{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </LazySection>
      </div>
    </section>
  );
}


