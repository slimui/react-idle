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
        
        return (
            <div>
                <h1>Counter: {formattedCount}</h1>
                <h2>Increase Per Second: {valuePerSecond}</h2>
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);