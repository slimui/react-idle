import React from 'react';
import { Col, Row } from 'antd';
import Styled from 'styled-components';

import Counter from './Counter';
import Loot from './Components/Loot';

const GameContainer = Styled.div`
    padding: 50px;
    background: #fff;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
`;

export default function Game() {
    return(
        <GameContainer>
            <Row>
                <Col >
                    <Counter />
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Loot />
                </Col>
            </Row>
        </GameContainer>
    );
};