'use client';

import { useState, useEffect } from 'react';

export function useGlitchEffect(
  intervalTime: number = 5000,
  glitchDuration: number = 200
): boolean {
  const [glitchActive, setGlitchActive] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      const timeout = setTimeout(() => setGlitchActive(false), glitchDuration);
      return () => clearTimeout(timeout);
    }, intervalTime);

    return () => clearInterval(glitchInterval);
  }, [intervalTime, glitchDuration]);

  return glitchActive;
}
