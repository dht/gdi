import React from 'react';
import { Container } from './styles';

export type EventGalleryProps = {};

export function EventGallery(_props: EventGalleryProps) {
    return (
        <Container
            className='EventGallery-container'
            data-testid='EventGallery-container'
        >
            EventGallery
        </Container>
    );
}

export default EventGallery;
