import ReactDOM from 'react-dom';
import React from 'react';

import MoneyApp from './components/MoneyApp.jsx';
import './assets/globalStyles.scss';

import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

ReactDOM.render(
    <MoneyApp />,
    document.getElementById('root')
);