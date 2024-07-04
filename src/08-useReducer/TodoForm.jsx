import { useState } from "react"
import { useForm } from "../hooks/useForm";

export const TodoForm = ({ handleNewTodo }) => {

    const [inputValue, setInputValue] = useState('');
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onSubmit = ( e ) => {
        e.preventDefault();

        if(description.length <= 1) return;

        let newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        }
        handleNewTodo(newTodo);
        onResetForm();
    }

    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-2"
            >Agregar</button>
        </form>
)
}
