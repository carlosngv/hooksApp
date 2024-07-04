import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const HomePage = (props) => {
    console.log('Props desde home:', props);

    const { msg } = useContext(UserContext);

    return (
        <>
            <h1>HomePage</h1>
            <hr />

            <pre>{ msg }</pre>
        </>
    )
}
