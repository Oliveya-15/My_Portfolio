import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaWhatsapp, FaEnvelope, FaGithub } from "react-icons/fa";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_69esjt7",        // Service ID
        "template_4e0eiks",       // Template ID
        form.current,
        "q6j8-Ogm1AtEFKahN"       // Public Key
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
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      {/* First paragraph: smaller + lighter */}
      <p className="text-gray-500 text-sm leading-relaxed">
       I'm always open to discussing new opportunities, collaborations, or professional connections.
      </p>

      {/* Line gap + second paragraph: slightly bold */}
      <p className="text-gray-700 font-medium mt-3">
        Thank you for your time, please reach out below!
      </p>

      {/* Main row: Left info (Let's Connect + static email + WhatsApp) + Right form */}
      <div className="flex flex-col lg:flex-row gap-10 mt-10">
        {/* Left column */}
        <div className="lg:w-1/3 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Let's Connect</h2>
          </div>

          {/* Static email (non-clickable) */}
          <div className="flex items-center gap-3 text-gray-700">
            <FaEnvelope className="text-2xl" />
            <span>choudhuryoliveya15@gmail.com</span>
          </div>

          {/* WhatsApp button moved up here, below the email */}
          <div className="pt-4">
            <a
              href="https://wa.me/916295269084"
              target="_blank"
              rel="noopener noreferrer"
              className="-ml-2 inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white text-lg px-7 py-4 rounded-xl transition-all duration-300 font-medium shadow-md"
            >
              <FaWhatsapp className="text-2xl" />
              <span>Message me on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right column – Contact Form */}
        <div className="lg:w-2/3">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-slate-100 w-full px-8 py-8 rounded-2xl shadow-sm"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Send Me a Message
            </h2>

            {/* Row 1: Name + Email (side by side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col">
                <label className="block text-gray-700 mb-1 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="shadow-sm rounded-xl border border-gray-300 py-3 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="block text-gray-700 mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  className="shadow-sm rounded-xl border border-gray-300 py-3 px-4 focus:outline-none focus:border-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Row 2: Message (full width) */}
            <div className="flex flex-col mb-6">
              <label className="block text-gray-700 mb-1 font-medium">
                Message
              </label>
              <textarea
                name="message"
                required
                rows="4"
                className="shadow-sm rounded-xl border border-gray-300 py-3 px-4 focus:outline-none focus:border-blue-500 resize-y"
                placeholder="Enter your message..."
              />
            </div>

            {/* Row 3: Submit button */}
            <button
              type="submit"
              className="bg-black text-white w-full py-3.5 rounded-xl hover:bg-gray-800 transition-all duration-300 font-medium text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;