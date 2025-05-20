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
  className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
  src={video}
/>


        </div>

    </>
  )
}

export default App
