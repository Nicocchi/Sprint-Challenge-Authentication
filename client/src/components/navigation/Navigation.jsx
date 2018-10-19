import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {

    userLogout = () => {
        if(localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt');
            this.props.history.push('/');
        };
    };

    render() {
        return (
            <nav>
                <div>
                    <NavLink to="/" >Home</NavLink>
                    &nbsp;&nbsp;
                    <NavLink to="/jokes" >Jokes</NavLink>
                    &nbsp;&nbsp;
                    <NavLink to="/login" >Login</NavLink>
                    &nbsp;&nbsp;
                    <NavLink to="/register" >Register</NavLink>
                </div>

                <div>
                    <button onClick={this.userLogout}>Logout</button>
                </div>

            </nav>
        );
    }

};

export default Navigation;