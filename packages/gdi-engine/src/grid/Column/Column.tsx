import React from 'react';
import { Wrapper } from './Column.style';
import classnames from 'classnames';

export type ColumnProps = {
    children: JSX.Element | JSX.Element[];
    className?: string;
};

export function Column(props: ColumnProps) {
    const className = classnames('column', props.className, {});

    return (
        <Wrapper className={className} data-testid='Column-wrapper'>
            {props.children}
        </Wrapper>
    );
}

export default Column;
