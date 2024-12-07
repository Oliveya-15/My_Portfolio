import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col items-center justify-center">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://github.com/Oliveya-15"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-3xl cursor-pointer mt-2" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/oliveya-choudhury-868349270/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-3xl cursor-pointer mt-2" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:choudhuryoliveya15@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope className="text-3xl cursor-pointer mt-2" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/oliveya_._/?igsh=eHZocGJ0NHEwbDc1" 
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-3xl cursor-pointer mt-2" />
                </a>
              </li>
            </ul>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Oliveya. All rights reserved.
              </p>
              <p className="text-sm">Thank you! for visiting my portfolio❤️Excited to work and grow with your team.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
