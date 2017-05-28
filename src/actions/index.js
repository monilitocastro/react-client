import axios from 'axios';
import { config } from '../../config';
export function signInUser( { email, password } ){
    return function(dispatch){
        // submit email/password to server
        axios.post(`${config.API_ROOT_URL}/signin`, {email, password});

        // if good then 
        // authentication is flagged as good,
        // save JWT token
        // redirect to secured resource

        // if auth is bad then
        // present error message
    }
        
}
