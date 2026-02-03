"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AdvancedTabs({ 
  tabs, 
  defaultValue, 
  orientation = "horizontal",
  theme = "dark",
  className = ""
}) {
  const [activeTab, setActiveTab] = useState(defaultValue || tabs[0]?.value);

  const themeClasses = {
    dark: {
      list: "bg-black/50 border-gray-700",
      trigger: "text-gray-400 hover:text-white data-[state=active]:text-white",
      content: "text-white"
    },
    light: {
      list: "bg-white/50 border-gray-300",
      trigger: "text-gray-600 hover:text-black data-[state=active]:text-black",
      content: "text-black"
    },
    marvel: {
      list: "bg-red-900/30 border-red-500/50",
      trigger: "text-gray-300 hover:text-red-400 data-[state=active]:text-red-400",
      content: "text-white"
    },
    tech: {
      list: "bg-cyan-900/30 border-cyan-500/50",
      trigger: "text-gray-300 hover:text-cyan-400 data-[state=active]:text-cyan-400",
      content: "text-white"
    }
  };

  const currentTheme = themeClasses[theme];

  return (
    <Tabs.Root
      value={activeTab}
      onValueChange={setActiveTab}
      orientation={orientation}
      className={`w-full ${className}`}
    >
      <Tabs.List
        className={`
          flex ${orientation === "vertical" ? "flex-col" : "flex-row"}
          ${currentTheme.list}
          rounded-xl p-1 border backdrop-blur-sm
          ${orientation === "vertical" ? "w-48" : "w-full"}
        `}
      >
        {tabs.map((tab) => (
          <Tabs.Trigger
            key={tab.value}
            value={tab.value}
            className={`
              relative px-4 py-3 rounded-lg font-rajdhani font-semibold
              transition-all duration-300 outline-none
              ${currentTheme.trigger}
              ${orientation === "vertical" ? "w-full text-left" : "flex-1"}
            `}
          >
            <div className="flex items-center gap-2">
              {tab.icon && <tab.icon className="w-5 h-5" />}
              <span>{tab.label}</span>
            </div>
            
            {/* Active indicator */}
            {activeTab === tab.value && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30"
                layoutId="activeTab"
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            )}
          </Tabs.Trigger>
        ))}
      </Tabs.List>

      <div className={orientation === "vertical" ? "flex-1 ml-6" : "mt-6"}>
        {tabs.map((tab) => (
          <Tabs.Content
            key={tab.value}
            value={tab.value}
            className={`
              ${currentTheme.content}
              outline-none
            `}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {tab.content}
            </motion.div>
          </Tabs.Content>
        ))}
      </div>
    </Tabs.Root>
  );
}