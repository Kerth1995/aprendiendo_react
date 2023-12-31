import React, { useState } from 'react'

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => { 
        setCounter(counter + value)
        console.log(counter);
    }
    const decrement =  (value = 1) => { 
        setCounter(counter - value)
        console.log(counter);
    }
    const reset =  () => { 
        setCounter(initialValue)
    }

    return {
        counter: counter,
        increment,
        decrement,
        reset
    }
}

