'use client';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import { useGlitchEffect } from '@/hooks/useGlitchEffect';
import { useScrollHandler } from '@/hooks/useScrollHandler';
import { scrollToSection } from '@/utils/scrollToSection';
import { NAVBAR_CATEGORIES } from '@/constants/NavbarCategories';

type NavbarProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  path: 'home' | 'projects';
};

const Navbar = ({ darkMode, setDarkMode, path }: NavbarProps) => {
  const glitchActive = useGlitchEffect(5000, 200);
  const currentSection = useScrollHandler(NAVBAR_CATEGORIES);

  return (
    <nav
      className={`fixed top-0 z-40 w-full border-b-4 border-black backdrop-blur-md transition-all duration-300 ${
        darkMode ? 'bg-gray-800/90' : 'bg-white/90'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        {path === 'home' ? (
          <>
            <button
              onClick={() => scrollToSection('hero')}
              className={`m-0 cursor-pointer border-none bg-transparent p-0 text-2xl font-black transition-all duration-300 hover:scale-110 ${
                glitchActive ? 'animate-pulse text-red-500' : ''
              }`}
              style={{ all: 'unset', cursor: 'pointer' }}
            >
              <h1>Rendy.dev</h1>
            </button>
            <div className="hidden items-center gap-6 md:flex">
              {NAVBAR_CATEGORIES.map(section => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`cursor-pointer font-bold uppercase transition-all duration-300 hover:scale-110 ${
                    currentSection === section
                      ? darkMode
                        ? 'text-yellow-400'
                        : 'text-pink-600'
                      : 'hover:text-pink-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <Link href="/">
              <Button className="cursor-pointer border-4 border-black bg-cyan-400 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-cyan-300">
                <ArrowLeft className="mr-2 h-5 w-5" />
                KEMBALI
              </Button>
            </Link>
            <h1 className="text-2xl font-black">ALL PROJECTS</h1>
          </>
        )}
        <Button
          onClick={() => setDarkMode(!darkMode)}
          className={`btn-press border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-110 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
            darkMode
              ? 'bg-yellow-400 text-black hover:bg-yellow-300'
              : 'bg-pink-400 text-black hover:bg-pink-300'
          }`}
        >
          {darkMode ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
