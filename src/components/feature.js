import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Feature extends Component{
    componentWillMount(){
        this.props.requestResource();
    }
    render(){
        return (
            <div>
                <h3>Secured feature resource</h3>
                <p>{ this.props.content.message }</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { content: state.content };
}

export default connect(mapStateToProps, actions)(Feature);