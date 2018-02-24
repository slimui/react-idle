import React, { Component } from 'react';
import { Card, Segment, Feed } from 'semantic-ui-react';
import Styled from 'styled-components';

const chapterOne = [
    'Hmm......',
    'I can barely see anything',
    'I saw tons of people being dropped out of planes but this island definitely cannot hold more than 20 people reasonably',
    'I have to find cover and get out of plain sight.',
    'No way can I afford to be spotted now'
];

const CardContainer = Styled(Card)`
    margin-top: 2rem;
    text-align: center;
`;

const StyledFeed = Styled(Feed)`
    background: #3f3a3a !important;
    border-radius: 10px;
    padding: 10px;
    height: 400px;
`;

const StyledSegment = Styled(Segment)`
    height: 500px;
    overflow-y: auto;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
`;

class StoryLog extends Component {
    state = { lineNumber: -1 };

    renderNext = () => {
        if (this.state.lineNumber !== chapterOne.length) {
            this.setState({ lineNumber: this.state.lineNumber + 1 });
        }
    };

    render() {
        let feedItems = chapterOne.map((textLine, index) => {
            if (index <= this.state.lineNumber)
                return (
                    <Feed.Event key={index}>
                        <Feed.Content>- {textLine}</Feed.Content>
                    </Feed.Event>
                );
        });

        return (
            <CardContainer fluid onClick={this.renderNext}>
                <StyledSegment inverted>
                    <h1>The Story So Far....</h1>

                    <StyledFeed size="large">{feedItems.reverse()}</StyledFeed>
                </StyledSegment>
            </CardContainer>
        );
    }
}

export default StoryLog;
