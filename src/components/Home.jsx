import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaPython } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Richer Professional Gradient Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-[75vh] bg-gradient-to-br from-indigo-100/80 via-blue-50/50 to-white z-[-1]" />
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-gradient-to-bl from-violet-200/40 to-transparent rounded-full blur-3xl z-[-1]" />

      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Left Text & Info Column */}
          <div className="lg:w-7/12 space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-indigo-200/60 shadow-sm text-indigo-700 text-xs font-semibold tracking-wide uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span>Welcome, Thank You for Considering!</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold text-gray-900 tracking-tight flex flex-wrap items-center gap-x-2">
                <span>Hello, I'm</span>
                <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">
                  <ReactTyped
                    strings={[
                      "Oliveya Choudhury",
                      "a Full Stack Developer",
                      "an ML Engineer",
                      "an AI Enthusiast",
                      "a MERN Developer"
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop={true}
                  />
                </span>
              </h1>
            </div>

            {/* Cleaned Professional Bio Based on Resume */}
            <p className="text-base sm:text-lg text-gray-600 text-justify leading-relaxed font-normal">
              Results-driven MCA student (1st Year YGPA: 8.66 | BCA CGPA: 8.94) with hands-on experience in full-stack web development (MERN Stack) and machine learning. Proficient in Python, JavaScript, React, and Node.js, I am passionate about building scalable, user-centric applications and data-driven solutions. Actively seeking internship opportunities to innovate, collaborate, and contribute meaningfully to the IT industry.
            </p>

            {/* Enhanced Availability & Currently Working Stack Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Social Channels */}
              <div className="space-y-3">
                <h2 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Available on</h2>
                <ul className="flex items-center space-x-3">
                  <li>
                    <a
                      href="https://github.com/Oliveya-15"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/90 border border-indigo-100 flex items-center justify-center text-gray-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md hover:scale-105 transition-all duration-200 shadow-sm backdrop-blur-sm"
                      aria-label="GitHub Profile"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/oliveya-choudhury/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-white/90 border border-indigo-100 flex items-center justify-center text-gray-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md hover:scale-105 transition-all duration-200 shadow-sm backdrop-blur-sm"
                      aria-label="LinkedIn Profile"
                    >
                      <FaLinkedin className="text-xl" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:choudhuryoliveya15@gmail.com"
                      className="w-11 h-11 rounded-xl bg-white/90 border border-indigo-100 flex items-center justify-center text-gray-700 hover:text-indigo-600 hover:border-indigo-300 hover:shadow-md hover:scale-105 transition-all duration-200 shadow-sm backdrop-blur-sm"
                      aria-label="Email Me"
                    >
                      <FaEnvelope className="text-xl" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Current Tech Stack */}
              <div className="space-y-3">
                <h2 className="font-semibold text-gray-900 text-sm uppercase tracking-wider">Currently working on</h2>
                <div className="flex items-center gap-3">
                  {/* MERN Stack */}
                  <div
                    className="w-11 h-11 bg-white/90 border border-indigo-100 rounded-xl flex items-center justify-center shadow-sm hover:scale-110 hover:border-indigo-300 transition-all duration-200 backdrop-blur-sm"
                    title="MERN Stack"
                  >
                    <img src="/mern.png" alt="MERN Stack" className="w-6 h-6 object-contain" />
                  </div>

                  {/* Python */}
                  <div
                    className="w-11 h-11 bg-gradient-to-br from-yellow-50 to-blue-100 border border-blue-200/80 rounded-xl flex items-center justify-center shadow-sm hover:scale-110 transition-all duration-200"
                    title="Python"
                  >
                    <FaPython className="text-xl text-blue-800" />
                  </div>

                  {/* LangChain */}
                  <div
                    className="w-11 h-11 bg-white/90 border border-indigo-100 rounded-xl flex items-center justify-center shadow-sm hover:scale-110 hover:border-indigo-300 transition-all duration-200 p-1.5 backdrop-blur-sm"
                    title="LangChain"
                  >
                    <img src="/langchain.png" alt="LangChain" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Upgraded Theme-Matched Action Buttons Container */}
            <div className="mt-8 bg-white/90 backdrop-blur-md border border-indigo-100/80 p-5 rounded-2xl shadow-xl shadow-indigo-500/5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Resume Button with Gradient Accent */}
                <a
                  href="https://drive.google.com/file/d/19647HTXe4S1ZuGzDxvXFTBrNcS5FkgLN/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white text-sm font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-1/2"
                >
                  <span>Watch Resume</span>
                  <FaArrowRight className="ml-2 text-sm text-indigo-200 group-hover:translate-x-1.5 transition-transform" />
                </a>

                {/* Certificates Button */}
                <a
                  href="https://drive.google.com/drive/folders/1v2uVrYa7PrE51HBsf_40-kODyGy67WgG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between bg-white text-gray-800 border border-indigo-200 text-sm font-semibold py-3.5 px-6 rounded-xl hover:bg-indigo-50/50 hover:border-indigo-400 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-1/2"
                >
                  <span>Certificates</span>
                  <FaArrowRight className="ml-2 text-sm text-indigo-600 group-hover:translate-x-1.5 transition-transform" />
                </a>

              </div>
            </div>

          </div>

          {/* Right Image Avatar Column with Stunning Glow & Ring Frame */}
          <div className="lg:w-5/12 flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-indigo-600 via-blue-400 to-violet-600 shadow-2xl">
                <img
                  src="/profile.png"
                  className="rounded-full w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] object-cover bg-white"
                  alt="Oliveya Choudhury"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Home;