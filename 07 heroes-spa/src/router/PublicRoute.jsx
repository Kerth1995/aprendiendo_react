import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/components/AuthContext';

export const PublicRoute = (props) => {

    const {children} = props;

    const {logged} = useContext(AuthContext);
    return (!logged)?children:<Navigate to={'/marvel'}/>
}
