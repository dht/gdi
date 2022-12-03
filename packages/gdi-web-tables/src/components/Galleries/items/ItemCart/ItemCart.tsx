import React from 'react';
import { Wrapper } from './ItemCart.style';

export type ItemCartProps = {};

export function ItemCart(_props: ItemCartProps) {
    return (
        <Wrapper className='ItemCart-wrapper' data-testid='ItemCart-wrapper'>
            ItemCart
        </Wrapper>
    );
}

export default ItemCart;
