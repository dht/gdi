import React from 'react';
import { Container, Key, Value } from './Field.style';

export type FieldProps = {
    title: string;
    value: string;
};

export function Field(props: FieldProps) {
    return (
        <Container className='Field-container' data-testid='Field-container'>
            <Key>{props.title}</Key>
            <Value>{props.value}</Value>
        </Container>
    );
}

export default Field;
