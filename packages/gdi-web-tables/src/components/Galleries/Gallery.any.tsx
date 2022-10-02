import React, { useMemo } from 'react';
import GenericGallery from '../GenericGallery/GenericGallery';
import { Container } from './styles';
import { definitions } from '../../definitions';
import { items } from './items';
import {
    ItemType,
    IGalleryOptions,
    OnGalleryAction,
    OnGalleryItemAction,
} from '../../types';

export type AnyGalleryProps = {
    items: IImage[];
    options?: Partial<IGalleryOptions>;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
    };
    flavour: ItemType;
};

export function AnyGallery(props: AnyGalleryProps) {
    const { flavour, callbacks } = props;

    const config = useMemo(() => {
        return definitions[flavour];
    }, []);

    const Item = useMemo(() => {
        return items[flavour];
    }, []);

    return (
        <Container
            className='WidgetGallery-container'
            data-testid='WidgetGallery-container'
        >
            <GenericGallery
                config={config.gallery!}
                customItem={Item}
                {...props}
            />
        </Container>
    );
}

export default AnyGallery;
