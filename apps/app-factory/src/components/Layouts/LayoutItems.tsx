import React from 'react';
import { Container, Id } from './Layouts.style';
import { Crud } from '@gdi/web-ui';

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
    const { id = '', name = '' } = layout || {};

    return (
        <Container
            className='LayoutItems-container'
            data-testid='LayoutItems-container'
        >
            <Crud {...props} header={name} />
            <Id>{id}</Id>
        </Container>
    );
}

export default LayoutItems;
