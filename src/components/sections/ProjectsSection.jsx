import React from "react";
import { ExternalLink } from "lucide-react";

const ProjectsSection = ({ projects }) => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Project
        </span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div
              className={`bg-gradient-to-br ${project.bgColor} p-6 h-64 flex flex-col justify-between`}
            >
              <div className="flex items-center justify-between">
                <div className="text-4xl">{project.image}</div>
                <div className="flex space-x-2">
                  {project.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="w-8 h-8 bg-black/20 rounded-lg flex items-center justify-center"
                    >
                      <span className="text-xs font-bold">
                        {tech.slice(0, 2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
              <div className="text-center">
                <a
                  href={project.link}
                  className="inline-flex items-center space-x-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>ดูโปรเจค</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;