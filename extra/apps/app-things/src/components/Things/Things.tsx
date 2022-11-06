import React from 'react';
import { Container } from './Things.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type ThingsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Things(props: ThingsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('image');
    const { t } = useLanguage();

    return (
        <Container className='Things-container' data-testid='Things-container'>
            <Multi
                id='Things'
                itemType='image'
                header={t('Things')}
                data={data}
                viewModes={['gallery', 'spreadsheet']}
                callbacks={callbacks}
                definitions={crudDefinitions}
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

export default Things;
