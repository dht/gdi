import React from 'react';
import { Wrapper } from './GroundDivider.style';

export type GroundDividerProps = {};

export function GroundDivider(_props: GroundDividerProps) {
    return (
        <Wrapper
            className='GroundDivider-wrapper'
            data-testid='GroundDivider-wrapper'
        ></Wrapper>
    );
}

export default GroundDivider;
