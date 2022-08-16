import React from 'react';
import { Container } from './styles';

export type WidgetGalleryProps = {};

export function WidgetGallery(_props: WidgetGalleryProps) {
    return (
        <Container
            className='WidgetGallery-container'
            data-testid='WidgetGallery-container'
        >
            WidgetGallery
        </Container>
    );
}

export default WidgetGallery;
