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
      title: "Academic & Extracurricular Excellence",
      detail: "Maintained a strong academic record with an 8.94 CGPA in BCA and an 8.66 YGPA in MCA, complemented by active engagement in diverse student development activities.",
      image: "/achi1.png",
    },
    {
      title: "Inter-College Leadership & Participation",
      detail: "Actively participated in, led, and managed multiple inter-college technical and cultural programs, successfully driving team coordination and event execution.",
      image: "/achi2.png",
    },
    {
      title: "Multidisciplinary Awards",
      detail: "Received recognition and awards across diverse domains, spanning best project accolades, creative arts and crafts, and broader extracurricular initiatives.",
      image: "/achi3.png",
    },
    {
      title: "Technical Credentials",
      detail: "Earned professional industry credentials, highlighted by a 5-Star Python rating on HackerRank alongside specialized programming and technical certifications.",
      image: "/achi4.png",
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
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-20 pb-12 relative overflow-hidden transition-all duration-300"
    >
      {/* Custom CSS Keyframes for modern interactive sliding & pop-up animations */}
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-pop-1 { animation: fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-pop-2 { animation: fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; }
        .animate-pop-3 { animation: fadeSlideUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards; opacity: 0; }
      `}</style>

      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-tr from-indigo-200/40 to-blue-200/20 rounded-full blur-3xl pointer-events-none z-[-1]"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-violet-200/30 to-indigo-200/30 rounded-full blur-3xl pointer-events-none z-[-1]"></div>

      <div className="space-y-10">

        {/* Section Header */}
        <div className="text-center space-y-3 animate-pop-1">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-200/80 shadow-sm text-indigo-700 text-xs font-bold tracking-widest uppercase">
            <span>Professional Background</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            About <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed font-normal">
            A software engineering student driven by a passion for building scalable full-stack web architectures and data-driven machine learning solutions.
          </p>
        </div>

        {/* Interactive Tab Navigation */}
        <div className="flex justify-center animate-pop-2">
          <div className="inline-flex p-1.5 bg-white/85 backdrop-blur-md border border-indigo-100 rounded-2xl shadow-lg shadow-indigo-500/5">
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
                  className={`flex items-center space-x-2 px-4 sm:px-6 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${isActive
                      ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/30 scale-105"
                      : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50/50"
                    }`}
                >
                  <Icon className="text-sm sm:text-base" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content Display Panels with Dynamic Fluid Auto-Height */}
        <div className="animate-pop-3 transition-all duration-300">

          {activeTab === "education" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {educationData.map((edu, idx) => {
                const isSchool = edu.degree.includes("10") || edu.degree.includes("12") || edu.degree.toLowerCase().includes("secondary");
                const isBCA = edu.degree.toLowerCase().includes("bca");
                const isMCA = edu.degree.toLowerCase().includes("mca");

                return (
                  <div
                    key={idx}
                    className="group relative bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-6 rounded-2xl shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/60 text-indigo-700 text-xs font-bold">
                          {edu.period}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-xs font-bold shadow-sm">
                          {edu.score}
                        </span>
                      </div>
                      <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-semibold text-indigo-900/80">
                        {edu.institution}
                      </p>
                      {!isSchool && (
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {skillCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-5 rounded-2xl shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30 group-hover:rotate-6 transition-transform duration-300">
                      <FaLaptopCode className="text-base" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{cat.title}</h3>
                      <p className="text-[11px] text-gray-500 font-medium mt-0.5">{cat.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {cat.items.map((item, iIdx) => (
                        <span
                          key={iIdx}
                          className="px-2.5 py-1 bg-indigo-50/70 border border-indigo-100 text-indigo-900 text-xs font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
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

          {/* 3. Achievements Panel with Certificate/Prize Mini Cards */}
          {activeTab === "achievements" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {achievementsList.map((ach, idx) => (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-xl border border-indigo-100/80 rounded-2xl shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="h-44 overflow-hidden relative bg-indigo-50">
                    <img
                      src={ach.image}
                      alt={ach.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-2 left-3 right-3 flex items-center space-x-1.5 text-white">
                      <FaAward className="text-amber-400 text-sm flex-shrink-0" />
                      <span className="text-xs font-bold truncate">{ach.title}</span>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {ach.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed font-normal">
                      {ach.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 4. Hobbies & Interests Panel */}
          {activeTab === "hobbies" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {hobbies.map((hob, idx) => (
                <div
                  key={idx}
                  className="group bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-5 rounded-2xl shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 flex items-center justify-center text-white shadow-md shadow-rose-500/30 group-hover:scale-110 transition-transform duration-300">
                      <FaHeart className="text-base" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-gray-900">{hob.name}</h3>
                      <p className="text-xs text-gray-600 leading-relaxed mt-1.5 font-normal">
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