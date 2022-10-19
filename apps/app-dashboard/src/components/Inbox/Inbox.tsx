import React, { useContext } from 'react';
import { Container } from './Inbox.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { PlatformContext } from '@gdi/platformer';

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
    const { crudDefinitions } = useContext(PlatformContext).state;

    return (
        <Container className='Inbox-container' data-testid='Inbox-container'>
            <Multi
                id='Inbox'
                itemType='inbox'
                header='Inbox'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                viewModes={['table']}
                initialViewMode='table'
                dispatch={dispatch}
                allOptions={allOptions}
                hideParts={['filter', 'tools', 'tagging', 'search', 'buttons']}
            />
        </Container>
    );
}

export default Inbox;
