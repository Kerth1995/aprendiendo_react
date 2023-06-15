import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterAppWithCustomHook = () => {

    const {counter, increment, decrement, reset} = useCounter(520);

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr />
            <button className='btn btn-primary' onClick={(event)=> {increment(5)}}>+1</button>
            <button className='btn btn-primary' onClick={reset}>Reset</button>
            <button className='btn btn-primary' onClick={(event)=> {decrement(5)}}>-1</button>
        </>
    )
}
