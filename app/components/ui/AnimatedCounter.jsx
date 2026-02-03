"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function AnimatedCounter({ 
  end, 
  duration = 2, 
  prefix = "", 
  suffix = "", 
  className = "",
  color = "#06b6d4",
  glowEffect = true 
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {glowEffect && (
        <motion.div
          className="absolute inset-0 rounded-full blur-xl opacity-30"
          style={{ backgroundColor: color }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      
      <div 
        className="relative z-10 font-rajdhani font-bold"
        style={{ 
          color: color,
          textShadow: glowEffect ? `0 0 20px ${color}50` : 'none'
        }}
      >
        {startAnimation ? (
          <CountUp
            start={0}
            end={end}
            duration={duration}
            prefix={prefix}
            suffix={suffix}
            preserveValue
          />
        ) : (
          `${prefix}0${suffix}`
        )}
      </div>
    </motion.div>
  );
}