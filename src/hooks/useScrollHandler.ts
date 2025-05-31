'use client';

import { useState, useEffect } from 'react';

export function useScrollHandler(sectionIds: string[]): string {
  const [currentSection, setCurrentSection] = useState<string>(
    sectionIds[0] || 'hero'
  );

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      let foundSection = sectionIds[0] || 'hero';
      for (const section of sectionIds) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            foundSection = section;
            break;
          }
        }
      }
      setCurrentSection(foundSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);

  return currentSection;
}
