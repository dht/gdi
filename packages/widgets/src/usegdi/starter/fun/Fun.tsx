import React from 'react';
import { Wrapper } from './Fun.style';

export type FunProps = {};

export function Fun(_props: FunProps) {
    return (
        <Wrapper className="Fun-wrapper" data-testid="Fun-wrapper">
            Fun
        </Wrapper>
    );
}

export default Fun;
