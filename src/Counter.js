import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Progress, Card } from 'antd';
import { Progress, Card, Segment } from 'semantic-ui-react';
import Styled from 'styled-components';

import islands from './data/islands.js';

const StyledCard = Styled.div`
    text-align: center;
`;

const mapStateToProps = state => ({
    count: state.counter.count,
    valuePerSecond: state.counter.valuePerSecond,
    island: state.counter.islandProgress
});

class Counter extends Component {
    render() {
        const { count, valuePerSecond, island } = this.props;
        let formattedCount = Math.trunc(count);
        let islandLives = islands.islands[island - 1].lives;
        let remainingLives = islandLives - formattedCount;
        let formattedLives = remainingLives.toFixed();
        let progress = count / islandLives;

        return (
            <Card fluid>
                <Segment inverted>
                    <StyledCard>
                        <h1>Score: {formattedCount}</h1>
                        <h2>Damage Per Second: {valuePerSecond}</h2>
                        <h3>Island Number: {island}</h3>
                        <h4>
                            Lives: {formattedLives}{' '}
                            {/* <Progress percent={progress * 100} status="active" format={percent => `${Math.trunc(percent)}%`} strokeWidth={20} /> */}
                        </h4>
                    </StyledCard>
                </Segment>
            </Card>
        );
    }
}

export default connect(mapStateToProps)(Counter);
