import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class App extends Component {

  constructor(props) {
    super(props);
    // set state
    this.state = {
      greeting: 'loading...'
    };
  }

  componentDidMount() {
    // call the server after a short delay
    setTimeout(() => {
      // hit the example API
      axios.get(`/api/example`)
        .then(response => {
          let greeting = response.data.greeting;
          this.setState({ greeting });
        });
    }, 1000);

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Check it out</h1>
        </header>
        <p className="App-intro">
          {this.state.greeting}
        </p>
      </div>
    );
  }
}

export default App;
