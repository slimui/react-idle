import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Segment, Card } from 'semantic-ui-react';
import Styled from 'styled-components';
import { startIsland } from '../actions';

const CardContainer = Styled(Card)`
    margin-top: 2rem;
    text-align: center;
`;

class InteractionMenu extends Component {
    render() {
        console.log(this.props.searching);
        return (
            <CardContainer>
                <Segment inverted>
                    <Button onClick={this.props.startIsland} disabled={this.props.searching}>Search</Button>
                </Segment>
            </CardContainer>
        );
    }
}

const mapStateToProps = state => ({
    searching: state.counter.searchingIsland
});

export default connect(mapStateToProps, { startIsland })(InteractionMenu);
