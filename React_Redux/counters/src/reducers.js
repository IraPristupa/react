function counter(state, action) {
    switch (action.type) {
        case 'ADD_COUNTER': {
            return {
                ...state,
                id: Date.now(),
                count: 0
            };
        }

        case 'INCREMENT': {
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                count: state.count + action.value
            };
        }

        case 'DECREMENT': {
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                count: state.count - action.value
            };
        }
    }
}

export default function counters(state = [{id: 1, count: 0}], action) {
    switch (action.type) {
        case 'ADD_COUNTER': {
            return [
                ...state,
                counter(undefined, action)
            ];
        }

        case 'INCREMENT': {
            return state.map(item => counter(item, action));
        }

        case 'DECREMENT': {
            return state.map(item => counter(item, action));
        }

        default: {
            return state;
        }
    }
}
