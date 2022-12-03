import React from 'react';
import { Wrapper } from './PreviewProject.style';

export type PreviewProjectProps = {};

export function PreviewProject(_props: PreviewProjectProps) {
    return (
        <Wrapper
            className='PreviewProject-wrapper'
            data-testid='PreviewProject-wrapper'
        >
            PreviewProject
        </Wrapper>
    );
}

export default PreviewProject;
