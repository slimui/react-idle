import React, { Component } from 'react';
import { Layout } from 'antd';
import { Container, Segment, Header, Menu, Button, Icon } from 'semantic-ui-react';

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
            // <Layout>
            //     <Header>
            //         <Nav />
            //     </Header>
            //     <Content>
            //         <Game />
            //     </Content>
            //     <Footer>
            //         <FooterContent />
            //     </Footer>
            // </Layout>
            <div>
                <Segment basic vertical inverted color="grey" style={{ height: '100vh', paddingTop: '0'}}>
                    <Nav />

                    <Game />

                    <FooterContent />
                </Segment>
            </div>
        );
    }
}

export default App;
