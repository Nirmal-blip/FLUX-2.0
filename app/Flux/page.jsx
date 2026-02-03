"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// FLUX Components
import HeroFlux from "../components/Flux/HeroFlux";
import GalleryFlux from "../components/Flux/GalleryFlux";
import EventsFlux from "../components/Flux/EventsFlux";
import TeamFlux from "../components/Flux/TeamFlux";
import FooterFlux from "../components/Flux/FooterFlux";
import PageTransition from "../components/ui/PageTransition";
import FluxCursor from "../components/Flux/FluxCursor";
import FluxBackground from "../components/Flux/FluxBackground";

export default function FluxFest() {
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

        {/* Background */}
        <FluxBackground />

        {/* Content */}
        <div className="relative z-10">
          <section id="home">
            <HeroFlux />
          </section>

          <section id="gallery" data-aos="fade-up">
            <GalleryFlux />
          </section>

          <section id="events" data-aos="fade-up">
            <EventsFlux />
          </section>

          <section id="team" data-aos="fade-up">
            <TeamFlux />
          </section>

          <section id="contact">
            <FooterFlux />
          </section>
        </div>

        {/* 🔥 CURSOR MUST BE LAST & OUTSIDE */}
        <FluxCursor />
      </div>
    </PageTransition>
  );
}
