'use client';
import About from '@/components/section/About';
import ChatBot from '@/components/section/ChatBot';
import Hero from '@/components/section/Hero';
import Navbar from '@/components/shared/Navbar';
import Experience from '@/components/section/Experience';
import { useState, useEffect } from 'react';
import Skills from '@/components/section/Skill';
import NewestProjects from '@/components/section/NewestProject';
import Certificates from '@/components/section/Certificate';
import Contact from '@/components/section/Contact';
import Footer from '@/components/shared/Footer';
import Loading from '@/components/shared/Loading';
import AnimatedBackground from '@/components/shared/AnimatedBackground';
import MouseFollower from '@/components/shared/MouseFollower';

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Set isClient dan darkMode setelah mount
  useEffect(() => {
    setIsClient(true);
    const storedDarkMode = localStorage.getItem('darkMode');
    setDarkMode(storedDarkMode === 'true');
  }, []);

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
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

  if (isLoading && isClient) {
    return <Loading />;
  }
  if (isLoading) {
    return null;
  }
  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-all duration-500 ${
        isClient && darkMode
          ? 'bg-gray-900 text-white'
          : 'bg-yellow-50 text-black'
      }`}
    >
      {/* Animated Background */}
      <AnimatedBackground isClient={isClient} darkMode={darkMode} />

      {/* Mouse Follower */}
      {isClient && <MouseFollower />}

      {/* Floating Chatbot Button */}
      <ChatBot darkMode={isClient ? darkMode : false} />
      {/* NAVIGATION */}
      <Navbar
        darkMode={isClient ? darkMode : false}
        setDarkMode={setDarkMode}
        path="home"
      />
      {/* HERO SECTION */}
      <Hero darkMode={isClient ? darkMode : false} />
      {/* About Section */}
      <About darkMode={isClient ? darkMode : false} />
      {/* Experience Section */}
      <Experience darkMode={isClient ? darkMode : false} />
      {/* Skill Section */}
      <Skills darkMode={isClient ? darkMode : false} />
      {/* Projects Section - Featured Only */}
      <NewestProjects darkMode={isClient ? darkMode : false} />
      {/* Certificates Section */}
      <Certificates darkMode={isClient ? darkMode : false} />
      {/* Contact Section */}
      <Contact darkMode={isClient ? darkMode : false} />
      {/* Footer Section */}
      <Footer darkMode={isClient ? darkMode : false} />
    </div>
  );
}
