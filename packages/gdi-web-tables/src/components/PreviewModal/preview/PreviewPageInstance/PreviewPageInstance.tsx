import React from 'react';
import { Wrapper } from './PreviewPageInstance.style';

export type PreviewPageInstanceProps = {};

export function PreviewPageInstance(_props: PreviewPageInstanceProps) {
    return (
        <Wrapper
            className='PreviewPageInstance-wrapper'
            data-testid='PreviewPageInstance-wrapper'
        >
            PreviewPageInstance
        </Wrapper>
    );
}

export default PreviewPageInstance;
