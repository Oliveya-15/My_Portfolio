import React from "react";
import { FaExternalLinkAlt, FaGithub, FaTools } from "react-icons/fa";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: "/docify.png",
      name: "Docify Doctor Appointment Booking App - MERN",
      Link: "https://docify-frontend-yw8c.onrender.com/",
      sourceCodeLink: "https://github.com/Oliveya-15/Docify_MERN_Deployed.git",
      description:
        "Responsive frontend for doctor appointments using React and Tailwind, with real-time slot booking and login/logout UI.",
    },
    {
      id: 2,
      logo: "/ml.png",
      name: "Health Diagnosis ML Model",
      Link: "https://healthdiagnosismodel-k6wpmkpe5tbofpydzkdjxa.streamlit.app/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/HealthDiagnosisModel.git",
      description:
        "Health diagnosis model using Google Colab, Streamlit, and Spyder, predicting Parkinson's, heart disease, and diabetes with 85% accuracy.",
    },
    {
      id: 3,
      logo: "/talkify.png",
      name: "Talkify - Chat with your PDFs",
      Link: "https://talkify.streamlit.app/",
      sourceCodeLink: "https://github.com/Oliveya-15/Talkify-Deployed",
      description:
        "An AI-powered app that lets users upload PDFs and interactively chat with their content using natural language queries.",
    },
    {
      id: 4,
      logo: "",
      name: "",
      Link: "",
      sourceCodeLink: "",
      description: "",
      comingSoon: true,
    },
  ];

  const basicCardItem = [
    {
      id: 5,
      logo: "/Ask_Me.png",
      name: "Ask Me",
      Link: "https://ask-me-sage-kappa.vercel.app/",
      sourceCodeLink: "https://github.com/Oliveya-15/Ask_ME",
      description: "An AI-powered content creation platform offering tools for article writing, blog titles, image generation, image editing, and resume reviews."
    },
    {
      id: 6,
      logo: "/bookwook.png",
      name: "BookWook - Book Reading Platform",
      Link: "https://bookwookweb-frontend.onrender.com/",
      sourceCodeLink: "https://github.com/Oliveya-15/BookWookWeb",
      description:
        "MERN-based platform for book lovers to read free and paid books online, with login authentication and dark/light mode.",
    },
    {
      id: 7,
      logo: "/snake.png",
      name: "Snake Game",
      Link: "https://oliveya-15.github.io/SnakeGame_Python/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/SnakeGame_Python.git",
      description:
        "Visually appealing Snake game built with Python, Pygame, and Pillow, featuring sound effects, image backgrounds, and adjustable levels.",
    },
    {
      id: 8,
      logo: "/htmlproject.png",
      name: "Ecocean - Sustainable e-commerce website",
      Link: "https://sustainable-ecommerce-html-css-js.netlify.app/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/EcommerceApp.git",
      description:
        "Eco-friendly e-commerce website developed using HTML, CSS, and JavaScript with interactive product cards and Google Maps.",
    },
    {
      id: 9,
      logo: "/gtnthumb.png",
      name: "Game - Guess The Number",
      Link: "https://oliveya-15.github.io/GUESS-THE-NUMBER/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/GUESS-THE-NUMBER.git",
      description:
        "Number guessing game built in Python with Tkinter, including voice assistance, hints, timer, levels, and dynamic GUI.",
    },
    {
      id: 10,
      logo: "/amazon.png",
      name: "Amazon Clone - Landing Page",
      Link: "https://amazon-clonesite-html-css.netlify.app/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/AmazonColne_HTMLCSS.git",
      description:
        "Basic Amazon landing page clone developed with HTML and CSS, showcasing fundamental understanding.",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-20 pb-12"
    >
      <div className="space-y-12">
        {/* Section Header Centered */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-200/80 shadow-sm text-indigo-700 text-xs font-bold tracking-widest uppercase">
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Project<span className="text-5xl bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">𝗌</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed font-normal">
            Explore a selection of my full-stack web applications, machine learning systems, and interactive tools built with modern technologies.
          </p>
        </div>

        {/* Featured Projects Section */}
        <div className="space-y-6">
          <div className="relative flex items-center justify-center">
            <div className="h-[2px] w-full absolute bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
            <h3 className="relative px-4 bg-gray-50 text-xl font-bold text-gray-900 text-center">
              Featured Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardItem.map(
              ({
                id,
                logo,
                name,
                Link,
                sourceCodeLink,
                description,
                comingSoon,
              }) => (
                <div
                  className="group bg-white rounded-2xl border border-indigo-100/80 shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
                  key={id}
                >
                  {comingSoon ? (
                    <div className="w-full aspect-[16/9] bg-gradient-to-br from-gray-50 to-indigo-50/30 border-b border-indigo-100/60 flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-14 h-14 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-3 shadow-inner">
                        <FaTools className="text-2xl" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900">Coming Soon</h4>
                      <p className="text-sm text-gray-500 mt-1">Project currently in development...</p>
                    </div>
                  ) : (
                    <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100 relative">
                      <a href={Link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img
                          src={logo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={name}
                        />
                        <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="px-4 py-2 rounded-xl bg-white/90 backdrop-blur-md text-indigo-700 font-semibold text-sm shadow-lg flex items-center gap-2">
                            View Live <FaExternalLinkAlt className="text-xs" />
                          </span>
                        </div>
                      </a>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-bold text-xl text-gray-900 group-hover:text-indigo-600 transition-colors">
                        {comingSoon ? "In Progress" : name}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {description}
                      </p>
                    </div>

                    {!comingSoon && (
                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <a
                          href={Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-medium text-sm shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all duration-200"
                        >
                          <span>Live Demo</span>
                          <FaExternalLinkAlt className="text-xs" />
                        </a>

                        <a
                          href={sourceCodeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-white text-gray-700 border border-indigo-200 font-medium text-sm hover:bg-indigo-50/50 hover:border-indigo-400 hover:text-indigo-700 transition-all duration-200 shadow-sm"
                        >
                          <FaGithub className="text-base" />
                          <span>Source Code</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* Basic Projects Section */}
        <div className="space-y-6 pt-6">
          <div className="relative flex items-center justify-center">
            <div className="h-[2px] w-full absolute bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
            <h3 className="relative px-4 bg-gray-50 text-xl font-bold text-gray-900 text-center">
              Additional Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {basicCardItem.map(
              ({
                id,
                logo,
                name,
                Link,
                sourceCodeLink,
                description,
              }) => (
                <div
                  className="group bg-white rounded-2xl border border-indigo-100/80 shadow-md shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
                  key={id}
                >
                  <div className="w-full aspect-[16/9] overflow-hidden bg-gray-100 relative">
                    <a href={Link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                      <img
                        src={logo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        alt={name}
                      />
                      <div className="absolute inset-0 bg-indigo-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-lg bg-white/90 backdrop-blur-md text-indigo-700 font-semibold text-xs shadow-md flex items-center gap-1.5">
                          View <FaExternalLinkAlt className="text-[10px]" />
                        </span>
                      </div>
                    </a>
                  </div>

                  <div className="p-5 flex flex-col flex-grow space-y-3">
                    <div className="space-y-1.5 flex-grow">
                      <h4 className="font-bold text-lg text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {name}
                      </h4>
                      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-3">
                        {description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-gray-100 flex items-center justify-between mt-auto gap-2">
                      <a
                        href={Link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl bg-indigo-50 text-indigo-700 font-medium text-xs hover:bg-indigo-600 hover:text-white transition-all duration-200"
                      >
                        <span>Demo</span>
                        <FaExternalLinkAlt className="text-[10px]" />
                      </a>

                      <a
                        href={sourceCodeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center space-x-1.5 px-3 py-2 rounded-xl bg-white text-gray-700 border border-gray-200 font-medium text-xs hover:bg-gray-50 hover:border-indigo-300 transition-all duration-200"
                      >
                        <FaGithub className="text-sm" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Projects;