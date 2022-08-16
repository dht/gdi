import React from 'react';
import { Container } from './Layouts.style';
import { Multi } from '@gdi/web-ui';

export type LayoutsProps = ICrudDefinitions & {
    data: Json[];
    callbacks: {
        onAction: (actionId: string) => void;
        onDrillDown: (itemId: string) => void;
        onSave: (id: string, data: Json) => void;
        onNew: (data: Json) => void;
        onDelete: (id: string) => void;
    };
    allOptions?: Json;
};
export function Layouts(props: LayoutsProps) {
    return (
        <Container
            className='Layouts-container'
            data-testid='Layouts-container'
        >
            <Multi {...props} />
        </Container>
    );
}

export default Layouts;
