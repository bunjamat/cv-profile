import React from "react";
import { Code } from "lucide-react";

const AboutSection = ({ personalInfo, isLoaded, setActiveSection, setSelectedTabIndex }) => {
  return (
    <section className="animate-fade-in">
      <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
        <div
          className={`transition-all duration-1000 ${
            isLoaded
              ? "translate-x-0 opacity-100"
              : "translate-x-[-50px] opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            {personalInfo.summary}
          </p>
          <button
            onClick={() => {
              setActiveSection("projects");
              setSelectedTabIndex(4); // projects tab index
            }}
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg"
          >
            ดูผลงานของฉัน
          </button>
        </div>

        <div
          className={`flex justify-center transition-all duration-1000 delay-300 ${
            isLoaded
              ? "translate-x-0 opacity-100"
              : "translate-x-[50px] opacity-0"
          }`}
        >
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-950 to-indigo-950 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-black p-3 rounded-full">
              <Code size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;