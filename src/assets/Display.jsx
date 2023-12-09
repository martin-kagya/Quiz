import React, { useEffect, useState } from "react";
import { useContext, createContext } from "react";
import "../index.css"
import QuestionForm from "../QuestionForm";
import questionData from "../questions.json"

const myContext = createContext()
function Display ()
{
    const [category, setCategory] = useState('')
    const [choice, setChoice] = useState('')
    const currentQuestion = questionData.find((q) => q.category === category);
    function handleCatChange(e)
    {
        const title = document.querySelector(".title")
        title.classList.add("hidden")
        setChoice("")
        const newCategory = e.target.value
        setCategory(() => newCategory)
    }
    return(
        <>
        <div className="container flex justify-center items-center flex-col">
            <h1 className="text-xl font-bold pt-4">QUIZ APP</h1>
            <ul className="title grid grid-rows-3 grid-flow-col gap-3">
                {questionData.map((q) => {
                    return(
                        <li key={q.category}>
                            <button className="tile border rounded-md border-black h-32 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-lg" onClick={handleCatChange} value={q.category}>{q.category}</button>
                        </li>
                    )
                
                })}
            </ul>
                {category && currentQuestion && (
                
                <QuestionForm 
                    currentQuestion={currentQuestion}
                    category={category}
                    choice={choice}
                    setChoice={setChoice}
                />

                )}
            </div>
        </>
    )
}
export default Display;