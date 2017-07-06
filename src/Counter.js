import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress } from 'antd';

import islands from './data/islands.js';

const mapStateToProps = state => ({
    count: state.counter.count,
    valuePerSecond: state.counter.valuePerSecond,
    island: state.counter.islandProgress
});

class Counter extends Component {
    render() {
        const {count, valuePerSecond, island} = this.props;
        let formattedCount = count.toFixed(5);
        let islandLives = islands.islands[island - 1].lives;
        let remainingLives = islandLives - formattedCount;
        let formattedLives = remainingLives.toFixed();
        let progress = count / islandLives;

        return (
            <div>
                <h1>Counter: {formattedCount}</h1>
                <h2>Increase Per Second: {valuePerSecond}</h2>
                <h3>Island Number: {island}</h3>
                <h4>Lives: {formattedLives} <Progress percent={progress * 100}/></h4>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);