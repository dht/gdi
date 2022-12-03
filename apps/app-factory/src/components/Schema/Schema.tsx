import React from 'react';
import { Wrapper } from './Schema.style';

export type SchemaProps = {};

export function Schema(_props: SchemaProps) {
    return (
        <Wrapper className='Schema-wrapper' data-testid='Schema-wrapper'>
            Schema
        </Wrapper>
    );
}

export default Schema;
