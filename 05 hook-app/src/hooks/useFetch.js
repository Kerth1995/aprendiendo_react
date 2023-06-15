import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const getFetch = async () => {        
        const rpta = await fetch(url);
        const { info, results } = await rpta.json();

        setState({
            data: results,
            isLoading: false,
            hasError: null
        });

    }

    useEffect(() => {
        setState({
            ...state,
            isLoading: true
        });
        setTimeout(() => {
            getFetch();
        }, 500);
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}
