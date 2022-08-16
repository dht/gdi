import React from 'react';
import { Container } from './styles';

export type LayoutGalleryProps = {};

export function LayoutGallery(_props: LayoutGalleryProps) {
    return (
        <Container
            className='LayoutGallery-container'
            data-testid='LayoutGallery-container'
        >
            LayoutGallery
        </Container>
    );
}

export default LayoutGallery;
