import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import * as actions from '../../../src/actions/';
import { connect } from 'react-redux';

class SignOut extends Component{
    componentWillMount(){
        this.props.signOutUser();
    }
    render(){
        return (
        <div>
                <h3>User signed out. Redirecting ...</h3>
        </div> 
        );
    }
}

export default connect(null, actions)(SignOut);