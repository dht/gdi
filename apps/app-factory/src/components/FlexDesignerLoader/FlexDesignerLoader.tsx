import React from 'react';
import { Wrapper } from './FlexDesignerLoader.style';

export type FlexDesignerLoaderProps = {};

export function FlexDesignerLoader(_props: FlexDesignerLoaderProps) {
    return (
        <Wrapper
            className='FlexDesignerLoader-wrapper'
            data-testid='FlexDesignerLoader-wrapper'
        >
            Loading...
        </Wrapper>
    );
}

export default FlexDesignerLoader;
