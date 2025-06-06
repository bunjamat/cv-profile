import React from "react";

const SkillsSection = ({ skills }) => {
  return (
    <section className="animate-fade-in">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ทักษะของฉัน
            </span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            เขียนที่นี่เกี่ยวกับทักษะของคุณ
            อย่าลืมกล่าวถึงทักษะที่สำคัญที่สุด
            และหลีกเลี่ยงการใส่ทักษะมากเกินไป
            ส่วนนี้สำคัญมากสำหรับการแสดงให้เห็น ถึงสิ่งที่คุณรู้
            และเป็นส่วนสำคัญสำหรับบริษัท แต่ถ้าคุณใส่มากเกินไป
            บางครั้งอาจจะคิดว่าเป็นการโอเวอร์
            ดีกว่าให้ใส่เฉพาะสิ่งที่คุณเชี่ยวชาญ และเมื่อถึงเวลาสมัครงาน
            คุณสามารถกล่าวถึงสิ่งอื่นๆ ที่คุณรู้ได้
          </p>
        </div>

        <div className="bg-gray-900/80 rounded-2xl p-6 border border-gray-700/50">
          {/* Terminal Header */}
          <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-gray-700">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-400 text-sm ml-4">terminal</span>
          </div>

          {/* Terminal Content */}
          <div className="font-mono text-sm">
            <div className="text-green-400 mb-4">
              somchai@root: ~$ printskills
            </div>

            <div className="mb-6">
              <h3 className="text-white text-lg font-bold mb-4">
                ทักษะของฉัน
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {skills.frontend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:border-blue-500/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div
                      className={`text-sm font-medium ${skill.color}`}
                    >
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {skills.backend.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:border-green-500/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div
                      className={`text-sm font-medium ${skill.color}`}
                    >
                      {skill.name}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.tools.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center p-3 bg-gray-800/50 rounded-lg border border-gray-600/30 hover:border-purple-500/50 transition-all duration-300"
                  >
                    <div className="text-2xl mb-2">{skill.icon}</div>
                    <div
                      className={`text-sm font-medium ${skill.color}`}
                    >
                      {skill.name}
                    </div>
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

export default SkillsSection;