import React from 'react';
import bytes from 'bytes';
import { Container, Size } from './StoreSize.style';

export type StoreSizeProps = {
    sizeInBytes: number;
};

export function StoreSize(props: StoreSizeProps) {
    const { sizeInBytes } = props;

    return (
        <Container
            className='StoreSize-container'
            data-testid='StoreSize-container'
        >
            The store size is:
            <Size>{bytes(sizeInBytes)}</Size>
        </Container>
    );
}

export default StoreSize;
