import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const feelingReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_FEELING":
            return state.feeling = action.payload;
        case "CLEAR_FEEDBACK":
            return {};
        default:
            return {};
    };
};

//Reference this for the all in 1 reducer.
const understandingReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_UNDERSTANDING":
            return {understanding: action.payload}; // Payload can return entire object with current states.
        case "CLEAR_FEEDBACK":
            return {};
        default:
            return {};
    };
};

const supportReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_SUPPORT":
            return state.support = action.payload;
        case "CLEAR_FEEDBACK":
            return {};
        default:
            return {};
    };
};

const commentReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_COMMENT":
            return state.comment = action.payload;
        case "CLEAR_FEEDBACK":
            return {};
        default:
            return {};
    };
};

// const feedbackReducer = (state = {}, action) => {
//     switch(action.type) {
//         case "ADD_FEELING":
//             return state.feeling = action.payload;
//         case "ADD_UNDERSTANDING":
//             return state.understanding = action.payload;
//         case "ADD_SUPPORT":
//             return state.support = action.payload;
//         case "ADD_COMMENT":
//             return state.comment = action.payload;
//         case "CLEAR_FEEDBACK":
//             return {};
//         default:
//             return {};
//     };
// };

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentReducer
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
