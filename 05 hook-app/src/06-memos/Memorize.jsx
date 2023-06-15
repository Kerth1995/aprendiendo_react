import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment, decrement, reset } = useCounter(0);
    const [flag, setFlag] = useState(true);

    return (
        <>
            <h1>Memorize first</h1>
            <h2>Counter: <Small counter={counter} /></h2>
            <hr />
            <button
                className='btn btn-primary'
                onClick={(event) => { increment(1) }}
            >
                +1
            </button>
            <hr />
            <h1>flag: {JSON.stringify(flag)}</h1>
            <button
                className='btn btn-primary'
                onClick={(event) => { setFlag(!flag) }}
            >
                show/hidden
            </button>


        </>
    )
}
