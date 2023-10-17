import React, { useState } from 'react';
import './index.css';
import questions from './questions.json';

function Settings() {
  const [category, setCategory] = useState('');
  const [currentQuestionIndex, setQuestionIndex] = useState(0)
  const [choice, setChoice] = useState('')
  const [score, setScore] = useState(0)

  const handleCatChange = (e) => {
    setCategory(e.target.value);
    setQuestionIndex(0)
  }
  const handleNextQuestion = () =>
  {
    if(currentQuestionIndex < questions[0].questions.length - 1)
    {
      setQuestionIndex(currentQuestionIndex + 1)
      if (choice === currentQuestion.questions[currentQuestionIndex].answer)
    {
      setScore(score + 5)
      console.log(score)
    }
    }
    
  }
  
  const currentQuestion = questions.find((q)=>q.category === category)

  return (
    <div className="container">
      <h1>Quiz App</h1>
      <form>
        <select value={category} onChange={handleCatChange}>
          <option value="">Select a category</option>
          {questions.map((q, index) => (
            <option value={q.category} key={index}>
              {q.category}
            </option>
          ))}
        </select>
      </form>
    
      {category === 'History' && currentQuestion && (
        <div>
          <h2>History Questions</h2>
          {
            currentQuestion.questions[currentQuestionIndex] && (
          
            <div>
              
              <h3>{currentQuestion.questions[currentQuestionIndex].question}</h3>
              <ul>
                {
                  currentQuestion.questions[currentQuestionIndex].choices.map((choice, cindex) =>
                  
                    (
                        <li key={cindex} style={{listStyle: 'none'}}>
                        <label>
                        <input type='radio'
                        value={choice}
                        onChange={(e) => setChoice(e.target.value)}
                        name='answer'
                        >
                        </input>{choice}
                        </label>
                        </li>
                        
                    )
                  )
                }
              </ul>
              <button type="button" onClick={handleNextQuestion}>
                Next
              </button>
              <p>Score: {score}</p>
            </div>
            )
          }
        </div>
      
      )}
    </div>
  );
}

export default Settings;
