import React from 'react';
import { Container } from './UnoBreadcrumbs.style';

export type UnoBreadcrumbsProps = {};

export function UnoBreadcrumbs(_props: UnoBreadcrumbsProps) {
    return (
        <Container className="UnoBreadcrumbs-container" data-testid="UnoBreadcrumbs-container">
            UnoBreadcrumbs
        </Container>
    );
}

export default UnoBreadcrumbs;
