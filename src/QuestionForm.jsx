import React, { useEffect, useState, useRef } from "react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";



function QuestionForm({ currentQuestion, category, choice, setChoice }) {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [timer, settimer] = useState(null)
  const [disabled, setDisabled] = useState(false);
  const [wrongIndex, setwrongIndex] = useState(null)
  const [wrong, setwrong] = useState(false)
  const [tick, setTick] = useState(false);
  const QuestionDetails = currentQuestion.questions[questionIndex];
  const timerRef = useRef(0);
  const buttonrefs = useRef(QuestionDetails.choices.map(() => React.createRef())); // create a ref for each choice

  useEffect(() => {
    setDisabled(false);
    setChoice("");
    setwrong(false)
    setTick(false); // Reset the tick state when moving to the next question
    settimer(0)
    setwrongIndex(null)

    let intervalId = setInterval(() => {
      settimer(prevtimer => prevtimer + 1)
      timerRef.current = timerRef.current + 1;
    }, 1000)
   
    return () => {
      clearInterval(intervalId)
    }
  }, [category, setChoice]); // this will run anytime the category changes
  if (timer === 30)
  {
    handleNext()
  }
  function handleNext() {
    setDisabled(false);
    timerRef.current = 0;
    settimer(0)
    setwrong(false)
    setChoice(""); // Reset the choice when moving to the next question
    setTick(false); // Reset the tick state when moving to the next question
    if ((questionIndex < currentQuestion.questions.length - 1)){
      setQuestionIndex(questionIndex + 1);
    } else {
      window.location.reload();
      setQuestionIndex(0);
      alert("Questions exhausted");
    }
  }

  function CheckAnswer(e, cindex) {
    e.preventDefault();
    setDisabled(true);
    const currentChoice = e.target.value;
    const currentTarget = e.currentTarget;

    if (currentChoice === QuestionDetails.answer) {
      setTick(true);
    } 
    setChoice(currentChoice);
    if(currentChoice !== QuestionDetails.answer)
    {
      setwrong(true)
      setwrongIndex(cindex)
    }
  }

  return (
    <>
      <h2 className="m-4 text-lg card h-48 relative text-justify flex justify-center items-center p-4 md:w-96">
        {category && QuestionDetails.question}
      </h2>
      <p className="absolute timer flex justify-center items-center">{timerRef.current}</p>
      <ul className="mt-4 text-lg">
        {QuestionDetails.choices.map((c, cindex) => (
          <li key={cindex} style={{ listStyle: "none" }}>
            <button
              ref={(el) => buttonrefs.current[cindex] = el}
              key={cindex}
              onClick={(e) => CheckAnswer(e, cindex)}
              value={c}
              disabled={disabled}
              className="card2 rounded-md p-2 m-2 w-56 text-lg relative items-center"
            >
              {c} {c === QuestionDetails.answer && tick && <TiTick className="absolute tick" color="white"/>}
              {wrong && wrongIndex === cindex && <ImCross className="absolute cross" color="black"/>}
            </button>
          </li>
        ))}
      </ul>
      <p className="italic pt-4">You have 30 seconds for each question</p>
      <p className="italic pt-4">More functions and questions to be added soon</p>
      <button onClick={handleNext} className="card2 w-56 mt-48 p-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-lg">
        Next
      </button>
    </>
  );
}

export default QuestionForm;
