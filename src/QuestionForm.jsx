import React from "react";

const QuestionForm = ({
  currentQuestion,
  currentQuestionIndex,
  handleNextQuestion,
  setChoice,
  getRadioClass,
  
}) => {
  const questionData = currentQuestion.questions[currentQuestionIndex];
  return (
    <div>
      <form>
        <h3 className="question">{questionData.question}</h3>
        <ul>
          {questionData.choices.map((choice, choiceIndex) => (
            <li key={choiceIndex} style={{ listStyle: "none" }}>
              <label>
                <input
                  id="button"
                  name="answer"
                  type="radio"
                  value={choice}
                  className={getRadioClass(choice)}
                  onChange={(e) => setChoice(e.target.value)}
                />
                {choice}
              </label>
            </li>
          ))}
        </ul>
        <button onClick={handleNextQuestion}>Next</button>
      </form>
    </div>
  );
};

export default QuestionForm;

