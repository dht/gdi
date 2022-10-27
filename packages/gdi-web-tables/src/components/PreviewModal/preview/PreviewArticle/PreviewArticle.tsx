import React from 'react';
import { Container } from './PreviewArticle.style';

export type PreviewArticleProps = {};

export function PreviewArticle(_props: PreviewArticleProps) {
    return (
        <Container className="PreviewArticle-container" data-testid="PreviewArticle-container">
            PreviewArticle
        </Container>
    );
}

export default PreviewArticle;
