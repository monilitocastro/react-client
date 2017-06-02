import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signup extends Component{
    handleFormSubmit({ email, password }){
        console.log('EMAIL/PWD',{email, password});
    }
    render(){
        const { handleSubmit, fields: {email, password, passwordConfirm} } = this.props;

        return(
            <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) } >
                <div className='form-group'>
                    <label htmlFor='email'>Email:</label>
                    <input {...email} type='email' className='form-control' />
                    { email.touched && email.error && <div className='text-danger'>{email.error}</div> }
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password:</label>
                    <input {...password} type='password' className='form-control' />
                    { password.touched && password.error && <div className='text-danger'>{password.error}</div> }
                </div>
                <div className='form-group'>
                    <label htmlFor='passwordConfirm'>Confirm Password:</label>
                    <input {...passwordConfirm} type='password' className='form-control' />
                    { passwordConfirm.touched &&passwordConfirm.error && <div className='text-danger'>{passwordConfirm.error}</div> }
                </div>
                <button type='submit' className='btn btn-primary'>Sign up</button>
            </form>
        );
    }
}

function validate(formTypes){
    // console.log('VALIDATE', formTypes);
    const errors = {};

    if(!formTypes.email){
        errors.email = 'Provide email address';
    }

    if(!formTypes.password){
        errors.password = 'Password needed';
    }

    if(!formTypes.passwordConfirm){
        errors.passwordConfirm = 'Confirm password';
    }

    if(formTypes.passwordConfirm && (formTypes.password !== formTypes.passwordConfirm) && (formTypes.password.length <= formTypes.passwordConfirm.length) ){
        errors.password = 'Passwords must match';
    }

    return errors;
}

export default reduxForm({
    form: 'signup',
    fields: ['email', 'password', 'passwordConfirm'],
    validate
})(Signup);