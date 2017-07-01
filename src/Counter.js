import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    count: state.counter.count
});

class Counter extends Component {
    render() {
        const {count} = this.props;
        let formattedCount = count.toFixed(5);

        return (
            <div>
                Data from Redux: {formattedCount}
            </div>
        );
    }
}

export default connect(mapStateToProps)(Counter);