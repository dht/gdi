import React from 'react';
import { Container } from './LibraryWidgets.style';
import { WidgetGallery } from '@gdi/web-ui';

export type LibraryWidgetsProps = {
    items: IImageWithWidget[];
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
    };
};

export function LibraryWidgets(props: LibraryWidgetsProps) {
    const { items, callbacks } = props;

    const options: IGalleryOptions = {
        columns: 3,
        selectionMode: 'browse',
        hideOverlay: true,
    };

    return (
        <Container
            className='LibraryWidgets-container'
            data-testid='LibraryWidgets-container'
        >
            <WidgetGallery
                items={items}
                options={options}
                callbacks={callbacks}
            />
        </Container>
    );
}

export default LibraryWidgets;
