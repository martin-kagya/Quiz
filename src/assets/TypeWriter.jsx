import React from "react";
import { useEffect, useState } from "react";
 //typewriter effect
 const useTypewriter = (text, speed=500) =>
 {
     const [currText, setCurrText] = useState("");
     const [currentIndex, setCurrentIndex] = useState(0);
     useEffect(() =>
     {
         const typingInterval = setInterval(()=>
         {
             if (currentIndex < text.length )
             {
                 setCurrText((prevText) => prevText + text.charAt(currentIndex))
                 setCurrentIndex(currentIndex + 1)
             }
             else{
                 clearInterval(typingInterval);
             }
         }, speed)
         return () =>
         {
             clearInterval(typingInterval)
         }
     }, [text, speed, currentIndex])
     return (currText);
 }

 const Typewriter = ({text, speed}) => 
 {
    const displayText = useTypewriter(text, speed);
    return <>{displayText}</>; 
 }

 export default Typewriter;