import React from 'react';
import { Wrapper } from './Switcher.style';

export type SwitcherProps = {};

export function Switcher(_props: SwitcherProps) {
    return (
        <Wrapper className='Switcher-wrapper' data-testid='Switcher-wrapper'>
            Switcher
        </Wrapper>
    );
}

export default Switcher;
