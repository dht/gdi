import React from 'react';
import { Wrapper } from './ListFocus.style';

export type ListFocusProps = {};

export function ListFocus(_props: ListFocusProps) {
    return (
        <Wrapper className="ListFocus-wrapper" data-testid="ListFocus-wrapper">
            ListFocus
        </Wrapper>
    );
}

export default ListFocus;
