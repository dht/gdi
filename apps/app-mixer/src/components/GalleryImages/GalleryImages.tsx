import React from 'react';
import { Container } from './GalleryImages.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';

export type GalleryImagesProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function GalleryImages(props: GalleryImagesProps) {
    const { data, callbacks, allOptions, dispatch } = props;

    return (
        <Container
            className='GalleryImages-container'
            data-testid='GalleryImages-container'
        >
            <Multi
                id='Images'
                itemType='image'
                header='Images'
                data={data}
                callbacks={callbacks}
                viewModes={['gallery']}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default GalleryImages;
