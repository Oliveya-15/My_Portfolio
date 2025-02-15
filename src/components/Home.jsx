import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
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
                strings={["Oliveya Choudhury", "a Developer", "a Programmer", "a Coder"]}
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





            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-left">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://github.com/Oliveya-15" target="_blank">
                      <FaGithub className="text-3xl cursor-pointer mt-2" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/oliveya-choudhury-868349270/" target="_blank">
                      <FaLinkedin className="text-3xl cursor-pointer mt-2" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:choudhuryoliveya15@gmail.com">
                      <FaEnvelope className="text-3xl cursor-pointer mt-2" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>






            <div className="mt-16 bg-gray-100 border-2 border-gray-300 p-6 rounded-lg shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4"> {/* Flex container for small and large screens */}
                {/* Resume Button */}
                <a
                  href="https://drive.google.com/file/d/1k-oGDo2zrFkxg6uQKGDfdU07WA6amai_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-300 text-black text-base border-2 border-black py-3 px-5 rounded-xl hover:bg-gray-700 hover:text-white hover:border-gray-200"
                >
                  <span>Watch Resume</span>
                  <FaArrowRight className="ml-2 text-lg text-blue-800" />
                </a>

                {/* Certificates Button */}
                <a
                  href="https://drive.google.com/drive/folders/1v2uVrYa7PrE51HBsf_40-kODyGy67WgG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-gray-300 text-black text-base border-2 border-black py-3 px-5 rounded-xl hover:bg-gray-700 hover:text-white hover:border-gray-200"
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
