import React from 'react';
import Styled from 'styled-components';

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
            <CurrentIsland />
            <Counter />
            <Loot />
            <InteractionMenu />
            <StoryLog />
        </GameContainer>
    );
}
