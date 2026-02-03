"use client";
import { useEffect } from "react";

export default function FluxCursor({ children }) {
  useEffect(() => {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const glow = document.getElementById("cursor-glow");

    if (!dot || !ring || !glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let glowX = 0;
    let glowY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // DOT = instant (fastest)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    };

    const render = () => {
      // RING = slight lag
      ringX += (mouseX - ringX) * 0.35;
      ringY += (mouseY - ringY) * 0.35;

      // GLOW = more lag
      glowX += (mouseX - glowX) * 0.18;
      glowY += (mouseY - glowY) * 0.18;

      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`;

      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", move);
    render();

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {children}

      {/* FLUX CURSOR */}
      <div id="cursor-dot" />
      <div id="cursor-ring" />
      <div id="cursor-glow" />
    </>
  );
}
