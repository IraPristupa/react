import { storageSetItem } from '../utils/localStorage';

const localStorageMiddleware = store => next => action => {
    const nextAction = next(action);
    const nextState = store.getState();

    storageSetItem('todos', nextState.todos);

    return nextAction;
};

export default localStorageMiddleware;
