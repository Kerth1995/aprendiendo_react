import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter';
import { Small } from './Small';

const heavyStuff = (limit = 1000)=>{
    for (let index = 0; index < limit; index++) {
        console.log('a loop!!! ',);   
    }

    return 'it is done ' + limit + ' itereators';
}

export const MemorizeTwo = () => {
    const { counter, increment, decrement, reset } = useCounter(1000);
    const [flag, setFlag] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Memorize Second</h1>
            <h2>Counter: <Small counter={counter} /></h2>

            <h3>{memorizedValue}</h3>
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
