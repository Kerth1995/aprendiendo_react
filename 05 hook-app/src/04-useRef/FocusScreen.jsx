import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickSelectByDefaultInput = () => {
        //console.log(inputRef);
        inputRef.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <input
                ref={inputRef}
                type="text"
                name=""
                id=""
                placeholder='Ingrese nombre'
                className='form-control'
            />

            <input
                ref={inputRef}
                type="text"
                name=""
                id=""
                placeholder='Ingrese nombre'
                className='form-control'
            />

            <button className='btn btn-primary mt-2' onClick={(event => { onClickSelectByDefaultInput() })}>
                Set Focus
            </button>
        </>
    )
}
