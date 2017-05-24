import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
class SignIn extends Component{
    handleFormSubmit({email, password}){
        console.log(email, password);
    }

    render(){
        const { handleSubmit, fields: {email, password} } = this.props;

        return (
            <form onSubmit={ handleSubmit(this.handleFormSubmit.bind(this)) }>
                <fieldset className='form-group'>
                    <label>Email: </label>
                    <input {...email} className='form-control' type='text'/>
                </fieldset>
                
                <fieldset className='form-group'>
                    <label >Password: </label>
                    <input {...password} className='form-control' type='password'/>
                </fieldset>

                <button action='submit' className='btn btn-primary'>Sign In</button>
            </form>
        );
    }
}




export default reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(SignIn);