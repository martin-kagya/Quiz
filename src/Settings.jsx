import React, { useState } from 'react';
import './index.css';
import questions from './questions.json';

function Settings() {
  const [category, setCategory] = useState('');
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [choice, setChoice] = useState('');
  const [score, setScore] = useState(0);
  const [catIndex, setCatIndex] = useState(0)
  const categories = ["History", "Science"]

  
  const handleCatChange = (e) => {
    const newCategory = e.target.value
    setCategory(newCategory);
    setQuestionIndex(0);
    setCatIndex(categories.indexOf(newCategory))
    setScore(0);
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (catIndex >= 0 && catIndex < categories.length) {
      if (currentQuestionIndex < questions[catIndex].questions.length - 1) {
        const isCorrect = choice === questions[catIndex].questions[currentQuestionIndex].answer;
        if (isCorrect) {
          setScore(score + 5);
        }
        setQuestionIndex(currentQuestionIndex + 1);
        setChoice('');
      }
    }
    if (currentQuestionIndex >= questions[catIndex].questions.length - 1)
    {
      alert("We are out of questions for the section...More to be added")
      setQuestionIndex(0);
      setScore(0);
    }
  };

  const currentQuestion = questions.find((q) => q.category === category);
  const getRadioClass = (currentChoice) => {
    if (choice === questions[catIndex].questions[currentQuestionIndex].answer) {
      if (currentChoice === choice) {
        return 'correct';
      }
    } else {
      if (currentChoice === choice) {
        return 'incorrect';
      }
    }
    return '';
  };
  return (
    <div className="container">
      <h1>Quiz App</h1>
      <form>
        <select value={category} onChange={handleCatChange} className='selectionMenu'>
          <option value="">Select a category</option>
          {questions.map((q, index) => (
            <option value={q.category} key={index}>
              {q.category}
            </option>
          ))}
        </select>
      </form>
      {category === 'Science' && currentQuestion && (
        <div className='science'>
          <h2>Science Questions</h2>
          {currentQuestion.questions[currentQuestionIndex] && (
            <div>
              <form>
                <h3>{currentQuestion.questions[currentQuestionIndex].question}</h3>
                <ul>
                  {currentQuestion.questions[currentQuestionIndex].choices.map(
                    (choice, cindex) => (
                      <li key={cindex} style={{ listStyle: 'none' }}>
                        <label>
                          <input
                            id='button'
                            name="answer"
                            value={choice}
                            type="radio"
                            onChange={(e) => setChoice(e.target.value)}
                            className={getRadioClass(choice)}
                          />
                          {choice}
                        </label>
                      </li>
                    )
                  )}
                </ul>
                <button onClick={handleNextQuestion}>
                  Next
                </button>
                <p>Score: {score}</p>
              </form>
            </div>
          )}
        </div>
      )}
      {category === 'History' && currentQuestion && (
        <div className='history'>
          <h2>History Questions</h2>
          {currentQuestion.questions[currentQuestionIndex] && (
            <div>
              <form>
                <h3>{currentQuestion.questions[currentQuestionIndex].question}</h3>
                <ul>
                  {currentQuestion.questions[currentQuestionIndex].choices.map(
                    (choice, cindex) => (
                      <li key={cindex} style={{ listStyle: 'none' }}>
                        <label>
                          <input
                            type="radio"
                            value={choice}
                            onChange={(e) => setChoice(e.target.value)}
                            className={getRadioClass(choice)}
                            name="answer"
                          />
                          {choice}
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
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Settings;