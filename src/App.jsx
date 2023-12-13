import { useState } from 'react'
import './App.css'
import Display from './assets/Display'
import ScoreDisplay from './assets/ScoreDisplay'

function App() {

  return (
    <>
    <div className="container h-36 flex pt-10 items-center flex-col text-xs scroll-smooth">
      <Display />
    </div>
    </>
  )
}

export default App
