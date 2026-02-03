"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { 
  TrophyIcon, 
  MusicalNoteIcon,
  SparklesIcon,
  BoltIcon,
  FireIcon
} from "@heroicons/react/24/outline";

const PageTransition = ({ children, pageName }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");
  const router = useRouter();

  const pageConfigs = {
    pratyancha: {
      title: "PRATYANCHA",
      subtitle: "Sports Festival",
      icon: TrophyIcon,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-950/20 to-cyan-950/20",
      particles: "text-blue-400",
      loadingTexts: [
        "Preparing the arena...",
        "Loading championship data...",
        "Setting up sports events...",
        "Ready to compete!"
      ]
    },
    echoes: {
      title: "ECHOES",
      subtitle: "Cultural Festival",
      icon: MusicalNoteIcon,
      color: "from-pink-500 to-purple-500",
      bgColor: "from-pink-950/20 to-purple-950/20",
      particles: "text-pink-400",
      loadingTexts: [
        "Tuning the instruments...",
        "Setting up the stage...",
        "Loading cultural events...",
        "Ready to perform!"
      ]
    }
  };

  const config = pageConfigs[pageName] || pageConfigs.pratyancha;

  useEffect(() => {
    if (isLoading) {
      let textIndex = 0;
      const interval = setInterval(() => {
        setLoadingText(config.loadingTexts[textIndex]);
        textIndex = (textIndex + 1) % config.loadingTexts.length;
      }, 800);

      const timeout = setTimeout(() => {
        setIsLoading(false);
        clearInterval(interval);
      }, 3200);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [isLoading, config.loadingTexts]);

  const startTransition = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      router.push(path);
    }, 3200);
  };

  const LoadingScreen = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-50 bg-gradient-to-br ${config.bgColor} backdrop-blur-sm flex items-center justify-center`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${config.particles} rounded-full opacity-30`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}

        {/* Geometric shapes */}
        <motion.div
          className={`absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r ${config.color} opacity-10 rounded-full blur-3xl`}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className={`absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-r ${config.color} opacity-10 rounded-full blur-2xl`}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${config.color} bg-opacity-20 backdrop-blur-sm border border-white/20 flex items-center justify-center`}>
            <config.icon className={`w-12 h-12 ${config.particles}`} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${config.color}`}
        >
          {config.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-300 mb-8"
        >
          {config.subtitle}
        </motion.p>

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <AnimatePresence mode="wait">
            <motion.p
              key={loadingText}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-gray-400 text-lg"
            >
              {loadingText}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Loading Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="w-64 mx-auto"
        >
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${config.color} rounded-full`}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>

        {/* Loading Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-2 mt-6"
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 ${config.particles} rounded-full`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
};

// Hook for easy navigation with loading
export const usePageTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const navigateWithTransition = (path, pageName) => {
    setIsTransitioning(true);
    
    // Show loading screen
    const loadingElement = document.createElement('div');
    loadingElement.id = 'page-transition-loading';
    document.body.appendChild(loadingElement);
    
    // Create and render loading component
    import('react-dom/client').then(({ createRoot }) => {
      const root = createRoot(loadingElement);
      
      const LoadingComponent = () => {
        const pageConfigs = {
          pratyancha: {
            title: "PRATYANCHA",
            subtitle: "Sports Festival",
            icon: TrophyIcon,
            color: "from-blue-500 to-cyan-500",
            bgColor: "from-blue-950/20 to-cyan-950/20",
            particles: "text-blue-400",
            loadingTexts: [
              "Preparing the arena...",
              "Loading championship data...",
              "Setting up sports events...",
              "Ready to compete!"
            ]
          },
          echoes: {
            title: "ECHOES",
            subtitle: "Cultural Festival",
            icon: MusicalNoteIcon,
            color: "from-pink-500 to-purple-500",
            bgColor: "from-pink-950/20 to-purple-950/20",
            particles: "text-pink-400",
            loadingTexts: [
              "Tuning the instruments...",
              "Setting up the stage...",
              "Loading cultural events...",
              "Ready to perform!"
            ]
          }
        };

        const config = pageConfigs[pageName] || pageConfigs.pratyancha;
        const [loadingText, setLoadingText] = useState(config.loadingTexts[0]);

        useEffect(() => {
          let textIndex = 0;
          const interval = setInterval(() => {
            textIndex = (textIndex + 1) % config.loadingTexts.length;
            setLoadingText(config.loadingTexts[textIndex]);
          }, 800);

          const timeout = setTimeout(() => {
            clearInterval(interval);
            document.body.removeChild(loadingElement);
            router.push(path);
            setIsTransitioning(false);
          }, 3200);

          return () => {
            clearInterval(interval);
            clearTimeout(timeout);
          };
        }, []);

        return (
          <div className={`fixed inset-0 z-50 bg-gradient-to-br ${config.bgColor} backdrop-blur-sm flex items-center justify-center`}>
            {/* Same loading screen content as above */}
            <div className="absolute inset-0">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-2 h-2 ${config.particles} rounded-full opacity-30`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 text-center text-white">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${config.color} bg-opacity-20 backdrop-blur-sm border border-white/20 flex items-center justify-center`}>
                  <config.icon className={`w-12 h-12 ${config.particles}`} />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r ${config.color}`}
              >
                {config.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8"
              >
                {config.subtitle}
              </motion.p>

              <motion.p
                key={loadingText}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 text-lg mb-8"
              >
                {loadingText}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="w-64 mx-auto"
              >
                <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${config.color} rounded-full`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        );
      };

      root.render(<LoadingComponent />);
    });
  };

  return { navigateWithTransition, isTransitioning };
};

export default PageTransition;
