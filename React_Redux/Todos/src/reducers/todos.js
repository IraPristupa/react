import { storageGetItem } from '../utils/localStorage';

const todosData = storageGetItem('todos') || [];

function todo(state, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        }

        case 'TOGGLE_TODO': {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        }

        case 'COMPLETE_All_TODOS': {
            return {
                ...state,
                completed: true
            };
        }

        default: {
            return state;
        }
    }
}

export default function todos(state = todosData, action) {
    switch (action.type) {
        case 'ADD_TODO': {
            return [
                ...state,
                todo(undefined, action)
            ];
        }

        case 'TOGGLE_TODO': {
            return state.map(item => todo(item, action));
        }

        case 'COMPLETE_ALL_TODOS': {
            return state.map(item => todo(item, action));
        }

        case 'DELETE_TODO': {
            return state.filter(item => item.id !== action.id);
        }

        default: {
            return state;
        }
    }
};
