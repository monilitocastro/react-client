import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
class SignIn extends Component{
    render(){
        return (
            <form>
                <fieldset className='form-group'>
                    <label for='email'>Email: </label>
                    <input className='form-control' type='text' />
                </fieldset>
                
                <fieldset className='form-group'>
                    <label for='password'>Password: </label>
                    <input className='form-control' type='password' />
                </fieldset>

                <button action='submit' className='btn btn-primary'>Sign In</button>
            </form>
        );
    }
}


SignIn = reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(SignIn);

export default SignIn;