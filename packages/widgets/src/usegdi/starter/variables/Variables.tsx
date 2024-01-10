import React from 'react';
import { Wrapper } from './Variables.style';

export type VariablesProps = {};

export function Variables(_props: VariablesProps) {
    return (
        <Wrapper className="Variables-wrapper" data-testid="Variables-wrapper">
            Variables
        </Wrapper>
    );
}

export default Variables;
