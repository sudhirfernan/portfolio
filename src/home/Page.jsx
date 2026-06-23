import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowRight,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          MyPortfolio
        </h1>

        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-cyan-400 cursor-pointer">Home</li>
          <li className="hover:text-cyan-400 cursor-pointer">About</li>
          <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
          <li className="hover:text-cyan-400 cursor-pointer">Skills</li>
          <li className="hover:text-cyan-400 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-10 py-16 flex flex-col-reverse lg:flex-row items-center justify-between">

        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">

          <p className="text-cyan-400 text-xl mb-2">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Sudhir Fernando
          </h1>

          <h2 className="text-3xl md:text-4xl mt-4 font-semibold text-gray-300">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl">
            I build responsive web applications using React, Node.js,
            Tailwind CSS, and modern technologies. Passionate about creating
            clean UI and solving real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

            <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
              View Projects
              <FaArrowRight />
            </button>

            <button className="border border-cyan-500 hover:bg-cyan-500 px-6 py-3 rounded-full font-semibold">
              Download CV
            </button>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 justify-center lg:justify-start text-3xl">

            <a href="#">
              <FaGithub className="hover:text-cyan-400 transition" />
            </a>

            <a href="#">
              <FaLinkedin className="hover:text-cyan-400 transition" />
            </a>

            <a href="#">
              <FaInstagram className="hover:text-cyan-400 transition" />
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center mb-10 lg:mb-0">

          <img
            src="https://unsplash.com/photos/jagged-hole-in-black-paper-with-red-background-4RqG3zzAw8I"
            alt="Profile"
            className="w-80 h-80 md:w-96 md:h-96 rounded-full object-cover border-4 border-cyan-500 shadow-2xl"
          />

        </div>

      </section>

    </div>
  );
};

export default Home;