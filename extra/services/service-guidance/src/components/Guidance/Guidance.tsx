import React from 'react';
import { Wrapper } from './Guidance.style';

export type GuidanceProps = {};

export function Guidance(_props: GuidanceProps) {
    return (
        <Wrapper className="Guidance-wrapper" data-testid="Guidance-wrapper">
            Guidance
        </Wrapper>
    );
}

export default Guidance;
