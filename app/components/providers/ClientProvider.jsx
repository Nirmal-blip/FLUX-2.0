"use client";

import { useEffect, useState } from 'react';

export default function ClientProvider({ children }) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Render children immediately but suppress hydration warnings
  return (
    <div suppressHydrationWarning={true}>
      {children}
    </div>
  );
}
