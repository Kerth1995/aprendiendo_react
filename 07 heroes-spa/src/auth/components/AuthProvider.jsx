import React, { useReducer } from 'react'
import { authReducer } from './aouthReducer';
import { AuthContext } from './AuthContext';
import {types} from '../types/types'



const init = ()=>{
    const user = JSON.parse(localStorage.getItem('user'));
    
    return {
        logged: !!user,
        username: user
    }
}

export const AuthProvider = (props) => {
    const { children } = props;
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '')=> {
        const user = {
            username: name
        }
        const action = {
            type: types.login,
            payload: user
        }
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    }

    const logout = ()=>{
        localStorage.removeItem('user');
        const action = {
            type: types.logout
        }
        dispatch(action);
    }

    return (
        <>
            <AuthContext.Provider value={{...authState, login: login, logout: logout}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
