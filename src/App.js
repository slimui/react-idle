import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function increment(state, props) {
  return {
    value: state.value + 1
  };
}

class App extends Component {

  state = { value: 0};

  componentWillMount() {
    if(this.state.value === 0) {
      setInterval(this.timer, 1000);
    }
  }

  timer = ()  => {
    this.setState(increment);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.value}
        </p>
      </div>
    );
  }
}

export default App;
