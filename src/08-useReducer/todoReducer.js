
export const todoReducer = (initialState, action) => {

    switch ( action.type ) {
        case 'ABC':

            throw new Error('Action.type == ABC no implementado');
        case 'addTodo':
            return [
                ...initialState,
                action.payload
            ];
        case 'removeTodo':
            return initialState.filter( todo => todo.id !== action.payload );

        case 'toggleTodo':
            console.log('Toggle todo')
            return initialState.map( todo => {
                if(todo.id == action.payload) return { ...todo, done: !todo.done }
                return todo
            } );
        default:
            return initialState;
    }

}
