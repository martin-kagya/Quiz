import React, { useEffect, useState, useRef } from "react";
import { TiTick } from "react-icons/ti";
import questionsData from "./questions.json";

function QuestionForm({ currentQuestion, category, choice, setChoice }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [tick, setTick] = useState(false);
  const QuestionDetails = currentQuestion.questions[questionIndex];

  const buttonrefs = useRef(QuestionDetails.choices.map(() => React.createRef())); // create a ref for each choice

  useEffect(() => {
    setDisabled(false);
    buttonrefs.current.forEach((ref) => ref.current.classList.remove("correct", "wrong")); // remove the classes from the previous question
    setChoice("");
    setTick(false); // Reset the tick state when moving to the next question
  }, [category, setChoice]); // this will run anytime the category changes

  function handleNext() {
    setDisabled(false);
    setChoice(""); // Reset the choice when moving to the next question
    buttonrefs.current.forEach((ref) => ref.current.classList.remove("correct", "wrong"));
    setTick(false); // Reset the tick state when moving to the next question

    if (questionIndex < currentQuestion.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setQuestionIndex(0);
      alert("Questions exhausted");
    }
  }

  function CheckAnswer(e) {
    e.preventDefault();
    setDisabled(true);
    const currentChoice = e.target.value;
    const currentTarget = e.currentTarget;

    if (currentChoice === QuestionDetails.answer) {
      currentTarget.classList.add("correct");
      setTick(true);
    } else {
      currentTarget.classList.add("wrong");
    }

    setChoice(currentChoice);
  }

  return (
    <>
      <h2 className="m-4 text-lg card h-48 text-justify flex justify-center items-center p-4">
        {category && QuestionDetails.question}
      </h2>
      <ul className="mt-4 text-lg">
        {QuestionDetails.choices.map((c, cindex) => (
          <li key={cindex} style={{ listStyle: "none" }}>
            <button
              ref={buttonrefs.current[cindex]}
              key={cindex}
              onClick={(e) => CheckAnswer(e)}
              value={c}
              disabled={disabled}
              className="card2 rounded-md p-2 m-2 w-56 text-lg relative items-center"
            >
              {c} {c === QuestionDetails.answer && tick && <TiTick className="absolute tick" color="white"/>}
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleNext} className="card2 w-56 mt-48 p-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-lg">
        Next
      </button>
    </>
  );
}

export default QuestionForm;
