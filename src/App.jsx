import { useState } from 'react'
import './App.css'
import Display from './assets/Display'

function App() {

  return (
    <>
    <div className="container h-36 flex pt-16 items-center flex-col text-xs scroll-smooth">
      <Display />
    </div>
    </>
  )
}

export default App
