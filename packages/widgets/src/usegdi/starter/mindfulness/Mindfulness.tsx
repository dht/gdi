import React from 'react';
import { Wrapper } from './Mindfulness.style';

export type MindfulnessProps = {};

export function Mindfulness(_props: MindfulnessProps) {
    return (
        <Wrapper className="Mindfulness-wrapper" data-testid="Mindfulness-wrapper">
            Mindfulness
        </Wrapper>
    );
}

export default Mindfulness;
