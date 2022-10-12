import React from 'react';
import { Container } from './Pages.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';

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

    return (
        <Container className='Pages-container' data-testid='Pages-container'>
            <Multi
                id='Pages'
                itemType='page'
                header='Pages'
                data={data}
                callbacks={callbacks}
                viewModes={['gallery', 'table', 'spreadsheet']}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default Pages;
