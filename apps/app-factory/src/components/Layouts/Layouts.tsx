import React from 'react';
import { Container } from './Layouts.style';
import { Multi } from '@gdi/web-ui';
import { Dispatch } from 'redux';

export type LayoutsProps = ICrudDefinitions & {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
    };
    dispatch: Dispatch;
};

export function Layouts(props: LayoutsProps) {
    const { data, callbacks, allOptions, dispatch } = props;

    return (
        <Container
            className='Layouts-container'
            data-testid='Layouts-container'
        >
            <Multi
                id='Layouts'
                itemType='layout'
                header='Layouts'
                data={data}
                callbacks={callbacks}
                viewModes={['gallery', 'table', 'spreadsheet']}
                dispatch={dispatch}
                allOptions={allOptions}
                customView={CustomView}
            />
        </Container>
    );
}

function CustomView() {
    return <div>CustomView</div>;
}

export default Layouts;
