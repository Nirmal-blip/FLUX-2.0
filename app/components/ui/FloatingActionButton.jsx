"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  PlusIcon, 
  XMarkIcon,
  RocketLaunchIcon,
  BoltIcon,
  SparklesIcon,
  StarIcon
} from "@heroicons/react/24/outline";
import AdvancedTooltip from "./AdvancedTooltip";

export default function FloatingActionButton({ 
  actions = [],
  theme = "marvel",
  position = "bottom-right" 
}) {
  const [isOpen, setIsOpen] = useState(false);

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6"
  };

  const themeColors = {
    marvel: {
      primary: "#D41F2A",
      secondary: "#FFD700",
      background: "linear-gradient(135deg, #D41F2A, #FFD700)"
    },
    tech: {
      primary: "#06b6d4",
      secondary: "#8b5cf6",
      background: "linear-gradient(135deg, #06b6d4, #8b5cf6)"
    },
    dark: {
      primary: "#374151",
      secondary: "#6b7280",
      background: "linear-gradient(135deg, #374151, #6b7280)"
    }
  };

  const currentTheme = themeColors[theme];

  const defaultActions = [
    {
      icon: RocketLaunchIcon,
      label: "Quick Register",
      action: () => console.log("Quick register"),
      color: currentTheme.primary
    },
    {
      icon: BoltIcon,
      label: "Power Mode",
      action: () => console.log("Power mode"),
      color: currentTheme.secondary
    },
    {
      icon: SparklesIcon,
      label: "Special Effects",
      action: () => console.log("Special effects"),
      color: "#ec4899"
    },
    {
      icon: StarIcon,
      label: "Favorites",
      action: () => console.log("Favorites"),
      color: "#f59e0b"
    }
  ];

  const finalActions = actions.length > 0 ? actions : defaultActions;

  return (
    <div className={`fixed ${positionClasses[position]} z-50`}>
      <div className="relative">
        {/* Action Buttons */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute bottom-16 right-0 space-y-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {finalActions.map((action, index) => (
                <motion.div
                  key={index}
                  initial={{ 
                    opacity: 0, 
                    scale: 0.5, 
                    x: 20,
                    y: 20 
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    x: 0,
                    y: 0 
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.5, 
                    x: 20,
                    y: 20 
                  }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.1,
                    ease: "backOut"
                  }}
                  className="flex items-center gap-3"
                >
                  {/* Action Label */}
                  <motion.div
                    className="px-3 py-2 bg-black/90 text-white text-sm font-rajdhani font-medium rounded-lg backdrop-blur-sm border border-white/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {action.label}
                  </motion.div>

                  {/* Action Button */}
                  <AdvancedTooltip content={action.label} theme={theme}>
                    <motion.button
                      onClick={action.action}
                      className="w-12 h-12 rounded-full shadow-lg backdrop-blur-sm border border-white/20 flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${action.color}, ${action.color}CC)`,
                        boxShadow: `0 4px 20px ${action.color}40`
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: `0 6px 25px ${action.color}60`
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <action.icon className="w-6 h-6 text-white" />
                    </motion.button>
                  </AdvancedTooltip>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full shadow-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center relative overflow-hidden"
          style={{
            background: currentTheme.background,
            boxShadow: `0 8px 32px ${currentTheme.primary}40`
          }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: `0 12px 40px ${currentTheme.primary}60`
          }}
          whileTap={{ scale: 0.9 }}
          animate={{
            rotate: isOpen ? 45 : 0
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, ${currentTheme.primary}, ${currentTheme.secondary}, ${currentTheme.primary})`
            }}
            animate={{
              rotate: [0, 360]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Icon */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <XMarkIcon className="w-8 h-8 text-white" />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <PlusIcon className="w-8 h-8 text-white" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-white/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
        </motion.button>
      </div>
    </div>
  );
}