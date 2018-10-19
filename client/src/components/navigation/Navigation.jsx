import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Styled from 'styled-components';

const Wrapper = Styled.div`
    width: 100%;
    height: 100px;
    color: #ffffff;
    background-color: #313131;
    display: flex;
    align-items: center;
    
    a {
      color: #ffffff;
      text-decoration: none;
    }
    
    a:hover {
        color: #69646;
        transition: 0.7s;
    }
`;

const NavLeft = Styled.div`
    width: 100%;
    margin-left: 13.5%;
`;

const NavRight = Styled.div`
    position: relative;
    width: 15%;
    right: 0;
`;

const Button = Styled.button`
    position: relative;
    width: 100%;
    margin-top: 0;
    right: 10px;
    cursor: pointer;
`;

class Navigation extends Component {

    componentDidMount() {
        if(localStorage.getItem('jwt')) {
            this.props.setLogin();
        };
    };

    userLogout = () => {
        if(localStorage.getItem('jwt')) {
            localStorage.removeItem('jwt');
            this.props.setLogin();
            this.props.history.push('/');
        };
    };

    render() {
        return (
            <Wrapper>
                <NavLeft>
                    <NavLink to="/" >Home</NavLink>
                    &nbsp;&nbsp;
                    <NavLink to="/jokes" >Jokes</NavLink>
                    &nbsp;&nbsp;
                    {this.props.loggedIn ? '' : <NavLink to="/login" >Login</NavLink>}
                    &nbsp;&nbsp;
                    {this.props.loggedIn ? '' : <NavLink to="/register" >Register</NavLink>}
                </NavLeft>

                <NavRight>
                    {this.props.loggedIn ? <Button onClick={this.userLogout}>Logout</Button> : ''}
                </NavRight>

            </Wrapper>
        );
    }

};

export default Navigation;