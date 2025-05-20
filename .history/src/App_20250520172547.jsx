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
  className="absolute w-full h-150 object-cover text-3xl z-[-1]"
  src={video}
/>

<div className='z-0'>
hi
</div>
        </div>

    </>
  )
}

export default App
