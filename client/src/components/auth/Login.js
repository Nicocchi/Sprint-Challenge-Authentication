import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        username: '',
        password: ''
    };

    handleInput = e => {
        this.setState({loggingIn: false})
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = e => {
        e.preventDefault();

        const endpoint = 'http://localhost:3300/api/login';

        axios.post(endpoint, this.state).then(res => {
            localStorage.setItem('jwt', res.data.token);

            this.props.history.push('/jokes');

        }).catch(err => {
            console.log('LOGIN ERROR', err);
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <h1>Login</h1>
                <div >
                    <input type="text" id="username" name="username" placeholder="Username" value={this.state.username} onChange={this.handleInput} />
                    <label for="username">Username</label>
                </div>
                <div >
                    <input type="password" id="password" placeholder="password" name="password" value={this.state.password} onChange={this.handleInput} />
                    <label for="password">Password</label>
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        );
    };
}

export default Login;