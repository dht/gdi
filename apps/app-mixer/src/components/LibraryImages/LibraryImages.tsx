import React from 'react';
import { Container } from './LibraryImages.style';
import { IImage, ImageGallery } from '@gdi/web-ui';

export type LibraryImagesProps = {
    items: IImage[];
    callbacks: {
        onGalleryItemAction: OnGalleryItemAction;
        onGalleryAction: OnGalleryAction;
    };
};

export function LibraryImages(props: LibraryImagesProps) {
    const { items, callbacks } = props;

    const options: IGalleryOptions = {
        selectionMode: 'browse',
        doubleClickAction: 'edit',
    };

    return (
        <Container
            className='LibraryImages-container'
            data-testid='LibraryImages-container'
        >
            <ImageGallery
                items={items}
                options={options}
                onAction={callbacks.onGalleryAction}
                onItemAction={callbacks.onGalleryItemAction}
            />
        </Container>
    );
}

export default LibraryImages;
