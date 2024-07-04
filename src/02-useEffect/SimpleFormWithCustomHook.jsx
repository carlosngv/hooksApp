import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const SimpleFormWithCustomHook = () => {

    const { username, email, password, onInputChange, onResetForm }  = useForm( {
        username: '',
        email: '',
        password: '',
    } );

    // const { username, email, password } = formState;

    return (
        <>
            <h1>Form with Custom Hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                value={ username }
                onChange={ onInputChange }
            />

            <input
                type="email"
                className="form-control mt-3"
                name="email"
                placeholder="Email"
                value={ email }
                onChange={ onInputChange }
            />

            <input
                type="password"
                className="form-control mt-3"
                name="password"
                placeholder="Password"
                value={ password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className='btn btn-info mt-3'>Reset</button>

        </>

    )
}
