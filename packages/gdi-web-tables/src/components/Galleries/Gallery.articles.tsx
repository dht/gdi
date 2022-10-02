import React from 'react';
import { Container } from './styles';

export type ArticleGalleryProps = {};

export function ArticleGallery(_props: ArticleGalleryProps) {
    return (
        <Container
            className='ArticleGallery-container'
            data-testid='ArticleGallery-container'
        >
            ArticleGallery
        </Container>
    );
}

export default ArticleGallery;
