import React from 'react';
import { Wrapper } from './ItemProject.style';

export type ItemProjectProps = {};

export function ItemProject(_props: ItemProjectProps) {
    return (
        <Wrapper
            className='ItemProject-wrapper'
            data-testid='ItemProject-wrapper'
        >
            ItemProject
        </Wrapper>
    );
}

export default ItemProject;
