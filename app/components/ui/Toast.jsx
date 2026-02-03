"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

export default function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          background: 'rgba(17, 24, 39, 0.95)',
          color: '#fff',
          border: '1px solid rgba(34, 197, 94, 0.3)',
          borderRadius: '12px',
          backdropFilter: 'blur(16px)',
          fontFamily: 'var(--font-poppins)',
        },
        success: {
          iconTheme: {
            primary: '#10b981',
            secondary: '#fff',
          },
        },
        error: {
          iconTheme: {
            primary: '#ef4444',
            secondary: '#fff',
          },
        },
      }}
    />
  );
}
