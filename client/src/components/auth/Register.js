import React, { Component } from 'react';
import axios from 'axios';

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
            this.props.history.push('/jokes');
        }).catch(err => {
            console.log('REGISTER ERROR', err.response.statusText);
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h1>Register</h1>
                <div >
                    <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput} />
                    <label htmlFor="username">Username</label>
                </div>
                <div >
                    <input type="password" id="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput} />
                    <label htmlFor="password">Password</label>
                </div>
                <div>
                    <button type="submit">Register</button>
                </div>
            </form>
        );
    };
}

export default Register;