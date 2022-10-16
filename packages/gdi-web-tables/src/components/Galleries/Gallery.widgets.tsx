import React from 'react';
import AllProviders from './AllProviders';
import AnyGallery from './Gallery.any';
import FilterBar, { FilterPart } from '../FilterBar/FilterBar';
import { Container } from './styles';
import { definitions } from '../../definitions';
import { IGalleryOptions } from '../../types';

export type WidgetGalleryProps = {
    items: IImage[];
    options?: Partial<IGalleryOptions>;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: string, data?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    hideParts?: FilterPart[];
};

export function WidgetGallery(props: WidgetGalleryProps) {
    const { items, callbacks, hideParts } = props;

    return (
        <Container
            className='WidgetGallery-container'
            data-testid='WidgetGallery-container'
        >
            <AllProviders
                id='widgetGallery'
                data={items}
                definitions={definitions.image}
                callbacks={callbacks}
            >
                <FilterBar
                    header=''
                    onAction={() => {}}
                    hideParts={hideParts}
                    tools={[]}
                />
                <AnyGallery flavour='widget' {...props} />
            </AllProviders>
        </Container>
    );
}

export default WidgetGallery;
