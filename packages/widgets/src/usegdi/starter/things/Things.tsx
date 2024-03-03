import React from 'react';
import { Wrapper } from './Things.style';

export type ThingsProps = {};

export function Things(_props: ThingsProps) {
    return (
        <Wrapper className="Things-wrapper" data-testid="Things-wrapper">
            Things
        </Wrapper>
    );
}

export default Things;
