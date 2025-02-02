import { useState } from "react"

export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState( initialValue );

    const increment = () => {
        setCounter( counter + 1 );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    const decrement = () => {
        if(counter == 1) return;
        setCounter( counter - 1 );
    }


    return {
        counter,
        increment,
        reset,
        decrement,
    }
}
