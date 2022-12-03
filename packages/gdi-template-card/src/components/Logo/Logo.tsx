import React from 'react';
import { Wrapper } from './Logo.style';

export type LogoProps = {};

export function Logo(_props: LogoProps) {
    return (
        <Wrapper className='Logo-wrapper' data-testid='Logo-wrapper'>
            Logo
        </Wrapper>
    );
}

export default Logo;
