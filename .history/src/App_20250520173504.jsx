import { useState } from 'react'
import video from './assets/bg.mp4'
import './App.css'

function App() {
  

  return (
    <>
     <div className="h-screen w-full text-3xl bg-stone">
 

 <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute  w-full h-full object-cover z-0"
    src={video}
  />

  <h1 className='absolute left-1/2 text-shadow text-fuchsia-600 font-bold italic tracking-wide leading-relaxed z-20'>Welcome To my Portfolio</h1>

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-shadow-transparent font-bold text-4xl">
    Hey, I am Abhay Sharma
  </div>

        </div>

    </>
  )
}

export default App
