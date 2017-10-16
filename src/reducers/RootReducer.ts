import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as ActionTypes from '../constants/ActionTypes';

export const RootReducer = combineReducers({
    userinfo: handleActions({
        [ActionTypes.UPDATE_USER_INFO]: (state, action) => action.payload,
    }, {
        name: 'Jason'
    }),
});
