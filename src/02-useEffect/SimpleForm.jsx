import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'carlosngv',
        email: 'cng@mail.com'
    })

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value, // ? Computed property, se usa cuando se determina una propiedad en tiempo de ejecución
        });
    }

    useEffect(() => {
        // console.log('useEffect called');
    }, [])

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed');
    }, [email]);


    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Username"
                value={ username }
                onChange={ onInputChange }
            />

            { (username == 'carlosngv') && <Message /> }

            <input
                type="email"
                className="form-control mt-3"
                name="email"
                placeholder="Email"
                value={ email }
                onChange={ onInputChange }
            />

        </>

    )
}
