"use client";
import { useEffect } from "react";

export default function FluxCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const glow = document.getElementById("cursor-glow");

    if (!dot || !ring || !glow) return;

    let x = 0, y = 0;
    let rx = 0, ry = 0;
    let gx = 0, gy = 0;

    const RING_SPEED = 0.25;
    const GLOW_SPEED = 0.15;

    const move = (e) => {
      x = e.clientX;
      y = e.clientY;

      // ✅ DOT EXACT CENTER
      dot.style.transform =
        `translate3d(${x - 3}px, ${y - 3}px, 0)`; // 6/2
    };

    const loop = () => {
      rx += (x - rx) * RING_SPEED;
      ry += (y - ry) * RING_SPEED;

      gx += (x - gx) * GLOW_SPEED;
      gy += (y - gy) * GLOW_SPEED;

      ring.style.transform =
        `translate3d(${rx - 18}px, ${ry - 18}px, 0)`; // 36/2

      glow.style.transform =
        `translate3d(${gx - 210}px, ${gy - 210}px, 0)`; // 420/2

      requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    loop();

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <div id="cursor-glow" />
    </>
  );
}
