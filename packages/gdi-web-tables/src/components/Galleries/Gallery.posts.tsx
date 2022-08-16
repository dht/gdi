import React from 'react';
import { Container } from './styles';

export type PostGalleryProps = {};

export function PostGallery(_props: PostGalleryProps) {
    return (
        <Container
            className='PostGallery-container'
            data-testid='PostGallery-container'
        >
            PostGallery
        </Container>
    );
}

export default PostGallery;
