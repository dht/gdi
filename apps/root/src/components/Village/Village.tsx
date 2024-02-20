import React from 'react';
import { Wrapper } from './Village.style';

export type VillageProps = {};

export function Village(_props: VillageProps) {
    return (
        <Wrapper className="Village-wrapper" data-testid="Village-wrapper">
            Village
        </Wrapper>
    );
}

export default Village;
