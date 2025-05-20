import { useState } from 'react'
import video from './assets/bg.mp4'
import swiskillsImg from './assets/swiskills.png'
import shopCircuitImg from './assets/shop-circuit.png'
import './App.css'

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-30 bg-black/50 backdrop-blur-md px-8 py-4 flex items-center justify-between text-white">
        <h1 className="text-xl font-bold text-fuchsia-400">Abhay Sharma</h1>
        <ul className="flex space-x-6 font-medium text-lg">
          <li><a href="#home" className="hover:text-fuchsia-400 transition">Home</a></li>
          <li><a href="#projects" className="hover:text-fuchsia-400 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-fuchsia-400 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-fuchsia-400 transition">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div id="home" className="h-screen w-full text-3xl bg-black relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={video}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

        <h1 className="absolute top-20 left-1/2 transform -translate-x-1/2 text-shadow text-fuchsia-500 font-bold italic tracking-wide leading-relaxed z-20 text-4xl">
          Welcome To My Portfolio
        </h1>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white font-bold text-4xl text-center">
          Hey, I am Abhay Sharma
        </div>
      </div>

      {/* Project Section */}
      <section id="projects" className="bg-black py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-fuchsia-500">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Swiskills Card */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
            <img src={swiskillsImg} alt="Swiskills" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-fuchsia-400 mb-2">Swiskills</h3>
               <a href="https://github.com/abhaysharma20233009/swiskills">GitHub</a>
              <p className="text-gray-300">
                A platform for skill sharing and learning with user reviews ,chat and notification features.
              </p>
            </div>
          </div>

          {/* Shop-Circuit Card */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
            <img src={shopCircuitImg} alt="Shop-Circuit" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-fuchsia-400 mb-2">Shop-Circuit</h3>
              <a href="https://github.com/abhaysharma20233009/Shop-Circuit">GitHub</a>
              <p className="text-gray-300">
                An e-commerce project built to help users browse,sell and rent products to others.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-black py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-fuchsia-500">Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {['Java','C++','C','JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Socket.IO', 'Git'].map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-900 text-fuchsia-400 rounded-xl py-6 px-4 font-semibold shadow-md hover:scale-105 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-16 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-4 text-fuchsia-500">Contact</h2>
        <p className="text-gray-300">
          You can reach out to me at: <span className="text-fuchsia-400">abhaysharma21102006@gmail.com</span>
        </p>
      </section>
    </>
  )
}

export default App
