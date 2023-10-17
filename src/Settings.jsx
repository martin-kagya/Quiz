import React, { useState } from 'react';
import './index.css';
import questions from './questions.json';

function Settings() {
  const [category, setCategory] = useState('');
  const [currentQuestionIndex, setQuestionIndex] = useState(0)

  const handleCatChange = (e) => {
    setCategory(e.target.value);
    setQuestionIndex(0)
  }
  const handleNextQuestion = () =>
  {
    if(currentQuestionIndex < questions.length - 1)
    {
      setQuestionIndex(currentQuestionIndex + 1)
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
                      <label key={cindex}>
                        <li key={cindex} style={{listStyle: 'none'}}><input type='radio' 
                        key={cindex} 
                        value={choice}
                        name='answer'
                        ></input>{choice}</li>
                        
                      </label>
                    )
                  )
                }
              </ul>
              <button type="button" onClick={handleNextQuestion}>
                Next
              </button>
            </div>
            )
          }
        </div>
      )}
    </div>
  );
}

export default Settings;
