import React from 'react';
import { Container } from './FlexDesigner.style';

export type FlexDesignerProps = {};

export function FlexDesigner(_props: FlexDesignerProps) {
    return (
        <Container
            className='FlexDesigner-container'
            data-testid='FlexDesigner-container'
        >
            FlexDesigner
        </Container>
    );
}

type Flex = {};

export default FlexDesigner;
