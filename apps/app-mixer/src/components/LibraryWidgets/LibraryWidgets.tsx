import React, { useMemo } from 'react';
import { Container } from './LibraryWidgets.style';
import { WidgetGallery } from '@gdi/web-ui';

export type LibraryWidgetsProps = {
    items: IImageWithWidget[];
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    galleryOptions: IGalleryOptions;
    hideParts?: FilterPart[];
};

export function LibraryWidgets(props: LibraryWidgetsProps) {
    const { items, callbacks, galleryOptions, hideParts } = props;

    console.log('galleryOptions ->', galleryOptions);

    return (
        <Container
            className='LibraryWidgets-container'
            data-testid='LibraryWidgets-container'
        >
            <WidgetGallery
                items={items}
                options={galleryOptions}
                callbacks={callbacks}
                hideParts={hideParts}
            />
        </Container>
    );
}

export default LibraryWidgets;
