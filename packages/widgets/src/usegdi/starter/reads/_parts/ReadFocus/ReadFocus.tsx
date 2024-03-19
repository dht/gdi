import React from 'react';
import { Wrapper } from './ReadFocus.style';

export type ReadFocusProps = {};

export function ReadFocus(_props: ReadFocusProps) {
    return (
        <Wrapper className="ReadFocus-wrapper" data-testid="ReadFocus-wrapper">
            ReadFocus
        </Wrapper>
    );
}

export default ReadFocus;
