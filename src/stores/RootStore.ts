import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { RootReducer } from '../reducers/RootReducer';

export default createStore(
    RootReducer,
    applyMiddleware(thunk)
);
