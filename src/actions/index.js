import axios from 'axios';
import { config } from '../../config';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, SIGNOUT_USER, REQUEST_RESOURCE } from './types';

export function requestResource(){
    return function(dispatch){
        axios.get(`${config.API_ROOT_URL}/`, 
            { 
                headers:{
                    authorization: localStorage.getItem('token')
                }
            })
        .then(
            response => {
                console.log('REQ_RES RESPONSE: ', response);
                dispatch( { type: REQUEST_RESOURCE, payload: response.data.message} );
            }
        )
        .catch(
            response => {
            }
        );
    }
}

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
            dispatch(authError('Wrong Email/Password combination'));
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
        .catch( (error) => {
            dispatch(authError( error.response.data.error ));
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
