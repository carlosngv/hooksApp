import React, { useState } from 'react'
import { UserContext } from './UserContext';

// const user = {
//     id: 123,
//     name: 'Carlos Ng',
//     email: 'carlosngva@outlook.com'
// }

export const UserProvider = ( { children } ) => {
    // ? Los children, es el conjunto de react elements que son hijos del provider en MainApp.jsx

    const [user, setUser] = useState();

    return (
        <UserContext.Provider value={ { msg: 'hola mundo desde UserContext', user, setUser } }>
            { children }
        </UserContext.Provider>
    )
}
