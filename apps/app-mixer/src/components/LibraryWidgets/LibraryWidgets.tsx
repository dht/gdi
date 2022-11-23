import React, { useMemo } from 'react';
import { Container } from './LibraryWidgets.style';
import { WidgetGallery } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

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
    const crudDefinitions = useCrudDefinitions('widget');

    return (
        <Container
            className='LibraryWidgets-container'
            data-testid='LibraryWidgets-container'
        >
            <WidgetGallery
                definitions={crudDefinitions}
                items={items}
                options={galleryOptions}
                callbacks={callbacks}
                hideParts={hideParts}
            />
        </Container>
    );
}

export default LibraryWidgets;
