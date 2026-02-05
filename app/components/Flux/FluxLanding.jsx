"use client";

import Link from "next/link";
import styles from "./FluxLanding.module.css";

export default function FluxLanding() {
  return (
    <div className={styles.pageWrapper}>
      {/* --- TITLE SECTION --- */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-[60] w-full text-center pointer-events-none">
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white uppercase leading-none drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
          ABOUT FLUX
        </h1>
        <p className="text-cyan-400 text-xs md:text-sm tracking-[0.6em] mt-2 font-light opacity-80">
          ENTER THE CORE
        </p>
      </div>

      {/* Background */}
      <div className={styles.bg} />

      {/* Back Building */}
      <div className={styles.buildingBack}>
        <div className={styles.track}>
          <img src="/images/fluxImages/building-back.png" alt="back" />
          <img src="/images/fluxImages/building-back.png" alt="back" />
        </div>
      </div>

      {/* Air Balloon (Behind Front Building) */}
      <div className={styles.airBalloon}>
        <img src="/images/fluxImages/air-balloon.png" alt="air balloon" />
      </div>

      {/* Right Airship */}
      <div className={`hidden md:block ${styles.airShipRight}`}
      >
        <img src="/images/fluxImages/air-ship.png" alt="airship" />
      </div>

      {/* Front Building */}
      <div className={styles.buildingFront}>
        <div className={styles.track}>
          <img src="/images/fluxImages/building-front.png" alt="front" />
          <img src="/images/fluxImages/building-front.png" alt="front" />
        </div>
      </div>

      {/* --- ENGAGING BUTTON SECTION --- */}
      <div className="absolute bottom-[24%] left-1/2 -translate-x-1/2 z-[60]">
        <Link 
          href="#" 
          className="relative px-12 py-5 bg-transparent border-2 border-white/40 text-white font-black tracking-[0.4em] uppercase transition-all duration-300 
          hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] 
          before:absolute before:inset-0 before:bg-white/10 before:scale-x-0 hover:before:scale-x-100 before:origin-left before:transition-transform before:duration-500"
        >
          <span className="relative z-10">EXPLORE</span>
        </Link>
      </div>

      {/* Road */}
      <div className={styles.road}>
        <div className={styles.track}>
          <img src="/images/fluxImages/road.png" alt="road" />
          <img src="/images/fluxImages/road.png" alt="road" />
        </div>
      </div>

      {/* Static Car / Bike */}
      <img
        src="/images/fluxImages/car.png"
        alt="car"
        className={styles.car}
      />
    </div>
  );
}