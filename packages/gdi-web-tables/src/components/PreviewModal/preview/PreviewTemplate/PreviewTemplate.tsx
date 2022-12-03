import React from 'react';
import { Wrapper } from './PreviewTemplate.style';

export type PreviewTemplateProps = {};

export function PreviewTemplate(_props: PreviewTemplateProps) {
    return (
        <Wrapper
            className='PreviewTemplate-wrapper'
            data-testid='PreviewTemplate-wrapper'
        >
            PreviewTemplate
        </Wrapper>
    );
}

export default PreviewTemplate;
