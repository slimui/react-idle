import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress, Card, Segment, Image } from 'semantic-ui-react';
import Styled from 'styled-components';
import islandOne from '../images/island1.jpg';

const CardContainer = Styled(Card)`
    margin-top: 2rem;
    text-align: center;
    width: 50% !important;
    margin: 0 auto !important;
`;

class CurrentIsland extends Component {
    render() {
        const { island } = this.props;
        return (
            <CardContainer>
                <Segment inverted compact textAlign="center">
                    {/* <Image fluid src={require('../images/island' + island + '.jpg')} /> */}
                    <Image fluid src={islandOne} />
                </Segment>
            </CardContainer>
        );
    }
}

const mapStateToProps = state => ({
    island: state.counter.islandProgress
});

export default connect(mapStateToProps)(CurrentIsland);
