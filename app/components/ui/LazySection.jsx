"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const LazySection = ({ 
  children, 
  className = "", 
  threshold = 0.1, 
  rootMargin = "50px",
  fallback = null,
  ...props 
}) => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div ref={sectionRef} className={className} {...props}>
      {isInView ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      ) : (
        fallback || (
          <div className="min-h-[200px] flex items-center justify-center">
            <motion.div
              className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>
        )
      )}
    </div>
  );
};

export default LazySection;
