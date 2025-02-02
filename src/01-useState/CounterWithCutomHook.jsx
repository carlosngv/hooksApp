import { useCounter } from "../hooks/useCounter"


export const CounterWithCutomHook = () => {

    const { counter, increment, reset, decrement } = useCounter( 2 );



    return (
        <>
            <h1>Counter with Hook: { counter } </h1>
            <hr />

            <button className="btn btn-primary"
                onClick={ increment }>+1</button>
            <button className="btn btn-danger" onClick={ reset }>Reset</button>
            <button className="btn btn-primary" onClick={ decrement }>-1</button>
        </>
    )
}
