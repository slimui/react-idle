import React, { Component } from 'react';
import './App.css';

import SampleComponent from './SampleComponent';

export function increment(deltaTime) {
    return function update(state) {
        return {
            value: state.value + deltaTime/1000
        };
    };
}

class App extends Component {

    state = { 
        value: 0,
     };

     frameRate = 60; // How many frames the game should attempt to render at
     lastUpdateTime = Date.now(); 
     currentTime;
     deltaTime;

    componentWillMount() {
        this.gameLoop(); // Start the game loop
    }

    gameLoop = () => {
        this.currentTime = Date.now();
        this.deltaTime = this.currentTime - this.lastUpdateTime;
        this.lastUpdateTime = this.currentTime;
        this.setState(increment(this.deltaTime));
        setTimeout(this.gameLoop, 1000/this.frameRate);
    }

    render() {
        let count = this.state.value.toFixed(1);
        return (
            <div className="App">
                {count}
                <SampleComponent />
            </div>
        );
    }
}

export default App;
