import React from 'react';
import { Container } from './Pages.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';
import { useMount } from 'react-use';

export type PagesProps = {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Pages(props: PagesProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('page', 'libraryPages');

    useMount(() => {});

    return (
        <Container className='Pages-container' data-testid='Pages-container'>
            <Multi
                id='Pages'
                itemType='page'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
        </Container>
    );
}

export default Pages;

const delay = (duration: number) =>
    new Promise((resolve, reject) => setTimeout(reject, duration));
