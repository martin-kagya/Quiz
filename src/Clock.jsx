import React, { useEffect, useState } from 'react'


function Clock ({handleNext, timer, settimer})
{
    useEffect(() => {
        let interval = setInterval(() => {
            handleNext()
        }, 5000)
        return () => {
            clearInterval(interval)
        }
}, [])
}
export default Clock;
