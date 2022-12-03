import React from 'react';
import { Wrapper } from './PreviewLayout.style';

export type PreviewLayoutProps = {};

export function PreviewLayout(_props: PreviewLayoutProps) {
    return (
        <Wrapper
            className='PreviewLayout-wrapper'
            data-testid='PreviewLayout-wrapper'
        >
            PreviewLayout
        </Wrapper>
    );
}

export default PreviewLayout;
