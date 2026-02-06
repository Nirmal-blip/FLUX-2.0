"use client";
import React, { useEffect } from "react";
import Artist from "../components/Flux/ArtistPerformance";
import FluxBackground from "../components/Flux/FluxBackground";
import AOS from "aos";
import "aos/dist/aos.css";
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
<div className="min-h-screen bg-transparent text-white font-rajdhani relative overflow-x-hidden">
     {/* Background */}
            <FluxBackground />
                <section id="artist">
                        <Artist/>
                      </section>
                      </div>

)}