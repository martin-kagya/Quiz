import React from 'react'
import './index.css'
import {useState, useEffect} from 'react'
import questions from './questions.json'


function Settings ()
{
  const [category, setCategory] = useState('')
  const [score, setScore] = useState(0)
  const handleCatChange = (e) =>
  {
    setCategory(e.target.value)
  }
  function handleSubmit()
  {
    if(category === 'History')
    return(
      <div>
        <h2>{questions[0].questions[0].question}</h2>
      </div>
    )
  } 
  return (
    <>
      <div className='container'>
        <h1>
          Quiz App
        </h1>
      <form>
        <select value={category} onChange={handleCatChange}>
          <option value="">Select a category</option>
            {
              questions.map((q, index) => (
              
               <option value={q.category} key={index}>
                 {q.category}
               </option>
              
            ))}
        </select>
        <button onSubmit={handleSubmit}>Next</button>
      </form>
      </div>
    </>
  )
}

export default Settings