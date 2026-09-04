import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Contact" },
    { id: 6, text: "Let's Talk" },
  ];

  // Handle scroll effect for navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Force scroll to top on initial load
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };

    scrollToTop();
    const timer1 = setTimeout(scrollToTop, 50);
    const timer2 = setTimeout(scrollToTop, 300);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/85 backdrop-blur-md shadow-md border-b border-indigo-100/40"
        : "bg-white/70 backdrop-blur-sm"
        }`}
    >

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-20 flex justify-between items-center">
        {/* Brand Logo & Name with Gradient Elements */}
        <div className="flex items-center space-x-3 cursor-pointer group">
          <div className="relative">
            <img
              src={logo}
              className="relative h-12 w-12 rounded-full object-cover shadow-sm ring-2 ring-indigo-600/20 group-hover:ring-indigo-600/50 transition-all duration-300"
              alt="Oliveya Choudhury"
            />
          </div>
          <h1 className="font-bold text-xl tracking-tight text-gray-900">
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent text-2xl font-extrabold">O</span>liveya
            <p className="text-xs font-extrabold text-gray-800 tracking-wider">
              Choudhur<span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent font-bold">y</span>
            </p>
          </h1>
        </div>


        {/* Desktop Navbar Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <ul className="flex items-center space-x-2 lg:space-x-4">
            {navItems.map(({ id, text }) => {
              const isLetsTalk = text === "Let's Talk";
              const targetId = isLetsTalk ? "LetsTalk" : text;

              if (isLetsTalk) {
                return (
                  <li key={id} className="ml-4">
                    <Link
                      to={targetId}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white font-medium text-sm shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/40 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                    >
                      {text}
                    </Link>
                  </li>
                );
              }

              return (
                <li key={id} className="relative px-3 py-2 cursor-pointer group">
                  <Link
                    to={targetId}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="text-indigo-600 font-semibold"
                    className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors duration-200"
                  >
                    {text}
                    {/* Professional Curvy Active Indicator Underline */}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-gradient-to-r from-indigo-600 to-violet-600 rounded-full transition-all duration-300 group-hover:w-1/2 [.active_&]:w-3/4"></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden p-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 transition-colors cursor-pointer"
          aria-label="Toggle Menu"
        >
          {menu ? <IoCloseSharp size={22} /> : <AiOutlineMenu size={22} />}
        </div>
      </div>

      {/* Mobile Drawer / Fullscreen Navigation Overlay */}
      <div
        className={`fixed inset-x-0 top-20 bg-white/95 backdrop-blur-xl border-b border-indigo-100 shadow-2xl transition-all duration-300 ease-in-out md:hidden overflow-hidden ${menu ? "max-h-[calc(100vh-5rem)] py-8 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
      >
        <ul className="flex flex-col items-center justify-center space-y-5">
          {navItems.map(({ id, text }) => {
            const isLetsTalk = text === "Let's Talk";
            const targetId = isLetsTalk ? "LetsTalk" : text;

            return (
              <li key={id} className="w-full text-center">
                <Link
                  onClick={() => setMenu(false)}
                  to={targetId}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="text-indigo-600 font-bold bg-indigo-50/50"
                  className={`inline-block py-2 px-6 text-lg font-medium text-gray-700 hover:text-indigo-600 transition-all ${isLetsTalk
                    ? "mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white font-semibold shadow-lg shadow-indigo-500/30"
                    : ""
                    }`}
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;