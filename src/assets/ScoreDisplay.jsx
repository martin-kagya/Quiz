import React, { useEffect } from "react";
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { IoHome } from "react-icons/io5";

function ScoreDisplay({score, totalQuestions})
{
    useEffect(() => {
        setTimeout(() => {
        confetti(
            {
                particleCount: 400,
                spread: 70,
                origin: { y: 0.6 }
            }
        );
    }, 1000)
    }, [])
    const perecentage = score / (5 * totalQuestions) * 100;
    return(
        <>
            <div className="grid grid-flow-row gap-6 place-items-center">
                <h2 className="text-lg">{`Congratulations ${localStorage.getItem("name")}`}</h2>
                <h2 className="text-lg">Score: {score}/{5 * totalQuestions}</h2>
                <h2 className="text-lg">Percentage: {perecentage}%</h2>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <button className="btn btn-primary flex text-md justify-between items-center" onClick={() => window.location.reload()}><IoHome size={25}/></button>
                <p className="italic text-md"> More functionality and questions to be added soon</p>
            </div>  
        </>
    )
}

export default ScoreDisplay;