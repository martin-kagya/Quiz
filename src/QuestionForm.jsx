import React, { useEffect, useState, useRef } from "react";
import questionsData from "./questions.json";

function QuestionForm({ currentQuestion, category, choice, setChoice }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const QuestionDetails = currentQuestion.questions[questionIndex];

  const buttonrefs = useRef(QuestionDetails.choices.map(() => React.createRef()))
  useEffect(() => {
    setDisabled(false)
    buttonrefs.current.forEach((ref) => ref.current.classList.remove("correct", "wrong"))
    setChoice("");
  }, [category, setChoice]); 

  function handleNext() {
    setDisabled(false);
    setChoice(""); // Reset the choice when moving to the next question
    buttonrefs.current.forEach((ref) => ref.current.classList.remove("correct", "wrong"))
    if (questionIndex < currentQuestion.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
      alert("Questions exhausted");
    }
  }
  function CheckAnswer(e) {
    e.preventDefault();
    setDisabled(true)
    const currentChoice = e.target.value;
    const currentTarget = e.currentTarget
    if (currentChoice === QuestionDetails.answer)
    {
      currentTarget.classList.add("correct")
    }
    else if(currentChoice !== QuestionDetails.answer)
    {
      currentTarget.classList.add("wrong")
    }
    setChoice(currentChoice);
  }
  
  return (
    <>
      <h3>
        {category &&
          QuestionDetails.question}
      </h3>
      <ul>
        {QuestionDetails.choices.map((c, cindex) => (
          <li key={cindex} style={{ listStyle: "none" }}>
            <button ref={buttonrefs.current[cindex]}
              key={cindex}
              onClick={(e) => CheckAnswer(e)}
              value={c}
              disabled={disabled}
              className=""
            >
              {c}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleNext}>Next</button>
    </>
  );
}

export default QuestionForm;