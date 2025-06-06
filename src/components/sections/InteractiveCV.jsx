"use client";
import React, { useState, useEffect } from "react";
import {
  Mail,
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

// Import data constants
import {
  personalInfo,
  skills,
  experiences,
  education,
  projects,
} from "./data/constants";

// Import section components
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import EducationSection from "./sections/EducationSection";
import ProjectsSection from "./sections/ProjectsSection";

export default function InteractiveCV() {
  const [activeSection, setActiveSection] = useState("about");
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Dock navigation data
  const navigationData = [
    {
      title: "เกี่ยวกับฉัน",
      icon: (
        <User className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "about",
    },
    {
      title: "ประสบการณ์การทำงาน",
      icon: (
        <Briefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "experience",
    },
    {
      title: "ทักษะที่จัดหมวดหมู่",
      icon: (
        <Code className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      ),
      value: "skills",
    },
    {
      title: "ประวัติการศึกษา",
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
  const handleTabChange = (tabIndex) => {
    if (tabIndex !== null && navigationData[tabIndex] && navigationData[tabIndex].value !== "theme") {
      setActiveSection(navigationData[tabIndex].value);
      setSelectedTabIndex(tabIndex);
    }
  };

  // Render active section
  const renderActiveSection = () => {
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
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-950 to-purple-950 text-white relative overflow-hidden">
      {/* Dock Navigation */}
      <div className="fixed bottom-6 left-0 right-0 z-50">
        <Dock className="items-end pb-3">
          {navigationData.map((item, idx) => (
            <DockItem
              key={idx}
              className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
              onClick={() => handleTabChange(idx)}
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          ))}
        </Dock>
      </div>

      {/* Main Content */}
      <main className="relative z-10 px-8 pb-8 pt-32">
        <div className="max-w-7xl mx-auto">
          {renderActiveSection()}
        </div>
      </main>

      {/* Contact Info - Fixed Right Side */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 hidden lg:flex flex-col space-y-4 z-20">
        <a
          href={`mailto:${personalInfo.email}`}
          className="p-3 bg-gray-900/80 text-gray-300 hover:text-white rounded-full transition-colors hover:scale-110"
          title="Email"
        >
          <Mail size={20} />
        </a>
        <a
          href={`https://${personalInfo.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-900/80 text-gray-300 hover:text-white rounded-full transition-colors hover:scale-110"
          title="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href={`https://${personalInfo.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-gray-900/80 text-gray-300 hover:text-white rounded-full transition-colors hover:scale-110"
          title="LinkedIn"
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

      <SplashCursor />

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