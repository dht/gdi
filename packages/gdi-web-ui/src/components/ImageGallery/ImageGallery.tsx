import React from 'react';
import Masonry from '../Masonry/Masonry';
import { Container } from './ImageGallery.style';

export type ImageGalleryProps = {};

export function ImageGallery(_props: ImageGalleryProps) {
    return (
        <Container
            className='ImageGallery-container'
            data-testid='ImageGallery-container'
        >
            <Masonry columns={2} />
        </Container>
    );
}

export default ImageGallery;
