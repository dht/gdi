import React from 'react';
import { Wrapper } from './ItemPageInstance.style';

export type ItemPageInstanceProps = {};

export function ItemPageInstance(_props: ItemPageInstanceProps) {
    return (
        <Wrapper
            className='ItemPageInstance-wrapper'
            data-testid='ItemPageInstance-wrapper'
        >
            ItemPageInstance
        </Wrapper>
    );
}

export default ItemPageInstance;
