import React from "react";

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
      logo: "/bookwook.png",
      name: "BookWook - Book Reading Platform",
      Link: "https://bookwookweb-frontend.onrender.com/",
      sourceCodeLink: "https://github.com/Oliveya-15/BookWookWeb",
      description:
        "MERN-based platform for book lovers to read free and paid books online, with login authentication and dark/light mode.",
    },
    {
      id: 6,
      logo: "/snake.png",
      name: "Snake Game",
      Link: "https://oliveya-15.github.io/SnakeGame_Python/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/SnakeGame_Python.git",
      description:
        "Visually appealing Snake game built with Python, Pygame, and Pillow, featuring sound effects, image backgrounds, and adjustable levels.",
    },
    {
      id: 7,
      logo: "/htmlproject.png",
      name: "Ecocean - Sustainable e-commerce website",
      Link: "https://sustainable-ecommerce-html-css-js.netlify.app/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/EcommerceApp.git",
      description:
        "Eco-friendly e-commerce website developed using HTML, CSS, and JavaScript with interactive product cards and Google Maps.",
    },
    {
      id: 8,
      logo: "/gtnthumb.png",
      name: "Game - Guess The Number",
      Link: "https://oliveya-15.github.io/GUESS-THE-NUMBER/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/GUESS-THE-NUMBER.git",
      description:
        "Number guessing game built in Python with Tkinter, including voice assistance, hints, timer, levels, and dynamic GUI.",
    },
    {
      id: 9,
      logo: "/amazon.png",
      name: "Amazon Clone - Landing Page",
      Link: "https://amazon-clonesite-html-css.netlify.app/",
      sourceCodeLink:
        "https://github.com/Oliveya-15/AmazonColne_HTMLCSS.git",
      description:
        "Basic Amazon landing page clone developed with HTML and CSS, showcasing for fundamental understanding.",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5 my-5 gap-y-5">
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
                className="w-full h-auto sm:h-[350px] md:h-[550px] border-[2px] rounded-lg shadow-lg p-3 cursor-pointer hover:scale-105 duration-300 flex flex-col"
                key={id}
              >
                {comingSoon ? (
                  <div
                    className="w-full h-[200px] sm:h-[250px] md:h-[450px] overflow-hidden rounded-lg"
                    style={{
                      border: "2px dashed #d1d5db",
                      backgroundColor: "#f3f4f6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        textAlign: "center",
                        color: "#9ca3af",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "3rem",
                          marginBottom: "8px",
                        }}
                      >
                        🚧
                      </div>

                      <p
                        style={{
                          fontWeight: "600",
                          fontSize: "1rem",
                        }}
                      >
                        Coming Soon
                      </p>

                      <p
                        style={{
                          fontSize: "0.85rem",
                          marginTop: "4px",
                        }}
                      >
                        Project in progress...
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-[200px] sm:h-[250px] md:h-[450px] overflow-hidden">
                    <img
                      src={logo}
                      className="w-full h-full object-cover rounded-lg border-[2px]"
                      alt={name}
                    />
                  </div>
                )}

                <div className="mt-3 flex-grow">
                  <div className="px-2 font-bold text-xl mb-2">
                    {comingSoon ? "— Coming Soon —" : name}
                  </div>

                  <p className="px-2 text-gray-700 mb-4">
                    {description}
                  </p>
                </div>

                {!comingSoon && (
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
                )}
              </div>
            )
          )}
        </div>

        {/* Basic Projects Section */}
        <span className="underline font-semibold">Basic Projects</span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 my-5">
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
                className="w-full border-[2px] rounded-lg shadow-lg p-3 cursor-pointer hover:scale-105 duration-300 flex flex-col"
                key={id}
              >
                <div
                  className="w-full overflow-hidden rounded-lg border-[2px]"
                  style={{ height: "230px" }}
                >
                  <img
                    src={logo}
                    className="w-full h-full object-cover"
                    alt={name}
                  />
                </div>

                <div className="mt-3 flex-grow">
                  <div className="px-2 font-bold text-lg mb-2">
                    {name}
                  </div>

                  <p
                    className="px-2 text-gray-700 mb-4"
                    style={{
                      fontSize: "0.875rem",
                      overflow: "hidden",
                      maxHeight: "70px",
                    }}
                  >
                    {description}
                  </p>
                </div>

                <div
                  className="px-4 py-3 mt-auto"
                  style={{ display: "flex", gap: "10px" }}
                >
                  <a
                    href={Link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Visit
                  </a>

                  <a
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default Projects;