import React from "react";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: "/python.jpg",
      name: "Python",
    },
    {
      id: 2,
      logo: "/c.jpg",
      name: "C",
    },
    {
      id: 3,
      logo: "/mern.png",
      name: "MERN",
    },
    {
      id: 4,
      logo: "/Tailwind.png",
      name: "Tailwind",
    },
    {
      id: 5,
      logo: "/htmlcssjs.png",
      name: "HTML CSS JS",
    },
    {
      id: 6,
      logo: "/colab.png",
      name: "Google Colab",
    },
    {
      id: 7,
      logo: "/streamlit.png",
      name: "Streamlit",
    },
    {
      id: 8,
      logo: "/langchain.png",
      name: "Langchain",
    },
    {
      id: 9,
      logo: "/HugFace.png",
      name: "Hugging Face",
    },
    {
      id: 10,
      logo: "/anaconda.jpg",
      name: "Anaconda",
    },
    {
      id: 11,
      logo: "/spyder.png",
      name: "Spyder",
    },
    {
      id: 12,
      logo: "/git.png",
      name: "Git",
    },
  ];

  return (
    <div
      name="Skills"
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

        {/* Section Header matching About component style */}
        <div className="text-center space-y-3 animate-pop-1">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-200/80 shadow-sm text-indigo-700 text-xs font-bold tracking-widest uppercase">
            <span>Technical Proficiency</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            My <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed font-normal">
            A comprehensive overview of the programming languages, frameworks, and developer tools I leverage to build robust software.
          </p>
        </div>

        {/* Grid Cards Container */}
        <div className="animate-pop-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="group relative bg-white/95 backdrop-blur-xl border border-indigo-100/80 p-5 rounded-2xl shadow-lg shadow-indigo-500/5 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-center cursor-pointer overflow-hidden"
              key={id}
            >
              {/* Subtle accent hover backdrop element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>

              <div className="w-[75px] h-[75px] md:w-[85px] md:h-[85px] flex items-center justify-center p-2 rounded-xl bg-indigo-50/50 border border-indigo-100/60 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <img
                  src={logo}
                  className="w-full h-full object-contain filter drop-shadow-sm"
                  alt={name}
                />
              </div>
              <div className="text-xs md:text-sm font-bold text-gray-800 mt-3 group-hover:text-indigo-600 transition-colors text-center">
                {name}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;