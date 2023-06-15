import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
    const { counter, increment, decrement, reset } = useCounter(0);

    const url = `https://rickandmortyapi.com/api/character/?page=${counter}`
    const { data, isLoading, hasError } = useFetch(url);
    const { species, name } = !!data && data[0];

    return (
        <>
            <h1>BreakingBad Quotes</h1>
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
