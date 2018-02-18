import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Progress, Card } from 'antd';
import { Progress, Card, Segment } from 'semantic-ui-react';
import Styled from 'styled-components';

const CardContainer = Styled(Card)`
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
                <Segment inverted>
                    <h1>Loot: {formattedLoot}</h1>
                    <Progress percent={progress * 100} inverted color="blue" />
                    <h2>Loot per second: {lootSpeed}</h2>
                </Segment>
            </CardContainer>
        );
    }
}

export default connect(mapStateToProps)(Loot);
