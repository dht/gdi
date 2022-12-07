import React from 'react';
import { Wrapper, Id } from './Layouts.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

export type LayoutItemsProps = ICrudDefinitions & {
    data: Json[];
    layout: ILayout;
    callbacks: {
        onDrillDown: (itemId: string, point?: Json) => void;
        onSelectionChange: (ids: string[]) => void;
        onCustomAction: (actionId: string, data?: Json) => void;
    };
    allOptions?: Json;
    dispatch: any;
};

export function LayoutItems(props: LayoutItemsProps) {
    const { data, layout, callbacks, allOptions, dispatch } = props;
    const { id = '' } = layout ?? {};
    const crudDefinitions = useCrudDefinitions('layoutItem');

    return (
        <Wrapper
            className='LayoutItems-wrapper'
            data-testid='LayoutItems-wrapper'
        >
            <Multi
                id='Layouts'
                itemType='layout'
                data={data}
                callbacks={callbacks}
                definitions={crudDefinitions}
                dispatch={dispatch}
                allOptions={allOptions}
            />
            <Id>{id}</Id>
        </Wrapper>
    );
}

export default LayoutItems;
