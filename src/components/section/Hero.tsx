'use client';
import { Button } from '../ui/button';
import { Mail, Download } from 'lucide-react';
import { scrollToSection } from '@/utils/scrollToSection';
import { useGlitchEffect } from '@/hooks/useGlitchEffect';
import { stats } from '@/mocks/Stats';
import { useEffect, useMemo, useRef, useState } from 'react';
import CountUp from '../shared/CountUp';
import { roles as rolesRaw } from '@/mocks/Roles';

type HeroPropTypes = {
  darkMode: boolean;
};
const Hero = ({ darkMode }: HeroPropTypes) => {
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const glitchActive = useGlitchEffect(5000, 200);
  const roles = useMemo(() => rolesRaw, []);

  // Cycling typing animation
  useEffect(() => {
    const currentRole = roles[currentTextIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && typedText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex(prev => (prev + 1) % roles.length);
      } else {
        setTypedText(prev =>
          isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentTextIndex, roles]);
  return (
    <section id="hero" ref={heroRef} className="relative px-4 pt-24 pb-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <div
          className={`border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${
            darkMode ? 'bg-cyan-400' : 'bg-cyan-300'
          }`}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1
                className={`mb-4 text-6xl font-black text-black transition-all duration-300 md:text-8xl ${
                  glitchActive ? 'animate-pulse' : ''
                }`}
              >
                HALO!
              </h1>
              <h2 className="mb-2 text-2xl font-bold text-black md:text-4xl">
                Saya <span className="text-pink-600">RENDY PUTRA PRATAMA</span>
              </h2>
              <h3 className="mb-6 text-3xl font-bold text-black md:text-5xl">
                Seorang{' '}
                <span className="inline-block">
                  {typedText}
                  <span className="animate-blink ml-1 border-r-4 border-black">
                    |
                  </span>
                </span>
              </h3>
              <p className="mb-8 max-w-2xl text-xl leading-relaxed text-black">
                Passionate full-stack developer yang suka membuat aplikasi web
                yang keren dan fungsional. Mari berkolaborasi untuk mewujudkan
                ide digital Anda!
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="btn-press border-4 border-black bg-pink-400 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-pink-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  KONTAK SAYA
                </Button>
                <Button className="btn-press border-4 border-black bg-yellow-400 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  <Download className="mr-2 h-5 w-5" />
                  DOWNLOAD CV
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`btn-press cursor-pointer border-4 border-black bg-white p-4 text-center text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="text-3xl font-black">
                      <CountUp end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm font-bold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
