import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { APP_CONFIG } from './app/config';
import { App } from './App';
import { store } from './app/store';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router basename={APP_CONFIG.rootUrlPath}>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
