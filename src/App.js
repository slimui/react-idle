import React, { Component } from 'react';
import { Layout, Menu, Col, Row } from 'antd';
import './App.css';

import Counter from './Counter';

const SubMenu = Menu.SubMenu;
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
            // {/*<div className="App">
            //         <h1 className="App-header">React Idle</h1>
            //     <Menu
            //         mode="vertical"
            //         theme="dark"
            //     >
            //         <Menu.Item key="1">Home</Menu.Item>
            //     </Menu>
            //     <Counter />
        // </div>*/}
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
                 </Menu>
            </Header>
            <Content>
                <div style={{background: '#fff', textAlign: 'center'}}>
                    <Row>
                        <Col span={12} offset={6}>
                            <Counter />
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
        );
    }
}

export default App;
