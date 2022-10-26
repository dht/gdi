import React from 'react';
import { Container } from './Logo.style';
import { GliLogo } from '@gdi/web-ui';

export type LogoProps = {};

export function Logo(_props: LogoProps) {
    return (
        <Container className='Logo-container' data-testid='Logo-container'>
            <GliLogo text='' animated />
        </Container>
    );
}

export default Logo;
