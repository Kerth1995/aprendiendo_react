import React, { useState } from 'react'

export const AddCategory = ({outputCategory}) => {
    const [inputValue, setInputValue] = useState('dragon')

    const onchangeInput = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmitSearchGif = (event) => {
        event.preventDefault();
        if(inputValue.trim().length < 1) return;
        outputCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={(event) => {onSubmitSearchGif(event)}}>
                <input
                    type="text"
                    placeholder='Buscar gifs'
                    value={inputValue}
                    onChange={(event) => { onchangeInput(event) }}
                />
            </form>
        </>
    )
}
