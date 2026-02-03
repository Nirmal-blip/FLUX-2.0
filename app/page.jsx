"use client";

import React from "react";
import HeroSection from "./components/HeroSection";
import AboutIntro from "./components/AboutIntro";
import MissionSection from "./components/MissionSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Navbar from "./components/Navbar";
import AboutPageComp from "./components/About";

import ScrollToTop from "./components/ui/ScrollToTop";
import LazySection from "./components/ui/LazySection";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <LazySection>
        <AboutPageComp />
      </LazySection>

      {/* About Intro */}
      <LazySection>
        <AboutIntro />
      </LazySection>



      {/* Team Section */}
      <LazySection>
        <TeamSection />
      </LazySection>

      {/* Contact Section */}
      <LazySection>
        <ContactSection />
      </LazySection>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default HomePage;
