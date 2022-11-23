import React from 'react';
import { Container } from './Logo.style';

export type LogoProps = {};

export function Logo(_props: LogoProps) {
    return (
        <Container className="Logo-container" data-testid="Logo-container">
            Logo
        </Container>
    );
}

export default Logo;
