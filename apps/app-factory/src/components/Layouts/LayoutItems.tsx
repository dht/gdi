import React from 'react';
import { Wrapper, Id } from './Layouts.style';
import { Multi } from '@gdi/web-ui';
import { useCrudDefinitions } from '@gdi/platformer';

export type LayoutItemsProps = ICrudDefinitions & {
    data: Json[];
    layout: ILayout;
    callbacks: {
        onAction: (actionId: string) => void;
        onSave: (id: string, data: Json) => void;
        onNew: (data: Json) => void;
        onDelete: (id: string) => void;
    };
    allOptions?: Json;
};

export function LayoutItems(props: LayoutItemsProps) {
    const { layout } = props;
    const { id = '', name = '' } = layout ?? {};
    const crudDefinitions = useCrudDefinitions('layoutItem');

    return (
        <Wrapper
            className='LayoutItems-wrapper'
            data-testid='LayoutItems-wrapper'
        >
            <Multi {...props} definitions={crudDefinitions} header={name} />
            <Id>{id}</Id>
        </Wrapper>
    );
}

export default LayoutItems;
