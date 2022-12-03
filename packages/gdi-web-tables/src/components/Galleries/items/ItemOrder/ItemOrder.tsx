import React from 'react';
import { Wrapper } from './ItemOrder.style';

export type ItemOrderProps = {};

export function ItemOrder(_props: ItemOrderProps) {
    return (
        <Wrapper className='ItemOrder-wrapper' data-testid='ItemOrder-wrapper'>
            ItemOrder
        </Wrapper>
    );
}

export default ItemOrder;
