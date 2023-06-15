import React, { useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const SimpleFormCustomHook = () => {

    const {formState, onChangeInputText, onResetForm} = useForm({
        username: '',
        email: '',
        password: ''
    });
    const { username, email, password } = formState;
    /*
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = formState;

    const onChangeInputText = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        })
    }
    */

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

    useEffect(() => {
        //console.log('useEffect username from formState has changed....')
    }, [password])


    return (
        <>
            <h1>Simple Form  wiith custom hook</h1>
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(event) => { onChangeInputText(event) }}
            />
            {
                (username === 'Jordan') && <Message />
            }
            <button className='btn btn-primary mt-2' onClick={(event)=> {onResetForm()}}>Reset</button>
        </>
    )
}
