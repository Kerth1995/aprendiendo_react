import React, { useState } from 'react'

export const CounterApp = () => {

    const [{counter1, counter2, counter3}, setCounter] = useState({
        counter1: 100,
        counter2: 1000,
        counter3: 10000
    })

    

    return (
        <>
            <h1>counter1: {counter1} </h1>
            <h1>counter2: {counter2} </h1>
            <h1>counter3: {counter3} </h1>

            <hr />
            <button onClick={() => {setCounter({counter1: counter1 + 1, counter2: counter2, counter3: counter3})}}>+1</button>
            <button onClick={() => {setCounter({counter1: 100, counter2: counter2, counter3: counter3})}}>Clean counter1 </button>
            <button onClick={() => {setCounter({counter1: counter1 - 1, counter2: counter2, counter3: counter3})}}>-1</button>
            <br /><br />
            <button onClick={() => {setCounter({counter1: counter1, counter2: counter2 + 1, counter3: counter3})}}>+1</button>
            <button onClick={() => {setCounter({counter1: counter1, counter2: 1000, counter3: counter3})}}>Clean counter2</button>
            <button onClick={() => {setCounter({counter1: counter1, counter2: counter2 - 1, counter3: counter3})}}>-1</button>
            <br /><br />
            <button onClick={() => {setCounter({counter1: counter1, counter2: counter2, counter3: counter3 + 1})}}>+1</button>
            <button onClick={() => {setCounter({counter1: counter1, counter2: counter2, counter3: 10000})}}>Clean counter3</button>
            <button onClick={() => {setCounter({counter1: counter1, counter2: counter2, counter3: counter3 - 1})}}>-1</button>
        </>
    )
}
