import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component{
    renderNavItems(){
        console.log('PROPS2: ', this.props);
        if(this.props.auth.authenticated){
            return(
                <li className='nav-item'>
                    <Link className='nav-link' to='/signout'>Sign Out</Link>
                </li>
            );
        }else{
            return [
                <li className='nav-item' key={1}>
                    <Link className='nav-link' to='/signin'>Sign In</Link>
                </li>,
                <li className='nav-item' key={2}>
                    <Link className='nav-link' to='/signup'>Sign Up</Link>
                </li>
                ];
        }
    }
    render(){
        return(
            <nav className='navbar navbar-toggleable-md navbar-light'>
                <ul className='nav navbar-nav'>
                    <li className="nav-item"><Link to='/' className='navbar-brand'>Home</Link></li>
                    { this.renderNavItems() }
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state) => {
        // console.log('STATEAUTH: ', state.auth);
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);