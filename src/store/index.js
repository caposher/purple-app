import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/userReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(userReducer, composeEnhancers(applyMiddleware(thunk)));
window.myStore = store;
