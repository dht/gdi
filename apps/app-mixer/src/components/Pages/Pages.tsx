import React from 'react';
import { Container } from './Pages.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';
import { useCrudDefinitions } from '@gdi/platformer';

export type PagesProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Pages(props: PagesProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('page');

    return (
        <Container className='Pages-container' data-testid='Pages-container'>
            <Multi
                id='Pages'
                itemType='page'
                header='Pages'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                viewModes={['gallery', 'table', 'spreadsheet']}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default Pages;
