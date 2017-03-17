export const addContact = (text, email) => ({
    type: 'ADD_CONTACT',
    id: Date.now(),
    text,
    email
});

export const markContact = id => ({
    type: 'MARK_CONTACT',
    id
});

export const setFilter = filter => ({
    type: 'SET_FILTER',
    filter
});
