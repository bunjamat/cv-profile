import React from "react";
import { Calendar } from "lucide-react";

const ExperienceSection = ({ experiences }) => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          ประสบการณ์การทำงาน
        </span>
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {exp.title}
                </h3>
                <p className="text-xl text-purple-300 mb-4">
                  {exp.company}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>
              </div>
              <div className="flex flex-col justify-between">
                <div className="flex items-center text-cyan-400 mb-4">
                  <Calendar size={18} className="mr-2" />
                  {exp.period}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;