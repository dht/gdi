import React from 'react';
import { Container } from './Tabs.style';

export type TabsProps = {};

export function Tabs(_props: TabsProps) {
    return (
        <Container className="Tabs-container" data-testid="Tabs-container">
            Tabs
        </Container>
    );
}

export default Tabs;
