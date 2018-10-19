import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class Jokes extends Component {
    state = {
        jokes: [],
        error: '',
        isError: false,
    };

    render() {
        return (
            <div>
                <h1>Dad Jokes</h1>
                <h2>{this.state.isError ? `You are not authorized to view this page.` : ''}</h2>
                <span>{this.state.isError ? <NavLink to="/register">Register</NavLink> : ''}
                    {this.state.isError ? 'Or' : ''} {this.state.isError ? <NavLink to="/login">Login</NavLink> : ''}
                </span>
                <ul>
                    {this.state.jokes.map(joke => (<li key={joke.id}>{joke}</li>))}
                </ul>
            </div>
        )
    };

    componentDidMount() {
        this.fetchJokes();
    };

    fetchJokes() {
        const token = localStorage.getItem('jwt');
        const endpoint = 'http://localhost:3300/api/jokes';
        const options = {
            headers: {
                Authorization: token
            }
        };

        axios.get(endpoint, options).then(res => {
            console.log(res);
        }).catch(err => {
            this.setState({ isError: true });
        })
    }
};

export default Jokes;