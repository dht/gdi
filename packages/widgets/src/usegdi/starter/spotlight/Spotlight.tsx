import React from 'react';
import { Wrapper } from './Spotlight.style';

export type SpotlightProps = {};

export function Spotlight(_props: SpotlightProps) {
    return (
        <Wrapper className="Spotlight-wrapper" data-testid="Spotlight-wrapper">
            Spotlight
        </Wrapper>
    );
}

export default Spotlight;
