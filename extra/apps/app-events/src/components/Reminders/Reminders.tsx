import React from 'react';
import { Wrapper } from './Reminders.style';
import { Multi } from '@gdi/web-ui';

import { useCrudDefinitions } from '@gdi/platformer';

export type RemindersProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: any;
};

export function Reminders(props: RemindersProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('reminder');

    return (
        <Wrapper className='Reminders-wrapper' data-testid='Reminders-wrapper'>
            <Multi
                id='Reminders'
                itemType='reminder'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={CustomView}
            />
        </Wrapper>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Reminders;
