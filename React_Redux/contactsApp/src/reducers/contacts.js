function contact(state, action) {
    switch (action.type) {
        case 'ADD_CONTACT': {
            return {
                id: action.id,
                text: action.text,
                email: action.email,
                marked: false
            };
        }

        case 'MARK_CONTACT': {
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                marked: !state.marked
            };
        }

        default: {
            return state;
        }
    }
}

export default function contacts(state = [], action) {
    switch (action.type) {
        case 'ADD_CONTACT': {
            return [
                ...state,
                contact(undefined, action)
            ];
        }

        case 'MARK_CONTACT': {
            return state.map(item => contact(item, action));
        }

        default: {
            return state;
        }
    }
};
