import React from 'react';
import { Container } from './Layouts.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type LayoutsProps = ICrudDefinitions & {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Layouts(props: LayoutsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('layout');
    const { t } = useLanguage();

    return (
        <Container
            className='Layouts-container'
            data-testid='Layouts-container'
        >
            <Multi
                id='Layouts'
                itemType='layout'
                header={t('Layouts')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                viewModes={['gallery', 'table', 'spreadsheet']}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={CustomView}
                hideParts={['preview']}
            />
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Layouts;
