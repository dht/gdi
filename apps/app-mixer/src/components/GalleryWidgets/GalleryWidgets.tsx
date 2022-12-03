import React from 'react';
import { Wrapper } from './GalleryWidgets.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type GalleryWidgetsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function GalleryWidgets(props: GalleryWidgetsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('widget');

    return (
        <Wrapper
            className='GalleryWidgets-wrapper'
            data-testid='GalleryWidgets-wrapper'
        >
            <Multi
                id='WidgetsFull'
                itemType='widget'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default GalleryWidgets;
