import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_69esjt7", // Service ID
        "template_4e0eiks", // Template ID
        form.current,
        "q6j8-Ogm1AtEFKahN" // Public Key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          toast.error("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 pt-20 md:pt-14 pb-12 md:pb-6 relative overflow-hidden transition-all duration-300"
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

      <div className="space-y-10 md:space-y-6">
        {/* Section Header matching About & Skills style */}
        <div className="text-center space-y-3 animate-pop-1">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-200/80 shadow-sm text-indigo-700 text-xs font-bold tracking-widest uppercase">
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
            Contact <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="max-w-3xl mx-auto text-sm md:text-base text-gray-600 leading-relaxed font-normal">
            I'm always open to discussing new opportunities, collaborations, or professional connections. Please reach out below!
          </p>
        </div>

        {/* Main layout container */}
        <div className="animate-pop-2 flex flex-col lg:flex-row gap-8">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:w-1/3 space-y-5">
            <div className="bg-white/90 backdrop-blur-xl border border-indigo-100/80 p-6 rounded-2xl shadow-lg shadow-indigo-500/5 space-y-6">
              <h3 className="text-xl font-bold text-gray-900">Let's Connect</h3>

              {/* Email Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-indigo-50/50 border border-indigo-100/60 shadow-sm group hover:border-indigo-300 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/30 flex-shrink-0">
                  <FaEnvelope className="text-xl" />
                </div>
                <div className="overflow-hidden">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Email Me</p>
                  <p className="text-sm font-bold text-gray-800 truncate">choudhuryoliveya15@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp Button (Muted Gray Tone) */}
              <a
                href="https://wa.me/916295269084"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm md:text-base py-4 px-6 rounded-xl transition-all duration-300 font-semibold border border-gray-200 shadow-sm hover:-translate-y-0.5"
              >
                <FaWhatsapp className="text-xl text-gray-600" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column – Contact Form */}
          <div className="lg:w-2/3">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="bg-white/90 backdrop-blur-xl border border-indigo-100/80 w-full p-8 rounded-2xl shadow-lg shadow-indigo-500/5 relative overflow-hidden space-y-6"
            >
              {/* Subtle top decoration badge */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-gray-900 text-center">
                Send Me a Message
              </h3>

              {/* Row 1: Name + Email (side by side) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col space-y-1.5">
                  <label className="block text-gray-700 text-sm font-semibold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    className="bg-indigo-50/30 shadow-sm rounded-xl border border-indigo-100 py-3 px-4 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label className="block text-gray-700 text-sm font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    className="bg-indigo-50/30 shadow-sm rounded-xl border border-indigo-100 py-3 px-4 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Row 2: Message (full width) */}
              <div className="flex flex-col space-y-1.5">
                <label className="block text-gray-700 text-sm font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  className="bg-indigo-50/30 shadow-sm rounded-xl border border-indigo-100 py-3 px-4 text-sm focus:outline-none focus:border-indigo-500 focus:bg-white resize-y transition-all duration-200"
                  placeholder="Enter your message..."
                />
              </div>

              {/* Row 3: Submit button with matching gradient look */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 via-blue-600 to-violet-600 text-white py-3.5 rounded-xl hover:opacity-95 shadow-md shadow-indigo-500/25 transition-all duration-300 font-semibold text-base cursor-pointer hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;