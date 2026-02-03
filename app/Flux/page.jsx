"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Import FLUX Components
import HeroFlux from "../components/Flux/HeroFlux";
import GalleryFlux from "../components/Flux/GalleryFlux";
import EventsFlux from "../components/Flux/EventsFlux";
import TeamFlux from "../components/Flux/TeamFlux";
import FooterFlux from "../components/Flux/FooterFlux";
import PageTransition from "../components/ui/PageTransition";
import FluxCursor from "../components/Flux/FluxCursor";
import FluxBackground from "../components/Flux/FluxBackground";
import ArtistPerformance from "../components/Flux/ArtistPerformance";

/**
 * FLUX Tech Fest - Main Page
 * Marvel-Inspired Premium UI with Maximum Performance
 */
export default function FluxFest() {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 100,
      delay: 100,
    });
  }, []);

  return (
    <PageTransition pageName="flux">
      <div className="min-h-screen bg-transparent text-white font-rajdhani relative overflow-x-hidden">

        {/* Static Background */}
        <FluxBackground />
        
        {/* Main Content */}
        <div className="relative z-10">
        <FluxCursor>
          {/* Hero Section */}
          <section id="home">
            <HeroFlux />
          </section>

          {/* Gallery Section */}
          <section id="gallery" data-aos="fade-up">
            <GalleryFlux />
          </section>
          </FluxCursor>
          {/* Artist Section */}
          {/* <section id="artist" data-aos="fade-up">
            <ArtistPerformance />
          </section> */}

          {/* Events Section */}
          <section id="events" data-aos="fade-up">
            <EventsFlux />
          </section>

          {/* Team Section */}
          <section id="team" data-aos="fade-up">
            <TeamFlux />
          </section>

          {/* Footer/Contact Section */}
          <section id="contact">
            <FooterFlux />
          </section>
        </div>

        {/* Scroll to Top Button */}

      </div>
    </PageTransition>
  );
}