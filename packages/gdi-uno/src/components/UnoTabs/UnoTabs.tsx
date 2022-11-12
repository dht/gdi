import React from 'react';
import { Container } from './UnoTabs.style';

export type UnoTabsProps = {};

export function UnoTabs(_props: UnoTabsProps) {
    return (
        <Container className="UnoTabs-container" data-testid="UnoTabs-container">
            UnoTabs
        </Container>
    );
}

export default UnoTabs;
