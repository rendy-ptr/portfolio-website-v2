'use client';
import About from '@/components/section/About';
import ChatBot from '@/components/section/ChatBot';
import Hero from '@/components/section/Hero';
import Navbar from '@/components/shared/Navbar';
import Experience from '@/components/section/Experience';
import { useState, useEffect } from 'react';
import Skills from '@/components/section/Skill';
import FeaturedProjects from '@/components/section/FeaturedProject';
import Certificates from '@/components/section/Certificate';
import Contact from '@/components/section/Contact';
import Footer from '@/components/shared/Footer';

export default function Home() {
  // Hydration check
  const [isClient, setIsClient] = useState(false);
  // Inisialisasi darkMode dari localStorage
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true';
    }
    return false;
  });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  // Set isClient to true after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Dark mode effect
  useEffect(() => {
    if (isClient) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
      }
    }
  }, [darkMode, isClient]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="text-center">
          <div className="mb-4 animate-pulse text-6xl font-black text-yellow-400">
            LOADING...
          </div>
          <div className="h-4 w-64 border-4 border-yellow-400 bg-gray-800">
            <div
              className="h-full animate-pulse bg-yellow-400"
              style={{ width: '100%' }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-all duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-yellow-50 text-black'
      }`}
    >
      {/* Animated Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className={`absolute h-32 w-32 animate-spin border-4 border-pink-400 ${
            darkMode ? 'opacity-20' : 'opacity-10'
          }`}
          style={{
            top: '10%',
            left: '10%',
            animationDuration: '20s',
          }}
        ></div>
        <div
          className={`absolute h-32 w-32 animate-spin border-4 border-cyan-400 ${
            darkMode ? 'opacity-20' : 'opacity-10'
          }`}
          style={{
            top: '10%',
            right: '10%',
            animationDuration: '20s',
          }}
        ></div>
        <div
          className={`absolute h-24 w-24 animate-bounce bg-cyan-400 ${darkMode ? 'opacity-20' : 'opacity-10'}`}
          style={{
            top: '60%',
            right: '15%',
            animationDelay: '2s',
          }}
        ></div>
        <div
          className={`absolute h-24 w-24 animate-bounce bg-pink-400 ${darkMode ? 'opacity-20' : 'opacity-10'}`}
          style={{
            top: '60%',
            left: '15%',
            animationDelay: '2s',
          }}
        ></div>
        <div
          className={`absolute h-16 w-16 animate-pulse border-4 border-yellow-400 ${
            darkMode ? 'opacity-20' : 'opacity-10'
          }`}
          style={{
            bottom: '20%',
            left: '20%',
          }}
        ></div>
        <div
          className={`absolute h-16 w-16 animate-pulse border-4 border-green-400 ${
            darkMode ? 'opacity-20' : 'opacity-10'
          }`}
          style={{
            bottom: '20%',
            right: '20%',
          }}
        ></div>
        <div
          className={`absolute h-20 w-20 animate-ping bg-green-400 ${darkMode ? 'opacity-20' : 'opacity-10'}`}
          style={{
            top: '30%',
            right: '30%',
            animationDelay: '1s',
          }}
        ></div>
        <div
          className={`absolute h-20 w-20 animate-ping bg-yellow-400 ${darkMode ? 'opacity-20' : 'opacity-10'}`}
          style={{
            top: '30%',
            left: '30%',
            animationDelay: '1s',
          }}
        ></div>
      </div>

      {/* Mouse Follower */}
      <div
        className="pointer-events-none fixed z-50 h-4 w-4 rounded-full bg-pink-400 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transition: 'all 0.1s ease',
        }}
      ></div>
      {/* Floating Chatbot Button */}
      <ChatBot darkMode={darkMode} />
      {/* NAVIGATION */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/* HERO SECTION */}
      <Hero darkMode={darkMode} />
      {/* About Section */}
      <About darkMode={darkMode} />
      {/* Experience Section */}
      <Experience darkMode={darkMode} />
      {/* Skill Section */}
      <Skills darkMode={darkMode} />
      {/* Projects Section - Featured Only */}
      <FeaturedProjects darkMode={darkMode} />
      {/* Certificates Section */}
      <Certificates darkMode={darkMode} />
      {/* Contact Section */}
      <Contact darkMode={darkMode} />
      {/* Footer Section */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
