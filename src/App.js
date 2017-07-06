import React, { Component } from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import Styled from 'styled-components';
import './App.css';

import Counter from './Counter';

//const SubMenu = Menu.SubMenu;
const { Header, Content, Footer } = Layout;

const FooterContainer = Styled.div`
    text-align: center;
`;

const GameContainer = Styled.div`
    padding: 50px;
    background: #fff;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
`;

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
                    <Menu
                        mode="horizontal"
                        theme="dark"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Home</Menu.Item>
                        <Menu.Item key="2">About</Menu.Item>
                        <Menu.Item key="3">Options</Menu.Item>
                    </Menu>
                </Header>
                <Content>
                    <GameContainer>
                        <Row>
                            <Col span={12} offset={6}>
                                <Counter />
                            </Col>
                        </Row>
                    </GameContainer>
                </Content>
                <Footer>
                    <FooterContainer>
                        A game by Sonicrida
                    </FooterContainer>
                </Footer>
            </Layout>
        );
    }
}

export default App;
