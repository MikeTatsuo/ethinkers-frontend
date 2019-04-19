import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import * as serviceWorker from './serviceWorker';
import App from './App';
import { store } from "./providers/Store";

import './index.scss';

const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>, document.getElementById('root'));
serviceWorker.register();
