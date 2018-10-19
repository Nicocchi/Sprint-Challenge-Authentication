import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Navigation from './components/navigation/Navigation';

import './App.css';

const Home = props => {
  return (
      <div>
        <h1>Home Component</h1>
      </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
          <header>
              <Navigation {...this.props} />
          </header>
        <main>
            <Route exact path="/" component={Home} />
        </main>
      </div>
    );
  }
}

export default withRouter(App);
