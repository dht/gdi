import React from 'react';
import { Container } from './Money.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';

export type MoneyProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Money(props: MoneyProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('image');

    return (
        <Container className='Money-container' data-testid='Money-container'>
            <Multi
                id='Money'
                header='Money'
                itemType='article'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={CustomView}
                viewModes={['timeline', 'calendar', 'spreadsheet']}
            />
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Money;
