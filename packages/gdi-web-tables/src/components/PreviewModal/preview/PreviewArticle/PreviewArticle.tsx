import React from 'react';
import { Wrapper } from './PreviewArticle.style';

export type PreviewArticleProps = {};

export function PreviewArticle(_props: PreviewArticleProps) {
    return (
        <Wrapper
            className='PreviewArticle-wrapper'
            data-testid='PreviewArticle-wrapper'
        >
            PreviewArticle
        </Wrapper>
    );
}

export default PreviewArticle;
