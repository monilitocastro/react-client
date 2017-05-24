import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        &nbsp;
        {this.props.children}
      </div>
    );
  }
}
