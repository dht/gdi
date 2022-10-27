import React, { useContext } from 'react';
import { Container } from './Ppl.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';

export type PplProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    allMethods: any;
    dispatch: Dispatch;
};

export function Ppl(props: PplProps) {
    const { data, callbacks, allOptions, allMethods, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('person');

    return (
        <Container className='Ppl-container' data-testid='Ppl-container'>
            <Multi
                id='Ppl'
                itemType='person'
                header='People'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                viewModes={['gallery', 'table', 'spreadsheet']}
                initialViewMode='gallery'
                allOptions={allOptions}
                allMethods={allMethods}
                customView={CustomView}
                doubleClickActionId='pie'
            />
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Ppl;
