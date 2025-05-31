'use client';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { featuredProjects } from '@/mocks/FeaturedProjects';

type FeaturedProjectsProps = {
  darkMode: boolean;
};

const FeaturedProjects = ({ darkMode }: FeaturedProjectsProps) => {
  return (
    <section id="projects" className="relative px-4 py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          className={`mb-8 text-5xl font-black transition-all duration-500 hover:scale-105 ${
            darkMode ? 'text-green-400' : 'text-blue-600'
          }`}
        >
          FEATURED PROJECTS
        </h2>
        <div className="mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`group border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`mb-4 h-32 w-full overflow-hidden border-4 border-black transition-all duration-300 group-hover:scale-105`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className={`${project.color} h-full w-full`} />
                )}
              </div>
              <h3 className="mb-3 text-2xl font-bold transition-all duration-300 group-hover:scale-105">
                {project.title}
              </h3>
              <p className="mb-4 text-lg">{project.description}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`btn-press cursor-pointer border-2 border-black px-3 py-1 text-sm font-bold transition-all duration-300 hover:scale-110 ${
                      darkMode
                        ? 'bg-cyan-400 text-black'
                        : 'bg-yellow-400 text-black'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Button
                asChild
                className="btn-press border-4 border-black bg-pink-400 font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-pink-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GITHUB PROJECT
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Link href="/projects">
            <Button className="btn-press-lg cursor-pointer border-4 border-black bg-purple-400 px-8 py-4 text-lg font-bold text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 hover:scale-105 hover:bg-purple-300 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <ArrowRight className="mr-2 h-5 w-5" />
              LIHAT SEMUA PROJECT
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
