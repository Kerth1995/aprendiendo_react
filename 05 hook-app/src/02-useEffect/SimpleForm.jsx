import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'Jordan Cotrina',
        email: 'josekerth@gmail.com'
    });

    const { username, email } = formState;

    const onChangeInputText = (event) => {
        //console.log('onChangeInputText', event.target.name + ' - ' + event.target.value)
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(() => {
        //console.log('useEffect called....')
    }, [])

    useEffect(() => {
        //console.log('useEffect formState changed....')
    }, [formState])

    useEffect(() => {
        //console.log('useEffect email from formState has changed....')
    }, [email])

    useEffect(() => {
        //console.log('useEffect username from formState has changed....')
    }, [username])


    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(event) => { onChangeInputText(event) }}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(event) => { onChangeInputText(event) }}
            />
            {
                (username === 'Jordan') && <Message/>
            }
            
        </>
    )
}
