"use client";
import React, { useState, useEffect ,useCallback} from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Download,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Award,
  SunMoon,
} from "lucide-react";
import { Dock, DockIcon, DockItem, DockLabel } from "../ui/dock";
import { SplashCursor } from "../ui/splash-cursor";

// Import แต่ละ section components
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ProjectsSection from "./ProjectsSection";


export default function InteractiveCV() {
  const [activeSection, setActiveSection] = useState("about");
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Data objects
  const personalInfo = {
    name: "สมชาย ใจดี",
    title: "Full Stack Developer",
    email: "somchai@example.com",
    phone: "+66 8X XXX XXXX",
    location: "กรุงเทพฯ, ประเทศไทย",
    github: "github.com/somchai",
    linkedin: "linkedin.com/in/somchai",
    summary:
      "นักพัฒนาซอฟต์แวร์ที่มีประสบการณ์ 5+ ปี เชี่ยวชาญใน React, Next.js, และ Node.js มีความสนใจในการสร้างแอปพลิเคชันที่ใช้งานง่ายและมีประสิทธิภาพสูง",
  };

  const skills = {
    frontend: [
      { name: "React", icon: "⚛️", color: "text-blue-400" },
      { name: "Next.js", icon: "▲", color: "text-white" },
      { name: "TypeScript", icon: "TS", color: "text-blue-300" },
      { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-400" },
      { name: "Vue.js", icon: "🟢", color: "text-green-400" },
    ],
    backend: [
      { name: "Node.js", icon: "📗", color: "text-green-400" },
      { name: "Express", icon: "🚂", color: "text-gray-300" },
      { name: "Python", icon: "🐍", color: "text-yellow-400" },
      { name: "PostgreSQL", icon: "🐘", color: "text-blue-400" },
      { name: "MongoDB", icon: "🍃", color: "text-green-400" },
    ],
    tools: [
      { name: "Git", icon: "📦", color: "text-orange-400" },
      { name: "Docker", icon: "🐳", color: "text-blue-400" },
      { name: "AWS", icon: "☁️", color: "text-orange-300" },
      { name: "Figma", icon: "🎨", color: "text-purple-400" },
      { name: "Jest", icon: "🃏", color: "text-red-400" },
    ],
  };

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovate Co.",
      period: "2022 - Present",
      description:
        "พัฒนาและดูแลระบบ e-commerce ที่มีผู้ใช้มากกว่า 100,000 คน ปรับปรุงประสิทธิภาพการทำงานของเว็บไซต์ให้เร็วขึ้น 40%",
      technologies: ["Next.js", "PostgreSQL", "AWS", "Docker"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description:
        "สร้างและพัฒนา Web Application สำหรับลูกค้าธุรกิจขนาดใหญ่ ทำงานร่วมกับทีม UX/UI เพื่อสร้างประสบการณ์ผู้ใช้ที่ดี",
      technologies: ["React", "TypeScript", "Sass", "Redux"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Hub",
      period: "2019 - 2020",
      description:
        "เริ่มต้นการทำงานในสายงานพัฒนาซอฟต์แวร์ เรียนรู้และพัฒนาทักษะในการเขียนโปรแกรม",
      technologies: ["JavaScript", "HTML", "CSS", "PHP"],
    },
  ];

  const education = [
    {
      degree: "วิทยาศาสตรบัณฑิต วิทยาการคอมพิวเตอร์",
      school: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี",
      period: "2015 - 2019",
      gpa: "3.45",
    },
  ];

  const projects = [
    {
      name: "Restaurant Website",
      description:
        "เว็บไซต์ร้านอาหารที่สวยงาม พร้อมระบบจองโต๊ะออนไลน์และเมนูดิจิทัล",
      technologies: ["React", "Node.js"],
      image: "🍽️",
      bgColor: "from-green-900 to-emerald-800",
      link: "#",
    },
    {
      name: "E-commerce Platform",
      description:
        "แพลตฟอร์มการขายออนไลน์ครบวงจร พร้อมระบบชำระเงินและจัดการสินค้า",
      technologies: ["Next.js", "Stripe"],
      image: "🛒",
      bgColor: "from-orange-500 to-yellow-500",
      link: "#",
    },
    {
      name: "Coffee Store",
      description: "เว็บไซต์ร้านกาแฟที่อบอุ่น พร้อมระบบสั่งซื้อออนไลน์",
      technologies: ["Vue.js", "CSS3"],
      image: "☕",
      bgColor: "from-amber-800 to-brown-600",
      link: "#",
    },
    {
      name: "Fashion Portfolio",
      description: "เว็บไซต์แสดงผลงานแฟชั่น พร้อมแกลเลอรี่และข้อมูลผลงาน",
      technologies: ["React", "Framer Motion"],
      image: "👗",
      bgColor: "from-pink-400 to-rose-400",
      link: "#",
    },
    {
      name: "Space Restaurant",
      description: "ร้านอาหารธีมอวกาศ พร้อมประสบการณ์การรับประทานอาหารแบบใหม่",
      technologies: ["Three.js", "WebGL"],
      image: "🚀",
      bgColor: "from-indigo-900 to-purple-900",
      link: "#",
    },
    {
      name: "Rosa Hotel",
      description: "เว็บไซต์โรงแรมหรู พร้อมระบบจองห้องพักและบริการต่างๆ",
      technologies: ["Next.js", "Prisma"],
      image: "🏨",
      bgColor: "from-gray-800 to-slate-900",
      link: "#",
    },
  ];

  // Dock navigation data
  const data = [
    {
      title: "About Me",
      icon: (
        <User className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "about",
    },
    {
      title: "Experience",
      icon: (
        <Briefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "experience",
    },
    {
      title: "Skills",
      icon: (
        <Code className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "skills",
    },
    {
      title: "Education",
      icon: (
        <GraduationCap className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "education",
    },
    {
      title: "Project",
      icon: (
        <Award className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "projects",
    },
    {
      title: "Theme",
      icon: (
        <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "theme",
    },
  ];

  // Handle tab change
  const handleTabChange = ( tabIndex) => {

    if (tabIndex !== null && data[tabIndex] && data[tabIndex].value !== "theme") {
      setActiveSection(data[tabIndex].value);
      setSelectedTabIndex(tabIndex);
    }
  };

  // Render active section
  const renderActiveSection =  useCallback(() => {
    switch (activeSection) {
      case "about":
        return (
          <AboutSection
            personalInfo={personalInfo}
            isLoaded={isLoaded}
            setActiveSection={setActiveSection}
            setSelectedTabIndex={setSelectedTabIndex}
          />
        );
      case "experience":
        return <ExperienceSection experiences={experiences} />;
      case "skills":
        return <SkillsSection skills={skills} />;
      case "education":
        return <EducationSection education={education} />;
      case "projects":
        return <ProjectsSection projects={projects} />;
      default:
        return (
          <AboutSection
            personalInfo={personalInfo}
            isLoaded={isLoaded}
            setActiveSection={setActiveSection}
            setSelectedTabIndex={setSelectedTabIndex}
          />
        );
    }
  }, [activeSection, personalInfo, isLoaded, experiences, skills, education, projects]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
      {/* Dock Navigation */}
      <div className="fixed bottom-6 left-0 right-0 z-50">
        <Dock className="items-end pb-3 bg-white/5 dark:bg-neutral-900/35 drop-shadow-white/20 dark:drop-shadow-neutral-800/50 backdrop-blur-sm ">
          {data.map((item, idx) => (
            <div key={idx} onClick={() => handleTabChange(idx)} className="cursor-pointer">
             <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
              
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
            </div>
           
          ))}
        </Dock>
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-8 py-32">
        <div className="max-w-7xl mx-auto">
          {renderActiveSection()}
        </div>
      </main>

      {/* Contact Info - Fixed Right Side */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-20">
        <a
          href={`mailto:${personalInfo.email}`}
          className="p-3 bg-gray-900/80 text-gray-300 hover:text-white rounded-full transition-colors hover:scale-110"
        >
          <Mail size={20} />
        </a>
        <a
          href={`https://${personalInfo.github}`}
          className="p-3 bg-gray-900/80 text-gray-300 hover:text-white rounded-full transition-colors hover:scale-110"
        >
          <Github size={20} />
        </a>
        <a
          href={`https://${personalInfo.linkedin}`}
          className="p-3 bg-gray-900/80 text-gray-300 hover:text-white rounded-full transition-colors hover:scale-110"
        >
          <Linkedin size={20} />
        </a>
      </div>

      {/* Download Button */}
      <div className="fixed bottom-8 right-8 z-20">
        <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-6 py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-2">
          <Download size={20} />
          <span className="hidden md:inline font-medium">ดาวน์โหลด CV</span>
        </button>
      </div>

     

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}