import React, { useContext } from 'react';
import { Wrapper } from './Inbox.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type InboxProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Inbox(props: InboxProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('inbox');

    return (
        <Wrapper className='Inbox-wrapper' data-testid='Inbox-wrapper'>
            <Multi
                id='Inbox'
                itemType='inbox'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Wrapper>
    );
}

export default Inbox;
