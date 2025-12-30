import React from "react";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: "/docify.png", // Path relative to public folder
      name: "Docify Doctor Appointment Booking App - Frontend",
      Link: "https://docify-frontend-yw8c.onrender.com/", 
      sourceCodeLink: "https://github.com/Oliveya-15/Docify_MERN_Deployed.git", // Example source code link
      description: "Responsive frontend for doctor appointments using React and Tailwind, with real-time slot booking and login/logout UI.",
    },
    /*{
      id: 1,
      logo: "/mernproject.png", // Path relative to public folder
      name: "BookWook - Book Reading Platform",
      Link: "https://bookwookweb-frontend.onrender.com",
      sourceCodeLink: "https://github.com/Oliveya-15/BookWookWeb.git", // Example source code link
      description: "MERN-based platform for book lovers to read free and paid books online, with login authentication and dark/light mode.",
    },*/
    {
      id: 2,
      logo: "/ml.png", // Path relative to public folder
      name: "Health Diagnosis ML Model",
      Link: "https://healthdiagnosismodel-k6wpmkpe5tbofpydzkdjxa.streamlit.app/", // Path to video file
      sourceCodeLink: "https://github.com/Oliveya-15/HealthDiagnosisModel.git", // Example source code link
      description: "Health diagnosis model using Google Colab, Streamlit, and Spyder, predicting Parkinson's, heart disease, and diabetes with 85% accuracy.",
    },
    {
      id: 3,
      logo: "/snake.png", // Path relative to public folder
      name: "Snake Game",
      Link: "https://oliveya-15.github.io/SnakeGame_Python/", // Path to video file
      sourceCodeLink: "https://github.com/Oliveya-15/SnakeGame_Python.git", // Example source code link
      description: "Create a visually appealing Snake game built with Python, Pygame, and Pillow, featuring sound effects, image backgrounds, and adjustable levels.",
    },
    {
      id: 4,
      logo: "/htmlproject.png", // Path relative to public folder
      name: "Ecocean - Sustainable e-commerce website",
      Link: "https://sustainable-ecommerce-html-css-js.netlify.app/", 
      sourceCodeLink: "https://github.com/Oliveya-15/EcommerceApp.git", // Example source code link
      description: "Eco-friendly e-commerce website developed using HTML, CSS, and JavaScript with interactive product cards and Google Maps.",
    }
  ];

  // New Basic Projects cards
  const basicCardItem = [
    {
      id: 5,
      logo: "/gtnthumb.png", // Path relative to public folder
      name: "Game - Guess The Number",
      Link: "https://oliveya-15.github.io/GUESS-THE-NUMBER/", 
      sourceCodeLink: "https://github.com/Oliveya-15/GUESS-THE-NUMBER.git", // Example source code link
      description: "Number guessing game built in Python with Tkinter, including voice assistance, hints, timer, levels, and dynamic GUI.",
    },
    {
      id: 6,
      logo: "/amazon.png", // Path relative to public folder
      name: "Amazon Clone - Landing Page",
      Link: "https://amazon-clonesite-html-css.netlify.app/", 
      sourceCodeLink: "https://github.com/Oliveya-15/AmazonColne_HTMLCSS.git", // Example source code link
      description: "Basic Amazon landing page clone developed with HTML and CSS, showcasing for fundamental understanding.",
    }
  ];
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5 gap-y-5"> {/* Responsive grid layout */}
          {cardItem.map(({ id, logo, name, Link, sourceCodeLink, description }) => (
            <div
              className="w-full h-auto sm:h-[350px] md:h-[550px] border-[2px] rounded-lg shadow-lg p-3 cursor-pointer hover:scale-105 duration-300 flex flex-col"
              key={id}
            >
              {/* Adjusted the image height area */}
              <div className="w-full h-[200px] sm:h-[250px] md:h-[450px] overflow-hidden"> {/* Adjusted image height */}
                <img
                  src={logo}
                  className="w-full h-full object-cover rounded-lg border-[2px]"
                  alt={name}
                />
              </div>
              <div className="mt-3 flex-grow">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 mb-4">{description}</p> {/* Unique description for each card */}
              </div>
              {/* Added margin-top auto to push buttons to the bottom */}
              <div className="px-6 py-4 space-x-3 justify-around mt-auto"> 
                <a
                  href={Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Visit
                </a>
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Basic Projects Section */}
        <span className="underline font-semibold">Basic Projects</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-5"> {/* Adjusted grid for 3 items in a row */}
          {basicCardItem.map(({ id, logo, name, Link, sourceCodeLink, description }) => (
            <div
              className="w-full h-auto sm:h-[350px] md:h-[500px] lg:h-[500px] border-[2px] rounded-lg shadow-lg p-3 cursor-pointer hover:scale-105 duration-300 flex flex-col"
              key={id}
            >
              {/* Adjusted the image height area */}
              <div className="w-full h-[200px] sm:h-[250px] md:h-[450px] lg:h-[250px] overflow-hidden"> {/* Adjusted image height for large screens */}
                <img
                  src={logo}
                  className="w-full h-full object-cover rounded-lg border-[2px]"
                  alt={name}
                />
              </div>
              <div className="mt-3 flex-grow">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700 mb-4">{description}</p> {/* Unique description for each card */}
              </div>
              {/* Added margin-top auto to push buttons to the bottom */}
              <div className="px-6 py-4 space-x-3 justify-around mt-auto"> 
                <a
                  href={Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Visit
                </a>
                <a
                  href={sourceCodeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
