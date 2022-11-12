import React, { FC } from 'react';
import { Container } from './Tickets.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';

export type TicketsProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
    customView?: FC<any>;
    newDataExtra?: Json;
};

export function Tickets(props: TicketsProps) {
    const { data, callbacks, allOptions, customView, newDataExtra, dispatch } =
        props;

    const crudDefinitions = useCrudDefinitions('ticket');

    return (
        <Container
            className='Tickets-container'
            data-testid='Tickets-container'
        >
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
        </Container>
    );
}

export default Tickets;
