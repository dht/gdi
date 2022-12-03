import React from 'react';
import { Wrapper } from './GalleryImages.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

export type GalleryImagesProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function GalleryImages(props: GalleryImagesProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('image');

    return (
        <Wrapper
            className='GalleryImages-wrapper'
            data-testid='GalleryImages-wrapper'
        >
            <Multi
                id='ImagesFull'
                itemType='image'
                data={data}
                definitions={crudDefinitions}
                callbacks={callbacks}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default GalleryImages;
