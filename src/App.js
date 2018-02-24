import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import Nav from './Nav.js';
import Game from './Game.js';
import FooterContent from './FooterContent';

// const { Header, Content, Footer } = Layout;

// export function increment(deltaTime) {
//     return function update(state) {
//         return {
//             value: state.value + deltaTime / 1000
//         };
//     };
// }

class App extends Component {
    render() {
        return (
            <div>
                <Segment basic vertical inverted color="grey" style={{ height: '100%', paddingTop: '0' }}>
                    <Nav />

                    <Game />

                    <FooterContent />
                </Segment>
            </div>
        );
    }
}

export default App;
