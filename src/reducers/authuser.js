import {
    AUTH_USER,
    UNAUTH_USER
} from '../../src/actions/types';

export function authReducers(state = {}, action){
    switch(action.types){
        case AUTH_USER:
            return { ...state, authenticated: true };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        default:
            return state;
    }
}