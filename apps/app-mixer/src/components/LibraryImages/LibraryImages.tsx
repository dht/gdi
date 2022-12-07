import React, { useMemo } from 'react';
import { Wrapper } from './LibraryImages.style';
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
        <Wrapper
            className='LibraryImages-wrapper'
            data-testid='LibraryImages-wrapper'
        >
            <ImageGallery
                items={items}
                options={galleryOptions}
                callbacks={callbacks}
                hideParts={hideParts}
            />
        </Wrapper>
    );
}

export default LibraryImages;
