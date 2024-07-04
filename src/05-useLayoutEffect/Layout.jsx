import { useFetch, useCounter } from "../hooks"
import { LoadingMessage } from "../03-examples/LoadingMessage";
import { PokemonCard } from "../03-examples/PokemonCard";



export const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, isLoading, hasError } = useFetch( `https://pokeapi.co/api/v2/pokemon/${ counter }` );

    return (
        <>
            <h1>MultipleCustomHooks - Layout</h1>
            <hr />

            {
                isLoading
                ? < LoadingMessage />
                : <PokemonCard
                    id={counter}
                    name={ data.name }
                    sprites={[
                        data.sprites.front_default,
                        data.sprites.front_shiny,
                        data.sprites.back_default,
                        data.sprites.back_shiny,
                    ]}
                />
            }

            <button className="btn btn-primary" onClick={ decrement }>Anterior</button>

            <button className="btn btn-danger" onClick={ increment }>Siguiente</button>
        </>
    )
}
