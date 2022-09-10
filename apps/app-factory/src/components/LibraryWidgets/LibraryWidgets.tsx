import React from 'react';
import { Container } from './LibraryWidgets.style';

export type LibraryWidgetsProps = {};

export function LibraryWidgets(_props: LibraryWidgetsProps) {
    return (
        <Container className="LibraryWidgets-container" data-testid="LibraryWidgets-container">
            LibraryWidgets
        </Container>
    );
}

export default LibraryWidgets;
