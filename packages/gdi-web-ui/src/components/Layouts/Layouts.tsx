import React from 'react';
import { Wrapper } from './Layouts.style';

export type LayoutsProps = {};

export function Layouts(_props: LayoutsProps) {
    return (
        <Wrapper className='Layouts-wrapper' data-testid='Layouts-wrapper'>
            Layouts
        </Wrapper>
    );
}

export default Layouts;
