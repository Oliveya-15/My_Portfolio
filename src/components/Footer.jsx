import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12 relative overflow-hidden transition-all duration-300">
      
      {/* Dynamic Background Glowing Orbs (Matching About Section) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-tr from-indigo-200/30 via-blue-200/20 to-violet-200/20 rounded-full blur-3xl pointer-events-none z-[-1]"></div>

      {/* Gradient Divider Line */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent mb-12"></div>

      <div className="relative z-10 space-y-8">
        
        {/* Main Footer Content Container Card */}
        <div className="bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-8 rounded-3xl shadow-xl shadow-indigo-500/5 max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">

          {/* Redesigned Standout 'Let's Connect' Heading & Badge Style */}
          <div className="space-y-2">
  <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-indigo-50/80 backdrop-blur-md border border-indigo-200/70 text-indigo-500 text-xs font-medium tracking-wide shadow-sm hover:border-indigo-300 transition-colors">
    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
    <span>Snap me up before another team reads this footer.</span>
  </div>
</div>

          {/* Social Icons with Unified Theme Styling */}
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li>
              <a
                href="https://github.com/Oliveya-15"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-indigo-100 shadow-md shadow-indigo-500/5 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="text-xl text-gray-700 group-hover:text-white transition-colors" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/oliveya-choudhury-868349270/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-indigo-100 shadow-md shadow-indigo-500/5 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl text-gray-700 group-hover:text-white transition-colors" />
              </a>
            </li>
            <li>
              <a
                href="mailto:choudhuryoliveya15@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-indigo-100 shadow-md shadow-indigo-500/5 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl text-gray-700 group-hover:text-white transition-colors" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/oliveya_._/?igsh=eHZocGJ0NHEwbDc1"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-md border border-indigo-100 shadow-md shadow-indigo-500/5 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-1 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-violet-600 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl text-gray-700 group-hover:text-white transition-colors" />
              </a>
            </li>
          </ul>

          {/* Thank You Note & Copyright */}
          <div className="space-y-2 pt-2 border-t border-indigo-100/60 w-full">
            <p className="text-sm md:text-base text-gray-700 font-medium">
              Thank you for visiting my portfolio ❤️ <br className="sm:hidden" /> Excited to build, learn, and grow together.
            </p>
            <p className="text-xs md:text-sm text-gray-500 font-normal">
              &copy; 2026 <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent font-medium">Oliveya Choudhury</span>. All rights reserved.
            </p>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;