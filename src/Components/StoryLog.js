import React, { Component } from 'react';
import { Card, Segment, Feed } from 'semantic-ui-react';
import Styled from 'styled-components';

const chapterOne = ['Hmm......', 'I have to get out of sight'];

const CardContainer = Styled(Card)`
    margin-top: 2rem;
    text-align: center;
`;

const StyledFeed = Styled(Feed)`
    // color: white;
`;

class StoryLog extends Component {
    state = { lineNumber: 0 };

    renderNext = () => {
        if (this.state.lineNumber !== chapterOne.length) {
            this.setState({ lineNumber: this.state.lineNumber + 1 });
        }
    };

    render() {
        console.log(this.state);
        return (
            <CardContainer fluid onClick={this.renderNext}>
                <Segment inverted>
                    <h1>The Story So Far....</h1>

                    <StyledFeed size="large">
                        {chapterOne.map((textLine, index) => (
                            <Feed.Event key={index}>
                                <Feed.Content>- {textLine}</Feed.Content>
                            </Feed.Event>
                        ))}
                    </StyledFeed>
                </Segment>
            </CardContainer>
        );
    }
}

export default StoryLog;
