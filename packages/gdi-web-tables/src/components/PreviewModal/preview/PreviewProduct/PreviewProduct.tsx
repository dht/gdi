import React from 'react';
import { Wrapper } from './PreviewProduct.style';

export type PreviewProductProps = {};

export function PreviewProduct(_props: PreviewProductProps) {
    return (
        <Wrapper
            className='PreviewProduct-wrapper'
            data-testid='PreviewProduct-wrapper'
        >
            PreviewProduct
        </Wrapper>
    );
}

export default PreviewProduct;
