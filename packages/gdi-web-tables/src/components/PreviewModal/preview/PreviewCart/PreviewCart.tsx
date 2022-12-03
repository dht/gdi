import React from 'react';
import { Wrapper } from './PreviewCart.style';

export type PreviewCartProps = {};

export function PreviewCart(_props: PreviewCartProps) {
    return (
        <Wrapper
            className='PreviewCart-wrapper'
            data-testid='PreviewCart-wrapper'
        >
            PreviewCart
        </Wrapper>
    );
}

export default PreviewCart;
