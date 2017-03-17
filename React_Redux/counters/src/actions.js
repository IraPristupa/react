export const increment = (id, value) => ({
    type: 'INCREMENT',
    id,
    value
});

export const decrement = (id, value) => ({
    type: 'DECREMENT',
    id,
    value
});

export const addCounter = () => ({ type: 'ADD_COUNTER'});
