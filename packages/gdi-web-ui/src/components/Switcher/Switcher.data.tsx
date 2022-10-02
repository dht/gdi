import React from 'react';
import { Container } from './Switcher.style';

export type SwitcherProps = {};

export function Switcher(_props: SwitcherProps) {
    return (
        <Container className="Switcher-container" data-testid="Switcher-container">
            Switcher
        </Container>
    );
}

export default Switcher;
