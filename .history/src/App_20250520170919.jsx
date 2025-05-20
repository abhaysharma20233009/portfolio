import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="h-screen w-full text-3xl bg-stone-500">
  <h1 className='text-center text-shadow text-blue-950 bg-fuchsia-800 font-bold italic tracking-wide leading-relaxed'>Welcome To my Portfolio</h1>
        </div>

    </>
  )
}

export default App
