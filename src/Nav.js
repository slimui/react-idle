import React from 'react';
import { Menu } from 'antd';

export default function Nav() {
    return(
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
    );
};