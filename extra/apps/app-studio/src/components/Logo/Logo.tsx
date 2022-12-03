import React from 'react';
import { Wrapper } from './Logo.style';
import { GliLogo } from '@gdi/web-ui';

export type LogoProps = {};

export function Logo(_props: LogoProps) {
    return (
        <Wrapper className='Logo-wrapper' data-testid='Logo-wrapper'>
            <GliLogo text='' animated />
        </Wrapper>
    );
}

export default Logo;
