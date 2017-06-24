import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function increment(state, props) {
  return {
    value: state.value + 1/60
  };
}

class App extends Component {

  state = { value: 0};

  componentWillMount() {
    
      setInterval(this.timer, 1000/60);
    
  }

  timer = ()  => {
    this.setState(increment);
  }

  render() {

    let count = this.state.value.toFixed(1);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {count}
        </p>
      </div>
    );
  }
}

export default App;
