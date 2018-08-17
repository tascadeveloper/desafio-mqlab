import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store, { history } from './store'
import { ConnectedRouter } from 'connected-react-router'
import { CookiesProvider } from 'react-cookie';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <CookiesProvider>
                <App/>
            </CookiesProvider>
        </ConnectedRouter>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
