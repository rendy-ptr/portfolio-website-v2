'use client';

export function scrollToSection(sectionId: string): void {
  if (typeof window === 'undefined') {
    return;
  } // Hindari eksekusi di server

  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.warn(`Element with ID "${sectionId}" not found`);
  }
}
