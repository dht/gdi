import React, { useMemo } from 'react';
import { Container } from './LibraryImages.style';
import { ImageGallery } from '@gdi/web-ui';

export type LibraryImagesProps = {
    items: IImage[];
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
    };
};

export function LibraryImages(props: LibraryImagesProps) {
    const { items, callbacks } = props;

    const options: IGalleryOptions = {
        columns: 3,
        selectionMode: 'browse',
        hideOverlay: true,
    };

    return (
        <Container
            className='LibraryImages-container'
            data-testid='LibraryImages-container'
        >
            <ImageGallery
                items={items}
                options={options}
                callbacks={callbacks}
            />
        </Container>
    );
}

export default LibraryImages;
