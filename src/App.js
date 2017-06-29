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
    render() {
        return (
            <div className="App">
                <SampleComponent />
            </div>
        );
    }
}

export default App;
