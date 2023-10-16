import React from 'react'
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
  return (
    <>
      <div>
        <h1>
          Quiz App
        </h1>
        <select value={category} onChange={handleCatChange}>
          <option value="">Select a category</option>
            {
              questions.map((q, index) => (
              
               <option value={q.category} key={index}>
                 {q.category}
               </option>
              
            ))}
        </select>
      </div>
    </>
  )
}

export default Settings