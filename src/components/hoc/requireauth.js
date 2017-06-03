import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function( OriginalComponent ){
    class Composition extends Component{
        render(){
            return <OriginalComponent {...this.props} />;
        }
        componentWillMount(){
            if(!this.props.authenticated){
                browserHistory.push('/');
            }
        }

        componentWillUpdate(){
            console.log('NEXTPROPS: ', nextProps);
            if(!nextProps.authenticated){
                browserHistory.push('/');
            }
        }


    }
    
    function mapStateToProps(state){
        return { authenticated: state.auth.authenticated };
    }

    return connect(mapStateToProps)(Composition);

}
