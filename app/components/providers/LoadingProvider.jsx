"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LoadingScreen from "../ui/LoadingScreen";

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageName, setPageName] = useState("");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Determine page name from pathname
    const getPageName = (path) => {
      const lowerPath = path.toLowerCase();
      if (lowerPath.includes("pratyancha")) return "pratyancha";
      if (lowerPath.includes("echoes")) return "echoes";
      if (lowerPath.includes("flux")) return "flux";
      if (lowerPath.includes("clubs")) return "clubs";
      return "home";
    };

    const currentPageName = getPageName(pathname);
    setPageName(currentPageName);

    // Show loading when pathname changes (except for home page)
    if (pathname !== "/" && currentPageName !== "home") {
      setIsLoading(true);

      // Extended loading time for stadium animation - 10 seconds for Pratyancha, 3 seconds for others
      const loadingDuration = currentPageName === "pratyancha" ? 5000 : 3000;
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, loadingDuration);

      return () => clearTimeout(timer);
    } else {
      // Stop loading immediately when on home page
      setIsLoading(false);
    }
  }, [pathname, mounted]);

  const startLoading = (targetPageName) => {
    // Normalize page name
    const normalizedName = targetPageName.toLowerCase();
    setPageName(normalizedName);
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, startLoading, stopLoading, pageName }}>
      <LoadingScreen isLoading={isLoading} pageName={pageName} />
      {children}
    </LoadingContext.Provider>
  );
};
