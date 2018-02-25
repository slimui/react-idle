import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

class InteractionMenu extends Component {
    render() {
        console.log(this.props.searching);
        return (
            <div>
                <Button disabled={this.props.searching}>Start</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    searching: state.counter.searchingIsland
});

export default connect(mapStateToProps)(InteractionMenu);
