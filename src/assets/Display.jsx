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
        setChoice("")
        const newCategory = e.target.value
        setCategory(() => newCategory)
    }
    return(
        <>
        <div className="container bg-slate-950">
            <h1 className="">QUIZ APP</h1>
            <select onChange={handleCatChange}>
                <option>Select a category</option>
                {questionData.map((question, index) => 
                <option key={index} >
                    {question.category}
                </option>
                )}
            </select>
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