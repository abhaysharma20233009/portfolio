import { useState } from 'react'
import video from './assets/bg.mp4'
import swiskillsImg from './assets/swiskills.png'
import shopCircuitImg from './assets/shop-circuit.png'
import './App.css'

function App() {
  return (
    <>
      <div className="h-screen w-full text-3xl bg-black relative overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={video}
        />

        {/* Optional Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

        {/* Main Text */}
        <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-shadow text-fuchsia-500 font-bold italic tracking-wide leading-relaxed z-20 text-4xl">
          Welcome To My Portfolio
        </h1>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white font-bold text-4xl text-center">
          Hey, I am Abhay Sharma
        </div>
      </div>

      {/* Project Cards Section */}
      <section className="bg-gray-950 py-16 px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-fuchsia-500">Projects</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Swiskills Card */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
            <img src={swiskillsImg} alt="Swiskills" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-fuchsia-400 mb-2">Swiskills</h3>
              <p className="text-gray-300">
                A platform for skill learning and certification. Includes user reviews, experience sharing, and real-time features.
              </p>
            </div>
          </div>

          {/* Shop-Circuit Card */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden transition hover:scale-105 duration-300">
            <img src={shopCircuitImg} alt="Shop-Circuit" className="w-full h-60 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-fuchsia-400 mb-2">Shop-Circuit</h3>
              <p className="text-gray-300">
                An e-commerce project built to help users browse and purchase electronic components with a smooth UI.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
