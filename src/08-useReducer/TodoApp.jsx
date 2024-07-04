import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { useTodos } from "../hooks";

export const TodoApp = () => {

    const { todos, handleToggleTodo, handleNewTodo, handleRemoveTodo, pendingTodosCount } = useTodos();

    return (
        <>
            <h1>TodoApp: { todos.length }, <small>pendientes: { pendingTodosCount() }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={ todos }
                        handleRemoveTodo={ handleRemoveTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoForm
                        handleNewTodo={ handleNewTodo }
                    />
                </div>
            </div>

        </>
    );
}
