import React, { useEffect, useState } from 'react';
import './index.css';
import questions from './questions.json';
import QuestionForm from './QuestionForm';

function Settings() {
  const [category, setCategory] = useState('');
  const [currentQuestionIndex, setQuestionIndex] = useState(0);
  const [choice, setChoice] = useState('');
  const [score, setScore] = useState(0);
  const [Seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    let count = 0
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);
  function reset() {
    setSeconds(0);
    setIsRunning(true);
  }

  const handleCatChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setQuestionIndex(0);
    setScore(0);
    setChoice(''); // Reset the choice when category changes
    reset(); // Reset the timer
  };
  
  const handleNextQuestion = (e) => {
    e.preventDefault();
    if (choice != '')
    {
    if (currentQuestionIndex < currentQuestion.questions.length - 1) {
      if (currentQuestion.questions[currentQuestionIndex].answer === choice) {
        setScore(score + 5);
      }
      setQuestionIndex(currentQuestionIndex + 1);
      setChoice('');
      reset();
    } else {
      setQuestionIndex(0); // Use `setQuestionIndex` to update the state
      alert("More questions to be added soon");
    }
    wrongCalc();
  }
  alert("Select an option") 
  };
  const currentQuestion = questions.find((q) => q.category === category);

  const getRadioClass = (currentChoice) => {
    if (currentChoice === choice) {
      if (currentQuestion.questions[currentQuestionIndex].answer) {
        return "correct";
      }
      return "incorrect";
    }
    return '';
  };
  // Move this outside of the return statement
  const quizContent = currentQuestion && (
    <div className={`quiz ${category.toLowerCase()}`}>
      <h2>{category} Questions</h2>
      {currentQuestion.questions[currentQuestionIndex] && (
        <QuestionForm
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          handleNextQuestion={handleNextQuestion}
          setChoice={setChoice}
          getRadioClass={getRadioClass}
        />
      )}
    </div>
  );

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
      {category && (
        <p className='time'>{Seconds}</p>
      )}
      {quizContent}
      <p className='score'>Score: {score}</p>
    </div>
  );
}

export default Settings;