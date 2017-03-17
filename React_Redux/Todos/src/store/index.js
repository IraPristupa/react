import { createStore, applyMiddleware  } from 'redux';

import rootReducer from '../reducers';

import localStorageMiddleware from '../middlewares/localStorage';
import googleAnalyticsMiddleware from '../middlewares/googleAnalytics';

export default createStore(
    rootReducer,
    applyMiddleware(localStorageMiddleware, googleAnalyticsMiddleware)
);
