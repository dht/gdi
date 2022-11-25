import React from 'react';
import AllProviders from './AllProviders';
import AnyGallery from './Gallery.any';
import FilterBar from '../FilterBar/FilterBar';
import { Container } from './styles';
import { ICrudDefinitions, IGalleryOptions } from '../../types';

export type WidgetGalleryProps = {
    items: IImage[];
    options?: Partial<IGalleryOptions>;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: string, data?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    hideParts?: FilterPart[];
    definitions: ICrudDefinitions;
};

export function WidgetGallery(props: WidgetGalleryProps) {
    const { items, callbacks, hideParts, definitions } = props;

    if (!definitions || !definitions.gallery) {
        return null;
    }

    return (
        <Container
            className='WidgetGallery-container'
            data-testid='WidgetGallery-container'
        >
            <AllProviders
                id='widgetGallery'
                data={items}
                definitions={definitions}
                callbacks={callbacks}
            >
                <FilterBar
                    onAction={callbacks.onAction}
                    hideParts={hideParts}
                />
                <AnyGallery itemType='widget' {...props} />
            </AllProviders>
        </Container>
    );
}

export default WidgetGallery;
