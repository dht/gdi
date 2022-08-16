import React from 'react';
import { Container, Breadcrumb, Line } from './Breadcrumbs.style';

export type BreadcrumbsProps = {};

export function Breadcrumbs(_props: BreadcrumbsProps) {
    return (
        <Container
            className='Breadcrumbs-container'
            data-testid='Breadcrumbs-container'
        >
            <Breadcrumb>Gaming</Breadcrumb>
            <Line />
            <Breadcrumb>Entertainment</Breadcrumb>
            <Line />
            <Breadcrumb>Tech</Breadcrumb>
            <Line />
        </Container>
    );
}

export default Breadcrumbs;
