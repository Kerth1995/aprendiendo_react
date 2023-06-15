import React, { useState } from 'react'
import { UserContext } from './UserContext';

export const UserProvider = (props) => {
    const { children } = props;
    const [user, setUser] = useState();
    return (
        <UserContext.Provider value={{user: user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
