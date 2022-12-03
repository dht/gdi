import React from 'react';
import { Wrapper } from './ItemProduct.style';

export type ItemProductProps = {};

export function ItemProduct(_props: ItemProductProps) {
    return (
        <Wrapper
            className='ItemProduct-wrapper'
            data-testid='ItemProduct-wrapper'
        >
            ItemProduct
        </Wrapper>
    );
}

export default ItemProduct;
