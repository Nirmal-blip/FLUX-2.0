"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function AdvancedModal({ 
  children, 
  trigger, 
  title, 
  description,
  size = "md",
  theme = "dark",
  showCloseButton = true,
  onOpenChange
}) {
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-7xl"
  };

  const themeClasses = {
    dark: "bg-black/95 border-gray-700 text-white",
    light: "bg-white/95 border-gray-300 text-black",
    marvel: "bg-gradient-to-br from-red-900/95 to-yellow-900/95 border-red-500/50 text-white",
    tech: "bg-gradient-to-br from-cyan-900/95 to-blue-900/95 border-cyan-500/50 text-white"
  };

  return (
    <Dialog.Root onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        {trigger}
      </Dialog.Trigger>
      
      <AnimatePresence>
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </Dialog.Overlay>
          
          <Dialog.Content asChild>
            <motion.div
              className={`
                fixed top-1/2 left-1/2 z-50
                ${sizeClasses[size]} w-full mx-4
                ${themeClasses[theme]}
                rounded-2xl border backdrop-blur-xl
                shadow-2xl p-6
              `}
              initial={{ 
                opacity: 0, 
                scale: 0.8, 
                x: "-50%", 
                y: "-50%" 
              }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                x: "-50%", 
                y: "-50%" 
              }}
              exit={{ 
                opacity: 0, 
                scale: 0.8, 
                x: "-50%", 
                y: "-50%" 
              }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut" 
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  {title && (
                    <Dialog.Title className="text-2xl font-rajdhani font-bold">
                      {title}
                    </Dialog.Title>
                  )}
                  {description && (
                    <Dialog.Description className="text-gray-400 mt-2 font-rajdhani">
                      {description}
                    </Dialog.Description>
                  )}
                </div>
                
                {showCloseButton && (
                  <Dialog.Close asChild>
                    <motion.button
                      className="p-2 rounded-full hover:bg-white/10 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <XMarkIcon className="w-6 h-6" />
                    </motion.button>
                  </Dialog.Close>
                )}
              </div>

              {/* Content */}
              <div className="max-h-[70vh] overflow-y-auto">
                {children}
              </div>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      </AnimatePresence>
    </Dialog.Root>
  );
}