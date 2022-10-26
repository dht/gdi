import React from 'react';
import { Container } from './Logo.style';
import logo from './LogoSchedule.svg';

export type LogoProps = {};

export function Logo(_props: LogoProps) {
    return (
        <Container className='Logo-container' data-testid='Logo-container'>
            <img src={logo} alt='Logo' />
        </Container>
    );
}

export default Logo;
