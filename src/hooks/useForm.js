import { useState } from "react";

export const useForm = ( initialForm = {} ) => {

    const [formState, setFormState] = useState( initialForm )

    const onInputChange = ( { target } ) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            // ? Computed property, se usa cuando se determina una propiedad en tiempo de ejecución
            [ name ]: value,
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        onInputChange,
        onResetForm
    };
}
