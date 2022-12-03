import React from 'react';
import { Wrapper, Key, Value } from './Field.style';

export type FieldProps = {
    title: string;
    value: string;
};

export function Field(props: FieldProps) {
    return (
        <Wrapper className='Field-wrapper' data-testid='Field-wrapper'>
            <Key>{props.title}</Key>
            <Value>{props.value}</Value>
        </Wrapper>
    );
}

export default Field;
