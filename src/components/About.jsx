import React, { useState } from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaTrophy,
  FaHeart,
  FaAward,
} from "react-icons/fa";

function About() {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Techno Main Salt Lake, MAKAUT",
      period: "2025 – 2027",
      score: "YGPA: 8.66",
      highlight: "Focusing on advanced software development, database management systems, and enterprise architecture.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Siliguri Institute of Technology, MAKAUT",
      period: "2022 – 2025",
      score: "CGPA: 8.94",
      highlight: "Built a robust foundation in object-oriented programming, data structures, and full-stack engineering.",
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "New Town Girls' High School, WBCHSE",
      period: "2021 – 2022",
      score: "Score: 94.2%",
      highlight: "Specialized in core science and advanced mathematical methodologies.",
    },
    {
      degree: "Secondary (10th Grade)",
      institution: "New Town Girls' High School, WBBSE",
      period: "2019 – 2020",
      score: "Score: 75.2%",
      highlight: "Completed foundational secondary curriculum with core academic focus.",
    },
  ];

  const skillCategories = [
    {
      title: "Core Programming",
      desc: "Languages & algorithmic foundations",
      items: ["Python", "JavaScript", "C", "Data Structures", "OOP"],
    },
    {
      title: "Frontend Development",
      desc: "Modern user interface frameworks",
      items: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    },
    {
      title: "Backend & Databases",
      desc: "Server-side and data storage",
      items: ["Node.js", "Express.js", "MongoDB", "SQL", "DBMS"],
    },
    {
      title: "AI & Machine Learning",
      desc: "Data modeling and analytics",
      items: ["Scikit-learn", "Pandas", "NumPy", "Streamlit", "EDA"],
    },
  ];

  const achievementsList = [
    {
      title: "Academic Excellence",
      detail: "Achieved consistent first-class academic performance, highlighted by an 8.94 CGPA in BCA and an 8.66 YGPA in MCA.",
    },
    {
      title: "Event Leadership",
      detail: "Spearheaded and managed multidisciplinary technical and cultural student initiatives from conceptualization to execution.",
    },
    {
      title: "Competitive Recognition",
      detail: "Awarded recognition for technical aptitude and creative problem-solving in institutional competitions.",
    },
    {
      title: "Technical Credentials",
      detail: "Earned a 5-Star Python badge on HackerRank alongside specialized networking and programming certifications.",
    },
  ];

  const hobbies = [
    { name: "Art & Craft", desc: "Exploring creative composition, design aesthetics, and visual structuring." },
    { name: "Competitive Coding", desc: "Solving complex algorithmic puzzles to optimize logic execution time." },
    { name: "AI/ML Exploration", desc: "Experimenting with data pipelines, predictive models, and emerging machine learning frameworks." },
    { name: "Philosophy & Leadership", desc: "Studying classical texts and ancient literature to refine mental models and decision-making frameworks." },
  ];

  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-28 relative overflow-hidden"
    >
      {/* Custom CSS Keyframes for modern interactive sliding & pop-up animations */}
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-pop-1 { animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .animate-pop-2 { animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards; opacity: 0; }
        .animate-pop-3 { animation: fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards; opacity: 0; }
      `}</style>

      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-200/40 to-blue-200/20 rounded-full blur-3xl pointer-events-none z-[-1]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl pointer-events-none z-[-1]"></div>

      <div className="space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 animate-pop-1">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-200/80 shadow-sm text-indigo-700 text-xs font-bold tracking-widest uppercase">
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-600 leading-relaxed font-normal">
            A software engineering student driven by a passion for building scalable full-stack web architectures and data-driven machine learning solutions.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center animate-pop-2">
          <div className="inline-flex p-1.5 bg-white/80 backdrop-blur-md border border-indigo-100 rounded-2xl shadow-lg shadow-indigo-500/5">
            {[
              { id: "education", label: "Education", icon: FaGraduationCap },
              { id: "skills", label: "Expertise", icon: FaLaptopCode },
              { id: "achievements", label: "Achievements", icon: FaTrophy },
              { id: "hobbies", label: "Interests", icon: FaHeart },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 sm:px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30 scale-105"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                    }`}
                >
                  <Icon className="text-base" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Panels with Dynamic Transitions */}
        <div className="animate-pop-3 min-h-[400px]">

          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationData.map((edu, idx) => {
                const isSchool = edu.degree.includes("10") || edu.degree.includes("12") || edu.degree.toLowerCase().includes("secondary");
                const isBCA = edu.degree.toLowerCase().includes("bca");
                const isMCA = edu.degree.toLowerCase().includes("mca");

                return (
                  <div
                    key={idx}
                    className="group relative bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-8 rounded-3xl shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-bold">
                          {edu.period}
                        </span>
                        <span className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold shadow-sm">
                          {edu.score}
                        </span>
                      </div>
                      <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-900/80">
                        {edu.institution}
                      </p>
                      {!isSchool && (
                        <p className="text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                          {isBCA
                            ? "Achieved a rigorous academic standing, laying a strong foundation of excellence and intellectual dedication."
                            : isMCA
                              ? "Demonstrated advanced academic leadership and exceptional dedication to scholarly and technical excellence."
                              : edu.highlight}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {/* 2. Skills & Expertise Panel */}
          {activeTab === "skills" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-6 rounded-3xl shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30 group-hover:rotate-6 transition-transform duration-300">
                      <FaLaptopCode className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
                      <p className="text-xs text-gray-500 font-medium mt-0.5">{cat.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cat.items.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          className="px-3 py-1.5 bg-indigo-50/70 border border-indigo-100 text-indigo-900 text-xs font-semibold rounded-xl hover:bg-indigo-600 hover:text-white transition-all duration-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. Achievements Panel */}
          {activeTab === "achievements" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievementsList.map((ach, idx) => (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-6 sm:p-8 rounded-3xl shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/15 hover:-translate-y-1.5 transition-all duration-300 flex items-start space-x-5"
                >
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 shadow-sm group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FaAward className="text-2xl" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {ach.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-normal">
                      {ach.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 4. Hobbies & Interests Panel */}
          {activeTab === "hobbies" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {hobbies.map((hob, idx) => (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-6 rounded-3xl shadow-xl shadow-indigo-500/5 hover:shadow-2xl hover:shadow-indigo-500/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-rose-500/30 group-hover:scale-110 transition-transform duration-300">
                      <FaHeart className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{hob.name}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mt-2 font-normal">
                        {hob.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
}

export default About;