import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/app.router';
import { Provider } from 'react-redux'
import skillApp from './reducers'
import { createStore } from 'redux'

const supportsHistory = 'pushState' in window.history;


let store = createStore(
    skillApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
    <Provider store={store}>
        <BrowserRouter
            forceRefresh={!supportsHistory}
            getUserConfirmation={() => { }}
            basename='/'
        >
            <AppRouter />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
