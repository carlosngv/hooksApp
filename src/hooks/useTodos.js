import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse( localStorage.getItem('todos') ) || []
}


export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [ todos ])


    const handleRemoveTodo = ( id ) => {
        const action = {
            type: 'removeTodo',
            payload: id,
        }
        // console.log(action);
        dispatch(action);
    }

    const pendingTodosCount = () => {
        let totalPending = todos.filter( todo => !todo.done ).length;
        return totalPending
    }

    const handleNewTodo = ( todo ) => {
        dispatch({
            type: 'addTodo',
            payload: todo
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: 'toggleTodo',
            payload: id
        });

    }

    return {
        todos,
        handleRemoveTodo,
        handleNewTodo,
        handleToggleTodo,
        pendingTodosCount,
    }
}
