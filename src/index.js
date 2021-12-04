import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const feedbackReducer = (state = {}, action) => {
    switch(action.type) {
        //4 feedback cases here,
        //1 clear case for DB post route
    };
};

const storeInstance = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(
        logger
    )
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
