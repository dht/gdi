import React from 'react';
import { Container } from './styles';

export type PplGalleryProps = {};

export function PplGallery(_props: PplGalleryProps) {
    return (
        <Container
            className='PplGallery-container'
            data-testid='PplGallery-container'
        >
            PplGallery
        </Container>
    );
}

export default PplGallery;
