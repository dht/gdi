import React from 'react';
import { Wrapper } from './Layouts.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

export type LayoutsProps = ICrudDefinitions & {
    data: Json[];
    allOptions?: Json;
    callbacks: {
        onDrillDown: (itemId: string) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    dispatch: any;
};

export function Layouts(props: LayoutsProps) {
    const { data, callbacks, allOptions, dispatch } = props;
    const crudDefinitions = useCrudDefinitions('layout');

    return (
        <Wrapper className='Layouts-wrapper' data-testid='Layouts-wrapper'>
            <Multi
                id='Layouts'
                itemType='layout'
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

export default Layouts;
