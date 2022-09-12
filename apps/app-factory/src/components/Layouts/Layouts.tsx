import React from 'react';
import { Container } from './Layouts.style';
import { Crud } from '@gdi/web-tables';

export type LayoutsProps = ICrudDefinitions & {
    data: {
        main: Json;
        sub?: Json;
    };
    callbacks: {
        main: {
            onSave: (id: string, data: Json) => void;
            onNew: (data: Json) => void;
            onDelete: (id: string) => void;
        };
        sub?: {
            onSave: (id: string, data: Json) => void;
            onNew: (data: Json) => void;
            onDelete: (id: string) => void;
        };
    };
};
export function Layouts(props: LayoutsProps) {
    return (
        <Container
            className='Layouts-container'
            data-testid='Layouts-container'
        >
            <Crud {...props} />
        </Container>
    );
}

export default Layouts;
