export const addTodo = text => ({
    type: 'ADD_TODO',
    id: Date.now(),
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const deleteTodo = id => ({
    type: 'DELETE_TODO',
    id
});

export const completeAllTodos = () => ({type: 'COMPLETE_ALL_TODOS'});

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
});
