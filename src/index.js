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
        case "ADD_FEELING":
            return state.feeling = action.payload;
        case "ADD_UNDERSTANDING":
            return state.understanding = action.payload;
        case "ADD_SUPPORT":
            return state.support = action.payload;
        case "ADD_COMMENT":
            return state.comment = action.payload;
        case "CLEAR_FEEDBACK":
            return {};
        default:
            return {};
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
