import React from 'react';
import { Container } from './Knowledge.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type KnowledgeProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Knowledge(props: KnowledgeProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('link');
    const { t } = useLanguage();

    return (
        <Container
            className='Knowledge-container'
            data-testid='Knowledge-container'
        >
            <Multi
                id='Knowledge'
                itemType='link'
                header={t('Knowledge')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                viewModes={['table', 'spreadsheet']}
                customView={CustomView}
            />
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Knowledge;
