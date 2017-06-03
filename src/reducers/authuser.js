import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    SIGNOUT_USER,
    UPDATE_AUTH
} from '../../src/actions/types';

export function authReducers(state = {}, action){
    switch(action.type){
        case AUTH_USER:
            return { ...state, error: '', authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case SIGNOUT_USER:
            return { ...state, authenticated: false };
        case UPDATE_AUTH:
            return { ...state, authenticated: action.payload };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}