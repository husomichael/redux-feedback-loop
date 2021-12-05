import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';

const feedbackReducer = (state = {feeling: '', understanding: '', support: '', comment: ''}, action) => {
    switch(action.type) {
        case "ADD_FEELING":
            return {feeling: action.payload,
                    understanding: state.understanding,
                    support: state.support,
                    comment: state.comment}
        case "ADD_UNDERSTANDING":
            return {feeling: state.feeling,
                    understanding: action.payload,
                    support: state.support,
                    comment: state.comment}
        case "ADD_SUPPORT":
            return {feeling: state.feeling,
                    understanding: state.understanding,
                    support: action.payload,
                    comment: state.comment}
        case "ADD_COMMENT":
            return {feeling: state.feeling,
                    understanding: state.understanding,
                    support: state.support,
                    comment: action.payload}
        case "CLEAR_FEEDBACK":
            return {feeling: '', understanding: '', support: '', comment: ''};
        default:
            return {feeling: '', understanding: '', support: '', comment: ''};
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
