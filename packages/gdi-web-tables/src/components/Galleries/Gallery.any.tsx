import React from 'react';
import GenericGallery from '../GenericGallery/GenericGallery';
import { Wrapper } from './styles';
import { items } from './items';
import { ItemType, IGalleryOptions } from '../../types';
import { useMemo } from '@gdi/hooks';

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
        <Wrapper
            className='WidgetGallery-wrapper'
            data-testid='WidgetGallery-wrapper'
        >
            <GenericGallery
                config={definitions.gallery!}
                customItem={Item}
                configOverlay={definitions.overlay!}
                {...props}
            />
        </Wrapper>
    );
}

export default AnyGallery;
