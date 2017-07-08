import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress, Card } from 'antd';
import Styled from 'styled-components';

const CardContainer = Styled.div`
    margin-top: 2rem;
    text-align: center;
`;

const mapStateToProps = state => ({
    loot: state.counter.loot,
    lootSpeed: state.counter.lootSpeed
});

class Loot extends Component {
    render() {
        const { loot, lootSpeed } = this.props;
        const formattedLoot = Math.trunc(loot);
        const progress = loot % 1;

        return (
            <CardContainer>
                <Card>
                    <h1>Loot: {formattedLoot}</h1>
                    <Progress percent={progress * 100} showInfo={false} />
                    <h2>Loot per second: {lootSpeed}</h2>
                </Card>
            </CardContainer>
        );
    }
}

export default connect(mapStateToProps)(Loot);