import React from 'react';
import Styled from 'styled-components';

const FooterContainer = Styled.div`
    text-align: center;
`;

export default function FooterContent() {
    return(
        <FooterContainer>
            A game by Sonicrida
        </FooterContainer>
    );
};