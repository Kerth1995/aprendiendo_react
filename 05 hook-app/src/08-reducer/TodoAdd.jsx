import React, { useState } from 'react'

export const TodoAdd = ({ outputTask }) => {
    const [inputText, setInputText] = useState('Nombre de tarea');

    const onChangeInoutText = (event) => {
        setInputText(event.target.value);
    }

    const onSubmitAddTask = (event) => {
        event.preventDefault();
        if (inputText.trim().length <= 2) return;
        let newTask = {
            id: new Date().getTime(),
            description: inputText.trim(),
            done: false
        }
        outputTask(newTask);
        setInputText('');
    }

    return (
        <>
            <form onSubmit={(event) => { onSubmitAddTask(event) }}>
                <input
                    type="text"
                    placeholder='¿Qué hay que hacer?'
                    className='form-control'
                    value={inputText}
                    onChange={(event) => { onChangeInoutText(event) }}
                />
            </form>
            <button
                type='submit'
                className='btn btn-outline-primary mt-1'
                onClick={(event) => { onSubmitAddTask(event) }}
            >
                Agregar
            </button>
        </>
    )
}
