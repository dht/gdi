import React from 'react';
import { Wrapper } from './BlkrBar.style';

export type BlkrBarProps = {};

export function BlkrBar(_props: BlkrBarProps) {
    return (
        <Wrapper className="BlkrBar-wrapper" data-testid="BlkrBar-wrapper">
            BlkrBar
        </Wrapper>
    );
}

export default BlkrBar;
