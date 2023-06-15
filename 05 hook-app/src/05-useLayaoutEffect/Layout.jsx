import React from 'react'
import { LoadingQuote } from '../03-examples/LoadingQuote';
import { Quote } from '../03-examples/Quote';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const Layout = () => {
    const { counter, increment, decrement, reset } = useCounter(0);

    const url = `https://rickandmortyapi.com/api/character/?page=${counter}`
    const { data, isLoading, hasError } = useFetch(url);
    const { species, name } = !!data && data[0];

    return (
        <>
            <h1>Layaout Effect</h1>
            {
                isLoading ?
                    (                        
                        <LoadingQuote/>
                    )
                    :
                    (
                        <Quote species={species} name={name}/>
                    )
            }
            <br />
            <br />
            <button className="btn btn-primary" onClick={(event)=>{decrement(1)}} disabled={isLoading}>
                Go back
            </button>
            <button className="btn btn-primary" onClick={(event)=>{reset()}} disabled={isLoading}>
                Reset
            </button>
            <button className="btn btn-primary" onClick={(event)=>{increment(1)}} disabled={isLoading}>
                Next quote
            </button>
        </>
    )
}
