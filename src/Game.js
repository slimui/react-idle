import React from 'react';
import Styled from 'styled-components';
import { Grid } from 'semantic-ui-react';

import Counter from './Counter';
import Loot from './Components/Loot';
import InteractionMenu from './Components/InteractionMenu';
import StoryLog from './Components/StoryLog';
import CurrentIsland from './Components/CurrentIsland';

const GameContainer = Styled.div`
    padding: 50px;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
`;

export default function Game() {
    return (
        <GameContainer>
            <Grid columns="equal">
                <Grid.Row>
                    <Grid.Column>
                        <CurrentIsland />
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Counter />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Loot />
                    </Grid.Column>
                    <Grid.Column>
                        <InteractionMenu />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <StoryLog />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </GameContainer>
    );
}
