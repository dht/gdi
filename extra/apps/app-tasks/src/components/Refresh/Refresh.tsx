import React from 'react';
import { Wrapper } from './Refresh.style';

export type RefreshProps = {};

export function Refresh(_props: RefreshProps) {
    return (
        <Wrapper className='Refresh-wrapper' data-testid='Refresh-wrapper'>
            Refresh
        </Wrapper>
    );
}

export default Refresh;
