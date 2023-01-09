import React from 'react';
import { Wrapper } from './BottomBar.style';

export type BottomBarProps = {};

export function BottomBar(_props: BottomBarProps) {
    return (
        <Wrapper className='BottomBar-wrapper' data-testid='BottomBar-wrapper'>
            BottomBar
        </Wrapper>
    );
}

export default BottomBar;
