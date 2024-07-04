import { useContext } from "react"
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { msg, user, setUser } = useContext( UserContext );
    console.log(msg)

    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>{ user?.name }</pre>

            <button
                className="btn btn-primary"
                onClick={ () => setUser({ id:123, name: 'Carlos', email: 'carlos@mail.com' }) }
            >
                Establecer Usuario
            </button>
        </>
    )
}
