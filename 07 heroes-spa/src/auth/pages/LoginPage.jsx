import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext';

export const LoginPage = () => {

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = ()=>{
    login('Jordan Cotrina');
    navigate('/', {
      replace: true
    })
  }

  return (
    <>
      <div className='container mt-5'>
        <h1>Login</h1>
        <hr />
        <button
          className='btn btn-primary'
          onClick={(event)=>{onLogin(event)}}
        >
          Login
        </button>
      </div>
    </>
  )
}
