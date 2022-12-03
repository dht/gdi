import React from 'react';
import { Wrapper } from './PreviewOrder.style';

export type PreviewOrderProps = {};

export function PreviewOrder(_props: PreviewOrderProps) {
    return (
        <Wrapper
            className='PreviewOrder-wrapper'
            data-testid='PreviewOrder-wrapper'
        >
            PreviewOrder
        </Wrapper>
    );
}

export default PreviewOrder;
