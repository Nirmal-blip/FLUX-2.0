"use client";

import styles from "./FluxLanding.module.css";

export default function FluxLanding() {
  return (
    <div className={styles.pageWrapper}>
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
<div className={styles.airShipRight}>
  <img src="/images/fluxImages/air-ship.png" alt="airship" />
</div>


      {/* Front Building */}
      <div className={styles.buildingFront}>
        <div className={styles.track}>
          <img src="/images/fluxImages/building-front.png" alt="front" />
          <img src="/images/fluxImages/building-front.png" alt="front" />
        </div>
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
