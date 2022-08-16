import React from 'react';
import { Container } from './FlexDesignerLoader.style';

export type FlexDesignerLoaderProps = {};

export function FlexDesignerLoader(_props: FlexDesignerLoaderProps) {
    return (
        <Container
            className='FlexDesignerLoader-container'
            data-testid='FlexDesignerLoader-container'
        >
            Loading...
        </Container>
    );
}

export default FlexDesignerLoader;
