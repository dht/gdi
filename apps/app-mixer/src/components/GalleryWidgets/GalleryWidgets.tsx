import React from 'react';
import { Container } from './GalleryWidgets.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';

export type GalleryWidgetsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function GalleryWidgets(props: GalleryWidgetsProps) {
    const { data, callbacks, allOptions, dispatch } = props;

    return (
        <Container
            className='GalleryWidgets-container'
            data-testid='GalleryWidgets-container'
        >
            <Multi
                id='Widgets'
                itemType='widget'
                header='Widgets'
                data={data}
                callbacks={callbacks}
                viewModes={['gallery']}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default GalleryWidgets;
