import React from 'react';
import { Container } from './CustomBlocks.style';

export type CustomBlocksProps = {};

export function CustomBlocks(_props: CustomBlocksProps) {
    return (
        <Container className="CustomBlocks-container" data-testid="CustomBlocks-container">
            CustomBlocks
        </Container>
    );
}

export default CustomBlocks;
