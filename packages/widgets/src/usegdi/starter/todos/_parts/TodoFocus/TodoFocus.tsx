import React from 'react';
import { Wrapper } from './TodoFocus.style';

export type TodoFocusProps = {};

export function TodoFocus(_props: TodoFocusProps) {
    return (
        <Wrapper className="TodoFocus-wrapper" data-testid="TodoFocus-wrapper">
            TodoFocus
        </Wrapper>
    );
}

export default TodoFocus;
