import React from 'react';
import { Wrapper } from './Sort.style';

export type SortProps = {};

export function Sort(_props: SortProps) {
    return (
        <Wrapper className='Sort-wrapper' data-testid='Sort-wrapper'>
            Sort
        </Wrapper>
    );
}

export default Sort;
