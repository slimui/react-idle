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
                Counter: {formattedCount}
                <br/> 
                Increase Per Second: {valuePerSecond}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);