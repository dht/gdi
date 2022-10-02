import React from 'react';
import GenericGallery from '../GenericGallery/GenericGallery';
import { Container } from './styles';
import { galleries } from '../../definitions/galleries';
import { ItemImage } from './items/ItemImage/ItemImage';
import { IGalleryOptions } from '../../types';

export type ImageGalleryProps = {
    items: IImage[];
    options?: Partial<IGalleryOptions>;
    callbacks: {
        onAction: (actionId: string) => void;
        onItemAction: (id: string, action: ItemActionType, data?: Json) => void;
    };
};

export function ImageGallery(props: ImageGalleryProps) {
    return (
        <Container
            className='ImageGallery-container'
            data-testid='ImageGallery-container'
        >
            <GenericGallery
                config={galleries.image}
                customItem={ItemImage}
                {...props}
            />
        </Container>
    );
}

export default ImageGallery;
