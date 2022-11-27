import React from 'react';
import AllProviders from './AllProviders';
import AnyGallery from './Gallery.any';
import FilterBar from '../FilterBar/FilterBar';
import { Container } from './styles';
import { definitions } from '../../definitions';
import { IGalleryOptions } from '../../types';

export type ImageGalleryProps = {
    items: IImage[];
    options?: Partial<IGalleryOptions>;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: string, data?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    hideParts?: FilterPart[];
};

export function ImageGallery(props: ImageGalleryProps) {
    const { items, callbacks, hideParts } = props;

    return (
        <Container
            className='ImageGallery-container'
            data-testid='ImageGallery-container'
        >
            <AllProviders
                id='imageGallery'
                data={items}
                definitions={definitions as any}
                callbacks={callbacks}
            >
                <FilterBar
                    onAction={callbacks.onAction}
                    hideParts={hideParts}
                />
                <AnyGallery
                    itemType='image'
                    definitions={definitions as any}
                    {...props}
                />
            </AllProviders>
        </Container>
    );
}

export default ImageGallery;
