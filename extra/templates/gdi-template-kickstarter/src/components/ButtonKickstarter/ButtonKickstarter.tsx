import React from 'react';
import { Wrapper } from './ButtonKickstarter.style';

export type ButtonKickstarterProps = {};

export function ButtonKickstarter(_props: ButtonKickstarterProps) {
    return (
        <Wrapper
            className='ButtonKickstarter-wrapper'
            data-testid='ButtonKickstarter-wrapper'
        >
            ButtonKickstarter
        </Wrapper>
    );
}

export default ButtonKickstarter;
