import {
    REQUEST_RESOURCE
} from '../../src/actions/types';

export function contentReducers(state = {}, action){
    switch(action.type){
        case REQUEST_RESOURCE:
            return { ...state, message: action.payload };
        default:
            return state;
    }
}