import React from 'react';
import Divider from '../Divider/Divider';
import { Container, Flex } from './BkGrid.style';

export type BkGridProps = {
    color1: string;
    color2: string;
    color3?: string;
    color4?: string;
};

export function BkGrid(props: BkGridProps) {
    const { color1, color2, color3, color4 } = props;

    return (
        <Container className='BkGrid-container' data-testid='BkGrid-container'>
            <Divider color1={color1} color2={color2} />
            <Flex />
            <Divider color1={color3 || color1} color2={color4 || color2} />
        </Container>
    );
}

export default BkGrid;
