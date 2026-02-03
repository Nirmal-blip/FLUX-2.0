"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground({ theme = "marvel" }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const marvelConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: ["#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b"],
      },
      links: {
        color: "#06b6d4",
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
        animation: {
          enable: true,
          speed: 2,
          minimumValue: 0.1,
        },
      },
    },
    detectRetina: true,
  };

  const techConfig = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 2,
        },
        grab: {
          distance: 140,
          links: {
            opacity: 0.8,
          },
        },
      },
    },
    particles: {
      color: {
        value: "#06b6d4",
      },
      links: {
        color: "#06b6d4",
        distance: 120,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "out",
        },
        random: true,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 60,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: ["circle", "square"],
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  };

  const config = theme === "marvel" ? marvelConfig : techConfig;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={config}
      className="absolute inset-0 z-0"
    />
  );
}