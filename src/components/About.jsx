import React from "react";
import {
  FaGraduationCap,
  FaLaptopCode,
  FaCogs,
  FaTrophy,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        {/* About Section */}
        <h1 className="text-3xl font-bold mb-5">About Me</h1>

        <p className="text-lg leading-relaxed">
          Results-driven MCA student with a strong foundation in full-stack web development 
          (MERN Stack) and Machine Learning. Proficient in Python, JavaScript, React.js, 
          Node.js, and modern web technologies. Experienced in building scalable web applications 
          and developing ML & AI-powered solutions. Passionate about creating 
          user-centric applications and leveraging data-driven insights. Actively seeking 
          internship opportunities in software development and machine learning.
        </p>

        <br />

        {/* Education Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaGraduationCap className="text-3xl mr-3 text-gray-500 hover:text-gray-400 transform hover:scale-110 transition-transform duration-300" />
          Education
        </h1>

        <div className="mt-3 space-y-3">
          <p>
            <strong>Master of Computer Applications (MCA)</strong><br />
            MAKAUT • 1st Year | SGPA: 8.68
          </p>
          <p>
            <strong>Bachelor of Computer Applications (BCA)</strong><br />
            Siliguri Institute of Technology, MAKAUT (2022–2025) | CGPA: 8.94
          </p>
          <p>
            <strong>Higher Secondary (12th)</strong><br />
            New Town Girls’ High School, WBCHSE (2021–2022) | 94.2%
          </p>
          <p>
            <strong>Secondary (10th)</strong><br />
            New Town Girls’ High School, WBBSE (2019–2020) | 75.2%
          </p>
        </div>

        <br />
        <br />

        {/* Skills Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaLaptopCode className="text-3xl mr-3 text-green-500 hover:text-green-400 transform hover:scale-110 transition-transform duration-300" />
          Skills & Expertise
        </h1>

        <div className="mt-3">
          <p className="leading-relaxed">
            <strong>Programming Languages:</strong> Python, JavaScript, C<br />
            <strong>Frontend:</strong> HTML5, CSS3, React.js, Tailwind CSS, Responsive Web Design<br />
            <strong>Backend & Databases:</strong> Node.js, Express.js, MongoDB, SQL<br />
            <strong>Machine Learning & AI:</strong> Scikit-learn, Pandas, NumPy, Streamlit, Exploratory Data Analysis (EDA)<br />
            <strong>Tools & Others:</strong> Git, GitHub, VS Code, Google Colab, Anaconda, Canva<br />
            <strong>Core Subjects:</strong> DSA, DBMS, OOP, Operating Systems, Computer Networks, Cloud Computing
          </p>
        </div>

        <br />
        <br />

        {/* Project Highlights Section - Updated */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaCogs className="text-3xl mr-3 text-purple-500 hover:text-purple-400 transform hover:scale-110 transition-transform duration-300" />
          Key Projects
        </h1>

        <div className="mt-3 space-y-5">
          <div>
            <strong>Docify – Doctor Appointment Booking App (MERN)</strong><br />
            Full-featured doctor appointment platform with role-based authentication, real-time slot booking, 
            and responsive UI built using React and Tailwind CSS.
            <br />
            <a href="https://docify-frontend-yw8c.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Live Demo
            </a>{" "}
            |{" "}
            <a href="https://github.com/Oliveya-15/Docify_MERN_Deployed.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Source Code
            </a>
          </div>

          <div>
            <strong>Health Diagnosis ML Model</strong><br />
            Machine Learning model for early prediction of Parkinson’s, Heart Disease, and Diabetes achieving 
            85% accuracy. Built with Python, Scikit-learn, and deployed using Streamlit.
            <br />
            <a href="https://healthdiagnosismodel-k6wpmkpe5tbofpydzkdjxa.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Live Demo
            </a>{" "}
            |{" "}
            <a href="https://github.com/Oliveya-15/HealthDiagnosisModel.git" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Source Code
            </a>
          </div>

          <div>
            <strong>Talkify - Chat with your PDFs</strong><br />
            AI-powered application that allows users to upload PDFs and interact with their content 
            through natural language queries.
            <br />
            <a href="https://talkify.streamlit.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Live Demo
            </a>{" "}
            |{" "}
            <a href="https://github.com/Oliveya-15/Talkify-Deployed" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Source Code
            </a>
          </div>
        </div>

        <br />
        <br />

        {/* Achievements Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaTrophy className="text-3xl mr-3 text-orange-500 hover:text-orange-400 transform hover:scale-110 transition-transform duration-300" />
          Achievements
        </h1>

        <div className="mt-3 space-y-2">
          <p>• Consistent Academic Excellence – BCA CGPA 8.94 | MCA 1st Year SGPA 8.68</p>
          <p>• Led multiple technical and cultural college events end-to-end</p>
          <p>• Awarded in creative and academic competitions at college level</p>
          <p>• 5-Star Python on HackerRank | Multiple industry certifications</p>
        </div>

        <br />
        <br />

        {/* Mission Statement Section */}
        <h1 className="text-blue-600 font-semibold text-xl flex items-center space-x-4 hover:text-blue-800 transition-all duration-300">
          <FaLightbulb className="text-3xl mr-3 text-yellow-500 hover:text-yellow-400 transform hover:scale-110 transition-transform duration-300" />
          Professional Objective
        </h1>

        <p className="text-lg leading-relaxed">
          To secure a challenging internship where I can apply my full-stack development, 
          Machine Learning, and AI skills to deliver impactful solutions while continuously 
          growing in a professional environment.
        </p>
      </div>
    </div>
  );
}

export default About;