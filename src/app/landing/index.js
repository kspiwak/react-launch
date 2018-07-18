import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a simple site</h1>
        </header>
        <p className="App-intro">
          Check out the <Link to="/example">Example Page</Link>
        </p>
      </div>
    );
  }
}

export default App;
