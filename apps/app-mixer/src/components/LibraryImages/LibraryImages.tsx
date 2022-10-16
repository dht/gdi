import React, { useMemo } from 'react';
import { Container } from './LibraryImages.style';
import { ImageGallery } from '@gdi/web-ui';

export type LibraryImagesProps = {
    items: IImage[];
    galleryOptions: IGalleryOptions;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    hideParts?: FilterPart[];
};

export function LibraryImages(props: LibraryImagesProps) {
    const { items, galleryOptions, callbacks, hideParts } = props;

    return (
        <Container
            className='LibraryImages-container'
            data-testid='LibraryImages-container'
        >
            <ImageGallery
                header='Images'
                items={items}
                options={galleryOptions}
                callbacks={callbacks}
                hideParts={hideParts}
            />
        </Container>
    );
}

export default LibraryImages;
