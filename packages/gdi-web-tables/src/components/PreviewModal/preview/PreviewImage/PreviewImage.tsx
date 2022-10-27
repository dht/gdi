import React from 'react';
import { Container } from './PreviewImage.style';

export type PreviewImageProps = {};

export function PreviewImage(_props: PreviewImageProps) {
    return (
        <Container className="PreviewImage-container" data-testid="PreviewImage-container">
            PreviewImage
        </Container>
    );
}

export default PreviewImage;
