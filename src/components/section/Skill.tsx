'use client';
import skills from '@/mocks/Skills';

type SkillProps = {
  darkMode: boolean;
};

const Skills = ({ darkMode }: SkillProps) => {
  return (
    <section id="skills" className="relative px-4 py-16">
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2
          className={`mb-8 text-5xl font-black transition-all duration-500 hover:scale-105 ${
            darkMode ? 'text-pink-400' : 'text-cyan-600'
          }`}
        >
          SKILLS
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-500 hover:scale-105 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex items-center gap-4">
                <div
                  className={`btn-press border-4 border-black p-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${skill.color}`}
                >
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{skill.name}</h3>
                    <span className="text-lg font-bold">{skill.level}%</span>
                  </div>
                </div>
              </div>
              <div className="h-6 w-full border-4 border-black bg-gray-300">
                <div
                  className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
