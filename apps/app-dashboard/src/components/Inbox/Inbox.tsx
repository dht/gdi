import React, { useContext } from 'react';
import { Container } from './Inbox.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';
import { useLanguage } from '@gdi/language';

export type InboxProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Inbox(props: InboxProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('inbox');
    const { t } = useLanguage();

    return (
        <Container className='Inbox-container' data-testid='Inbox-container'>
            <Multi
                id='Inbox'
                itemType='inbox'
                header={t('Inbox')}
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                viewModes={['table']}
                initialViewMode='table'
                dispatch={dispatch}
                allOptions={allOptions}
                hideParts={[
                    'filter',
                    'tools',
                    'tagging',
                    'search',
                    'buttons',
                    'preview',
                ]}
            />
        </Container>
    );
}

export default Inbox;
