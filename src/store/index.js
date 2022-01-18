import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';
import { algoQuestion } from './algorithem-question.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)));
window.myStore = store;

// question - undo to see the result of maxMirror algo
// algoQuestion();
