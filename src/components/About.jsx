import React from "react";
import { FaGraduationCap, FaLaptopCode, FaCogs, FaTrophy, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        {/* About Section */}
        <h1 className="text-3xl font-bold mb-5">
          About
        </h1>
        <p>
          <span className="flex items-center space-x-2">
            Hello, I'm Oliveya, a passionate Web developer with a keen eye for MERN
            Stack and a strong interest in Machine Learning. I enjoy building innovative
            projects that merge technology with creativity, with a goal of blending web
            development and ML to create standout solutions.
          </span>
        </p>
        <br />

        {/* Education Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaGraduationCap className="text-3xl mr-3 text-gray-500 hover:text-gray-400 transform hover:scale-110 transition-transform duration-300" />
          Education & Qualifications
        </h1>
        <span>
          - 10th & 12th | Alipurduar New Town Girls' High School | 94.2% <br />
          - BCA (Currently pursuing) | Siliguri Institute of Technology | CGPA: 9.23
        </span>
        <br />
        <br />

        {/* Skills Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaLaptopCode className="text-3xl mr-3 text-green-500 hover:text-green-400 transform hover:scale-110 transition-transform duration-300" />
          Skills & Expertise
        </h1>
        <span>
          Proficient in [Python, HTML, CSS, MERN, C] Experienced with [Google Colab, Spyder, Anaconda] Familiar with [Canva, Photoshop]
          Excellent problem-solving skills Effective communicator and
          collaborator.
        </span>
        <br />
        <br />

        {/* Project Highlights Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaCogs className="text-3xl mr-3 text-purple-500 hover:text-purple-400 transform hover:scale-110 transition-transform duration-300" />
          Project Highlights
        </h1>
        <span>
          Snake Game (Python) | Interactive game with sound effects, difficulty levels, and full-screen mode. ||
          Health Diagnosis ML Model | Predictive model using Streamlit and machine learning. ||
          Book Reading App (MERN) | Digital reading platform with user authentication. ||
          E-Commerce Website (HTML, CSS, JS) | Responsive site with dynamic product displays and cart features.
        </span>
        <br />
        <br />

        {/* Achievements Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaTrophy className="text-3xl mr-3 text-orange-500 hover:text-orange-400 transform hover:scale-110 transition-transform duration-300" />
          Achievements & Awards
        </h1>
        <span>
          Topper of BCA Semester | [Siliguri Institute of Technology], [2024] – Achieved highest academic performance. ||
          Multiple Inter-College Competition Awards | [2022-2025] – Recognized for excellence in various events. ||
          Certified in Python, HTML, CSS, Web & Graphic Design | [Great Learning, Skill Academia], [2023-2024] – Completed multiple certifications to enhance technical skills.
        </span>
        <br />
        <br />

        {/* Mission Statement Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaLightbulb className="text-3xl mr-3 text-yellow-500 hover:text-yellow-400 transform hover:scale-110 transition-transform duration-300" />
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative IT solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
