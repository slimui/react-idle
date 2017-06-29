import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    data: state.counter.count
});

class SampleComponent extends Component {
    render() {
        const {data} = this.props;
        let count = data.toFixed(5);

        return (
            <div>
                Data from Redux: {count}
            </div>
        );
    }
}

export default connect(mapStateToProps)(SampleComponent);