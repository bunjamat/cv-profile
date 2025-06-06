import React from "react";
import { Calendar, Star } from "lucide-react";

const EducationSection = ({ education }) => {
  return (
    <section className="animate-fade-in">
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          ประวัติการศึกษา
        </span>
      </h2>
      <div className="max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
          >
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>
                <p className="text-xl text-purple-300 mb-2">
                  {edu.school}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end">
                <div className="flex items-center text-cyan-400 mb-2">
                  <Calendar size={18} className="mr-2" />
                  {edu.period}
                </div>
                <div className="flex items-center text-yellow-400">
                  <Star size={18} className="mr-2" />
                  GPA: {edu.gpa}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;