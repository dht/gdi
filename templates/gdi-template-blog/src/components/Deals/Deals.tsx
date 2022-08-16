import React from 'react';
import { Container } from './Deals.style';

export type DealsProps = {};

export function Deals(_props: DealsProps) {
    return (
        <Container className='Deals-container' data-testid='Deals-container'>
            Deals
        </Container>
    );
}

export default Deals;
