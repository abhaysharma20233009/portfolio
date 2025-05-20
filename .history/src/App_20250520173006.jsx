import { useState } from 'react'
import video from './assets/bg.mp4'
import './App.css'

function App() {
  

  return (
    <>
     <div className="h-screen w-full text-3xl bg-stone-500">
  <h1 className='text-center text-shadow text-blue-950 bg-neutral-600 font-bold italic tracking-wide leading-relaxed'>Welcome To my Portfolio</h1>

 <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute  w-full h-full object-cover z-0"
    src={video}
  />

 
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-white text-4xl">
    hi 
  </div>

        </div>

    </>
  )
}

export default App
