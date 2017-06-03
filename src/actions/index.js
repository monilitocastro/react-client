import axios from 'axios';
import { config } from '../../config';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, SIGNOUT_USER } from './types';

//TODO: updating auth state
export function signInUser( { email, password } ){
    return function(dispatch){
        // submit email/password to server
        axios.post(`${config.API_ROOT_URL}/signin`, {email, password})
        .then( response => {
            // if good then 
            // authentication is flagged as good,
            dispatch({ type: AUTH_USER });
            // save JWT token
            localStorage.setItem('token', response.data.token);
            // redirect to secured resource
            browserHistory.push('/feature');
        })
        .catch( () => {
            // if auth is bad then
            // present error message
            dispatch(authError('Bad Login Info'));
        });



    }
        
}

export function signUpUser( { email, password } ){
    return function(dispatch){
        axios.post(`${config.API_ROOT_URL}/signup`, {email, password})
        .then( response => {
            dispatch({ type: AUTH_USER });

            localStorage.setItem( 'token', response.data.token );

            browserHistory.push('/feature');
        } )
        .catch( (response) => {
            // console.log('ERR: ', response.statusText);
            dispatch(authError( 'Sign up error' ));
        } );
    }
}

export function signOutUser( ){
    return function(dispatch){
        dispatch( { type: SIGNOUT_USER });

        localStorage.removeItem('token');

        setTimeout( () => {
            browserHistory.push('/');
        }, 500);

    }
}

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    };
}
