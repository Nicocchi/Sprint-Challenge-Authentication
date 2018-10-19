import React, { Component } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

const Wrapper = Styled.form`
    width: 70%;
    margin: 0 auto;
    position: relative;
`;

const Input = Styled.input`
    width: 20%;
    height: 30px;
    border: 0;
    margin-top: 20px;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
`;

const Label = Styled.label`
    position: relative;
    top: -20px;
    left: 10%;
`;

class Register extends Component {
    state = {
        username: '',
        password: ''
    };

    handleInput = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:3300/api/register';

        axios.post(endpoint, this.state).then(res => {
            localStorage.setItem('jwt', res.data.token);
            this.props.setLogin();
            this.props.history.push('/jokes');
        }).catch(err => {
            console.log('REGISTER ERROR', err.response.statusText);
        });
    };

    render() {
        return (
            <Wrapper onSubmit={this.handleSubmit} >
                <h1>Register</h1>
                <div >
                    <Label htmlFor="username">Username</Label>
                    <Input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput} />
                </div>
                <div >
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput} />
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </Wrapper>
        );
    };
}

export default Register;