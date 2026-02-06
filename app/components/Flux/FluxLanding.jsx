"use client";

import Link from "next/link";
import Image from "next/image"; // Image optimization
import styles from "./FluxLanding.module.css";
import { motion } from "framer-motion";

export default function FluxLanding() {
  return (
    <div className={styles.pageWrapper}>
      {/* --- COMIC TYPOGRAPHY SECTION --- */}
      <div className="absolute top-[12%] left-1/2 -translate-x-1/2 z-[60] w-full text-center pointer-events-none px-4">
        {/* Only Typography Changed to Comic Style */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-6xl md:text-9xl font-[1000] italic tracking-tighter text-white uppercase leading-none drop-shadow-[6px_6px_0px_#ef4444]"
        >
          ABOUT FLUX
        </motion.h1>
        
        <p className="text-yellow-400 text-[10px] md:text-sm font-black tracking-[0.5em] mt-4 uppercase drop-shadow-[2px_2px_0px_#000]">
          ENTER THE CORE // 2026
        </p>
      </div>

      {/* Background */}
      <div className={styles.bg} />

      {/* Optimized Image Tracks */}
      <div className={styles.buildingBack}>
        <div className={styles.track}>
          <Image src="/images/fluxImages/building-back.png" alt="back" width={3840} height={1080} priority />
          <Image src="/images/fluxImages/building-back.png" alt="back" width={3840} height={1080} />
        </div>
      </div>

      <div className={styles.airBalloon}>
        <Image src="/images/fluxImages/air-balloon.png" alt="air balloon" width={250} height={250} />
      </div>

      <div className={`hidden md:block ${styles.airShipRight}`}>
        <Image src="/images/fluxImages/air-ship.png" alt="airship" width={300} height={150} />
      </div>

      <div className={styles.buildingFront}>
        <div className={styles.track}>
          <Image src="/images/fluxImages/building-front.png" alt="front" width={1920} height={1080} priority />
          <Image src="/images/fluxImages/building-front.png" alt="front" width={1920} height={1080} />
        </div>
      </div>

      {/* --- BUTTON (Only Text Updated to Comic Style) --- */}
      <div className="absolute bottom-[24%] left-1/2 -translate-x-1/2 z-[60]">
        <Link 
          href="/aboutFlux" 
          className="relative px-14 py-5 bg-transparent border-2 border-white/40 text-white font-[1000] italic text-2xl tracking-tighter uppercase transition-all duration-300 
          hover:bg-red-600 hover:border-black hover:scale-110 hover:shadow-[8px_8px_0px_#000]"
        >
          <span className="relative z-10">EXPLORE!</span>
        </Link>
      </div>

      {/* Road */}
      <div className={styles.road}>
        <div className={styles.track}>
          <Image src="/images/fluxImages/road.png" alt="road" width={1920} height={400} />
          <Image src="/images/fluxImages/road.png" alt="road" width={1920} height={400} />
        </div>
      </div>

      <Image
        src="/images/fluxImages/car.png"
        alt="car"
        width={350}
        height={180}
        className={styles.car}
      />
      {/* ================= BOTTOM BORDER (Original) ================= */}
      <div className="absolute bottom-0 left-0 w-full z-[80] pointer-events-none">
        <div className="h-[12px] w-full bg-white rounded-b-[48px] shadow-[0_-12px_45px_rgba(255,255,255,0.45)]" />
      </div>
    </div>
    
  );
}