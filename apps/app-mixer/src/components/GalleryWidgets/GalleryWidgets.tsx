import React from 'react';
import { Container } from './GalleryWidgets.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

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
    const crudDefinitions = useCrudDefinitions('widget');
    const { t } = useLanguage();

    return (
        <Container
            className='GalleryWidgets-container'
            data-testid='GalleryWidgets-container'
        >
            <Multi
                id='Widgets'
                itemType='widget'
                header={t('Widgets')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                viewModes={['gallery']}
                dispatch={dispatch}
                allOptions={allOptions}
                hideParts={['preview']}
            />
        </Container>
    );
}

export default GalleryWidgets;
