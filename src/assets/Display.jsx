import React, { useEffect, useState } from "react";
import "../index.css"
import QuestionForm from "../QuestionForm";
import questionData from "../questions.json"
import Typewriter from "./TypeWriter";
function Display ()
{
    const [category, setCategory] = useState('')
    const [choice, setChoice] = useState('')
    const [name, setName] = useState('');
    const [showCategory, setShowCategory] = useState(false)
    let login;
    const currentQuestion = questionData.find((q) => q.category === category);
    function handleCatChange(e)
    {
        const title = document.querySelector(".title")
        title.classList.add("hidden")
        setChoice("")
        setShowCategory(true)
        const newCategory = e.target.value
        setCategory(() => newCategory)
    }

    function handleNameInput(e)
    {
        e.preventDefault()
        const newName = e.target.value
        setName(newName)
        window.localStorage.setItem("name", newName)
    }

    function handleclick(e)
    {
        e.preventDefault()
        if(name === '')
        {
            alert("Please enter your name")
            return
        }
        setShowCategory(true)
        const form = e.target.closest("form")
        login = localStorage.setItem("login", true)
        if(form)
        {
            form.classList.add("hidden")
        }
    }
    useEffect(() => {
        const name = localStorage.getItem("name")
        if(name)
        {
            setName(name)
            setShowCategory(true)
            login = localStorage.setItem("login", true) 
            const form = document.querySelector("form")
            if(form)
            {
                form.classList.add("hidden")
            }
        }
    }, [])

    if (showCategory)
    {
        const header = document.querySelector(".header")
        if(header)
        {
            header.classList.add("hidden")
        }
    }
    return(
        <>
        {!login && (
        <form className="flex justify-center items-center flex-col">
            <input className="border relative rounded-md border-cyan-500 h-10 w-32 text-sm" type="text" placeholder="Enter your name" required onChange={handleNameInput}/>
            <br></br>
            <button className="border rounded-md border-black h-10 w-32 bg-gradient-to-r from-cyan-500 to-blue-500 text-lg" onClick={handleclick}>Submit</button>
        </form>
        
        )}
            
    {showCategory && (
        <div className="container flex justify-center items-center flex-col">
             <h1 className="text-xl font-bold header pt-4"><Typewriter text={`WELCOME ${localStorage.getItem("name")}`} speed={100}/><br></br><span className="italic font-thin">Choose a category</span></h1>
            <br></br>
            <br></br>
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
    )}
        
        </>
    )
}
export default Display;