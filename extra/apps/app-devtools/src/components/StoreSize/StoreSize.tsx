import React from 'react';
import bytes from 'bytes';
import { Wrapper, Size } from './StoreSize.style';

export type StoreSizeProps = {
    sizeInBytes: number;
};

export function StoreSize(props: StoreSizeProps) {
    const { sizeInBytes } = props;

    return (
        <Wrapper className='StoreSize-wrapper' data-testid='StoreSize-wrapper'>
            The store size is:
            <Size>{bytes(sizeInBytes)}</Size>
        </Wrapper>
    );
}

export default StoreSize;
