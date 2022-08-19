import React from 'react';
import { Container } from './Gallery.style';
import { ImageGallery } from '@gdi/image-gallery';

export type GalleryProps = {
    callbacks: {
        onSearch: (q: string) => void;
        onUploadImage: (file: File) => void;
        onDeleteImage: (id: string) => void;
        onAddTagToImage: (id: string, tag: string) => void;
        onRemoveTagFromImage: (id: string, tag: string) => void;
    };
};

export function Gallery(_props: GalleryProps) {
    return (
        <Container
            className='Gallery-container'
            data-testid='Gallery-container'
        >
            <Container
                className='ImageGallery-container'
                data-testid='ImageGallery-container'
            >
                <ImageGallery columns={4} />
            </Container>
        </Container>
    );
}

export default Gallery;
