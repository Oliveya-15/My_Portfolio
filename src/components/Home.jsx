import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaPython } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      {/* Gradient applied to the top half of the page */}
      <div className="bg-gradient-to-b from-gray-200 to-white w-full h-[50vh] absolute top-0 left-0 z-[-1]" />

      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-lg">Welcome, Thank You for Considering!</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm </h1>
              <ReactTyped
                className="text-blue-700 font-bold"
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
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I'm Oliveya Choudhury, a passionate web developer and programmer eager to innovate, collaborate, and make meaningful contributions to the IT world. I thrive on coding, programming, and building engaging websites that bring ideas to life. Let's connect and achieve great things together!
            </p>
            <br />

            <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
              <div className="space-y-2">
                <h1 className="font-bold text-left">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/Oliveya-15" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="text-3xl cursor-pointer hover:text-gray-600" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/oliveya-choudhury-868349270/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-3xl cursor-pointer hover:text-gray-600" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:choudhuryoliveya15@gmail.com">
                      <FaEnvelope className="text-3xl cursor-pointer hover:text-gray-600" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h1 className="font-bold text-center md:text-left">Currently working on</h1>
                <div className="flex items-center gap-5">
                  
                  {/* MERN Stack */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src="/mern.png"
                      alt="MERN Stack"
                      className="w-8 h-8 object-contain hover:scale-110 duration-200"
                    />
                  </div>

                  {/* Python */}
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="w-8 h-8 bg-blue-400 rounded-2xl flex items-center justify-center hover:scale-110 duration-200 border border-gray-300">
                      <FaPython className="text-2xl text-black" />
                    </div>
                  </div>

                  {/* LangChain - Plain Rounded Border */}
                  <div className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-2xl bg-white">
                    <img
                      src="/langchain.png"
                      alt="LangChain"
                      className="w-9 h-9 object-contain hover:scale-110 duration-200 p-0.5"
                    />
                  </div>

                </div>
              </div>
            </div>

            {/* Buttons Section */}
            <div className="mt-16 bg-gray-100 border-2 border-gray-300 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                
                {/* Resume Button */}
                <a
                  href="https://drive.google.com/file/d/1xDzg0JCkV1_3CRn-AJWsIn6zKHNWCoSZ/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-300 text-black text-base border-2 border-black py-3 px-5 rounded-xl hover:bg-gray-700 hover:text-white hover:border-gray-200 transition-all w-full sm:w-auto"
                >
                  <span>Watch Resume</span>
                  <FaArrowRight className="ml-2 text-lg text-blue-800" />
                </a>

                {/* Certificates Button */}
                <a
                  href="https://drive.google.com/drive/folders/1v2uVrYa7PrE51HBsf_40-kODyGy67WgG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-300 text-black text-base border-2 border-black py-3 px-5 rounded-xl hover:bg-gray-700 hover:text-white hover:border-gray-200 transition-all w-full sm:w-auto"
                >
                  <span>Certificates</span>
                  <FaArrowRight className="ml-2 text-lg text-blue-800" />
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src="/profile.png"
              className="rounded-full md:w-[450px] md:h-[450px] border-4 border-blue-400"
              alt="Oliveya Choudhury"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
