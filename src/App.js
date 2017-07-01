import React, { Component } from 'react';
import {
    Header,
} from 'semantic-ui-react';

import './App.css';

import Counter from './Counter';

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
                <div className="App-header">
                    <Header inverted as="h1">React Idle</Header>
                </div>
                <Counter />
            </div>
        );
    }
}

export default App;
