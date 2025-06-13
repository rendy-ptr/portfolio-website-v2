'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Code, ExternalLink } from 'lucide-react';
import { allProjects } from '@/mocks/AllProjects';
import { filterProjects } from '@/utils/filterProjects';
import { PROJECT_CATEGORIES } from '@/constants/ProjectsCategories';
import Loading from '@/components/shared/Loading';
import AnimatedBackground from '@/components/shared/AnimatedBackground';
import MouseFollower from '@/components/shared/MouseFollower';
import Navbar from '@/components/shared/Navbar';
import type { ProjectCategoryTypes } from '@/types/projectcategories';
import Image from 'next/image';

export default function ProjectsPage() {
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategoryTypes>('All');
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Set isClient and darkMode after mount
  useEffect(() => {
    setIsClient(true);
    // Read darkMode from localStorage only on client
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

  // Custom fungsi untuk filter project berdasarkan kategori
  const filteredProjects = filterProjects(selectedCategory, allProjects);

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

      {/* Navigation */}
      <Navbar
        darkMode={isClient ? darkMode : false}
        setDarkMode={setDarkMode}
        path="projects"
      />

      {/* Main Content */}
      <div className="relative z-10 px-4 pt-24 pb-16">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1
              className={`mb-4 text-6xl font-black transition-all duration-500 hover:scale-105 md:text-8xl ${
                isClient && darkMode ? 'text-yellow-400' : 'text-pink-600'
              }`}
            >
              SEMUA PROJECT
            </h1>
            <p className="mx-auto max-w-3xl text-xl leading-relaxed">
              Koleksi lengkap project yang telah saya kerjakan, mulai dari
              aplikasi web, mobile, hingga AI/ML. Setiap project dibuat dengan
              passion dan teknologi terdepan.
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            {PROJECT_CATEGORIES.map(category => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer border-4 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] ${
                  selectedCategory === category
                    ? isClient && darkMode
                      ? 'bg-yellow-400 text-black'
                      : 'bg-pink-400 text-black'
                    : isClient && darkMode
                      ? 'bg-gray-700 text-white hover:bg-gray-600'
                      : 'bg-white text-black hover:bg-gray-100'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length === 0 ? (
              <div className="col-span-full mt-10 px-4">
                <p
                  className={`text-center text-xl font-semibold ${isClient && darkMode ? 'text-white' : 'text-black'}`}
                >
                  Belum ada project dalam kategori&nbsp;
                  <span
                    className={`font-extrabold ${isClient && darkMode ? 'text-yellow-400' : 'text-pink-600'}`}
                  >
                    &quot;{selectedCategory}&quot;
                  </span>
                </p>
              </div>
            ) : (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`group border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${
                    isClient && darkMode ? 'bg-gray-800' : 'bg-white'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image/Color Block */}
                  <div
                    className={`mb-4 flex h-40 w-full items-center justify-center border-4 border-black transition-all duration-300 group-hover:scale-105 ${
                      project.image ? '' : project.color
                    }`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <Code className="h-12 w-12 text-black opacity-50" />
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="mb-3">
                    <span
                      className={`border-2 border-black px-3 py-1 text-sm font-bold ${
                        darkMode
                          ? 'bg-cyan-400 text-black'
                          : 'bg-yellow-400 text-black'
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info */}
                  <h3 className="mb-3 text-2xl font-bold transition-all duration-300 group-hover:scale-105">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-lg leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`border-2 border-black px-2 py-1 text-xs font-bold transition-all duration-300 hover:scale-110 ${
                          darkMode
                            ? 'bg-gray-700 text-white'
                            : 'bg-gray-200 text-black'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <Button
                    asChild
                    className="btn-press border-4 border-black bg-pink-400 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-pink-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GITHUB PROJECT
                    </a>
                  </Button>
                </div>
              ))
            )}
          </div>

          {/* Back to Home */}
          <div className="mt-16 text-center">
            <Link href="/">
              <Button className="cursor-pointer border-4 border-black bg-purple-400 px-8 py-4 text-lg font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-purple-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <ArrowLeft className="mr-2 h-5 w-5" />
                KEMBALI KE BERANDA
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
