'use client';
import { experiences } from '@/mocks/Experiences';

type ExperienceProps = {
  darkMode: boolean;
};

const Experience = ({ darkMode }: ExperienceProps) => {
  return (
    <section id="experience" className="relative px-4 py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          className={`mb-8 text-5xl font-black transition-all duration-500 hover:scale-105 ${
            darkMode ? 'text-cyan-400' : 'text-purple-600'
          }`}
        >
          PENGALAMAN
        </h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`group border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:scale-105 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`btn-press border-4 border-black p-3 transition-all duration-300 ${
                    darkMode ? 'bg-yellow-400' : 'bg-pink-400'
                  }`}
                >
                  {exp.icon}
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-2xl font-bold transition-all duration-300">
                    {exp.title}
                  </h3>
                  <p
                    className={`mb-2 text-lg font-semibold transition-all duration-300 ${
                      darkMode ? 'text-yellow-400' : 'text-pink-600'
                    }`}
                  >
                    {exp.company} • {exp.period}
                  </p>
                  <p className="text-lg">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
