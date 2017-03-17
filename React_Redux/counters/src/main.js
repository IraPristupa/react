import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CounterList from './CounterList.jsx';

import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <CounterList />
    </Provider>,
    document.getElementById('root')
);
