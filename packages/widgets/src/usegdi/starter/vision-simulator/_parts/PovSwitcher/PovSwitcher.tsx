import React from 'react';
import { Wrapper } from './PovSwitcher.style';

export type PovSwitcherProps = {};

export function PovSwitcher(_props: PovSwitcherProps) {
    return (
        <Wrapper className="PovSwitcher-wrapper" data-testid="PovSwitcher-wrapper">
            PovSwitcher
        </Wrapper>
    );
}

export default PovSwitcher;
