import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';

import Nav from './Nav.js';
import Game from './Game.js';
import FooterContent from './FooterContent';

const { Header, Content, Footer } = Layout;


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
            <Layout>
                <Header>
                    <Nav />
                </Header>
                <Content>
                    <Game />
                </Content>
                <Footer>
                    <FooterContent />
                </Footer>
            </Layout>
        );
    }
}

export default App;
