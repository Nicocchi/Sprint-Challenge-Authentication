import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import JokesList from './components/jokes/JokesList';

import './App.css';

const Home = props => {
  return (
      <div>
        <h1>Home Component</h1>
      </div>
  )
}

class App extends Component {
    state = {
        loggedIn: false,
    };

    setLogin = () => {
        this.setState({ loggedIn: !this.state.loggedIn });
        this.forceUpdate();
    }

  render() {
    return (
      <div className="App">
          <header>
              <Navigation {...this.props} loggedIn={this.state.loggedIn} setLogin={this.setLogin} />
          </header>
        <main>
            <Route exact path="/" component={Home} />
            <Route path="/jokes" render={props => <JokesList {...props} />} />
            <Route path="/login" render={props => <Login {...props} setLogin={this.setLogin} />} />
            <Route path="/register" render={props => <Register {...props} setLogin={this.setLogin}  />} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
