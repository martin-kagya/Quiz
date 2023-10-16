import React from 'react'
import {useState, useEffect} from 'react'
import questions from './questions.json'


function Settings ()
{
  const api = "src/questions.json"
  const [category, setCategory] = useState(null)
  const [score, setScore] = useState(0)
  //useEffect(() =>
  //{
  //  fetch(api)
  //  .then((res) => res.json())
  //  .then((data) => setCategory(data))
  //}, [])
  return (
    <>
      <div>
        <h1>
          Quiz App
        </h1>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>{questions[0].category}</option>
        </select>
      </div>
    </>
  )
}

export default Settings