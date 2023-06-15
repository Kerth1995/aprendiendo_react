import React, { useContext } from 'react'
import { UserContext } from './context/UserContext';

const userLogin = {
    id: 1234,
    name: 'Jordan Cotrina',
    edad: 27,
    sexo: 'M',
    email: 'josekerth@gmail.com'
}


export const LoginPage = () => {

  const {user, setUser} = useContext(UserContext)
  
  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>
        {JSON.stringify(user)}
      </pre>
      <button
        className='btn btn-primary'
        onClick={(event) => setUser(userLogin)}
      >
        Establecer usuario
      </button>
    </>
  )
}
