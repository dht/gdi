import React, { useMemo } from 'react';
import GenericGallery from '../GenericGallery/GenericGallery';
import { Container } from './styles';
import { items } from './items';
import { ItemType, IGalleryOptions } from '../../types';

export type AnyGalleryProps = {
    items: IImage[];
    options?: Partial<IGalleryOptions>;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
    };
    definitions: ICrudDefinitions;
    itemType: ItemType;
};

export function AnyGallery(props: AnyGalleryProps) {
    const { itemType, definitions } = props;

    const Item = useMemo(() => {
        return items[itemType];
    }, []);

    if (!definitions.gallery) {
        return null;
    }

    return (
        <Container
            className='WidgetGallery-container'
            data-testid='WidgetGallery-container'
        >
            <GenericGallery
                config={definitions.gallery!}
                customItem={Item}
                configOverlay={definitions.overlay!}
                {...props}
            />
        </Container>
    );
}

export default AnyGallery;
