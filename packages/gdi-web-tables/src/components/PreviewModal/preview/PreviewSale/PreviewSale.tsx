import React from 'react';
import { Wrapper } from './PreviewSale.style';

export type PreviewSaleProps = {};

export function PreviewSale(_props: PreviewSaleProps) {
    return (
        <Wrapper
            className='PreviewSale-wrapper'
            data-testid='PreviewSale-wrapper'
        >
            PreviewSale
        </Wrapper>
    );
}

export default PreviewSale;
