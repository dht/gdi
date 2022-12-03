import React, { FC } from 'react';
import { Wrapper } from './Tickets.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type TicketsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
    customView?: FC<any>;
    newDataExtra?: Json;
};

export function Tickets(props: TicketsProps) {
    const { data, callbacks, allOptions, customView, newDataExtra, dispatch } =
        props;

    const crudDefinitions = useCrudDefinitions('ticket');

    return (
        <Wrapper className='Tickets-wrapper' data-testid='Tickets-wrapper'>
            <Multi
                id='Tickets'
                itemType='ticket'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={customView}
                newDataExtra={newDataExtra}
            />
        </Wrapper>
    );
}

export default Tickets;
