import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    count: state.counter.count,
    valuePerSecond: state.counter.valuePerSecond
});

class Counter extends Component {
    render() {
        const {count, valuePerSecond} = this.props;
        let formattedCount = count.toFixed(5);

        let stores = {
            count: 1,
            value: 1
        }
        let factories = {
            count: 1,
            value: 1
        };
        let balls = 0;

        let calculateProgress = function(time) {

            let tickDuration = 1000/60;
            let ticks = time/tickDuration;
            console.log("ticks:", ticks, "tick duration:", tickDuration);

            let calculation = 0;
            let storeCount = stores.count;
            let factoriesCount = factories.count;
            let storeProduction = stores.value;
            let factoryProduction = factories.value;

            for(let i = 0; i < ticks; i++) {
                storeCount += (factoriesCount * factoryProduction) * (tickDuration/1000);
                calculation += (storeCount * storeProduction) * (tickDuration/1000);
            }

            return calculation;
        };

        balls = calculateProgress(2000);


        return (
            <div>
                <h1>Counter: {formattedCount}</h1>
                <h2>Increase Per Second: {valuePerSecond}</h2>
                <h3>Balls: {balls}</h3>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);