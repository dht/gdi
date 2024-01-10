import React from 'react';
import { Wrapper } from './Time.style';

export type TimeProps = {};

export function Time(_props: TimeProps) {
    return (
        <Wrapper className="Time-wrapper" data-testid="Time-wrapper">
            Time
        </Wrapper>
    );
}

export default Time;
