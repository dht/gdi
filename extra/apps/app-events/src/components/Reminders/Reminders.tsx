import React from 'react';
import { Container } from './Reminders.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type RemindersProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Reminders(props: RemindersProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('event');
    const { t } = useLanguage();

    return (
        <Container
            className='Reminders-container'
            data-testid='Reminders-container'
        >
            <Multi
                id='Events'
                itemType='event'
                header={t('Reminders')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                viewModes={['gallery', 'calendar', 'spreadsheet']}
                customView={CustomView}
            />
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Reminders;
