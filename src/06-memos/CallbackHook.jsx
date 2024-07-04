import React, { useCallback, useState } from 'react'
import { useCounter } from '../hooks'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // ? Sirve para memorizar funciones
    // ? Técnicamente, cada que se llama la función "increment"
    // ? se genera una nueva referencia en un diferente espacio en memoria
    // ? Por lo que no siempre es el mismo "increment" en la misma posición en memoria
    // * Se utiliza en conjunto con memo en el componente hijo "ShowIncrement"
    const increment = useCallback(
      ( step = 1 ) => {
        setCounter( (val) => val + step );
      },
      [],
    )

    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ increment } />

        </>
    );
}
