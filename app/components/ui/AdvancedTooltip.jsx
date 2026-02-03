"use client";

import * as Tooltip from "@radix-ui/react-tooltip";
import { motion, AnimatePresence } from "framer-motion";

export default function AdvancedTooltip({ 
  children, 
  content, 
  side = "top", 
  theme = "dark",
  delay = 300 
}) {
  const themeClasses = {
    dark: "bg-black/90 text-white border-gray-700",
    light: "bg-white/90 text-black border-gray-300",
    marvel: "bg-gradient-to-r from-red-600/90 to-yellow-600/90 text-white border-red-500/50",
    tech: "bg-cyan-500/90 text-black border-cyan-400/50"
  };

  return (
    <Tooltip.Provider delayDuration={delay}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        <AnimatePresence>
          <Tooltip.Portal>
            <Tooltip.Content
              side={side}
              className={`
                ${themeClasses[theme]}
                px-3 py-2 rounded-lg text-sm font-rajdhani font-medium
                backdrop-blur-sm border shadow-lg z-50
                max-w-xs break-words
              `}
              sideOffset={8}
              asChild
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: side === "top" ? 10 : -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: side === "top" ? 10 : -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                {content}
                <Tooltip.Arrow 
                  className={`fill-current ${
                    theme === "dark" ? "text-black/90" :
                    theme === "light" ? "text-white/90" :
                    theme === "marvel" ? "text-red-600/90" :
                    "text-cyan-500/90"
                  }`} 
                />
              </motion.div>
            </Tooltip.Content>
          </Tooltip.Portal>
        </AnimatePresence>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}