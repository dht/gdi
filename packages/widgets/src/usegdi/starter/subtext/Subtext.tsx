import React from 'react';
import { Wrapper } from './Subtext.style';

export type SubtextProps = {};

export function Subtext(_props: SubtextProps) {
    return (
        <Wrapper className="Subtext-wrapper" data-testid="Subtext-wrapper">
            Subtext
        </Wrapper>
    );
}

export default Subtext;
