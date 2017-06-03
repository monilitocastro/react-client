import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

export default function( OriginalComponent ){
    class Composition extends Component{
        render(){
            return <OriginalComponent {...this.props} />;
        }
        componentWillUnmount(){
            this.props.authError('');
        }
    }

    return connect(null, actions)(Composition);

}
