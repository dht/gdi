import React from 'react';
import { ICrudDefinitions, ITableConfig } from '../../types';
import { Container } from './Crud.style';

export type CrudProps = ICrudDefinitions & {
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

export function Crud(_props: CrudProps) {
    return (
        <Container className='Crud-container' data-testid='Crud-container'>
            Crud
        </Container>
    );
}

export default Crud;
